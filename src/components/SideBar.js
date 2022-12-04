import React, { useCallback } from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import { StyledSubTabs } from "../styles/SubTabs.styles";
// import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Account from './Account';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import TopBar from './TopBar';
import { grey } from '@mui/material/colors';
import AccountIcon from '../images/AccountIcon';
import ExplorerIcon from '../images/ExplorerIcon';
import ProjectsIcon from '../images/ProjectsIcon';
import MailIcon from '../images/MailIcon';
import CssIcon from '../images/CssIcon';
import HtmlIcon from '../images/HtmlIcon';
import ReactIcon from '../images/ReactIcon';
import JsIcon from '../images/JsIcon';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import MuiTabs from "@material-ui/core/Tabs";
import { TabsContext } from '@mui/base';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#1890ff',
    },
});

const StyledSubTabs = styled(Tabs)`
  .MuiButtonBase-root.MuiTab-root {
    background: #8d8d8d;
    border-radius: 8px 8px 0 0;
    border-bottom: none; 

  }

  .MuiButtonBase-root.MuiTab-root.Mui-selected {
    border-top: 9px solid #383838;
    border-left: 4px solid #383838;;
    border-right: 4px solid #383838;;;
    border-bottom: none;
    background: #5b5b5b; 
    z-index: 10;
  }

  .MuiButtonBase-root.MuiTab-root {
    z-index: 10;

  }

`;


const drawerWidth = 60;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#383838'
    }
}));

const ListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: '#383838',
            borderLeft: '3px solid white',
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        },
        "&$selected:hover": {
            backgroundColor: '#383838',
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        },
        "&:hover": {
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        }
    },
    selected: {}
})(MuiListItem);

const Explorer = () => {
    return <h1> 666 </h1>;
};

const Projects = () => {
    return <h1> 777 </h1>;
};

const Email = () => {
    return <h1> Hi </h1>;
};



const MiniDrawer = () => {
    // const navigate = useNavigate();

    // const navigateToContacts = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('/contacts');
    // };

    // const navigateHome = () => {
    //     // 👇️ navigate to /
    //     navigate('/');
    // };

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const navigate = useNavigate();
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (index === 1) {
            navigate('/Projects', { replace: true });
        }
        else if (index === 2) {
            navigate('/Mail', { replace: true });
        }
        else if (index === 3) {
            navigate('/Account', { replace: true });
        } else {
            navigate('/', { replace: true });
        }
        console.log(selectedIndex)
    };

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', minHeight: "1000px", backgroundColor: "#5b5b5b" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={0}>
                <TopBar></TopBar>
            </AppBar>
            <Drawer variant="permanent" open={open} PaperProps={{
                sx: {
                    backgroundColor: '#383838'
                }
            }}>
                <div className={classes.root}>
                    <List sx={{ pt: 5 }} component="nav" aria-label="main mailbox folders">
                        <ListItem key={"Explorer"} button selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)} disablePadding sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: grey[400]
                                }}
                            ><ExplorerIcon />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Projects"} button selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)} disablePadding sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: grey[400]
                                }}
                            ><ProjectsIcon />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Mail"} button selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)} disablePadding sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: grey[400]
                                }}
                            ><MailIcon />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Account"} button selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)} disablePadding sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                mt: 62
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: grey[400]
                                }}
                            ><AccountIcon />
                            </ListItemIcon>
                        </ListItem>
                        {/* 
                        <Routes>
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/" element={<Home />} />
                        </Routes> */}
                    </List>
                </div>
            </Drawer>
            <Box sx={{ flexGrow: 1, pt: 4 }}>
                {/* <Box sx={{ bgcolor: 'black' }}> */}
                {/* <StyledTabs
                        value={selectedIndex}
                        onChange={handleListItemClick}
                        aria-label="styled tabs example"
                        style={{ height: "20px" }}
                    >
                        <StyledTab label="Workflows" value={0} />
                        <StyledTab label="Datasets" value={1} />
                        <StyledTab label="Connections" value={2} />
                        <StyledTab label="Connections" value={3} />
                    </StyledTabs> */}
                <Box sx={{ bgcolor: '#8d8d8d', mt: -1 }}>
                    <StyledSubTabs value={selectedIndex} onChange={handleListItemClick} aria-label="ant example"
                    >
                        <Tab icon={<ReactIcon />} iconPosition="start" label={<span style={{ color: 'black' }}>home.jsx</span>} value={0} />
                        <Tab icon={<CssIcon />} iconPosition="start" label={<span style={{ color: 'black' }}>project.js</span>} value={1} />
                        <Tab icon={<CssIcon />} iconPosition="start" label={<span style={{ color: 'black' }}>contact.css</span>} value={2} />
                        <Tab icon={<HtmlIcon />} iconPosition="start" label={<span style={{ color: 'black' }}>about.html</span>} value={3} />
                    </StyledSubTabs>
                </Box>
                <Box sx={{ p: 3 }} />
                {/* </Box> */}
                <Routes>
                    <Route path="/" element={<Explorer />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Mail" element={<Email />} />
                    <Route path="/Account" element={<Account />} />
                </Routes>
            </Box>
        </Box >
    );
}

export default MiniDrawer

// function Home() {
//     return <h2>Home</h2>;
// }

// function Contacts() {
//     return <h2>Contacts</h2>;
// }