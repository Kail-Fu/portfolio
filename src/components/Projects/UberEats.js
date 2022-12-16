import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MiniDrawer from '../SideBar';
import styles from '../../styles/UberEats.module.css';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import ubereats_user from '../../images/ubereats_user.png'
import ubereats_painpoints from '../../images/ubereats_painpoints.png'
import ubereats_brainstorm from '../../images/ubereats_brainstorm.png'
import ubereats_solution from '../../images/ubereats_solution.png'
import ubereats_mvp from '../../images/ubereats_mvp.png'

const UberEatsBox = (props) => {
    const navigate = useNavigate();

    return <div>

        <div className={styles.titleBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            <Typography variant="h2" color={grey[300]} sx={{ fontWeight: 800 }}> Improve UberEats </Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Enhance couriers's apartment delivery experience via UberEats</Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Aug. 26 - Sept. 2, 2022</Typography>
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
                        Solo
                    </Typography>
                </Box >
                <Box sx={{ minWidth: 150 }}>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Tools</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>Figma</li>
                        </ul>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Highlights</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>This is the takehome assignment of <a target="_blank" rel="noopener noreferrer" href='https://www.uber.com/us/en/careers/apm/'>
                                Uber APM</a>, one of the best Product Manager positions. It only hires 10 people each year.</li>
                            <li>This one-week project helped me land an offer from 7000 applicants {";)"} </li>
                        </ul>
                    </Typography>
                </Box>

            </Stack>
        </div>


        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Context</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Product manager has long been my dream position.
                On Aug 25, 2022, Uber invited me to take a one-week takehome assessment. The prompt is the following:
            </Typography>

            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem" pl={"3rem"} borderLeft={3}>
                "You are a Product Manager tasked with improving the experience for couriers
                delivering to apartments via Uber Eats. Please propose a product feature or improvement to an
                existing feature."
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Research</Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Why</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Product managers care about why making a decision to build/improve a product. So I started with
                why we might be interested in Improving couriers' apartment delivery experience via Uber Eats:
                <ul>
                    <li>Why Uber Eats?
                        <ul>
                            <li>Mission: Uber reimagines the way the world moves for the better.
                                Uber Eats serves the needs of
                                merchants, consumers, and drivers by moving food and grocery.
                            </li>
                            <li>Business: Uber Eats generated $8.3 billion in revenue in 2021 from 45 countries,
                                representing 48% of Uber's total revenues.
                                The growth of Uber Eats is essential for Uber's business success.
                            </li>
                        </ul>
                    </li>
                    <li>Why Courier Experience?
                        <ul>
                            <li>Ecosystem: Courier is key to the ecosystem of food delivery.
                                Without couriers, merchants cannot
                                serve more customers, and customers cannot get food without leaving their places.
                            </li>
                            <li>
                                For Courier: Good experience keeps couriers stay.
                                It even keeps mobility drivers on our platform
                                for extra earnings during non-peak mobility hours.
                            </li>
                        </ul>
                    </li>
                    <li>Why Apartment?
                        <ul>
                            <li>Large Market: In many countries like Spain, Italy, and Korea that
                                Uber Eats now serves or wants
                                to serve, more than 50% of the population live in apartments.</li>
                            <li>Special Needs: Apartments are more complex than single-family home deliveries,
                                causing a lot of frustration among couriers.
                                New features are needed to improve their experience.</li>
                        </ul>
                    </li>
                </ul>
            </Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Goal Setting</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Uber Eats is a three-sided market managed by Uber. Although they have different values, their needs
                overlap in the section about order efficiency.
            </Typography>
            <img src={ubereats_user} alt="uber eats user analysis" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Therefore, we should focus on how to <span style={{ fontWeight: 'bold' }}>
                    enable couriers to deliver orders in an efficient way</span>
                so that customers can get food faster. Courier can earn
                money from more orders. Merchants can reach more customers, and Uber can earn more revenue.
            </Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Painpoint Prioritization</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                When delivering food to apartments, there could be 6 pain points that affect courier's efficiency. I
                interviewed with 6 couriers and prioritize the one with the highest frequency and severity.
            </Typography>
            <img src={ubereats_painpoints} alt="uber eats painpoint" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                As we can see, getting lost in the apartment is the most frequent and servere painpoint.
                So, how can we help couriers better find in-apartment addresses?
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Solution Iteration</Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Brainstorm</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I came up with three solutions that could possibly help couriers better find in-apartment addresses.
            </Typography>
            <img src={ubereats_brainstorm} alt="uber eats brainstorm" />
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Prioritization</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Product managers always have limited resource.
                So it's important to prioritize solutions. I will prioritize one of the three ideas that
                brings relatively high value with low level of effort.
            </Typography>
            <img src={ubereats_solution} alt="uber eats solution" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Therefore, I will prioritize the video recording solution due to its high value in helping couriers find
                in-apartment addresses and the relatively low efforts required from customers, couriers, and Uber.
            </Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">MVP Mockup</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                MVP is a product that has the minimum set of features necessary to begin gathering feedback from early customers.
                My MVP contains changes in 4 interfaces with 5 steps:
            </Typography>
            <img src={ubereats_mvp} alt="MVP mockup" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                My northstar metrics would be Average In-Apartment Delivery Time {"(Order Delivered Time - Time when the courier arrives within 500 meters of the apartment). "}
                The metrics reflects whether or not we help courier better find in-apartment addresses.
                A decrease in this metric satisfies the value of all stakeholders: order efficiency.
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Solution Iteration</Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Brainstorm</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I came up with three solutions that could possibly help couriers better find in-apartment addresses.
            </Typography>
            <img src={ubereats_brainstorm} alt="uber eats brainstorm" />
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Prioritization</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Product managers always have limited resource.
                So it's important to prioritize solutions. I will prioritize one of the three ideas that
                brings relatively high value with low level of effort.
            </Typography>
            <img src={ubereats_solution} alt="uber eats solution" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Therefore, I will prioritize the video recording solution due to its high value in helping couriers find
                in-apartment addresses and the relatively low efforts required from customers, couriers, and Uber.
            </Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">MVP Mockup</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                MVP is a product that has the minimum set of features necessary to begin gathering feedback from early customers.
                My MVP contains changes in 4 interfaces with 5 steps:
            </Typography>
            <img src={ubereats_mvp} alt="MVP mockup" />
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                My northstar metrics would be Average In-Apartment Delivery Time {"(Order Delivered Time - Time when the courier arrives within 500 meters of the apartment). "}
                The metrics reflects whether or not we help courier better find in-apartment addresses.
                A decrease in this metric satisfies the value of all stakeholders: order efficiency.
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Conclusion</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Takehome assignment has long been a controversial topic. Some people argued that
                you might end up wasting time on something that isn't guaranteed,
                not to mention providing the company with free solutions to their assignments.
                While others state that takehome assignment is your best friend to showcase your professional skills.
            </Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I, personally, enjoyed doing this assignment. First, it deepened my understanding of Uber's strategy,
                which helped my interviews a lot. Second, it validated my idea of becoming a product manager.
                I never get tired of interviewing with couriers, brainstorming solutions, and designing metrics.
                After postponing one of my midterms and one lab meeting, I completed the assignment and submitted on time.
                Luckily, it all paid off.
            </Typography>
        </div>

        <Box mt={4}><Button onClick={() => navigate('/Contacts', { replace: true })} variant="contained" style={{ textTransform: "none", fontSize: '1.5rem' }} sx={{ mt: "1rem", mb: "2rem", fontWeight: 'bold' }}>
            Contact Me
        </Button></Box>
    </div>

};

const UberEats = () => {
    return <MiniDrawer pageIndex={3} component={UberEatsBox} />
}

export default UberEats;