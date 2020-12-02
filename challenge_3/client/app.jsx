/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = styled(Container)`
  width: 350px;
`;

const ButtonContainer = styled(Container)`
background-color: slategrey;
text-align: center;
margin: auto;
border-radius: 1em;
.btn-secondary {
  margin-bottom: 10px;
  padding: 30px;
  background-color: #363d40;
}

.btn-group-vertical {
  padding: 10px;
  margin: auto;
}
`;

const SecondaryContainer = styled(Container)`
  .go-button {
    margin: 50px;
    padding: 50px;
    font-size:20pt;
    border-radius: 5em;
  }
`;

const Input = styled(InputGroup)`
  .form-control {
    margin-top: 10px;
    border-radius: 5em;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      roundOne: 0,
      roundTwo: 0,
      score: 0,
      count: 1,
      spare: false,
      strike: false,
      1: '',
      2: '',
      frameOneScore: 0,
      3: '',
      4: '',
      frameTwoScore: 0,
      5: '',
      6: '',
      frameThreeScore: 0,
      7: '',
      8: '',
      frameFourScore: 0,
      9: '',
      10: '',
      frameFiveScore: 0,
      11: '',
      12: '',
      frameSixScore: 0,
      13: '',
      14: '',
      frameSevenScore: 0,
      15: '',
      16: '',
      frameEightScore: 0,
      17: '',
      18: '',
      frameNineScore: 0,
      19: '',
      20: '',
      21: '',
    };
    this.handleInputDigit = this.handleInputDigit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleInputDigit(digit) {
    const { displayValue } = this.state;
    this.setState({
      displayValue: displayValue === '0' ? digit : displayValue + digit.toString(),
    });
  }

  handleSubmit() {
    const {
      displayValue,
      spare,
      strike,
      frameOneScore,
      frameTwoScore,
      frameThreeScore,
      frameFourScore,
      frameFiveScore,
      frameSixScore,
      frameSevenScore,
      frameEightScore,
      frameNineScore,
    } = this.state;
    let {
      score,
      count,
      roundOne,
      roundTwo,
    } = this.state;
    // this.setState({
    //   score: score += Number(displayValue),
    //   displayValue: '0',
    //   count: count += 1,
    // });
    // eslint-disable-next-line default-case
    switch (count) {
      case 1:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            strike: true,
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({ 1: Number(displayValue) });
        break;
      case 2:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: roundTwo += roundOne,
            frameOneScore: frameOneScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          2: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 3:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameOneScore: frameOneScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          3: Number(displayValue),
        });
        break;
      case 4:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameTwoScore: frameTwoScore + score,
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          4: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 5:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameTwoScore: frameTwoScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          5: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 6:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameThreeScore: frameThreeScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          6: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 7:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameThreeScore: frameThreeScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          7: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 8:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameFourScore: frameFourScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          8: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 9:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameFourScore: frameFourScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          9: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 10:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameFiveScore: frameFiveScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          10: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 11:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameFiveScore: frameFiveScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          11: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 12:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameSixScore: frameSixScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          12: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 13:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameSixScore: frameSixScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          13: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 14:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameSevenScore: frameSevenScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          14: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 15:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameSevenScore: frameSevenScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          15: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 16:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameEightScore: frameEightScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          16: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 17:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameEightScore: frameEightScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          17: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 18:
        if (10 - Number(displayValue) === roundOne) {
          console.log('SPARE');
          this.setState({
            spare: true,
            score: score += 10,
            displayValue: '0',
            count: count += 1,
          });
        } else {
          this.setState({
            roundTwo: roundTwo += Number(displayValue),
            score: score += (roundTwo + roundOne),
            frameNineScore: frameNineScore + score,
            displayValue: '0',
            lastValue: 0,
            count: count += 1,
          });
        }
        this.setState({
          18: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 19:
        if (displayValue === '10') {
          console.log('STRIKE');
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 2,
          });
        } else if (spare) {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            frameNineScore: frameNineScore + (roundOne + score),
            score: score += roundOne,
            displayValue: '0',
            count: count += 1,
            spare: false,
          });
        } else {
          this.setState({
            roundOne: roundOne += Number(displayValue),
            displayValue: '0',
            count: count += 1,
          });
        }
        this.setState({
          19: Number(displayValue),
          roundOne: 0,
          roundTwo: 0,
        });
        break;
      case 20:
        this.setState({ 20: Number(displayValue) });
        break;
      case 21:
        this.setState({ 21: Number(displayValue) });
        break;
    }
  }

  onChange(e) {
    this.setState({
      displayValue: e.target.displayValue,
    });
  }

  render() {
    const { displayValue, score } = this.state;
    return (
      <MainContainer>
        <div>
          <h1>
            SCORE:
            {' '}
            {score}
          </h1>
        </div>
        <ButtonContainer>
          <Input>
            <input type="text" value={displayValue} onChange={this.onChange} placeholder="Enter Pin Quantity" className="form-control" />
          </Input>
          <div className="btn-group-vertical" role="group">
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(1)}>1</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(4)}>4</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(7)}>7</button>
          </div>
          <div className="btn-group-vertical" role="group">
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(2)}>2</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(5)}>5</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(8)}>8</button>
          </div>
          <div className="btn-group-vertical" role="group">
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(3)}>3</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(6)}>6</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleInputDigit(9)}>9</button>
          </div>
          <div className="zeroth-button">
            <button type="button" className="btn btn-secondary" style={{ width: '100%', padding: '10px' }} onClick={() => this.handleInputDigit(0)}>0</button>
          </div>
        </ButtonContainer>
        <SecondaryContainer>
          <div className="bowl-button">
            <button type="button" className="btn btn-danger go-button" onClick={this.handleSubmit}>BOWL!</button>
          </div>
        </SecondaryContainer>
      </MainContainer>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
