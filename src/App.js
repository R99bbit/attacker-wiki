import './App.css';
import MatrixContainer from './component/matrix-container/matrix-container';
import Footer from './component/footer/footer';
import Header from './component/header';
import TacticItem from './component/matrix-container/tactic-item';
import {Matrix} from './config/matrix';
import {View} from 'react';

function App() {
  var tactic = Matrix['tactic'];

  return (
    //
    <div className="App">
      <Header></Header>
      <MatrixContainer></MatrixContainer>
      <Footer/>

    </div>
  );
}

export default App;