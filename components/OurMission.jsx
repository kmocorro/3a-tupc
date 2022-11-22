import styles from "./OurMission.module.css";

export default function OurMission() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="vision-placeholder.png" />
      </div>
      <div className={styles.message}>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          ornare augue, sed fermentum libero. In finibus felis non quam
          vulputate porta.
        </p>
      </div>
    </div>
  );
}
