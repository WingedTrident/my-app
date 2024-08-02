import React, {useState, useEffect} from 'react';
import HoverList from './HoverList';
import styles from '../styles/Heading.module.css';

const PROJECT_GIFS = {
    Cube: require('../gifs/3dcube.gif'),
    Solitaire: require('../gifs/solitaire.gif'),
};
    


function Heading(){
    const [currentGIF, setCurrentGIF] = useState(null);   

    return (
        <>
            <div className={styles.div}>
                <h1 className={styles.h1}>Biel Projects</h1>
                <h2 className={styles.h2}>Hover over one of the projects and a gif will be displayed below!</h2>
                <h6>Click for a link to the source code on GitHub.</h6>
                <ol className={styles.ol}>
                    <li className={styles.li} onMouseEnter={() => setCurrentGIF(PROJECT_GIFS['Cube'])} onMouseLeave={() => setCurrentGIF(null)}>
                    <a href="https://github.com/WingedTrident/3D_Examination_Screen">3D Cube</a></li>
                    <li className={styles.li} onMouseEnter={() => setCurrentGIF(PROJECT_GIFS['Solitaire'])} onMouseLeave={() => setCurrentGIF(null)}>
                    <a href="https://github.com/WingedTrident/Solitaire">Solitaire</a></li>
                    <li></li>
                </ol>
            </div>
            <HoverList className={styles.gif} img_src={currentGIF} isVisible={currentGIF!==null}/>
        </>
    );
}

export default Heading;