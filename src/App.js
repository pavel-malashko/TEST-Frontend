import React, { Component } from 'react';
import './styles/App.css';
import logo from './logo.png';
import { Provider } from 'react-redux';
import store from './store'
import Routes from './routes';



class App extends Component {

  render() {

    return (

      <Provider store={store} >

        <div className="App">

          <header className="App-header">
            <a href="https://pixelplex.io/">
              <img src={logo} alt="Logo" href="https://pixelplex.io/" />
            </a>
          </header>

          <Routes />

        </div>

      </Provider>
      
    );

  }
  
}

export default App;
