import styles from "./Hero.module.css";

export default function Hero({ heading1, heading3, pAddress }) {
  return (
    <div className={styles.container}>
      {heading1 === "National University" ? (
        <h1 className={styles.nu}>{heading1}</h1>
      ) : (
        <h1 className={styles.tupc}>{heading1}</h1>
      )}
      <h3 className={styles.campus}>{heading3}</h3>
      <p>{pAddress}</p>
    </div>
  );
}
