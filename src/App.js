import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import mesos from './mesos.png';
import './App.css';

function App() {
  const [smallBet, setSmallBet] = useState(0);
  const [bigBet, setBigBet] = useState(0);
  return (
    <div className="App">
      <header className="App-header" style={{ padding:"1em" }}>
      <Card>
        <Card.Header as="h5" >
          Win How Much?
          <img src={mesos} alt="mesos" style={{ height: "1.3em", marginLeft: "0.3em" }} />
          </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
            <Card.Text>
            <InputGroup className="mb-3">
              <InputGroup.Text>Big</InputGroup.Text>
              <FormControl aria-label="bigbet"
              onChange={(e) => {
                setBigBet(e.target.value == "" ? 0 : e.target.value);
              }} />
              <InputGroup.Text>Small</InputGroup.Text>
              <FormControl aria-label="smallbet"
              onChange={(e) => {
                setSmallBet(e.target.value == "" ? 0 : e.target.value);
              }}/>
            </InputGroup>
            { // check if bigbet and smallbet are numbers 
              (isNaN(bigBet) || isNaN(smallBet)) ?
              <Alert key={1} variant={"danger"}>
                Ensure that both bets are numbers or empty
              </Alert>
              :
              (bigBet > 1000 || smallBet > 1000) ?
              <Alert key={1} variant={"danger"}>
                Sure bo? I think bet less than 1000 la, if not buy Toto better
              </Alert>
            :
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Big Prize</th>
                  <th>Big Bet</th>
                  <th>Big Actual</th>
                  <th>Small Prize</th>
                  <th>Small Bet</th>
                  <th>Small Actual</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>First</th>
                  <td>2000</td>
                  <td>{bigBet}</td>
                  <td>{bigBet * 2000}</td>
                  <td>3000</td>
                  <td>{smallBet}</td>
                  <td>{smallBet * 3000}</td>
                  <th>${((bigBet * 2000) + (smallBet * 3000))}</th>
                </tr>
                <tr>
                  <th>Second</th>
                  <td>1000</td>
                  <td>{bigBet}</td>
                  <td>{bigBet * 1000}</td>
                  <td>2000</td>
                  <td>{smallBet}</td>
                  <td>{smallBet * 2000}</td>
                  <th>${((bigBet * 1000) + (smallBet * 2000))}</th>
                </tr>
                <tr>
                  <th>Third</th>
                  <td>490</td>
                  <td>{bigBet}</td>
                  <td>{bigBet * 490}</td>
                  <td>800</td>
                  <td>{smallBet}</td>
                  <td>{smallBet * 800}</td>
                  <th>${((bigBet * 490) + (smallBet * 800))}</th>
                </tr>
                <tr>
                  <th>Starter</th>
                  <td>250</td>
                  <td>{bigBet}</td>
                  <td>{bigBet * 250}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <th>${bigBet * 250}</th>
                </tr>
                <tr>
                  <th>Consolation</th>
                  <td>60</td>
                  <td>{bigBet}</td>
                  <td>{bigBet * 60}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <th>${bigBet * 60}</th>
                </tr>
              </tbody>
            </Table>
            }
            </Card.Text>
          {/* <Button variant="primary">Calculate</Button> */}
        </Card.Body>
      </Card>
      </header>
    </div>
  );
}

export default App;
