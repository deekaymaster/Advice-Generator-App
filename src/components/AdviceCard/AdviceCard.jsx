import styles from "./AdviceCard.module.css";
import DICE_ICON from "../../assets/icon-dice.svg";
import DIVIDER_ICON from "../../assets/pattern-divider-desktop.svg";
import { generateRandomAdvice } from "../../api/generateRandomAdvice";
import { useEffect, useState } from "react";

export function AdviceCard() {
  const [randomAdvice, setRandomAdvice] = useState({ id: "", advice: "" });

  // Funkcja pomocnicza do pobrania nowej porady
  const fetchAdvice = () => {
    generateRandomAdvice().then((advice) => {
      setRandomAdvice(advice); // Ustawiamy nową poradę w stanie
    });
  };

  // Pobieramy poradę przy pierwszym renderowaniu komponentu
  useEffect(() => {
    fetchAdvice();
  }, []);

  console.log(randomAdvice);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.adviceNumber}>ADVICE #{randomAdvice.id}</h3>
        <p className={styles.quote}>{randomAdvice.advice}</p>
        <img
          src={DIVIDER_ICON}
          alt="divider-icon"
          className={styles.dividerIcon}
        />
      </div>
      <button
        onClick={() => {
          generateRandomAdvice().then((advice) => {
            setRandomAdvice(advice);
          });
        }}
        className={styles.button}
      >
        <img src={DICE_ICON} alt="dice-icon" className={styles.diceIcon} />
      </button>
    </div>
  );
}
