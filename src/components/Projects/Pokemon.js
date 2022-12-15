import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MiniDrawer from '../SideBar';
import styles from '../../styles/Pokemon.module.css';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import pokemon from '../../images/pokemon.gif'
import pokemon_page from '../../images/pokemon_page.png'


const PokemonBox = (props) => {
    const navigate = useNavigate();

    return <div>

        <div className={styles.titleBar}>
            {/* <h2 variant="bold">Moonshot</h2> */}
            <Typography variant="h2" color={grey[300]} sx={{ fontWeight: 800 }}> Build Pokemon Team </Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Build your dream Pokemon Team with a few clicks</Typography>
            <Typography variant="h6" color={grey[300]} sx={{ fontWeight: 800 }}> Nov. 9 - Nov. 29, 2022</Typography>
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
                            <li>Fontend Developer</li>
                            <li>UI/UX Designer</li>
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
                            <li>React</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Highlights</Typography>
                    <Typography variant="h6" color={grey[300]}>
                        <ul>
                            <li>It is my first React project! Check it out <a target="_blank" rel="noopener noreferrer" href='https://coolraven222.github.io/dev/'>
                                here</a>.</li>
                            <li>After this project, I falled in love with React. This portfolio, as you might expect, is also made by React {":)"}</li>
                        </ul>
                    </Typography>
                </Box>

            </Stack>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Context</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                The application aims to enable Pokemon fans to build their team by type and ability.
                Users can browse through 12 types of Pokemon, add them to the team, manage the team,
                and get a quick team summary.
                Users can narrow down their options by using a variety of filtering and sorting options that cover
                Pokemons' ability and type.
            </Typography>
            <Typography variant="h5" color={grey[300]} sx={{ fontWeight: 800 }} marginBottom="0.8rem">Why React?</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                React is a great choice for developing interactive interfaces that are tied to an internal data state.
                <ol>
                    <li>I want to change the listing of Pokemons by filters and sorting options.
                        React allows me to model the state of the interface as a function of the underlying data.
                        This means that when the data changes, React can efficiently update the UI to reflect the new state of the data.
                    </li>
                    <li>
                        This website has multiple same components like Pokemon Iteam and Cart Item.
                        React makes it easy to create reusable components that can be shared across your application,
                        which can help me to build a consistent and maintainable user interface.
                    </li>
                </ol>
            </Typography>
        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Research</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                I take the following usability principles into considerations:
                <ul>
                    <li>Learnability: The design is very intuitive and easy to understand. Pokemon cards are listed in grids. Each has basic information and a grey "ADD TO TEAM" button. All major functions are put on the navigation bar on top. Users can filter, sort, and check the cart on the bar.</li>
                    <li>Efficiency: Users can quickly add Pokemon, remove Pokemon, and perform sorting/ranking. For all the functions mentioned, users can get them done within two clicks.</li>
                    <li>Memorability: Users can easily restore proficiency because the design is simple, and there are not many operations to remember.</li>
                    <li>Errors: my webpage has high recoverability. No matter what users do, to return to the default page, they only need to choose "All" in "filter by type," "filter by ability," and "By ID" in "sort by ability."</li>
                    <li>Satisfaction: It is very pleasant to use the page because the interface is well-designed in shape, organization, and color.</li>
                </ul>
            </Typography>
        </div>
        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Design</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                On main page, it listed all Pokemons with picture, name, type, and ability score.
                You can filter Pokemons by type or Ability. Similarly, you can sort Pokemon by ID or Ability.
                When you add Pokemons to the team, there will be a red badge on the top right showing how many pokemons
                are in your team.
                By clicking the cart icon on the top right, you can manage your team and see your team's total ability.
            </Typography>
            <img src={pokemon_page} alt="pokemon page"></img>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                A sample interaction workflow is shown below:
            </Typography>
            <img src={pokemon} alt="pokemon website"></img>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Feel free to interact with it your self by clicking <a target="_blank" rel="noopener noreferrer" href='https://coolraven222.github.io/dev/'>
                    here</a>.
            </Typography>
        </div>

        <div className={styles.textBar}>
            <Typography className={styles.subTitle} variant="h4" sx={{ fontWeight: 800 }} marginBottom="0.8rem">Conclusion</Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                After completing the project, I learned how to build reusable components in React to increase productivity.
                I applied the knowledge on this portfolio you are looking at. Each project page is composed of one
                title component and multiple content conponents. It not only saves my time but also makes the style consistent.
            </Typography>
            <Typography variant='h6' color={grey[300]} marginBottom="0.8rem">
                Moreover, I learned many useful React libaries, including Bootstrap and Material UI.
                For example, the "Contact Me" button below is imported from Material UI. Click to see how it works {";)"}
            </Typography>
        </div>

        <Box mt={4}><Button onClick={() => navigate('/Contacts', { replace: true })} variant="contained" style={{ textTransform: "none", fontSize: '1.5rem' }} sx={{ mt: "1rem", mb: "2rem", fontWeight: 'bold' }}>
            Contact Me
        </Button></Box>
    </div>

};

const Pokemon = () => {
    return <MiniDrawer pageIndex={7} component={PokemonBox} />
}

export default Pokemon;