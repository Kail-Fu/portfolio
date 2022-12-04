import './App.css';
import TopBar from './components/TopBar';
import MiniDrawer from './components/SideBar'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// const Explorer = () => {
//   return <MiniDrawer></MiniDrawer>;
// };

// const Projects = () => {
//   return <MiniDrawer></MiniDrawer>;
// };

// const Email = () => {
//   return <MiniDrawer></MiniDrawer>;
// };

// const Account = () => {
//   return <MiniDrawer></MiniDrawer>;
// };



// Routing --------------------

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <div>
          <div>
            <Link to="/">Files</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Email">Email</Link>
            <Link to="/Account">Account</Link>
          </div>
          <Routes>
            <Route path="/" element={<Explorer />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Mail" element={<Email />} />
            <Route path="/Account" element={<Account />} />
          </Routes>
        </div> */}

        <MiniDrawer ></MiniDrawer>
      </Router>
    </div>
  );
};

export default App;