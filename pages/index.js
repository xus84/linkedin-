import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
         <h3 className={styles.header}>Hi there,</h3>
         <br></br>
        <h2 className={styles.title} >
          I'm <span className={styles.name}>Jesús</span>, a web & app developer.
        </h2>
        <br></br>
        <h3 className={styles.subtitle}>Turning ideas into real products.</h3>
      </div>
    </div>
  );
}
