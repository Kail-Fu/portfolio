import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Sonnet = () => {
    return <Box>
        <DrawerHeader />
        <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
    </Box>
}



const Account = ({ selectedIndex, setSelectedIndex }) => {
    return <h1>BIUYAODSVFYU</h1>

    // handleSelect(key) {
    //     if (key === 1)
    //         this.setState({ heading: "Log in" })
    //     else
    //         this.setState({ heading: "Sign up" })
    // }
    // const navigate = useNavigate();
    // function changeTab(eventKey) {
    //     setSelectedIndex(eventKey);
    //     if (eventKey === 1) {
    //         navigate('/Projects', { replace: true });
    //     }
    //     else if (eventKey === 2) {
    //         navigate('/Mail', { replace: true });
    //     }
    //     else if (eventKey === 3) {
    //         navigate('/Account', { replace: true });
    //     } else {
    //         navigate('/', { replace: true });
    //     }
    //     console.log(selectedIndex)
    // };

    // return <Box sx={{ flexGrow: 1, pt: 3, ml: -1.5 }}>
    //     <Tabs
    //         defaultActiveKey={0}
    //         id="justify-tab-example"
    //         className="mb-3"
    //         onClick={() => changeTab()}
    //     >
    //         <Tab eventKey={0} title="Home">
    //             <Sonnet />
    //         </Tab>
    //         <Tab eventKey={1} title="Profile">
    //             <Sonnet />
    //         </Tab>
    //         <Tab eventKey={2} title="Contact">
    //             <Sonnet />
    //         </Tab>
    //         <Tab eventKey={3} title="Account">
    //             <Sonnet />
    //         </Tab>
    //     </Tabs>
    // </Box>;
};

export default Account;