# Vantage Point Eye Clinic — VSL Funnel

## Funnel Flow

```
Squeeze Page (index.html)  →  Video Page (video.html)  →  Booking Page (booking.html)
   [opt-in form]              [18-min VSL + CTAs]          [calendar embed]
```

## File Structure

```
├── index.html            ← Squeeze page
├── video.html            ← Video / VSL page
├── booking.html          ← Booking page
├── styles.css            ← Shared design system (all 3 pages)
├── video-page.css        ← Video page only
├── booking-page.css      ← Booking page only
├── script.js             ← Shared JS (modal, form, sticky CTA)
├── video-script.js       ← Video page JS (FAQ accordion)
├── booking-script.js     ← Booking page JS (FAQ accordion)
└── README.md
```

**IMPORTANT:** All files must be in the same directory. The HTML files reference CSS/JS by filename only (e.g. `href="styles.css"`), not by path.

## What Each Page Loads

| Page | CSS | JS |
|------|-----|----|
| Squeeze (`index.html`) | `styles.css` | `script.js` |
| Video (`video.html`) | `styles.css` + `video-page.css` | `script.js` + `video-script.js` |
| Booking (`booking.html`) | `styles.css` + `booking-page.css` | `script.js` + `booking-script.js` |

## Placeholders to Replace

### Squeeze Page
- Form `action` URL → your email platform endpoint
- Form submission logic in `script.js` → your API call
- Post-submit redirect in `script.js` → your video page URL
- `og:image`, favicon

### Video Page
- Video iframe `src` → your Vimeo/Wistia/YouTube URL
- `[YEAR]` → year established
- `[X]` → patient counts / percentages
- `[Company Names]` → client companies
- All `href="booking.html"` → your booking URL
- Privacy Policy & Terms links

### Booking Page
- Calendar placeholder → your Calendly/TidyCal/Cal.com/Acuity embed
- Call platform in FAQ → Phone/Zoom/WhatsApp/Google Meet
- Privacy Policy & Terms links
- `og:image`, favicon
