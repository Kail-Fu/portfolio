import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MiniDrawer from './SideBar';

const AccountBox = (props) => {
    const navigate = useNavigate();
    return <Stack direction="column" display="flex" alignItems="center">
        <Box display="flex" justifyContent="center">
            <Stack direction="row" spacing={2}>
                <AssignmentIndIcon sx={{ color: "#268ac8", fontSize: 50 }} />
                <h1 style={{ color: '#DADADA' }}>About Me</h1>

            </Stack>
        </Box>
        <Typography inline width={"112vh"} variant="body1" align="left" mt={2} fontSize={22} color="#DADADA">
            Hi! I am Cool Raven. I am passionate on improving technology's interaction with humans. After graduation, I will join Uber as an Associate Product Manager
            {" ("}<Link underline='none' target="_blank" href="https://www.uber.com/us/en/careers/apm/">
                APM
            </Link>{")"} in San Francisco.
        </Typography>
        <Typography inline width={"112vh"} variant="body1" align="left" mt={2} fontSize={22} color="#DADADA">
            I have plenty of experience improving the interaction between technology and people.
            I interned at Amazon in Seattle in 2021.
            I designed and implemented the scheduled delivery of customized recommendations on Echo devices.
            It is now helping 80 million <Link underline='none' target="_blank"
                href="https://www.amazon.com/b?node=21576558011&ref=pe_alxhub_aucc_en_us_IC_NV_HUB_HP">
                Alexa
            </Link> users in Asia, NA, and EU to learn voice commands at a more suitable time.
        </Typography>
        <Typography inline width={"112vh"} variant="body1" align="left" mt={2} fontSize={22} color="#DADADA">
            I interned at Meta in Menlo Park in 2022.
            I devised and developed a privacy-safe data layer to
            migrate clients among Facebook, Oculus, and Portal universe.
            It prevented
            8M <Link underline='none' target="_blank"
                href="https://www.meta.com/portal/">
                Portal
            </Link> users from being targeted advertised by third parties
        </Typography>
        <Box mt={4}><Button onClick={() => navigate('/portfolio/Contacts', { replace: true })} variant="contained" style={{ fontSize: '18px' }} sx={{ fontWeight: 'bold' }}>
            Contact Me
        </Button></Box>

    </Stack >
};

const Account = () => {
    return <MiniDrawer pageIndex={3} component={AccountBox} />
}

export default Account;