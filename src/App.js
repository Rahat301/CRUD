import './App.css';
import{Route, Routes} from "react-router-dom"
import Home from './components/home/Home';
import View from './components/view/View';
import Update from './components/update/Update';
function App() {
  return (
    <div className="App">
       <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/users/view/:id' element={<View/>}/>
        <Route path='/users/update/:id' element={<Update/>}/>
      </Routes>
    </>
    </div>
  );
}

export default App;
