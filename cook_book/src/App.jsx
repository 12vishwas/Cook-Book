import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/Navbar"
import { Home,Newrecipe,Login, Register} from "./components/pages/files"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newrecipe" element={<Newrecipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    
  );
}

export default App;
