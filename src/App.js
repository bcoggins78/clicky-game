import React, { Component } from 'react';
import './App.css';
import doctors from "./pictures.json"
import NavBar from "./components/NavBar"
import Instructions from "./components/Instructions"
import Wrapper from "./components/Wrapper"
import PictureCard from './components/PictureCard'
import Footer from "./components/Footer"

// Function used to shuffle the Doctors array
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
// Setting the state
  state = {
    doctors,
    score: 0,
    totalScore: 0,
    status: "Click an image to begin!",
    isClicked: []
  };

  // Runs the RandomDoctors array when component loads
  componentDidMount = () => this.randomizeDoctors()

  // Uses the shuffle aray to randomize the array of doctor objects
  randomizeDoctors = () => {
    const randomize = shuffleArray(this.state.doctors)
    this.setState({ doctors: randomize })
  }

  // Function that runs the logic of the game
  incrementScore = id => {
    let score = this.state.score
    let totalScore = this.state.totalScore
    // Checks if the Doctor's id is in the isClicked array
    if (this.state.isClicked.includes(id)) {
      this.setState({ status: "EXTERMINATE!!!" }) // Message when an already clicked image is selected
      this.setState({ score: 0 }) // Sets the score to 0
      this.setState({ isClicked: [] }) // Empties isClicked array
      this.randomizeDoctors() // Runs the function to randomize the pictures
    } else {
      this.setState({ status: "Good Guess Companion!"}) // Message when an un-clicked picture is selected
      this.setState({ isClicked: [...this.state.isClicked, id] }) // Adds the id of selected picture to the isClicked array
      this.setState({ score: score + 1 }) // Increments score by 1
      if (score >= totalScore ) { // Checks if score is larger than or equal to total score
        this.setState({ totalScore: totalScore + 1 }) // If condition is true, total score increments by 1
      } 
      if (totalScore === 15) {  // Checks the score if all pictures have been clicked
        this.setState({ status: "You must be a Time Lord!"})  // Displays this message if condition is true
        this.setState({ totalScore: 0 }) // Both the totalScore and score reset to 0
        this.setState({ score: 0 })
      }
      this.randomizeDoctors() // Pictures randomized
    }
  }
  
  render() {
    return(
      <div>
        {/* NavBar component sending props for status, score, and totalScore */}
        <NavBar
          status={this.state.status}
          score={this.state.score}
          totalScore={this.state.totalScore}>
        </NavBar>
        <Instructions />
        <Wrapper>
          {/* Map function that loops the PictureCard component and passes props from the doctors array */}
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
        <Footer />
      </div>
    )
  }
}

export default App;
