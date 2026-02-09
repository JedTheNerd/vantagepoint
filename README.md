# Vantage Point Eye Clinic — Squeeze Page

## Quick Start

1. Upload all files to your web server or hosting provider
2. Replace all `[PLACEHOLDER]` items listed below
3. Test on mobile, tablet, and desktop
4. Verify form submission flow end-to-end

# Vantage Point Eye Clinic — VSL Funnel (Complete)

## Funnel Flow

```
Squeeze Page (index.html)  →  Video Page (video.html)  →  Booking Page (booking.html)
   [opt-in form]              [18-min VSL + CTAs]          [calendar embed]
```

## All Files

| File | Purpose |
|------|---------|
| `index.html` | Squeeze page (opt-in with pop-up form) |
| `video.html` | Video / VSL page (training + social proof + CTAs) |
| `booking.html` | Booking page (calendar embed + testimonials + FAQ) |
| `styles.css` | **Shared** design system styles (all 3 pages load this) |
| `video-page.css` | Video page specific styles |
| `booking-page.css` | Booking page specific styles |
| `script.js` | **Shared** JS: modal, form validation, sticky CTA |
| `video-script.js` | Video page JS: FAQ accordion |
| `booking-script.js` | Booking page JS: FAQ accordion, analytics stubs |

## File Loading Per Page

**Squeeze** → `styles.css` + `script.js`
**Video** → `styles.css` + `video-page.css` + `script.js` + `video-script.js`
**Booking** → `styles.css` + `booking-page.css` + `script.js` + `booking-script.js`

All files go in the same folder. Nothing needs editing in shared files.

---

## Placeholders to Replace

### Squeeze Page (`index.html`)
- Form `action` URL → your email platform API endpoint
- Form submission JS in `script.js` → your fetch() call or SDK
- Post-submit redirect → your actual video page URL
- `og:image` → social share image (1200×630px)
- Favicon

### Video Page (`video.html`)
- Video iframe `src` → your Vimeo/Wistia/YouTube embed URL
- `[YEAR]` → year clinic was established
- `[X]` → patient counts, percentages
- `[Company Names]` → client companies (if applicable)
- All `href="booking.html"` → your actual booking page URL
- Privacy Policy & Terms links in footer

### Booking Page (`booking.html`)
- Calendar embed placeholder → your Calendly/TidyCal/Cal.com/Acuity embed code (see HTML comments for exact instructions per platform)
- Call platform in FAQ → your preferred method (Phone/Zoom/WhatsApp/Google Meet)
- Privacy Policy & Terms links in footer
- `og:image` → booking page share image

---

## Design System

All styles follow the provided design system JSON exactly:
- **Colors**: Navy #1A365D, Trust Green #059669, Slate #64748B, Amber #D97706
- **Typography**: Inter at specified sizes/weights per breakpoint
- **Spacing**: 8px base unit scale
- **Components**: Buttons, forms, cards, testimonials, FAQ accordion, comparison table per spec
- **CSS Variables**: Defined at top of `styles.css` for easy global changes

## Accessibility (WCAG AA)
- Semantic HTML5 with proper heading hierarchy
- Keyboard-navigable accordions with `aria-expanded`
- Focus trap in modal, Escape to close
- All interactive elements have focus-visible indicators
- Color contrast meets AA minimums throughout

## Browser Support
Chrome, Firefox, Safari, Edge (last 2 versions), iOS Safari, Android Chrome.
