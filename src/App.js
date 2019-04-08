import React, { Component } from 'react';
import Travel from "./components/Travel";
// import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <Header />
        <Header />
        <Header />
        <Header /> */}
        <Travel destination='paris' contry='France' photo ='https://www.salaun-holidays.com/images/concours-carnet-de-voyages.jpg' alt='https://www.salaun-holidays.com/images/concours-carnet-de-voyages.jpg' distance='6'/>
        <Travel destination='londre' contry='ANg' photo ='https://www.salaun-holidays.com/images/concours-carnet-de-voyages.jpg' alt='https://www.salaun-holidays.com/images/concours-carnet-de-voyages.jpg' distance='5'/>
      </div>
    );
  }
}

export default App;
