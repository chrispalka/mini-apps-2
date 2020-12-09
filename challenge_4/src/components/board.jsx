/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { toggleOpen, toggleFlag, toggleGuess } from '../reducers/gameplayReducer';

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
          {board.map(() => (
            <tr>
              {board.map(() => (
                <td id="square" onClick={() => dispatch(toggleGuess())} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </BoardGrid>
  )
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
