/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Scorecard = ({
  scores: {
    frameOneScore,
    frameTwoScore,
    frameThreeScore,
    frameFourScore,
    frameFiveScore,
    frameSixScore,
    frameSevenScore,
    frameEightScore,
    frameNineScore,
    frameTenScore,
    throwOne,
    throwTwo,
    throwThree,
    throwFour,
    throwFive,
    throwSix,
    throwSeven,
    throwEight,
    throwNine,
    throwTen,
    throwEleven,
    throwTwelve,
    throwThirteen,
    throwFourteen,
    throwFifteen,
    throwSixteen,
    throwSeventeen,
    throwEighteen,
    throwNineteen,
    throwTwenty,
    throwTwentyOne,
  },
}) => (
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">Frame</th>
          <th scope="col">1</th>
          <th scope="col">2</th>
          <th scope="col">3</th>
          <th scope="col">4</th>
          <th scope="col">5</th>
          <th scope="col">6</th>
          <th scope="col">7</th>
          <th scope="col">8</th>
          <th scope="col">9</th>
          <th scope="col">10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Player</th>
          <td>
            <td>{throwOne}</td>
            <td>{throwTwo}</td>
          </td>
          <td>
            <td>{throwThree}</td>
            <td>{throwFour}</td>
          </td>
          <td>
            <td>{throwFive}</td>
            <td>{throwSix}</td>
          </td>
          <td>
            <td>{throwSeven}</td>
            <td>{throwEight}</td>
          </td>
          <td>
            <td>{throwNine}</td>
            <td>{throwTen}</td>
          </td>
          <td>
            <td>{throwEleven}</td>
            <td>{throwTwelve}</td>
          </td>
          <td>
            <td>{throwThirteen}</td>
            <td>{throwFourteen}</td>
          </td>
          <td>
            <td>{throwFifteen}</td>
            <td>{throwSixteen}</td>
          </td>
          <td>
            <td>{throwSeventeen}</td>
            <td>{throwEighteen}</td>
          </td>
          <td>
            <td>{throwNineteen}</td>
            <td>{throwTwenty}</td>
            <td>{throwTwentyOne}</td>
          </td>
        </tr>
        <tr>
          <th scope="row">Score</th>
          <td>{frameOneScore}</td>
          <td>{frameTwoScore}</td>
          <td>{frameThreeScore}</td>
          <td>{frameFourScore}</td>
          <td>{frameFiveScore}</td>
          <td>{frameSixScore}</td>
          <td>{frameSevenScore}</td>
          <td>{frameEightScore}</td>
          <td>{frameNineScore}</td>
          <td>{frameTenScore}</td>
        </tr>
      </tbody>
    </table>
  );

export default Scorecard;
