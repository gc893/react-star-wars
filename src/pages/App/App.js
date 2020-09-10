import React, {Component} from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import {Route} from 'react-router-dom'
import StarshipList from '../../pages/StarshipList/StarshipList'
import StarshipPage from '../../pages/StarshipPage/StarshipPage'

class App extends Component {
  render() { 
    return (
      <>
        <NavBar />
        <div id="page-container">

          <Route 
            exact path='/'
            render={() => 
              <StarshipList />
            }
          />
          <Route 
            exact path='/spaceshipdetails'
            render={({ location }) => 
              <StarshipPage location={location}/>
            }
          />

        </div>
      </>
      );
  }
}
 
export default App;