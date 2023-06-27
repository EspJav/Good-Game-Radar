import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Discovery from './components/Discovery';

const sports = ["Baseball", "BasketBall", "Soccer", "Football"]
function App() {
  return (
    <>
      <NavBar />
      <About />
      <Discovery />
    </>
  )
}

export default App;
