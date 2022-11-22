import Button from "./Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <img src="tupclogo.png" />
      </div>
      <div className={styles.navbarActions}>
        <Button variant="secondary">Careers</Button>
        <Button variant="secondary">Admission</Button>
        <Button variant="secondary">Registrar</Button>
        <Button variant="secondary">Contact us</Button>
        <Button variant="primary">Login</Button>
      </div>
    </div>
  );
}
