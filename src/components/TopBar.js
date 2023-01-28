import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Bar.css"
import vslogo from '../images/vscode.png';
import * as React from 'react';
import { grey } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" sticky="top">
            <Nav className="me-auto">
                {/* <Nav.Item style={{ marginLeft: 10 }}> <img
                    src={vslogo}
                    width="22"
                    height="22"
                    className="d-inline-block align-top"
                    alt="VS Code logo"
                /></Nav.Item> */}
                {/* <Nav.Item button onClick={() => navigate('/', { replace: true })}>Home</Nav.Item> */}
                {/* <Nav.Item button onClick={() => navigate('/Contacts', { replace: true })}>Contact</Nav.Item> */}
                <Nav.Item style={{ marginLeft: '47vw' }}>VSCode Emulator - Kail Fu</Nav.Item>
            </Nav>
            <CircleIcon className='circleicon' sx={{ color: grey[500], fontSize: 16 }} />
            <CircleIcon className='circleicon' sx={{ color: grey[500], fontSize: 16 }} />
            <CircleIcon className='circleicon' sx={{ color: grey[500], fontSize: 16 }} />
        </Navbar >
    );
}

export default TopBar;