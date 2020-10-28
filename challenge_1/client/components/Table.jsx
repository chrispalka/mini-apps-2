import React from 'react';
import ReactDOM from 'react-dom';

const Table = ({ data }) => (
  <tbody>
    {data.map((entry) =>
      <tr key={entry.description.length}>
        <td>
          {entry.date}
        </td>
        <td>
          {entry.description}
        </td>
        <td>
          {entry.lang}
        </td>
        <td>
          {entry.category1}
        </td>
        <td>
          {entry.category2}
        </td>
        <td>
          {entry.granularity}
        </td>
      </tr>
    )}
  </tbody>
)

export default Table;