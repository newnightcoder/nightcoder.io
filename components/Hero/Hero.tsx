import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heroContainer}>
        <span className={styles.h1}>title </span>

        <span className={styles.dash}></span>
      </div>
    </div>
  );
};

export default Hero;
