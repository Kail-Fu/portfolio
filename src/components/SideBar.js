import React from 'react';
import { styled } from '@mui/material/styles';
import JsIcon from '../images/JsIcon';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MuiListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import TopBar from './TopBar';
import { grey } from '@mui/material/colors';
import CssIcon from '../images/CssIcon';
import ReactIcon from '../images/ReactIcon';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';


const StyledSubTabs = styled(Tabs)({
    '& .MuiButtonBase-root.MuiTab-root': {
        background: "#5b5b5b",
        borderBottom: "none",
    },

    '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
        background: "#222222",
        borderBottom: "none",
        zIndex: 10,
    },

});

const openedMixin = (theme) => ({
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
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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
            borderLeft: '3px solid #E0E0E0',
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
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', minHeight: "100vh", minWidth: "100vw", backgroundColor: "#222222" }}>
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
                            ><InsertDriveFileOutlinedIcon sx={{ fontSize: 26 }} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Moonshot"} button disableRipple
                            onClick={() => navigate('/Moonshot', { replace: true })}
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
                            >
                                <DarkModeOutlinedIcon sx={{ fontSize: 26 }} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Culpa"} button disableRipple
                            // selected={props.pageIndex === 2}
                            onClick={() => navigate('/Culpa', { replace: true })}
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
                            ><RateReviewOutlinedIcon sx={{ fontSize: 26 }} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"UberEats"} button disableRipple
                            onClick={() => navigate('/UberEats', { replace: true })}
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
                            ><TakeoutDiningOutlinedIcon sx={{ fontSize: 26 }} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Pokemon"} button disableRipple
                            onClick={() => navigate('/Pokemon', { replace: true })}
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
                            ><CatchingPokemonOutlinedIcon sx={{ fontSize: 26 }} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem key={"Contacts"} button disableRipple
                            onClick={() => navigate('/Contacts', { replace: true })}
                            disablePadding sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                mt: '53vh'
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: grey[400]
                                }}
                            ><AccountCircleOutlinedIcon sx={{ fontSize: 26 }} />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <Box sx={{ flexGrow: 1, pt: 4 }}>
                <StyledSubTabs value={props.pageIndex}
                    aria-label="ant example"
                    style={{ height: "3.6rem" }}
                    sx={{ bgcolor: '#5b5b5b', mt: -2.1, position: "fixed", width: "100%" }}>

                    <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple onClick={() => navigate('/', { replace: true })} icon={<ReactIcon />} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>&nbsp;Home.jsx</span>} value={0} />
                    <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/Moonshot', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>&nbsp;Moonshot.js</span>} value={1} />
                    <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/Culpa', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>&nbsp;Culpa.js</span>} value={2} />
                    <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/UberEats', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>&nbsp;UberEats.js</span>} value={3} />
                    <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<JsIcon />} onClick={() => navigate('/Pokemon', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>&nbsp;Pokemon.js</span>} value={4} />
                    <Tab sx={{ borderRight: 0.75, borderColor: "black" }} disableRipple icon={<CssIcon />} onClick={() => navigate('/Contacts', { replace: true })} iconPosition="start" label={<span style={{ color: 'white', textTransform: "none" }}>&nbsp;Contact.css</span>} value={5} />


                </StyledSubTabs>
                <Box sx={{ pt: 8, pl: 3, pr: 3 }}>
                    <props.component />
                </Box>
            </Box>
        </Box >
    );
}

export default MiniDrawer
