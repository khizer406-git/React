import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <div style={{margin: 50}}>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
