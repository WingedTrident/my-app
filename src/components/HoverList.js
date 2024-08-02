import React from 'react';
import styles from '../styles/HoverList.module.css';

function HoverList({img_src, isVisible}){
    let visibility = isVisible ? 'block' : 'none';

    return (
        <>
            <div className={styles.div} style={{display: visibility}}>
                <img className={styles.img} src={img_src} alt="Project Gif"/>
            </div>
        </>
    )
}

export default HoverList;