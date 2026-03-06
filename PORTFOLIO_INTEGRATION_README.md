# Portfolio with CardioAI and Flutter App Integration

## Local Setup

1. **Install dependencies**: Use `npm install` to install all Next.js dependencies.
2. **Build and Run the project**: Run `npm run build` followed by `npm start`, or use `npm run dev` to start the development server.
3. **App Integration Assets**: Ensure that you have the `apps` and `websites` folders correctly placed inside the `public` directory. They contain the static exports of CardioAI, the Flutter app, and the vanilla Cardio website.
   - `public/apps/CardioAI`
   - `public/apps/flutter_app`
   - `public/websites/cardio`

## Overview of Changes

1. **Application Preview Section**: We created `ApplicationPreviewSection.tsx` which embeds CardioAI and the Flutter app via `<iframe>`. It includes responsive scaling and a tab control to switch between the applications without a page reload (using React state). It only renders the iframes after the component mounts.
2. **Website Section**: We implemented `WebsitePreviewSection.tsx`. It intelligently queries `useLocale()` from Next-intl and loads either `login.html` (if Arabic) or `login_en.html` (if English) inside the iframe, persisting the selection into `localStorage`. 
3. **Bilingual Consistency**: Extracted and centralized new translations into `messages/en.json` and `messages/ar.json`.
4. **Legal Website Error Fix**: To handle missing translation keys and null elements without crashing in your vanilla JS scripts, you should implement defensive event listeners. Ensure your `addEventListener` is wrapped around `DOMContentLoaded` and fallback strings are assigned:
   ```js
   document.addEventListener('DOMContentLoaded', () => {
       const buttons = document.querySelectorAll('.legal-buttons');
       buttons.forEach(btn => {
           btn.addEventListener('click', (e) => {
               const langKey = e.target.getAttribute('data-i18n') || 'fallback_key';
               const translation = window.Translations[langKey] || 'Translation Not Found';
               console.log(translation);
           });
       });
   });
   ```
5. **Testing**: We created a Jest configuration under `__tests__/LanguageSwitch.test.tsx` to assert that localStorage is properly updated on locale load, and that the application previews render seamlessly.

## Deployment Checklist

- [ ] All dependencies are correctly resolved (`npm ci`).
- [ ] Iframes successfully retrieve local static HTML distributions from `public/...` without CORS issues.
- [ ] Next-intl routes `/[locale]` are mapped and operational.
- [ ] Run `npm run test` or cypress command if configured to verify language routing logic passes.
- [ ] Mobile/desktop visual regression verifications at breakpoints (375px, 768px, 1440px). Responsive classes (`max-w-5xl`, `container`, etc) should handle width matching smoothly.
- [ ] Push to Vercel/Netlify or your preferred host - verify `public` folder isn't excessively large resulting in build timeouts.
