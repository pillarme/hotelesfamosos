/* compare.js — Hoteles Famosos / comparador de hoteles
   Reads the inline hotel dataset and swaps the two comparison panels. */
(function () {
  'use strict';

  var dataEl = document.getElementById('hotels-data');
  if (!dataEl) return;

  var HOTELS;
  try { HOTELS = JSON.parse(dataEl.textContent); } catch (e) { return; }

  var bySlug = {};
  HOTELS.forEach(function (h) { bySlug[h.slug] = h; });

  function panelHTML(h) {
    return '<div class="compare-panel__art art--' + h.art + '" role="img" ' +
             'aria-label="Fotografía de ' + h.name + '"></div>' +
           '<div class="compare-panel__body">' +
             '<p class="compare-panel__loc">' + h.city + ' · ' + h.country + '</p>' +
             '<h3 class="compare-panel__name">' + h.name + '</h3>' +
             '<p class="compare-panel__desc">' + h.desc + '</p>' +
             '<a class="compare-panel__link" href="/hoteles/' + h.slug + '/">Ver perfil completo →</a>' +
           '</div>';
  }

  function render(slot) {
    var sel = document.getElementById('compare-' + slot);
    var panel = document.querySelector('.compare-panel[data-slot="' + slot + '"]');
    if (!sel || !panel) return;
    var h = bySlug[sel.value];
    if (h) panel.innerHTML = panelHTML(h);
  }

  ['a', 'b'].forEach(function (slot) {
    var sel = document.getElementById('compare-' + slot);
    if (sel) sel.addEventListener('change', function () { render(slot); });
  });

  var swap = document.getElementById('compare-swap');
  if (swap) {
    swap.addEventListener('click', function () {
      var a = document.getElementById('compare-a');
      var b = document.getElementById('compare-b');
      var t = a.value; a.value = b.value; b.value = t;
      render('a'); render('b');
    });
  }
}());
