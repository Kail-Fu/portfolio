import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import MiniDrawer from '../SideBar';
import styles from '../../styles/Culpa.module.css';
import { grey } from '@mui/material/colors';
import culpa_low from '../../images/culpa_low.jpeg'
import culpa_old from '../../images/old_culpa.jpeg'
import culpa_high_desktop from '../../images/culpa_high_desktop.png'
import culpa_high_tablet from '../../images/culpa_high_tablet.png'
import culpa_high_phone from '../../images/culpa_high_phone.png'



const CulpaBox = (props) => {
    const navigate = useNavigate();
    return <div>

        <div className={styles.titleBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            <Typography variant="h2" color={grey[300]} sx={{ fontWeight: 800 }}> Redesign Culpa </Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Make Columbia's RateMyProfessor more efficient, responsive, and accessible </Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Oct. 4 - Oct. 21, 2022</Typography>
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
                            <li>UI/UX Designer</li>
                            <li>Frontend Develeper</li>
                        </ul>
                    </Typography>
                </Box>
                <Box sx={{ minWidth: 80 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Team</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        Solo
                    </Typography>
                </Box >
                <Box sx={{ minWidth: 150 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Tools</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Highlights</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Redesign Columbia students' professor review site for usability and accessibility. Check it out <a target="_blank" rel="noopener noreferrer" href='https://coolraven222.github.io/new-culpa/'>
                                here</a>!  </li>
                            <li>Just 1 month after the project, Columbia updated its interface due to students' complaints.
                                The new website solved many of the problems I identified, including what a "gold nugget" professor means.</li>
                        </ul>
                    </Typography>
                </Box>
            </Stack>
        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Context</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                <a target="_blank" rel="noopener noreferrer" href='https://culpa.app/prof/3628'>
                    CULPA</a>
                , a website for Columbia students to rate their professors,
                has long been a headache for Columbia students because of its poor design.
            </Typography>
            <img src={culpa_old} alt="culpa old" />

            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I wanted to make the website more efficient, responsive, and accessible. The project has four steps:  <ol>
                    <li>Identify old CULPA's usability problem.</li>
                    <li>Based on the problems, create low-fidelity wireframes, a visual design style guide, and high-fidelity prototypes.</li>
                    <li>Using the final high-fidelity prototypes, create a responsive page using HTML and CSS.</li>
                </ol>
            </Typography>
        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Research</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I interviewed 5 Columbia students and compared <a target="_blank" rel="noopener noreferrer" href='https://culpa.app/prof/3628'>
                    CULPA</a> with Brown's <a target="_blank" rel="noopener noreferrer" href='https://thecriticalreview.org/'>
                    Critical Review</a>. I found the following user problems:
                <ul>
                    <li>Low Usability: Students are the primary users. They visit the website to gain insights into the professor's teaching style and class workload. However, the design makes students hard to get insights effectively. Reviews are ranked in chronological order without regard to the length of reviews or the class they are coming from.</li>
                    <li>Low Learnability: It is difficult for users to write or understand the implication the first time they encounter this interface. You need to click either of the two dropdown buttons to write a review. Moreover, under the professor's name, sometimes there is a line, "This professor has earned a CULPA gold nugget." However, you must go to the dropdown on the top right, click FAQ, and then know what "gold nugget" means.</li>
                    <li>Low Memorability: Even if a user has tried multiple times, it is still hard to remember how to use it. Through interviews with Columbia students, I found few people could tell me the difference between the two dropdown buttons on the top right.</li>
                </ul>
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Design Iterations</Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Low-Fi Wireframe</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                To solve the user problems, I made a few changes to the original website:
            </Typography>
            <img src={culpa_low} alt="culpa lowfi" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                To summarize: <ol>
                    <li>I enable users to filter and sort reviews. Students could either filter by class name or time range. They could also sort by time or review length. This feature enables users to find the most useful review for them more effectively, thus increasing usability.</li>
                    <li>Without going to FAQ to find the meaning of the golden badge, users could click the information icon on the top right. It reduces the things to learn and remember for users, thus improving learnability and memorability.</li>
                    <li>I break down the two dropdown menus into three core functions: FAQ, Contact, and Write A Review. So people no longer need to memorize what's included in each dropdown menu, thus improving memorability.</li>
                    <li>The new interface summarizes and lists common phrases that appear in reviews, so students can quickly click the tag and get all reviews that contain the term, such as "Midterm." This feature boosts usability by improving users' task success effectiveness.</li>
                </ol>
            </Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Hi-Fi Wireframe</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Based on the low-fi wireframe, I made a hi-fi prototype in three different interfaces:
            </Typography>
            <Stack direction={"column"} marginBottom="0.8rem">
                <figure>
                    <img src={culpa_high_desktop} alt="culpa high" />
                    <figcaption>Desktop</figcaption>
                </figure>

                <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}
                >
                    <div>
                        <figure>
                            <img src={culpa_high_tablet} alt="culpa high" />
                            <figcaption>Tablet</figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img src={culpa_high_phone} alt="culpa high" />
                            <figcaption>Phone</figcaption>
                        </figure>
                    </div>
                </Stack>
            </Stack>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Following the hi-fi prototype, I created a sample page for the new CULPA. Feel free to check it out <a target="_blank" rel="noopener noreferrer" href='https://coolraven222.github.io/new-culpa/'>
                    here</a>.
            </Typography>

        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Conclusion</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                In this project, I learned a lot through designing, developing, and deploying the website.

            </Typography>
            {/* <img src={moonshot_email} alt="email" /> */}
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                As a designer, I honed my skills in identifying usability and accessibility problems.
                Based on user feedback and design principles,
                I iteratively designed a new layout that improves CULPA's learnability, efficiency, and memorability.
            </Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                As a front-end developer designer, I learned how to create responsive websites that work across devices,
                including laptops, tablets, and phones. Although responsive design requires  numerous trials and errors, it feels so great when everything looks just perfect {":)"}
            </Typography>
        </div>

        <Box mt={4}><Button onClick={() => navigate('/Contacts', { replace: true })} variant="contained" style={{ textTransform: "none", fontSize: '1.5rem' }} sx={{ mt: "1rem", mb: "2rem", fontWeight: 'bold' }}>
            Contact Me
        </Button></Box>
    </div>

};

const Culpa = () => {
    return <MiniDrawer pageIndex={2} component={CulpaBox} />
}

export default Culpa;