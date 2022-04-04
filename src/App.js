import './App.css';
import MatrixContainer from './component/matrix-container/matrix-container';
import Footer from './component/footer/footer';
import Header from './component/header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <MatrixContainer></MatrixContainer>
      <Footer/>
    </div>
  );
}

export default App;