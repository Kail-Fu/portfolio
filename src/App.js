import './App.css';
import TopBar from './components/TopBar';
// import MiniDrawer from './components/SideBar'
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import { StyledSubTabs } from "../styles/SubTabs.styles";
// import { Link } from 'react-router-dom';
import Explorer from './components/Explorer';
import MdIcon from './images/MdIcon';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
// import { useNavigate } from "react-router-dom";
import { Routes, Route, Link, useNavigate, Navigate, HashRouter } from 'react-router-dom';
import Account from './components/Account';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MuiListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { grey } from '@mui/material/colors';
import AccountIcon from './images/AccountIcon';
import ExplorerIcon from './images/ExplorerIcon';
import ProjectsIcon from './images/ProjectsIcon';
import MailIcon from './images/MailIcon';
import CssIcon from './images/CssIcon';
import HtmlIcon from './images/HtmlIcon';
import ReactIcon from './images/ReactIcon';
import JsIcon from './images/JsxIcon';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import MuiTabs from "@material-ui/core/Tabs";
import { TabsContext } from '@mui/base';
import Moonshot from './components/Projects/Moonshot';
import Culpa from './components/Projects/Culpa';
import UberEats from './components/Projects/UberEats';
import Pokemon from './components/Projects/Pokemon';


const App = () => {
  // const [selectedIndex, setSelectedIndex] = React.useState(0);


  return (
    <div className="App">
      <HashRouter>
        {/* <MiniDrawer setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} ></MiniDrawer> */}
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/portfolio" />} /> */}
          <Route path="/" element={<Explorer />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Moonshot" element={<Moonshot />} />
          <Route path="/Culpa" element={<Culpa />} />
          <Route path="/UberEats" element={<UberEats />} />
          <Route path="/Pokemon" element={<Pokemon />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;