# Vantage Point Eye Clinic — Squeeze Page

## Quick Start

1. Upload all files to your web server or hosting provider
2. Replace all `[PLACEHOLDER]` items listed below
3. Test on mobile, tablet, and desktop
4. Verify form submission flow end-to-end

## Files

| File | Purpose |
|------|---------|
| `index.html` | Squeeze page markup |
| `styles.css` | All styles (mobile-first, responsive) |
| `script.js` | Modal, form validation, sticky CTA |

## Placeholders to Replace

### 1. Form Endpoint
In `index.html`, find the `<form>` tag and replace the `action` URL:
```html
<form id="opt-in-form" action="https://example.com/api/submit" ...>
```
Replace with your ConvertKit, Mailchimp, ActiveCampaign, or custom API endpoint.

### 2. Form Submission Logic
In `script.js`, find the `// --- SUCCESS ---` comment block. Uncomment and configure the `fetch()` call with your actual API endpoint, or replace with your email platform's JavaScript SDK.

### 3. Post-Submission Redirect
In `script.js`, update the redirect URL after successful form submission:
```js
window.location.href = 'video.html';
```
Change `video.html` to your actual video page URL.

### 4. OG Image & Favicon
In `index.html`, replace:
- `og:image` content URL with your actual social share image (1200×630px)
- Favicon `href` with your actual favicon path

### 5. Canonical URL
Update the `<link rel="canonical">` if your domain differs.

### 6. Analytics
In `script.js`, uncomment and configure the analytics event stubs at the bottom of the file for GA4, Plausible, or your preferred analytics platform.

## Design System

All colors, typography, spacing, and component styles follow the design system JSON provided. CSS custom properties are defined at the top of `styles.css` for easy global adjustments.

## Browser Support

- Chrome, Firefox, Safari, Edge (last 2 versions)
- iOS Safari, Android Chrome (last 2 versions)

## Accessibility

- WCAG AA contrast ratios on all text
- Keyboard navigation (Tab, Escape for modal)
- Focus trapping inside modal
- `aria-modal`, `aria-labelledby`, `role="dialog"` on the modal
- Screen-reader-friendly form labels and error messages
- Semantic HTML5 (`header`, `main`, `footer`, `section`, `article`)
