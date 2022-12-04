import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from "react";
import Meeseeks from '../images/Meeseeks.png'
const words = ["Product Manager", "Full Stack Developer", "Web Designer", "Magician", "Product Manager", "Full Stack Developer", "Web Designer", "Magician", "Product Manager", "Full Stack Developer", "Web Designer", "Magician", "Product Manager", "Full Stack Developer", "Web Designer", "Magician", "Product Manager", "Full Stack Developer", "Web Designer", "Magician"];


const Explorer = (props) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
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
        }, Math.max(reverse ? 60 : subIndex === words[index].length ? 2222 :
            150, parseInt(Math.random() * 100)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);


    return <Stack direction="row" spacing={1}>
        <Box textAlign={'left'} ml={10} mt={15} width={'40%'}>
            <h1 style={{ color: 'white', fontSize: "4rem" }}>Jonathan Donut</h1>
            <h3 style={{ color: 'white', marginTop: '2rem' }}>
                I am {`${words[index].substring(0, subIndex)}${""}`}
            </h3>
            <Stack direction="row" spacing={19} marginTop={"3rem"}>
                <Button onClick={(event) => props.handleListItemClick(event, 1)} variant="contained" style={{ fontSize: '18px' }} sx={{ fontWeight: 'bold' }}>View Works</Button>
                <Button onClick={(event) => props.handleListItemClick(event, 2)} variant="outlined" style={{ fontSize: '18px' }} sx={{ fontWeight: 'bold' }}>
                    Contact Me
                </Button>
            </Stack>

        </Box >

        <Box pl={25}>
            <img src={Meeseeks} alt="Meeseeks" />
        </Box>
    </Stack>


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

export default Explorer;