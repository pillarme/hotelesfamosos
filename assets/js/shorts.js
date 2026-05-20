/* shorts.js — Hoteles Famosos / La Bitácora
   Shorts rail (≤90s) + full-video lower section (>90s) + modal player
   Reads static JSON feeds from /data/shorts/*.json
   Never generates URLs containing "undefined"
*/
(function () {
  'use strict';

  var SHORTS_LIMIT   = 8;
  var FULL_VID_LIMIT = 6;

  /* ── Video ID extraction ────────────────────────────────────── */
  function getVideoId(item) {
    if (!item || typeof item !== 'object') return null;

    var rawId   = item.video_id || item.id;
    var videoId = typeof rawId === 'string' ? rawId.trim() : '';
    if (videoId && videoId !== 'undefined') return videoId;

    var candidates = [item.watch_url, item.url].filter(Boolean);
    for (var i = 0; i < candidates.length; i++) {
      var c = candidates[i];
      if (typeof c !== 'string' || c.indexOf('undefined') !== -1) continue;
      try {
        var url = new URL(c);
        if (url.hostname.indexOf('youtube.com') !== -1) {
          var v = url.searchParams.get('v');
          if (v) return v;
          var sm = url.pathname.match(/\/shorts\/([^/?#]+)/);
          if (sm && sm[1]) return sm[1];
        }
        if (url.hostname.indexOf('youtu.be') !== -1) {
          var id = url.pathname.replace('/', '').trim();
          if (id) return id;
        }
      } catch (e) { /* malformed URL — skip */ }
    }
    return null;
  }

  function getEmbedUrl(item) {
    var vid = getVideoId(item);
    if (!vid) return null;
    return 'https://www.youtube.com/embed/' + encodeURIComponent(vid) + '?autoplay=1&rel=0';
  }

  function getExternalVideoUrl(item) {
    var vid = getVideoId(item);
    if (!vid) return null;
    return 'https://www.youtube.com/watch?v=' + encodeURIComponent(vid);
  }

  function getThumbnailUrl(item) {
    var t = item.thumbnail;
    if (t && typeof t === 'string' && t.indexOf('undefined') === -1 && t.indexOf('https://') === 0) {
      return t;
    }
    var vid = getVideoId(item);
    if (vid) return 'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg';
    return null;
  }

  /* ── Item classification ────────────────────────────────────── */
  function classifyItems(items) {
    var shortItems    = [];
    var fullItems     = [];
    var uncertainCount = 0;

    items.forEach(function (it) {
      if (!getVideoId(it)) return; /* no usable video ID — skip */
      var d = it.duration_seconds;
      if (typeof d !== 'number' || d <= 0) {
        uncertainCount++;
        return;
      }
      if (d <= 90) {
        shortItems.push(it);
      } else {
        fullItems.push(it);
      }
    });

    return { shortItems: shortItems, fullItems: fullItems, uncertainCount: uncertainCount };
  }

  /* ── Formatting helpers ─────────────────────────────────────── */
  function formatViews(n) {
    if (!n || isNaN(n)) return '';
    var num = parseInt(n, 10);
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + ' M vistas';
    if (num >= 1000)    return Math.floor(num / 1000) + 'K vistas';
    return num + ' vistas';
  }

  function formatDuration(s) {
    if (!s || s <= 0) return '';
    var sec = parseInt(s, 10);
    var m   = Math.floor(sec / 60);
    var r   = sec % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  /* ── Modal ──────────────────────────────────────────────────── */
  var modal        = null;
  var modalIframe  = null;
  var modalTitle   = null;
  var modalChan    = null;
  var modalExtLink = null;
  var triggerEl    = null;

  function buildModal() {
    if (modal) return;

    modal = document.createElement('div');
    modal.className = 'shorts-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Reproductor de video');
    modal.hidden = true;

    var overlay = document.createElement('div');
    overlay.className = 'shorts-modal__overlay';
    overlay.addEventListener('click', closeModal);

    var panel = document.createElement('div');
    panel.className = 'shorts-modal__panel';

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'shorts-modal__close';
    closeBtn.setAttribute('aria-label', 'Cerrar video');
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', closeModal);

    var iframeWrap = document.createElement('div');
    iframeWrap.className = 'shorts-modal__video';

    modalIframe = document.createElement('iframe');
    modalIframe.className = 'shorts-modal__iframe';
    modalIframe.setAttribute('frameborder', '0');
    modalIframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    modalIframe.setAttribute('allowfullscreen', '');
    iframeWrap.appendChild(modalIframe);

    var info = document.createElement('div');
    info.className = 'shorts-modal__info';

    modalTitle   = document.createElement('p');
    modalTitle.className = 'shorts-modal__title';

    modalChan    = document.createElement('p');
    modalChan.className = 'shorts-modal__channel';

    modalExtLink = document.createElement('a');
    modalExtLink.className = 'shorts-modal__ext-link';
    modalExtLink.textContent = 'Abrir en YouTube ↗';
    modalExtLink.setAttribute('target', '_blank');
    modalExtLink.setAttribute('rel', 'noopener noreferrer');

    info.appendChild(modalTitle);
    info.appendChild(modalChan);
    info.appendChild(modalExtLink);

    panel.appendChild(closeBtn);
    panel.appendChild(iframeWrap);
    panel.appendChild(info);
    modal.appendChild(overlay);
    modal.appendChild(panel);
    document.body.appendChild(modal);
  }

  function openModal(item, trigger) {
    buildModal();
    var embedUrl = getEmbedUrl(item);
    var extUrl   = getExternalVideoUrl(item);
    if (!embedUrl) return;

    triggerEl = trigger || null;
    modalIframe.src = embedUrl;
    modalIframe.setAttribute('title', item.title || 'Video de hotel');
    modalTitle.textContent = item.title  || '';
    modalChan.textContent  = item.channel ? '— ' + item.channel : '';

    if (extUrl) {
      modalExtLink.href   = extUrl;
      modalExtLink.hidden = false;
    } else {
      modalExtLink.hidden = true;
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    var closeBtn = modal.querySelector('.shorts-modal__close');
    if (closeBtn) setTimeout(function () { closeBtn.focus(); }, 30);
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (modalIframe) modalIframe.src = '';
    if (triggerEl)   { triggerEl.focus(); triggerEl = null; }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  /* ── Thumbnail error handler ────────────────────────────────── */
  function attachThumbErrorHandler(img, vid, thumbDiv, errorClass) {
    var hqFallback = vid ? ('https://img.youtube.com/vi/' + vid + '/hqdefault.jpg') : null;
    var retried = false;
    img.addEventListener('error', function () {
      if (!retried && hqFallback && img.src !== hqFallback) {
        retried = true;
        img.src = hqFallback;
        return;
      }
      if (img.parentNode) img.parentNode.removeChild(img);
      thumbDiv.classList.add(errorClass || 'shorts-thumb--error');
    });
  }

  /* ── Shorts card builder ────────────────────────────────────── */
  function buildCard(item, labelText) {
    var vid = getVideoId(item);
    if (!vid) return null;

    var thumb = getThumbnailUrl(item);
    var views = formatViews(item.view_count);
    var dur   = formatDuration(item.duration_seconds);

    var card = document.createElement('article');
    card.className = 'shorts-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', (item.title || 'Ver video') + ' — reproducir video');

    /* Thumbnail */
    var thumbDiv = document.createElement('div');
    thumbDiv.className = 'shorts-thumb';
    if (thumb) {
      var img = document.createElement('img');
      img.src     = thumb;
      img.alt     = '';
      img.loading = 'lazy';
      attachThumbErrorHandler(img, vid, thumbDiv, 'shorts-thumb--error');
      thumbDiv.appendChild(img);
    } else {
      thumbDiv.classList.add('shorts-thumb--empty');
    }

    var playIcon = document.createElement('span');
    playIcon.className = 'shorts-play-icon';
    playIcon.setAttribute('aria-hidden', 'true');
    thumbDiv.appendChild(playIcon);

    if (dur) {
      var durBadge = document.createElement('span');
      durBadge.className   = 'shorts-dur-badge';
      durBadge.textContent = dur;
      thumbDiv.appendChild(durBadge);
    }
    card.appendChild(thumbDiv);

    /* Body */
    var body = document.createElement('div');
    body.className = 'shorts-card__body';

    var label = document.createElement('span');
    label.className   = 'shorts-label';
    label.textContent = labelText || 'Video guía';
    body.appendChild(label);

    var titleEl = document.createElement('p');
    titleEl.className   = 'shorts-title';
    titleEl.textContent = item.title || '';
    body.appendChild(titleEl);

    if (item.channel) {
      var chanEl = document.createElement('p');
      chanEl.className   = 'shorts-channel';
      chanEl.textContent = item.channel;
      body.appendChild(chanEl);
    }

    if (views) {
      var meta = document.createElement('div');
      meta.className = 'shorts-meta';
      meta.textContent = views;
      body.appendChild(meta);
    }

    card.appendChild(body);

    function activate() { openModal(item, card); }
    card.addEventListener('click', activate);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });

    return card;
  }

  /* ── Full-video card builder ────────────────────────────────── */
  function buildFullVideoCard(item) {
    var vid = getVideoId(item);
    if (!vid) return null;

    var thumb = getThumbnailUrl(item);
    var dur   = formatDuration(item.duration_seconds);
    var views = formatViews(item.view_count);

    var card = document.createElement('article');
    card.className = 'full-video-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', (item.title || 'Ver video') + ' — reproducir video');

    /* Thumbnail */
    var thumbDiv = document.createElement('div');
    thumbDiv.className = 'full-video-thumb';
    if (thumb) {
      var img = document.createElement('img');
      img.src     = thumb;
      img.alt     = '';
      img.loading = 'lazy';
      attachThumbErrorHandler(img, vid, thumbDiv, 'full-video-thumb--error');
      thumbDiv.appendChild(img);
    } else {
      thumbDiv.classList.add('full-video-thumb--error');
    }

    var playIcon = document.createElement('span');
    playIcon.className = 'shorts-play-icon';
    playIcon.setAttribute('aria-hidden', 'true');
    thumbDiv.appendChild(playIcon);

    if (dur) {
      var durBadge = document.createElement('span');
      durBadge.className   = 'shorts-dur-badge';
      durBadge.textContent = dur;
      thumbDiv.appendChild(durBadge);
    }
    card.appendChild(thumbDiv);

    /* Body */
    var body = document.createElement('div');
    body.className = 'full-video-card__body';

    var titleEl = document.createElement('p');
    titleEl.className   = 'full-video-card__title';
    titleEl.textContent = item.title || '';
    body.appendChild(titleEl);

    var metaParts = [];
    if (item.channel) metaParts.push(item.channel);
    if (views)        metaParts.push(views);
    if (metaParts.length) {
      var meta = document.createElement('p');
      meta.className   = 'full-video-meta';
      meta.textContent = metaParts.join(' · ');
      body.appendChild(meta);
    }

    card.appendChild(body);

    function activate() { openModal(item, card); }
    card.addEventListener('click', activate);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });

    return card;
  }

  /* ── Full-videos section builder ────────────────────────────── */
  function buildFullVideosSection(fullItems, pageType) {
    var headingMap = {
      hotel: 'Videos completos sobre este hotel y su contexto',
      city:  'Videos completos sobre hoteles y viajes en esta ciudad'
    };
    var heading = headingMap[pageType] || 'Videos completos para profundizar';

    var section = document.createElement('section');
    section.className = 'full-videos-section';
    section.setAttribute('aria-label', 'Videos completos');

    var inner = document.createElement('div');
    inner.className = 'container';

    var kicker = document.createElement('p');
    kicker.className   = 'section-kicker';
    kicker.textContent = 'Video guía';

    var h2 = document.createElement('h2');
    h2.textContent = heading;

    var desc = document.createElement('p');
    desc.textContent = 'Selección de videos más largos para explorar el contexto, la ciudad o la historia alrededor de esta guía.';

    var railWrap = document.createElement('div');
    railWrap.className = 'full-videos-rail-wrap';

    var rail = document.createElement('div');
    rail.className = 'full-videos-rail';

    fullItems.forEach(function (item) {
      var card = buildFullVideoCard(item);
      if (card) rail.appendChild(card);
    });

    railWrap.appendChild(rail);
    inner.appendChild(kicker);
    inner.appendChild(h2);
    inner.appendChild(desc);
    inner.appendChild(railWrap);
    section.appendChild(inner);

    return section;
  }

  /* ── Arrow controls for Shorts rail ────────────────────────── */
  function addRailControls(innerContainer, rail) {
    var controlsDiv = document.createElement('div');
    controlsDiv.className = 'shorts-controls';

    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'shorts-ctrl-btn shorts-ctrl-prev';
    prevBtn.setAttribute('aria-label', 'Desplazar izquierda');
    prevBtn.innerHTML = '&#8592;';
    prevBtn.disabled = true;

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'shorts-ctrl-btn shorts-ctrl-next';
    nextBtn.setAttribute('aria-label', 'Desplazar derecha');
    nextBtn.innerHTML = '&#8594;';

    function getScrollAmount() {
      var first = rail.firstElementChild;
      if (!first) return 360;
      var gap = parseFloat(window.getComputedStyle(rail).columnGap) || 16;
      return first.offsetWidth + gap;
    }

    prevBtn.addEventListener('click', function () {
      rail.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
      rail.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    function updateButtons() {
      prevBtn.disabled = rail.scrollLeft <= 0;
      nextBtn.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    }

    rail.addEventListener('scroll', updateButtons, { passive: true });
    setTimeout(updateButtons, 120);

    controlsDiv.appendChild(prevBtn);
    controlsDiv.appendChild(nextBtn);

    var railWrap = innerContainer.querySelector('.shorts-rail-wrap');
    if (railWrap) {
      innerContainer.insertBefore(controlsDiv, railWrap);
    }
  }

  /* ── Section renderer ───────────────────────────────────────── */
  function renderSection(section) {
    var feedPath     = section.getAttribute('data-shorts-feed');
    var innerWrapper = section.querySelector('.container');
    var railEl       = section.querySelector('[data-shorts-container]');
    var emptyMsg     = section.querySelector('[data-shorts-empty]');

    if (!feedPath || !railEl) return;

    if (feedPath.indexOf('undefined') !== -1) {
      section.hidden = true;
      return;
    }

    fetch(feedPath)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data || typeof data !== 'object') throw new Error('invalid JSON');

        var items      = Array.isArray(data.items) ? data.items : [];
        var classified = classifyItems(items);
        var shortItems = classified.shortItems;
        var fullItems  = classified.fullItems;

        var pageType  = section.getAttribute('data-shorts-type') || 'hotel';
        var labelMap  = { home: 'Video guía', hub: 'Archivo visual', city: 'Mapa visual', hotel: 'Video guía' };
        var labelText = labelMap[pageType] || 'Video guía';

        if (shortItems.length === 0 && fullItems.length === 0) {
          if (emptyMsg) emptyMsg.hidden = false;
          return;
        }

        /* Render Shorts */
        if (shortItems.length === 0) {
          if (emptyMsg) emptyMsg.hidden = false;
        } else {
          shortItems.slice(0, SHORTS_LIMIT).forEach(function (item) {
            var card = buildCard(item, labelText);
            if (card) railEl.appendChild(card);
          });
          if (innerWrapper) addRailControls(innerWrapper, railEl);
        }

        /* Render full-videos section below */
        if (fullItems.length > 0) {
          var fullSection = buildFullVideosSection(fullItems.slice(0, FULL_VID_LIMIT), pageType);
          if (section.parentNode) {
            section.parentNode.insertBefore(fullSection, section.nextSibling);
          }
        }
      })
      .catch(function () {
        section.hidden = true;
      });
  }

  /* ── Bootstrap ──────────────────────────────────────────────── */
  function init() {
    var sections = document.querySelectorAll('[data-shorts-feed]');
    if (sections.length === 0) return;
    sections.forEach(renderSection);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
