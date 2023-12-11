import React, { useEffect, useRef } from "react";
import { useCountdownContext } from "../util/ContadorContexto.js";

const CountdownTimer = ({ onTimeout, onButtonActivate }) => {
    const {
        time,
        setTime,
        hasPlayedAlert,
        setHasPlayedAlert,
        selectedCitaId,
        setSelectedCitaId,
    } = useCountdownContext();
    const audioRef = useRef(null);
    const intervalIdRef = useRef(null);

    const resetTimer = () => {
        clearInterval(intervalIdRef.current);
        setTime(1200);
        setHasPlayedAlert(false);
    };

    useEffect(() => {
        const startTimer = () => {
            intervalIdRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 300 && !hasPlayedAlert) {
                        playAlertSound();
                        setHasPlayedAlert(true);
                    }

                    return prevTime - 1;
                });
            }, 1000);
        };

        if (time > 0) {
            startTimer();
        } else {
            onTimeout();
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [time, onTimeout, hasPlayedAlert, setTime, selectedCitaId, setHasPlayedAlert]);

    useEffect(() => {
        if (selectedCitaId !== null) {
            resetTimer();
            setSelectedCitaId(null);
        }
    }, [selectedCitaId, resetTimer, setSelectedCitaId]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    const playAlertSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handleButtonClick = () => {
        if (time <= 300) {
            window.alert("Mensaje de retraso enviado al siguiente paciente")
        }
        onButtonActivate();
    };

    return (
        <div className="countdown-container">
            <div className="countdown-timer">{formatTime(time)}</div>
            {time <= 300 && (
                <>
                    <button
                        className="countdown-button"
                        onClick={handleButtonClick}
                        disabled={time <= 0}
                    >
                        Alertar siguiente afiliado
                    </button>
                    <audio ref={audioRef} src="../assets/alerta.mp3" type="audio/mp3" />
                </>
            )}
        </div>
    );
};

export default CountdownTimer;
