/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scorecard from './Scorecard';
import 'fontsource-nerko-one';
import 'typeface-fjalla-one';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Fjalla One';
  }
  h1 {
    text-align: center;
    margin-top: 10rem;
    color: hotpink;
  }
`;

const MainContainer = styled(Container)`
  margin-top: 1.5%;
  body {
    background-color: slategrey;
  }
  width: 350px;
`;

const FormContainer = styled(Container)`
  padding-top: 400px;
  body {
    background-color: slategrey;
  }
  width: 350px;
  button {
    background-color: #363d40;
  }
  button:hover {
    background-color: hotpink;
  }
  .form-button {
    padding-top: 5px;
    text-align: center;
  }
`;

const ScoreContainer = styled(Container)`
  text-align: center;
  margin: auto;
  margin-top: 2%;
  table.table-bordered > tbody > tr > td > td {
    height: 30px;
    width: 30px;
    padding: 2px;
  }
  table.table-bordered {
    border-color: white;
    border-width: 2px;
    border-style: solid;
  }
  button {
    background-color: #363d40;
    margin-bottom: 2rem;
  }
  button:hover {
    background-color: hotpink;
  }
`;

const ButtonContainer = styled(Container)`
background-color: #343A40;
text-align: center;
margin: auto;
border-radius: 1em;
border-color: white;
border-width: 1px;
border-style: solid;
.btn-secondary {
  margin-bottom: 10px;
  padding: 30px;
  background-color: #363d40;
}
.btn-secondary:hover {
  background-color: hotpink;
}
.btn-group-vertical {
  padding: 10px;
  margin: auto;
}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameEntered: false,
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      score: 0,
      count: 1,
      spare: false,
      strike: false,
      throwOne: '',
      throwTwo: '',
      frameOneScore: '',
      throwThree: '',
      throwFour: '',
      frameTwoScore: '',
      throwFive: '',
      throwSix: '',
      frameThreeScore: '',
      throwSeven: '',
      throwEight: '',
      frameFourScore: '',
      throwNine: '',
      throwTen: '',
      frameFiveScore: '',
      throwEleven: '',
      throwTwelve: '',
      frameSixScore: '',
      throwThirteen: '',
      throwFourteen: '',
      frameSevenScore: '',
      throwFifteen: '',
      throwSixteen: '',
      frameEightScore: '',
      throwSeventeen: '',
      throwEighteen: '',
      frameNineScore: '',
      throwNineteen: '',
      throwTwenty: '',
      throwTwentyOne: '',
      frameTenScore: '',
      finalRoundStrikeOne: '',
      finalRoundStrikeTwo: '',
      finalRoundStrikeThree: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  handleSubmit(digit) {
    const displayValue = digit.toString();
    const {
      spare,
      strike,
    } = this.state;
    let {
      score,
      count,
      roundOne,
      roundTwo,
      roundThree,
      finalRoundStrikeOne,
      finalRoundStrikeTwo,
      finalRoundStrikeThree,
      frameTenScore,
    } = this.state;
    // eslint-disable-next-line default-case
    switch (count) {
      case 1:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwOne: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else {
          this.setState({
            throwOne: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 2:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwTwo: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            throwTwo: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameOneScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 3:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwThree: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwThree: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwThree: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameOneScore: roundOne + score,
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwThree: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 4:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwFour: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwFour: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameOneScore: (roundOne + roundTwo + roundThree),
            frameTwoScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwFour: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameTwoScore: score,
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 5:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwFive: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwFive: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwFive: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameTwoScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwFive: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 6:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwSix: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwSix: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameTwoScore: score - (roundTwo + roundThree),
            frameThreeScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwSix: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameThreeScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 7:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwSeven: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwSeven: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwSeven: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameThreeScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwSeven: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 8:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwEight: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwEight: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameThreeScore: score - (roundTwo + roundThree),
            frameFourScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwEight: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameFourScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 9:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwNine: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwNine: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwNine: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameFourScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwNine: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 10:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwTen: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwTen: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameFourScore: score - (roundTwo + roundThree),
            frameFiveScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwTen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameFiveScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 11:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwEleven: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwEleven: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwEleven: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameFiveScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwEleven: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 12:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwTwelve: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwTwelve: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameFiveScore: score - (roundTwo + roundThree),
            frameSixScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwTwelve: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameSixScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 13:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwThirteen: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwThirteen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwThirteen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameSixScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwThirteen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 14:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwFourteen: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwFourteen: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameSixScore: score - (roundTwo + roundThree),
            frameSevenScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwFourteen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameSevenScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 15:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwFifteen: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwFifteen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwFifteen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameSevenScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwFifteen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 16:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwSixteen: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwSixteen: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameSevenScore: score - (roundTwo + roundThree),
            frameEightScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwSixteen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameEightScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 17:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwSeventeen: 'X',
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (strike) {
          this.setState({
            throwSeventeen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwSeventeen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameEightScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwSeventeen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 18:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwEighteen: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwEighteen: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameEightScore: score - (roundTwo + roundThree),
            frameNineScore: score,
            displayValue: '0',
            count: count += 1,
            strike: false,
          });
        } else {
          this.setState({
            throwEighteen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameNineScore: score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          roundOne: 0,
          roundTwo: 0,
          roundThree: 0,
        });
        break;
      case 19:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwNineteen: 'X',
            strike: true,
            finalRoundStrikeOne: finalRoundStrikeOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwNineteen: Number(displayValue),
            roundTwo: roundTwo += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (spare) {
          this.setState({
            throwNineteen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            frameNineScore: (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            throwNineteen: Number(displayValue),
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        break;
      case 20:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            throwTwenty: 'X',
            strike: true,
            finalRoundStrikeTwo: finalRoundStrikeTwo += Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        } else if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            throwTwenty: '/',
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else if (strike) {
          this.setState({
            throwTwenty: Number(displayValue),
            roundThree: roundThree += Number(displayValue),
            score: score += roundOne + (roundTwo + roundThree) * 2,
            frameNineScore: score - (roundTwo + roundThree),
            frameTenScore: score,
            displayValue: '0',
            strike: false,
          });
          console.log(`GAME OVER: SCORE: ${score}`);
        }
        break;
      case 21:
        if (displayValue === '10') {
          this.setState({
            throwTwentyOne: 'X',
            finalRoundStrikeThree: finalRoundStrikeThree += Number(displayValue),
            frameTenScore:
              score += Number(finalRoundStrikeOne)
              + Number(finalRoundStrikeTwo)
              + Number(finalRoundStrikeThree),
            score: frameTenScore,
          });
        } else {
          this.setState({
            throwTwentyOne: Number(displayValue),
            displayValue: '0',
            score: score += (roundOne + roundTwo + roundThree + Number(displayValue)),
            frameTenScore: score,
          });
        }
        console.log(`GAME OVER: SCORE: ${score}`);
        break;
    }
  }

  handleNewGame() {
    this.setState({
      roundOne: 0,
      roundTwo: 0,
      roundThree: 0,
      score: 0,
      count: 1,
      spare: false,
      strike: false,
      throwOne: '',
      throwTwo: '',
      frameOneScore: '',
      throwThree: '',
      throwFour: '',
      frameTwoScore: '',
      throwFive: '',
      throwSix: '',
      frameThreeScore: '',
      throwSeven: '',
      throwEight: '',
      frameFourScore: '',
      throwNine: '',
      throwTen: '',
      frameFiveScore: '',
      throwEleven: '',
      throwTwelve: '',
      frameSixScore: '',
      throwThirteen: '',
      throwFourteen: '',
      frameSevenScore: '',
      throwFifteen: '',
      throwSixteen: '',
      frameEightScore: '',
      throwSeventeen: '',
      throwEighteen: '',
      frameNineScore: '',
      throwNineteen: '',
      throwTwenty: '',
      throwTwentyOne: '',
      frameTenScore: '',
      finalRoundStrikeOne: '',
      finalRoundStrikeTwo: '',
      finalRoundStrikeThree: '',
    });
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleNameSubmit() {
    this.setState({
      nameEntered: true,
    });
  }

  render() {
    const { name, nameEntered } = this.state;
    return (
      <>
        <GlobalStyle />
        {
          nameEntered === false ? (
            <FormContainer>
              <form>
                <div className="form-row">
                  <div className="col">
                    <input type="text" value={name} onChange={this.handleName} className="form-control" placeholder="Enter Name" />
                  </div>
                </div>
                <div className="form-button">
                  <button type="submit" className="btn btn-secondary" onClick={this.handleNameSubmit}>START</button>
                </div>
              </form>
            </FormContainer>
          )
            : (
              <>
                <h1>BOWLING</h1>
                <MainContainer>
                  <ButtonContainer>
                    <div className="btn-group-vertical" role="group">
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(1)}>1</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(4)}>4</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(7)}>7</button>
                    </div>
                    <div className="btn-group-vertical" role="group">
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(2)}>2</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(5)}>5</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(8)}>8</button>
                    </div>
                    <div className="btn-group-vertical" role="group">
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(3)}>3</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(6)}>6</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.handleSubmit(9)}>9</button>
                    </div>
                    <div className="zeroth-button">
                      <button type="button" className="btn btn-secondary" style={{ width: '100%', padding: '10px' }} onClick={() => this.handleSubmit(10)}>10</button>
                    </div>
                  </ButtonContainer>
                </MainContainer>
                <ScoreContainer>
                  <button type="button" className="btn btn-secondary" onClick={this.handleNewGame}>New Game</button>
                  <Scorecard scores={this.state} />
                </ScoreContainer>
              </>
            )
        }
      </>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
