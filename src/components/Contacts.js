import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import styles from '../styles/Contacts.module.css'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    input: {
        background: "gray"
    }
}));
const Contacts = () => {

    const classes = useStyles();
    return <div>
        <div className={styles.container}>
            <Box align="left" pl={10} sx={{ width: '40%' }}>
                <h3 style={{ color: 'white' }}>Find Me On</h3>
                <div className={styles.code}>
                    <p className={styles.line}>
                        <span className={styles.className}>.contacts{"{"}</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>Linkedin:{' '}</span>
                        <a href={"https://www.linkedin.com/in/profjeffhuang/"} target="_blank" rel="noopener noreferrer">
                            {"https://www.linkedin.com/in/profjeffhuang/"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>Email:{' '}</span>
                        <a href={"uiuxtas@lists.cs.brown.edu"} target="_blank" rel="noopener noreferrer">
                            {"uiuxtas@lists.cs.brown.edu"}
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
                    <p className={styles.line} key={0}>
                        &nbsp;&nbsp;&nbsp;<span className={styles.whiteText}>My Fav Cartoon:{' '}</span>
                        <a href={"https://www.adultswim.com/videos/rick-and-morty"} target="_blank" rel="noopener noreferrer">
                            {"Rick and Morty"}
                        </a>
                        <span className={styles.whiteText}>;</span>
                    </p>
                    <p className={styles.line}>
                        <span className={styles.className}>{"}"}</span>
                    </p>
                </div>
            </Box>
            <Box align="left" pl={6} pr={6} sx={{ width: '45%', borderLeft: 4, borderColor: "#eb4812e7" }}>
                <h3 style={{ color: 'white' }}>Or Fill The Form</h3>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            // onChange={(e) => setFirstName(e.target.value)}
                            // value={firstName}
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            id="outlined-error-helper-text"
                            // label="First name"
                            placeholder="First name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            id="outlined-error-helper-text"
                            // label="Last name"
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
                            // label="Subject"
                            placeholder="Subject"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            InputProps={{ className: classes.input }}
                            style={{ width: "100%" }}
                            placeholder="Enter reason for contact"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Button
                            style={{ width: "100%", color: "white", backgroundColor: "#eb4812e7" }}
                            variant="contained"
                        >
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {/* <div>
                <h3 className={styles.heading}>Or Fill Out This Form</h3>
                <form className={styles.form} >
                    <div className={styles.flex}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={"name"}
                                // onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={"email"}
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={"subject"}
                            // onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            value={"message"}
                            // onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div> */}
        </div>
    </div>
};

export default Contacts;


// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// const Contacts = () => {
//     return <Box>
//         <DrawerHeader />
//         <Typography paragraph>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//             enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//             imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//             Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//             Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//             adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//             nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//             leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//             feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//             consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//             sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//             Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//             eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//             neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//             tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//             sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//             tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//             gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//             et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//             tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//             eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//             posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//     </Box>
// };


