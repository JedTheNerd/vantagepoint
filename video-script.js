/* ============================================
   Vantage Point Eye Clinic — Video Page
   video-script.js
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // FAQ ACCORDION
  // ============================================

  var faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('is-open');

      // Close all other items
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('is-open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('is-open');
        this.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        this.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ============================================
  // ANALYTICS EVENT STUBS — VIDEO PAGE
  // ============================================
  // [PLACEHOLDER] Wire these up to your analytics (GA4, Plausible, etc.)
  //
  // Track video play events:
  // If using Vimeo, use the Vimeo Player SDK:
  //   var player = new Vimeo.Player(document.querySelector('iframe'));
  //   player.on('play', function() { gtag('event', 'video_play'); });
  //   player.on('timeupdate', function(data) {
  //     var pct = Math.floor(data.percent * 100);
  //     if (pct === 25) gtag('event', 'video_completion_25');
  //     if (pct === 50) gtag('event', 'video_completion_50');
  //     if (pct === 75) gtag('event', 'video_completion_75');
  //     if (pct === 100) gtag('event', 'video_completion_100');
  //   });
  //
  // Track CTA clicks:
  // document.querySelectorAll('.btn-primary').forEach(function(btn) {
  //   btn.addEventListener('click', function() {
  //     gtag('event', 'cta_click', {
  //       event_category: 'video_page',
  //       event_label: this.textContent.trim()
  //     });
  //   });
  // });

})();
