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

Pages
1. Squeeze Page (index.html)
Opt-in page with pop-up form → redirects to Video Page after submission.
2. Video Page (video.html)
VSL delivery page with 18-minute training video, extensive social proof, comparison table, FAQ accordion, and multiple CTAs linking to the Booking Page.
Files
FilePurposeindex.htmlSqueeze page (opt-in)video.htmlVideo / VSL pagestyles.cssShared design system styles (both pages)video-page.cssVideo page specific stylesscript.jsShared JS: modal, form validation, sticky CTAvideo-script.jsVideo page JS: FAQ accordion, analytics stubs
Quick Start

Upload all files to your web server
Replace all [PLACEHOLDER] items listed below
Test on mobile, tablet, and desktop
Verify the full funnel flow: Squeeze → Video → Booking


Placeholders to Replace
Squeeze Page (index.html)
PlaceholderLocationReplace WithForm action URL<form> tagYour ConvertKit/Mailchimp/API endpointForm submission logicscript.js → // --- SUCCESS ---Your fetch() call or SDKPost-submit redirectscript.js → window.location.hrefYour actual video page URLog:image<head>Social share image URL (1200×630px)Favicon<head>Your favicon path
Video Page (video.html)
PlaceholderLocationReplace WithVideo iframe srcVideo player sectionYour Vimeo/Wistia/YouTube embed URL[YEAR]Credentials + Provider sectionsYear clinic was established[X]Provider sectionActual patient count, percentages[Company Names]Provider sectionClient company names (if applicable)All href="booking.html"CTA buttonsYour actual booking page URLog:image<head>Video thumbnail URLPrivacy Policy linkFooterYour privacy policy URLTerms of Service linkFooterYour terms of service URL

Architecture
Both pages share styles.css (design system: colors, typography, spacing, buttons, forms, testimonials, sticky CTA, modal). The video page adds video-page.css for page-specific components (video player, FAQ accordion, comparison table, process steps, USP strip, etc.).
Both pages share script.js (modal open/close, form validation, sticky mobile CTA). The video page adds video-script.js for the FAQ accordion.
Design System
All styles follow the provided design system JSON:

Colors: Navy (#1A365D), Trust Green (#059669), Slate (#64748B), Amber (#D97706)
Typography: Inter, mobile-first responsive type scale
Spacing: 8px base unit system
Components: Buttons, forms, testimonial cards, callout boxes per spec

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
