import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import GetDataForm from './components/getDataForm';
import DisplayData from './components/DisplayData';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <GetDataForm/>
          <DisplayData/>
        </div>
      </div>
    </div>
  );
}


export default App;
