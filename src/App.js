import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import CreateMeme from './pages/CreateMeme';

function App() {
  return (
    <div className="App bg-slate-200 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> 
          <Route path="home" element={<Home />} />
          <Route path="create" element={<CreateMeme />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
