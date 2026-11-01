import { useEffect } from 'react';

const BASE = 'Zohaland';

/** Sets the tab title and meta description for the current page. */
export default function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Particle Boards, Perumbavoor, Kerala`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
