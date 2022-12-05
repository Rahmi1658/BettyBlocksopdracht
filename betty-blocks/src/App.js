import Navbar from './navbar/Navbar';
import Home from './home/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
 