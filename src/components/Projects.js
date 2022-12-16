import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import '../styles/Projects.css'
import MiniDrawer from "./SideBar"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";


const ProjectsBox = () => {
    return <div>
        {/* <Stack direction="column"> */}
        <Box color={"white"} textAlign={"left"} ml={5} mt={-1}><h2 id="project-title">Things I've built so far:</h2></Box>
        {/* <Box ml={5} mt={5} mr={5}> */}
        {/* <Stack direction="row" spacing={5}> */}
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8} xs={12} pl={8} pt={5} >
                <Grid item xs={3}>
                    <Card color={grey[500]} sx={{ bgcolor: "#5b5b5b", borderRadius: 8, border: 4, borderColor: "#268ac8", boxShadow: 5 }}>
                        <CardActionArea component={Link} to="/Moonshot">
                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/moonshot.png")}
                                alt="Moonshot"
                                sx={{ objectFit: "contain", bgcolor: "#040443" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="white" gutterBottom variant="h6" component="div">
                                    Moonshot
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card color={grey[500]} sx={{ bgcolor: "#5b5b5b", borderRadius: 8 }}>
                        <CardActionArea component={Link} to="/Culpa">

                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/culpa.png")}
                                alt="CULPA"
                                sx={{ objectFit: "contain", bgcolor: "#fb9be2" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="white" gutterBottom variant="h6" component="div">
                                    Resign Culpa
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} >
                    <Card color={grey[500]} sx={{ bgcolor: "#5b5b5b", borderRadius: 8 }}>
                        <CardActionArea component={Link} to="/UberEats">
                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/uber.png")}
                                alt="Uber Eats"
                                sx={{ objectFit: "contain", bgcolor: "#43c364" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="white" gutterBottom variant="h6" component="div">
                                    Redesign UberEats
                                </Typography>
                                <Grid container spacing={1} xs={12} mb={1}>
                                    <Grid item xs={3}>
                                        <Chip label="Chip" variant="outlined" sx={{ color: "#43c364", borderColor: "#43c364" }} /></Grid>
                                    <Grid item xs={3}>
                                        <Chip label="Chip" variant="outlined" sx={{ color: "#43c364", borderColor: "#43c364" }} /></Grid>
                                    <Grid item xs={3}>
                                        <Chip label="Chip" variant="outlined" sx={{ color: "#43c364", borderColor: "#43c364" }} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip label="Chip" variant="outlined" sx={{ color: "#43c364", borderColor: "#43c364" }} />
                                    </Grid>
                                </Grid>
                                <Typography variant="body2" color="text.secondary">
                                    Enhance couriers's apartment delivery experience via UberEats
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card color={grey[500]} sx={{ bgcolor: "#5b5b5b", borderRadius: 8 }}>
                        <CardActionArea component={Link} to="/Pokemon">
                            <CardMedia
                                component="img"
                                height="140"
                                image={require("../images/pokemon.png")}
                                alt="Pokemon"
                                sx={{ objectFit: "contain", bgcolor: "#fae384" }}
                            />
                            <CardContent >
                                <Typography fontWeight='bold' color="white" gutterBottom variant="h6" component="div">
                                    Pokemon Team Builder
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box >

        {/* 

                <Card sx={{ maxWidth: "25%" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: "25%" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: "25%" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                {/* </Stack> */}
        {/* </Box> */}
        {/* </Stack> */}

    </div >

    // return <Box color={"white"} textAlign={"left"} ml={10}><h1 id="🧪-projects">🧪 Projects</h1>
    //     <h2 id="moonshot-🔗"><a href="https://fakecat016.github.io/iterative-design/" target="_blank" rel="noopener noreferrer">Moonshot</a> 🔗</h2>
    //     <ul>
    //         <li><p><strong>Context/Problem</strong> - Moonshot is a <a href="https://www.ycombinator.com/companies/moonshot" target="_blank" rel="noopener noreferrer">YC-backed startup</a> that lets athletes fund their professional career in exchange for a share of their earnings. Becoming a professional athlete is expensive and risky. Professional tennis players spend more than $100,000 annually. This is a real problem for those with underprivileged backgrounds. Currently, the startup does not have a interacface for investors. We decided iteratively design the interface and send to them.</p>
    //         </li>
    //         <li><p><strong>Research/Feedback</strong>- Our target audience are backers who are interested in sports and potential young atheltes. I led the team of four to brainstorm 12 sketches of possible interfaces. Some of us focused on helping atheltes reach more audience while others aim to optimize backer&#39;s search experience. We synthesized each&#39;s advantage and make a prototype on Figma. </p>
    //         </li>
    //         <li><p><strong>Design</strong>  In general, we recived very positive feedback from our classmates at Brown. We also get constructive feedback on user flow, logo sizing, and layouts. We interatively incorporate the feedback into the final prototype. You can try it <a href="https://www.figma.com/proto/xo3Vn2s4XlYznsZkT5lH5w/MoonShot?page-id=0%3A1&amp;node-id=2%3A2&amp;viewport=70%2C289%2C0.21&amp;scaling=scale-down&amp;starting-point-node-id=2%3A2">Here</a>.</p>
    //         </li>
    //         <li><p><strong>Conclusion</strong> - We emailed the founders of the Moonshot with the final prototype. Dimitris Nikolaou, one of the founders, replied within 1 hour with compliments and invited us to meet virtually. It was a nice meeting. Dimitris even offered us to collorate with him more in the future. I never thought job could be found this way ;)</p>
    //         </li>
    //     </ul>
    //     <h2 id="improve-ubereats-🔗"><a href="https://drive.google.com/file/d/1EFuWE__0YwPO_cGDXhQDeDMHCukGktlZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Improve UberEats</a> 🔗</h2>
    //     <ul>
    //         <li><p><strong>Context/Problem</strong> - In this project, I imagine myself as a Product Manager at Uber who wants to improve the experience for couriers delivering to apartments via Uber Eats. My answer helped me get interviews from Uber and finally got an offer as an Associate Product Manager.</p>
    //         </li>
    //         <li><p><strong>Research/Feedback</strong>- When delivering food to apartments, there are 6 pain points that affect courier's efficiency. </p>
    //             <ol>
    //                 <li><p>Cannot find the apartment location, either because of map navigation or wrong address </p>
    //                 </li>
    //                 <li><p>Don't know how to enter the apartment, which includes finding parking lot and entrance. </p>
    //                 </li>
    //                 <li><p>Cannot enter the apartment due to guard or lock</p>
    //                 </li>
    //                 <li><p>Cannot reach customers because no one answers, wrong phone number, or wrong room</p>
    //                 </li>
    //                 <li><p>Get lost in the apartment; cannot find the door or room they are looking for</p>
    //                 </li>
    //                 <li><p>Need to spend time defending themselves if customers give them inappropriate feedback</p>
    //                     <p> After Talking with 6 couriers, I decided to prioritize the painpoint of getting lost in apartments.</p>
    //                 </li>
    //             </ol>
    //         </li>
    //         <li><p><strong>Design</strong>  - Based on level of impact and efforts, I choose to choose the solution enable customers  record a video of how to find their room from the entrance. So that courier can watch and follow the video.</p>
    //         </li>
    //         <li><p><strong>Conclusion</strong> - My biggest takeaway from the project is the product design skills and user sympathy. I better understood couriers&#39; painpoints, which helped me in the following interviews.</p>
    //         </li>
    //     </ul>
    //     <h2 id="pokemon-team-builder-🔗"><a href="   " target="_blank" rel="noopener noreferrer">Pokemon Team Builder</a> 🔗</h2>
    //     <ul>
    //         <li><p><strong>Context/Problem</strong> - To hone my interactive design skills, I created a website that you can build your Pokemon team by filtering, sorting, and managing shopping cart. </p>
    //         </li>
    //         <li><p><strong>Research/Feedback</strong>- My audience are Pokemon enthusiasts. They hope to have an intuitive design that helps them build team with a few clicks. Also, because team building is in essense an experimental business. They hope the website to have high recoverability. </p>
    //         </li>
    //         <li><p><strong>Design</strong>  I designed this website with usability concerns in mind.</p>
    //             <ol>
    //                 <li>Learnability: The design is very intuitive and easy to understand. Pokemon cards are listed in grids. Each has basic information and a grey &quot;ADD TO TEAM&quot; button. All major functions are put on the navigation bar on top. Users can filter, sort, and check the cart on the bar.</li>
    //                 <li>Efficiency: Users can quickly add Pokemon, remove Pokemon, and perform sorting/ranking. For all the functions mentioned, users can get them done within two clicks.</li>
    //                 <li>Memorability: Users can easily restore proficiency because the design is simple, and there are not many operations to remember.</li>
    //                 <li>Errors: my webpage has high recoverability. No matter what users do, to return to the default page, they only need to choose &quot;All&quot; in &quot;filter by type,&quot; &quot;filter by ability,&quot; and &quot;By ID&quot; in &quot;sort by ability.&quot;</li>
    //                 <li>Satisfaction: It is very pleasant to use the page because the interface is well-designed in shape, organization, and color.</li>
    //             </ol>
    //         </li>
    //         <li><p><strong>Conclusion</strong> - Through this project, I learned how to design interactive websites with high usability.</p>
    //         </li>
    //     </ul>
    //     <h2 id="redisign-culpa-🔗"><a href="https://coolraven222.github.io/1300hw2/" target="_blank" rel="noopener noreferrer">Redisign CULPA</a> 🔗</h2>
    //     <ul>
    //         <li><p><strong>Context/Problem</strong> - <a href="https://culpa.app/prof/12697" target="_blank" rel="noopener noreferrer">CULPA</a> is a website for Columbia students to rate their professors. It displays information in an unintuitive way that lacks usability and accessibility. I decided to redesign the website to save Columbia students. 😁</p>
    //         </li>
    //         <li><p><strong>Research/Feedback</strong>- I interviewd Columbia students and asked their feedback on the website. In general, old CULPA has</p>
    //             <ul>
    //                 <li><strong>Low Usability:</strong>  Students are the primary users. They visit the website to gain insights into the professor&#39;s teaching style and class workload. However, the design makes students hard to get insights effectively. Reviews are ranked in chronological order without regard to the length of reviews or the class they are coming from.</li>
    //                 <li><strong>Low Learnability:</strong>  It is difficult for users to write or understand the implication the first time they encounter this interface. To write a review, you need to click either of the two dropdown buttons. Moreover, under the professor&#39;s name, sometimes there is a line, &quot;This professor has earned a CULPA gold nugget.&quot; However, you must go to the dropdown on the top right, click FAQ, and then know what &quot;gold nugget&quot; means.</li>
    //                 <li><strong>Low Memorability:</strong>  Even if a user has tried multiple times, it is still hard for them to remember how to use it. Through interviews with Columbia students, I found little people could tell me the difference between the two dropdown button on the top right.</li>
    //             </ul>
    //         </li>
    //         <li><p><strong>Design</strong>  - With the feedback in mind, I made a <a href="https://coolraven222.github.io/new-culpa/" target="_blank" rel="noopener noreferrer">new CULPA</a>. The design decisions I made are:</p>
    //             <ol>
    //                 <li>Enable users to filter and sort reviews. Students could either filter by class name or time range. They could also sort by time or review length. This feature enables users to find the most useful review for them more effectively, thus increasing usability.</li>
    //                 <li>Without going to FAQ to find the meaning of the golden badge, users now could click the information icon on the top right. It reduces the things to learn and remember for users, thus improving learnability and memorability.</li>
    //                 <li>Break down the two drop-down menus into three core functions: FAQ, Contact, and Write A Review. So people no longer need to memorize what&#39;s included in each dropdown menu, thus improving memorability.</li>
    //                 <li>Summarize and list common phrases that appear in reviews, so students can quickly click the tag and get all reviews that contain the term, such as &quot;Midterm.&quot; This feature boosts usability by improving users&#39; task success effectiveness.</li>
    //             </ol>
    //         </li>
    //         <li><p><strong>Conclusion</strong> - I learned how to design responsive websites. Most importantly, I learned how good is Brown&#39;s RateMyProfessor: <a href="https://thecriticalreview.org/" target="_blank" rel="noopener noreferrer">Critical Review</a>. 😉</p>
    //         </li>
    //     </ul>
    //     <Box height={'8rem'}></Box>

    // </Box>
}

const Projects = () => {
    return <MiniDrawer pageIndex={1} component={ProjectsBox} />
}

export default Projects