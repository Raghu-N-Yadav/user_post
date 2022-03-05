import './App.css';
// import User from './components/User';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Morepost from './components/Morepost';
import PostOne from './components/PostOne';
import UserOne from './components/UserOne';
import Errors from './components/Errors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="postone/:id" element={<PostOne />} />
        <Route path="userone/:id" element={<UserOne />} />
        <Route path="/" element={<Home />} />
        <Route path="more" element={< Morepost />} />
        <Route path="errors/:name" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
