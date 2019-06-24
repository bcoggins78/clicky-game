import React, { Component } from 'react';
import './App.css';
import PictureCard from './components/PictureCard'
import doctors from "./pictures.json"
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


class App extends Component {

  state = {
    doctors
  };

  render() {
    return(
      <div>
        <NavBar></NavBar>
        <Wrapper>
        {this.state.doctors.map(doctor => (<PictureCard 
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
