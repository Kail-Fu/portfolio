import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Bar.css"
import vslogo from '../images/vscode.png';
import * as React from 'react';
import { green, grey, red, yellow } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();

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
                <Nav.Item button onClick={() => navigate('/', { replace: true })}>Home</Nav.Item>
                <Nav.Item button onClick={() => navigate('/Moonshot', { replace: true })} >Project-1</Nav.Item>
                <Nav.Item button onClick={() => navigate('/Culpa', { replace: true })}>Project-2</Nav.Item>
                <Nav.Item button onClick={() => navigate('/UberEats', { replace: true })}>Project-3</Nav.Item>
                <Nav.Item button onClick={() => navigate('/Pokemon', { replace: true })}>Project-4</Nav.Item>
                <Nav.Item button onClick={() => navigate('/Contacts', { replace: true })}>Contact</Nav.Item>
                <Nav.Item style={{ marginLeft: '12vw' }}>VSCode Emulator - Cool Raven</Nav.Item>
            </Nav>
            <CircleIcon className='circleicon' sx={{ color: grey[500], fontSize: 16 }} />
            <CircleIcon className='circleicon' sx={{ color: grey[500], fontSize: 16 }} />
            <CircleIcon className='circleicon' sx={{ color: grey[500], fontSize: 16 }} />
        </Navbar >
    );
}

export default TopBar;