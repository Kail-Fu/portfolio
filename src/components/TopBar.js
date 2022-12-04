import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Bar.css"
import vslogo from '../images/vscode.png';
import * as React from 'react';
import { green, red, yellow } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';


function TopBar() {
    return (
        <Navbar bg="dark" sticky="top">
            <Nav className="me-auto">
                <Nav.Item style={{ leftMargin: "20px" }}> <img
                    src={vslogo}
                    width="22"
                    height="22"
                    className="d-inline-block align-top"
                    alt="VS Code logo"
                /></Nav.Item>
                <Nav.Item>File</Nav.Item>
                <Nav.Item>Edit</Nav.Item>
                <Nav.Item>View</Nav.Item>
                <Nav.Item>Go</Nav.Item>
                <Nav.Item>Run</Nav.Item>
                <Nav.Item>Terminal</Nav.Item>
                <Nav.Item>Help</Nav.Item>
                <Nav.Item style={{ marginLeft: '40vh' }}>Cool Raven - Visual Studio Code</Nav.Item>
            </Nav>
            <CircleIcon className='circleicon' sx={{ color: yellow[800], fontSize: 17 }} />
            <CircleIcon className='circleicon' sx={{ color: green[500], fontSize: 17 }} />
            <CircleIcon className='circleicon' sx={{ color: red[500], fontSize: 17 }} />
        </Navbar >
    );
}

export default TopBar;