import React, { Component } from 'react';
import './App.css';
import PictureCard from './components/PictureCard'
import doctors from "./pictures.json"
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

  state = {
    doctors,
    score: 0,
    totalScore: 0,
    status: "",
    isClicked: []
  };

  componentDidMount = () => this.randomizeDoctors()

  randomizeDoctors = () => {
    const randomize = shuffleArray(this.state.doctors)
    this.setState({ doctors: randomize })
  }

  incrementScore = id => {
    let score = this.state.score
    let totalScore = this.state.totalScore
    if (this.state.isClicked.includes(id)) {
      this.setState({ status: "Oops, this has already been clicked!" })
      this.setState({ score: 0 })
      this.setState({ isClicked: [] })
      this.randomizeDoctors()
    } else {
      this.setState({ status: "Good Guess!"})
      this.setState({ isClicked: [...this.state.isClicked, id] })
      this.setState({ score: score + 1 })
      if (score >= totalScore ) {
        this.setState({ totalScore: totalScore + 1 })
      } 
      if (totalScore === 15) {
        this.setState({ status: "Good Memory!"})
        this.setState({ totalScore: 0 })
        this.setState({ score: 0 })
      }
      this.randomizeDoctors()
    }

  }
  
  render() {
    return(
      <div>
        <NavBar
          status={this.state.status}
          score={this.state.score}
          totalScore={this.state.totalScore}>
          </NavBar>
        <Wrapper>
        {this.state.doctors.map(doctor => (<PictureCard

          incrementScore={this.incrementScore}
          id={doctor.id}
          key={doctor.id}
          name={doctor.name}
          image={doctor.image}
          actor={doctor.actor}
          clicked={doctor.clicked}
          />))}
        </Wrapper>
        <Footer></Footer>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
