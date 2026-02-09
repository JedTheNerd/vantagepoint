/* ============================================
   Vantage Point Eye Clinic — Booking Page
   booking-script.js
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
  // ANALYTICS EVENT STUBS — BOOKING PAGE
  // ============================================
  // [PLACEHOLDER] Wire these up to your analytics (GA4, Plausible, etc.)
  //
  // Track when calendar booking is initiated/completed:
  //
  // Calendly example:
  //   window.addEventListener('message', function(e) {
  //     if (e.origin === 'https://calendly.com') {
  //       if (e.data.event === 'calendly.event_scheduled') {
  //         gtag('event', 'calendar_booking_completed', {
  //           event_category: 'booking_page'
  //         });
  //       }
  //     }
  //   });
  //
  // Generic page view:
  //   gtag('event', 'page_view', { page_title: 'Booking Page' });

})();
