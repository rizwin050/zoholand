import useDocumentTitle from '../hooks/useDocumentTitle';
import Button from '../components/common/Button';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <section className="section">
      <div className="container not-found">
        <h1>That page is not here.</h1>
        <p>The link may be old or mistyped.</p>
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}
