import { specRows, specStandard, specTitle } from '../../data/specs';

export default function SpecTable() {
  return (
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Technical specification table, scrolls sideways on small screens">
      <table className="data-table">
        <caption>{specTitle}</caption>
        <thead>
          <tr>
            <th scope="col">Test property</th>
            <th scope="col">{specStandard}</th>
            <th scope="col">Greenland result</th>
          </tr>
        </thead>
        <tbody>
          {specRows.map((row) => (
            <tr key={row.property}>
              <th scope="row">{row.property}</th>
              <td>{row.standard}</td>
              <td className="data-table__ours">{row.actual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
