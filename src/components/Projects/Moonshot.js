import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MiniDrawer from '../SideBar';
import styles from '../../styles/Moonshot.module.css';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import moonshot_low from '../../images/moonshot_low.png';
import moonshot_high1 from '../../images/moonshot_high1.png';
import moonshot_high2 from '../../images/moonshot_high2.png';
import moonshot_gif from '../../images/moonshot_gif.gif'
import moonshot_email from '../../images/moonshot_email.png'


const MoonshotBox = (props) => {
    const navigate = useNavigate();

    return <div>

        <div className={styles.titleBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            <Typography variant="h2" color={grey[300]} sx={{ fontWeight: 800 }}> Design Moonshot </Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> A platform to support your favourite athlete early on, share some of their future success</Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Oct. 25 - Nov. 15, 2022</Typography>
        </div>
        <div className={styles.textBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            {/* <div className='textBarTitle'>Overview</div> */}
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Overview</Typography>
            <Stack direction="row"
                spacing={5}>
                <Box sx={{ minWidth: 220 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">My Role</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Product Manager</li>
                            <li>UX Researcher</li>
                        </ul>
                    </Typography>
                </Box>
                <Box sx={{ minWidth: 80 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Team</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        4
                    </Typography>
                </Box >
                <Box sx={{ minWidth: 150 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Tools</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Figma</li>
                            <li>Balsamiq</li>
                            <li>UserTesting</li>
                        </ul>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Highlights</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Iteratively Developed a <a target="_blank" rel="noopener noreferrer" href='https://www.figma.com/proto/xo3Vn2s4XlYznsZkT5lH5w/MoonShot?page-id=0%3A1&node-id=2%3A2&viewport=70%2C289%2C0.21&scaling=scale-down&starting-point-node-id=2%3A2'>
                                hi-fi prototype</a> for Moonshot, a startup from YC22</li>
                            <li>Dimitris Nikolaou, one of the founders, said he is "beyond words." He even asked us to join the design team!!</li>
                        </ul>
                    </Typography>
                </Box>

            </Stack>
        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Context</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I worked in a team of 4 to design the interface of <a href="https://www.ycombinator.com/companies/moonshot" target="_blank" rel="noopener noreferrer">Moonshot</a>,
                a Y-Combinator backed startup for angel investing in athletes.
            </Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Currently (Oct. 2022), Moonshot only has a information page and desperately needs an interface to attrack backers for young potential athletes.
                Passionate about sports and crowd funding, we decide to make one for them.
                The project has four steps: <ol>
                    <li>Sketch interfaces for the product and combine ideas in a wireframe</li>
                    <li>Create an interactive high-fidelity mockup based on the wireframe</li>
                    <li>Conduct usability test for the interactive hi-fi prototype through a remote user testing service</li>
                    <li>Contact the startup!</li>
                </ol>
            </Typography>
        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Research</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Throughout rearch, we found that becoming a professional athlete is extremely expensive and risky.
                Professional tennis players spend more than $100,000 annually.
                This is a real problem for those with underprivileged backgrounds.
                To solve the problem, we want to design an interface for Moonshot to bring backers to the rescue.
                <ul><li>For Backers:
                    <ul>
                        <li>Support their favourite up-and-coming athlete by investing in their career.</li>
                        <li>If their supported atheletes succeed, backers can make a nice return in the form of a cut on the athletes' future earnings.</li>
                        <li>Get special perks such as sitting courtside and joining training.</li>
                    </ul>
                </li>
                    <li> For Athletes
                        <ul>
                            <li>Athletes get the money they need to continue their professional career.</li>
                            <li>Athletes can also gain their loyal audience early on!</li>
                        </ul>
                    </li>
                </ul>
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Design Iterations</Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Low-Fi Wireframe</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Each of our design group draws a set of 3 frames for the Moonshot web platform,
                covering different aspects of its functionalities,
                including searching, viewing, and pledging for athletes.
                After comparing and contrasting within our group, we combine a set of elements into a low-fidelity wireframe:
            </Typography>
            <img src={moonshot_low} alt="moonshot lowfi" />
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Hi-Fi Wireframe</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Based on the low-fi wireframe, we create our initial high-fi prototype for mockup.
                We receive several critiques for this version.
                See the image below for the prototype and feedback markups.
            </Typography>
            <img src={moonshot_high1} alt="moonshot hifi 1" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                To address these feedbacks, we build our second version of high-fi prototype.
            </Typography>
            <img src={moonshot_high2} alt="moonshot hifi 2" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                A sample interaction workflow is shown below:
            </Typography>
            <img src={moonshot_gif} alt="moonshot gif" />
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Feedback</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Using UserTesting, we conducted 3 usability.
                Our overarching goal was to explore how the interface helps investors
                search, explore, and invest in up-and-coming athletes.
            </Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                User Feedbacks:
                <ul>
                    <li>We receive video feedback from three subjects:
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="https://app.usertesting.com/v/cf138d93-06a7-4377-8059-23d2011cf118?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes&shared_via=link" target="_blank">ChronicReader</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://app.usertesting.com/v/3d51fe9c-0c0c-473c-b166-4bd8c2112ad0?encrypted_video_handle=cdb68c46-c3f5-4265-b595-fd8a802b92fb#!/notes&shared_via=link" target="_blank">SerenityCloud</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://app.usertesting.com/v/02fce900-836d-4d54-8b20-152655cc7870?encrypted_video_handle=ebef4f74-5481-4b91-be14-b2d03a537d52#!/notes&shared_via=link" target="_blank">BoBo2016</a>
                            </li>
                        </ul>
                    </li>
                    <li>To summarize:
                        <ul>
                            <li>Overall, UserTesting results validate our assumption on user behavior and prove the interface's learnability and usability.</li>
                            <li>All three users successfully complete all the tasks with little confusion. They describe the interface as "professional", "kind of neat", and "intuitive".
                                On a scale from 1 (very hard to use) to 5 (very easy to use), all three users rate us 5 on almost all subtasks.
                            </li>
                            <li>The first reported confusing design is on “How It Works” page where we use the Moonshoy logo as the button to go back to the main page.
                                The second confusion happens when a user interacts with the search bar and is surprised by the fact that she could search by states.
                                The last confusing feature is on the profile page where a user is unsure what does "my team" mean.
                            </li>
                        </ul>
                    </li>
                </ul>
            </Typography >
        </div >
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Conclusion</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                We sent the hi-fi prototype to the founders of Moonshot.
                They are amazed by our the interface's design and emailed us back:
            </Typography>
            <img src={moonshot_email} alt="email" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                In the following week, Dimitris and us met on zoom. The conversation went great.
                We discussed the progress of their design team, shared throughs of launching a startup,
                and talked about the freezing cold 2022 job market. In the end, he even invited us to
                part-time at their design team when available!
            </Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                In this project, I learned how to lead a team with different background in designing,
                synthesize dozons of sketches into a hi-fi prototype, and conduct user-oriented usability testing.
                Most importantly, I got the chance to build something I am really passionate about.
                It feels so good when users and stakeholders like our product.
            </Typography>
        </div>





        <Box mt={4}><Button onClick={() => navigate('/Contacts', { replace: true })} variant="contained" style={{ textTransform: "none", fontSize: '1.5rem' }} sx={{ mt: "1rem", mb: "2rem", fontWeight: 'bold' }}>
            Contact Me
        </Button></Box>
    </div >



};

const Moonshot = () => {
    return <MiniDrawer pageIndex={4} component={MoonshotBox} />
}

export default Moonshot;