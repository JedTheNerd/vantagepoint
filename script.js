/* ============================================
   Vantage Point Eye Clinic — Squeeze Page
   script.js
   ============================================ */

(function () {
  'use strict';

  // --- DOM References ---
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose   = document.getElementById('modal-close');
  const optInForm    = document.getElementById('opt-in-form');
  const stickyCta    = document.querySelector('.sticky-cta');
  const openButtons  = document.querySelectorAll('.js-open-modal');

  let lastFocusedElement = null;

  // ============================================
  // MODAL: Open / Close
  // ============================================

  function openModal() {
    lastFocusedElement = document.activeElement;
    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Focus the first input after animation
    setTimeout(function () {
      var firstInput = modalOverlay.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 350);
  }

  function closeModal() {
    modalOverlay.classList.remove('is-active');
    document.body.style.overflow = '';

    // Return focus to the element that opened the modal
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Attach open handlers to all CTA buttons
  openButtons.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  // Close button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close on overlay click (outside modal)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Trap focus inside modal
  if (modalOverlay) {
    modalOverlay.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;

      var focusableEls = modalOverlay.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      var firstEl = focusableEls[0];
      var lastEl  = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    });
  }

  // ============================================
  // FORM VALIDATION
  // ============================================

  if (optInForm) {
    optInForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var inputs  = optInForm.querySelectorAll('.form-input[required]');

      inputs.forEach(function (input) {
        // Reset state
        input.classList.remove('is-error');

        var value = input.value.trim();

        if (!value) {
          input.classList.add('is-error');
          isValid = false;
          return;
        }

        // Basic email check
        if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          input.classList.add('is-error');
          isValid = false;
        }
      });

      if (!isValid) {
        // Focus first error field
        var firstError = optInForm.querySelector('.form-input.is-error');
        if (firstError) firstError.focus();
        return;
      }

      // --- SUCCESS ---
      // [PLACEHOLDER] Replace with actual form submission logic.
      // Options: fetch() to your API, ConvertKit JS, Mailchimp embed, etc.
      //
      // Example:
      // fetch('https://your-api-endpoint.com/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     first_name: document.getElementById('first-name').value,
      //     email: document.getElementById('email').value,
      //     whatsapp: document.getElementById('whatsapp').value
      //   })
      // }).then(function(res) {
      //   if (res.ok) window.location.href = '/video';
      // });

      // For now, redirect to the video page placeholder
      window.location.href = 'video.html';
    });
  }

  // Clear error on input
  document.querySelectorAll('.form-input').forEach(function (input) {
    input.addEventListener('input', function () {
      this.classList.remove('is-error');
    });
  });

  // ============================================
  // STICKY MOBILE CTA
  // ============================================

  if (stickyCta) {
    var showAfterScroll = 300;

    function toggleSticky() {
      if (window.scrollY > showAfterScroll) {
        stickyCta.classList.add('is-visible');
      } else {
        stickyCta.classList.remove('is-visible');
      }
    }

    // Throttle scroll listener
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          toggleSticky();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    toggleSticky();
  }

  // ============================================
  // ANALYTICS EVENT STUBS
  // ============================================
  // [PLACEHOLDER] Wire these up to your analytics (GA4, Plausible, etc.)
  //
  // openButtons.forEach(function(btn) {
  //   btn.addEventListener('click', function() {
  //     gtag('event', 'cta_click', { event_category: 'squeeze_page' });
  //   });
  // });
  //
  // optInForm.addEventListener('submit', function() {
  //   gtag('event', 'form_submission', { event_category: 'squeeze_page' });
  // });

})();
