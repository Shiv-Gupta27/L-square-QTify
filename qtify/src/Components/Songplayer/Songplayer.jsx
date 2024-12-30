import React, { useState, useEffect, useRef } from "react";
import songimage from "../../assets/Rectangle_song.png";
import playbutton from "../../assets/playbutton.png";
import stopbutton from "../../assets/stopbutton.png";
import styles from "./Songplayer.module.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Songplayer = () => {
    const [play, setPlay] = useState(false);
    const [progress, setProgress] = useState(0);
    // const timer = useRef(null);
    const audioref = useRef(null);

    useEffect(() => {
        let timer = null;

        if (play) {
            audioref.current.play();

            timer = setInterval(() => {
                const currentTime = audioref.current.currentTime; 
                const duration = audioref.current.duration; 
                const progressPercentage = (currentTime / duration) * 100;

                setProgress(progressPercentage);
            }, 500); 
        } else {
            clearInterval(timer);
            audioref.current.pause();
        }

        return () => {
            clearInterval(timer);
        };
    }, [play]);

    const togglePlay = () => {
        setPlay((prev) => !prev);
    };

    return (
        <div className={styles.parentDiv}>
            <div className={styles.childDiv}>
                <div className={styles.imagedis}>
                    <div>
                        <img src={songimage} alt="song img" />
                    </div>
                    <div>
                        <h4>Song name</h4>
                        <h6>Album name</h6>
                    </div>
                </div>
                <div className={styles.playaudio}>
                    <img
                        src={play ? stopbutton : playbutton}
                        alt={play ? "stop button image" : "play button image"}
                        onClick={togglePlay}
                    />
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <audio ref={audioref}>
                        <source src="/assets/Hauli_Hauli.mp3" type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
    );
};

export default Songplayer;
