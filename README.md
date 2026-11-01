# Zohaland website

Static marketing site for Zohaland (Greenland Particle Boards Pvt. Ltd.).
React 18 + Vite + React Router. No backend.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs ./dist (upload this folder to any static host)
npm run preview    # test the production build locally
```

## Enquiry form (email on submit)

Uses EmailJS, so no backend is needed. Full setup: create an EmailJS account, connect Gmail
as a service, create a template from `email-templates/enquiry-notification.html`, then copy
`.env.example` to `.env` and fill in the service ID, template ID and public key.
If the values are missing, the form falls back to opening the visitor's email app (mailto).
On Netlify/Vercel, set the same variables in the dashboard and redeploy.

## Where to edit things

| To change                         | Edit                          |
| --------------------------------- | ----------------------------- |
| Phones, email, address, hours, map | `src/config/site.js`          |
| Product sizes, grades, decor info | `src/data/products.js`        |
| Test report numbers               | `src/data/specs.js`           |
| Certifications, capacity, process | `src/data/company.js`         |
| Colours and type scale            | `src/styles/variables.css`    |
| Images                            | `src/assets/images/`          |

## Structure

```
src/
  main.jsx, App.jsx        entry + lazy-loaded routes
  config/                  site-wide constants
  data/                    content as plain data (no JSX)
  hooks/                   useContactForm, useInView, useCountUp, useDocumentTitle
  utils/                   validators, mailto builder
  components/
    layout/                Layout, Header, Footer
    common/                Button, SectionHeading, PageHeader, CtaBand, SpecTable, RingsMark
    home/ products/ manufacturing/ contact/   page-specific pieces
  pages/                   Home, Products, Manufacturing, About, Contact, NotFound
  styles/                  tokens, base, utilities + one stylesheet per area
```

## Deploying

- **Netlify**: build `npm run build`, publish `dist`. `public/_redirects` handles page refreshes.
- **Vercel**: framework Vite. `vercel.json` handles page refreshes.
- **Other hosts (Apache/Nginx/cPanel)**: upload `dist` and rewrite unknown paths to `/index.html`.
