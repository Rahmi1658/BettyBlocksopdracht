import Navbar from './navbar/Navbar';
import Home from './home/home';
import FormOne from './form/FormOne';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/> <br/>
        <FormOne/>
      </div>
    </div>
  );
}

export default App;
 