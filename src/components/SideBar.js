import React, { useCallback } from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import { StyledSubTabs } from "../styles/SubTabs.styles";
// import { Link } from 'react-router-dom';
import Explorer from './Explorer';
import JsIcon from '../images/JsIcon';
import MdIcon from '../images/MdIcon';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Contacts from './Contacts';
import Projects from './Projects';
// import { useNavigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Account from './Account';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MuiListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
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
import JsxIcon from '../images/JsxIcon';
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
    background: #5b5b5b;
    border-radius: 8px 8px 0 0;
    border-bottom: none; 

  }

  .MuiButtonBase-root.MuiTab-root.Mui-selected {

    border-bottom: none;
    background: #222222; 
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
            backgroundColor: '#383838',
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        }
    },
    selected: {}
})(MuiListItem);




const MiniDrawer = (props) => {
    // const [selectedIndex, setSelectedIndex] = React.useState(0);
    const navigate = useNavigate();
    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    //     if (index === 1) {
    //         navigate('/portfolio/Projects', { replace: true });
    //     }
    //     else if (index === 2) {
    //         navigate('/portfolio/Contacts', { replace: true });
    //     }
    //     else if (index === 3) {
    //         navigate('/portfolio/Account', { replace: true });
    //     } else {
    //         navigate('/portfolio', { replace: true });
    //     }
    //     console.log(selectedIndex)
    // };

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', minHeight: "100vh", backgroundColor: "#222222" }}>
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
                        <ListItem key={"Explorer"} button disableRipple
                            // selected={props.pageIndex === 0}
                            onClick={() => navigate('/', { replace: true })}
                            disablePadding sx={{
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
                        <ListItem key={"Projects"} button disableRipple
                            // selected={props.pageIndex === 1}
                            onClick={() => navigate('/Projects', { replace: true })}
                            disablePadding sx={{
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
                        <ListItem key={"Mail"} button disableRipple
                            // selected={props.pageIndex === 2}
                            onClick={() => navigate('/Contacts', { replace: true })}
                            disablePadding sx={{
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
                        <ListItem key={"Account"} button disableRipple
                            // selected={props.pageIndex === 3}
                            onClick={() => navigate('/Account', { replace: true })}
                            // onClick={(event) => handleListItemClick(event, 3)} 
                            disablePadding sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                mt: '65vh'
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
                <Box sx={{ bgcolor: '#5b5b5b', mt: -1.9, position: "fixed", width: "100%" }}>
                    <StyledSubTabs value={props.pageIndex}
                        aria-label="ant example"
                        style={{ height: "3.6rem" }}>

                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple onClick={() => navigate('/', { replace: true })} icon={<ReactIcon />} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>Home.jsx</span>} value={0} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple onClick={() => navigate('/Projects', { replace: true })} icon={<MdIcon />} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>Project.md</span>} value={1} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<CssIcon />} onClick={() => navigate('/Contacts', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>Contact.css</span>} value={2} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<HtmlIcon />} onClick={() => navigate('/Account', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>About.html</span>} value={3} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/Moonshot', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>Moonshot.js</span>} value={4} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/Culpa', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>Culpa.js</span>} value={5} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/UberEats', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>UberEats.js</span>} value={6} />
                        <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/Pokemon', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>Pokemon.js</span>} value={7} />

                    </StyledSubTabs>
                </Box>
                {/* <Box  /> */}
                <Box sx={{ pt: 8, pl: 3, pr: 3 }}>
                    <props.component />
                </Box>

                {/* </Box> */}
                {/* <Routes>
                    <Route path="/" element={<Navigate replace to="/portfolio" />} />
                    <Route path="/portfolio" element={<Explorer handleListItemClick={handleListItemClick} />} />
                    <Route path="/portfolio/Projects" element={<Projects />} />
                    <Route path="/portfolio/Contacts" element={<Contacts />} />
                    <Route path="/portfolio/Account" element={<Account handleListItemClick={handleListItemClick} />} />
                </Routes> */}
            </Box>
        </Box >
    );
}

export default MiniDrawer
