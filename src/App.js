
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
// import Chat from './components/Chat-App/Chat';
import "./App.css"

// import Join from './components/Chat-App/Join';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route  path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
        {/* <Route path='/' element={ <Join />} />
        <Route path='/Chat' element={<Chat />} /> */}
      </Routes>
      
      
    </div>
  );
}

export default App;
