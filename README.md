# Zohaland: Company Website for a Particle Board Manufacturer

**Live site:** https://www.zohalandparticleboards.com/

A website built for **Zohaland**, the particle board brand of **Greenland Particle Boards Pvt. Ltd.**, a manufacturer
in Perumbavoor, Kerala. The site is in live use by the company to present its products, show its manufacturing
capability and receive enquiries from furniture makers, contractors and interior designers.

## The brief

The company had a printed brochure and a logo, but no polished web presence. The goal was a fast, static site that
turns the brochure into five clear pages and sends every customer enquiry straight to the company's Gmail inbox.

## What I built

| Page          | Purpose                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Home          | Hero, key numbers, product range, decor showcase, test results against the standard, certifications |
| Products      | Three product lines with sizes and grades, 270+ decors, and the full technical test report         |
| Manufacturing | Plant capacity, production process and quality certifications                                     |
| About         | Company story, values, certifications and sister concerns                                         |
| Contact       | Phone, WhatsApp and email details, enquiry form, business hours and an embedded Google map        |

## Highlights

- **Enquiries by email:** pressing Send enquiry delivers all the typed details to the company inbox through Web3Forms, with no backend to run. The customer's email is set as the reply address, so replying in Gmail goes straight to them.
- **Resilient form:** client-side validation, a hidden honeypot against bots, clear success and error messages, and a mailto fallback if the email service is unavailable.
- **Data-driven design:** test results are drawn as a "Greenland vs IS 3087 standard" bar chart, and the full report is rendered from the same data as an accessible table.
- **Brand-led visuals:** the growth-ring motif from the logo is redrawn as an animated SVG in the hero and page headers. Colours come from the logo greens and the tan of raw particle board.
- **Brochure turned into web content:** photos were extracted from the PDF brochure and cropped, and the logo was converted to transparent and white variants for light and dark sections.
- **Single source of truth:** company details, products, specs and certifications live in plain data files, so a phone number or product size is changed in one place and every page updates.

## Engineering decisions

- **React 18 with Vite and React Router**, with every page lazy-loaded so visitors download only what they open, and the vendor libraries split into their own chunk.
- **Custom hooks** for the contact form, scroll-triggered animation, count-up numbers and per-page titles and descriptions.
- **Production-style structure:** config, data, services, hooks, utils, components and pages are kept apart, with components grouped by page and shared pieces in `common`.
- **Plain CSS with design tokens:** one variables file for colours, type scale and spacing, plus a stylesheet per area. No UI framework.
- **Accessibility:** skip link, semantic landmarks and tables, labelled form fields with live status messages, visible focus styles, and animations switched off for visitors who prefer reduced motion.
- **Responsive** from phones to wide desktops, with a mobile navigation menu and tables that scroll sideways on small screens.
- **SEO basics:** a unique title and meta description for each page, and a `robots.txt`.
- **Static hosting ready:** includes the rewrite rules that single-page apps need on Netlify and Vercel.

## Tech stack

React 18, Vite, React Router, plain CSS (custom properties), Web3Forms, Google Maps embed, ESLint.

## Project structure

```
src/
  config/        company details and form settings
  data/          products, specs, company content
  services/      enquiry email service
  hooks/         useContactForm, useInView, useCountUp, useDocumentTitle
  utils/         validation, mailto fallback
  components/    layout, common, home, products, manufacturing, contact
  pages/         Home, Products, Manufacturing, About, Contact, NotFound
  styles/        tokens, base, utilities, one stylesheet per area
```

## My role

Designed and developed the whole site: information architecture, visual design, React implementation, content
preparation from the brochure, the enquiry email flow and deployment.