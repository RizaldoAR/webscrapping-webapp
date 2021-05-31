
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Cards from './components/card'

function App() {
  return (
    
    <div className="App">
      <Navigation/>
      <div style={{flexDirection:'row'}}>
      <Cards/>
      </div>
     
    </div>
  );
}

export default App;
