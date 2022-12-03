import './App.css';
import TopBar from './components/TopBar';
import MiniDrawer from './components/SideBar'


function App(props) {
  return (
    <div className="App">
      {/* <TopBar></TopBar> */}
      <MiniDrawer></MiniDrawer>
    </div>
  );
}


export default App;
