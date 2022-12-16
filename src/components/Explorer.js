import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, Component } from "react";
import { useNavigate } from 'react-router-dom';
import Meeseeks from '../images/Meeseeks.png'
import MiniDrawer from './SideBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';
import { makeStyles, withStyles } from "@material-ui/core/styles";

var words = ["Product Manager", "Full Stack Developer", "Web Designer", "Magician"];
for (let i = 0; i < 10; i++) {
    words = words.concat(words)
}

const useStyles = makeStyles({
    root: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)", backgroundColor: "none" },
    }
});

const ExplorerBox = (props) => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
            return;
        }

        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 40 : subIndex === words[index].length ? 1800 :
            40, parseInt(Math.random() * 40)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);


    return <Stack direction="column" spacing={1} mt={1} ml={8} mr={8}>
        <Box textAlign={'left'} mb={4}>
            <h1 style={{ color: grey[300], fontSize: "8rem" }}>Cool Raven</h1>
            <h2 style={{ color: grey[300] }}>
                I am a {`${words[index].substring(0, subIndex)}${""}`}
            </h2>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} xs={12} >
                <Grid item xs={3} className={classes.root} >
                    <Card color={grey[500]} sx={{ bgcolor: "#383838", borderRadius: 8, boxShadow: 8 }}>
                        <CardActionArea component={Link} to="/Moonshot">
                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/moonshot.png")}
                                alt="Moonshot"
                                sx={{ objectFit: "contain", bgcolor: "#040443" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="#E0E0E0" gutterBottom variant="h5" component="div">
                                    Design Moonshot
                                </Typography>
                                <Box>
                                    <Chip label="Figma" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                    <Chip label="Balsamiq" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                    <Chip label="UserTesting" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                </Box>
                                <Typography color="#E0E0E0">
                                    A platform to support your favourite athlete early on, share some of their future success
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} className={classes.root} >
                    <Card color={grey[500]} sx={{ bgcolor: "#383838", borderRadius: 8, boxShadow: 8 }}>
                        <CardActionArea component={Link} to="/Culpa">

                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/culpa.png")}
                                alt="CULPA"
                                sx={{ objectFit: "contain", bgcolor: "#fb9be2" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="#E0E0E0" gutterBottom variant="h5" component="div">
                                    Redesign Culpa
                                </Typography>
                                <Box>
                                    <Chip label="HTML" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                    <Chip label="CSS" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                    <Chip label="JS" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                </Box>
                                <Typography color="#E0E0E0">
                                    Make Columbia's RateMyProfessor more efficient, responsive, and accessible
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} className={classes.root} >
                    <Card color={grey[500]} sx={{ bgcolor: "#383838", borderRadius: 8, boxShadow: 8 }}>
                        <CardActionArea component={Link} to="/UberEats">
                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/uber.png")}
                                alt="Uber Eats"
                                sx={{ objectFit: "contain", bgcolor: "#43c364" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="#E0E0E0" gutterBottom variant="h5" component="div">
                                    Improve UberEats
                                </Typography>
                                <Box>
                                    <Chip label="Figma" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                </Box>
                                <Typography color="#E0E0E0">
                                    1 week product challenge to enhance couriers's apartment delivery experience via UberEats
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} className={classes.root} >
                    <Card color={grey[500]} sx={{ bgcolor: "#383838", borderRadius: 8, boxShadow: 8 }}>
                        <CardActionArea component={Link} to="/Pokemon">
                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/pokemon.png")}
                                alt="Pokemon"
                                sx={{ objectFit: "contain", bgcolor: "#fae384" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="#E0E0E0" gutterBottom variant="h5" component="div">
                                    Build Pokemon Team
                                </Typography>
                                <Box>
                                    <Chip label="React" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                    <Chip label="CSS" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                    <Chip label="HTML" variant="outlined" sx={{ color: "#E0E0E0", borderColor: "#E0E0E0", marginRight: 0.5, marginBottom: 0.5 }} />
                                </Box>
                                <Typography color="#E0E0E0">
                                    Build your dream Pokemon Team with a few clicks using filters and sorting options
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    </Stack >


    // return <>
    //     <div className={styles.container}>
    //         {/* <div className={styles.background}>
    //             <h1>I BUILD</h1>
    //             <h1>WEBSITES</h1>
    //         </div> */}
    //         <div className={styles.foreground}>
    //             <div className={styles.content}>
    //                 <h1 className={styles.name}>Nitin Ranganath</h1>
    //                 <h6 className={styles.bio}>Full Stack Web Developer</h6>
    //                 <Link href="/Projects">
    //                     <button className={styles.button}>View Work</button>
    //                 </Link>
    //                 <Link href="/Contacts">
    //                     <button className={styles.outlined}>Contact Me</button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // </>
};

const Explorer = () => {
    return <MiniDrawer pageIndex={0} component={ExplorerBox} />
}

export default Explorer;