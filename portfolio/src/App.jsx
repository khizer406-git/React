import './App.css';
import Navbar from './Components/navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';

// Website to follow
// https://www.wix.com/website-template/view/html/3140?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fportfolios&tpClick=view_button&esi=357a1f29-fbb1-4d9d-8bb7-309a8581a62a
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
