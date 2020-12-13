/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggler } from '../reducers/gameplayReducer';

const BoardGrid = styled(Container)`
padding-top: 6rem;
width: 350px;
table.table-bordered > tbody > tr > td {
  height: 2rem;
  width: 2rem;
  padding: 2px;
}
`;

const Board = ({ board }) => {
  const dispatch = useDispatch();
  return (
    <BoardGrid>
      <table className="table table-bordered table-dark">
        <tbody id="square">
          {board.map((x, i) => (
            <tr key={i}>
              {board[i].map((cell) => (
                <td
                  key={cell}
                  id={cell}
                  onClick={(e) => dispatch(toggler(e))}
                  onContextMenu={(e) => dispatch(toggler(e))}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </BoardGrid>
  );
};
// const Board = ({ board }) => (
//   <BoardGrid>
//     {board.map(() => (
//       <div className="row no-gutters">
//         {board.map(() => (
//           <div className="col col-pad">
//             col
//           </div>
//         ))}
//       </div>
//     ))}
//   </BoardGrid>
// );

export default Board;
