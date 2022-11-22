import styles from "./Button.module.css";

export default function Button({ children, variant }) {
  return (
    <div>
      {variant === "primary" ? (
        <button className={styles.primary}>{children}</button>
      ) : (
        <button className={styles.secondary}>{children}</button>
      )}
    </div>
  );
}
