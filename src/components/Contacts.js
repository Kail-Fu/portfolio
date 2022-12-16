import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import styles from '../styles/Contacts.module.css'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MiniDrawer from './SideBar';

const useStyles = makeStyles((theme) => ({
    input: {
        background: "gray"
    }
}));
const ContactsBox = () => {

    const classes = useStyles();
    return <div>
        <Box pt={1} pl={40} pr={40} pb={6}>
            <Typography variant="h3" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="1rem">
                Hi there, I'm coolraven222!
            </Typography>
            <Typography variant='h5' color={grey[300]}>
                Welcome! I'm an incoming Product Manager at Uber, reimagining
                how humans could go anywhere, get anything.
            </Typography>
        </Box>
        <div className={styles.container}>
            <Box align="left" pl={10} sx={{ width: '40%' }}>
                <Typography variant='h5' color={grey[300]} marginBottom="1rem">
                    Reach Out Via:
                </Typography>
                <div className={styles.code}>
                    <p className={styles.line}>
                        <span className={styles.whiteText}>.contacts{"{"}</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;
                        <span className={styles.whiteText}>Linkedin:{' '}</span>
                        <a href={"https://www.linkedin.com/in/profjeffhuang/"} target="_blank" rel="noopener noreferrer">
                            {"https://www.linkedin.com/in/profjeffhuang/"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>Medium:{' '}</span>
                        <a href={"https://medium.com/@producthunt"} target="_blank" rel="noopener noreferrer">
                            {"https://medium.com/@producthunt"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>Website:{' '}</span>
                        <a href={"https://www.dearblueno.net/"} target="_blank" rel="noopener noreferrer">
                            {"https://www.dearblueno.net/"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>Twitter:{' '}</span>
                        <a href={"https://twitter.com/BrownUniversity"} target="_blank" rel="noopener noreferrer">
                            {"https://twitter.com/BrownUniversity"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>Github:{' '}</span>
                        <a href={"https://github.com/cs1300-2022"} target="_blank" rel="noopener noreferrer">
                            {"https://github.com/cs1300-2022"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line}>
                        <span className={styles.whiteText}>{"}"}</span>
                    </p>
                </div>
            </Box>
            <Box align="left" pl={6} pr={6} sx={{ width: '45%', borderLeft: 4, borderColor: "rgb(38,138,200)" }}>
                <Typography variant='h5' color={grey[300]} marginBottom="1rem">
                    Or Fill Out This Form:
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            id="outlined-error-helper-text"
                            placeholder="First name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            id="outlined-error-helper-text"
                            placeholder="Last name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            id="outlined-error-helper-text"
                            // label="Email"
                            placeholder="Email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            id="outlined-error-helper-text"
                            placeholder="Subject"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            placeholder="Enter reason for contact"
                            multiline
                            rows={2}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Button
                            style={{ width: "100%", color: "white", backgroundColor: "#268ac8" }}
                            variant="contained"
                        >
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
};

const Contacts = () => {
    return <MiniDrawer pageIndex={5} component={ContactsBox} />
}

export default Contacts;

