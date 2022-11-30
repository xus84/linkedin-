import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faDocker,
  faGit,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* First container */}
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>

        <div className={styles.segment}>
          <h3 className={styles.header}>Hi there,</h3>
          <br></br>
          <h2 className={styles.title}>
            I'm <span className={styles.name}>Jesús</span>, a web & app
            developer.
          </h2>
          <br></br>
          <h3 className={styles.subtitle}>Turning ideas into real products.</h3>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {/* Second container */}
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>

        <div className={styles.segment}>
          <div className={styles.title_techologies}>
            <h3>Full Stack Technologies</h3>
          </div>
          <div className={styles.grid_technologies}>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faNode} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faAngular} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faGit} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faDatabase} />
              <p>MongoDB</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faDatabase} />
              <p>MySQL</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faDatabase} />
              <p>PosgreSQL</p>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faDocker} />
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon icon={faWordpress} />
            </div>
          </div>
        </div>
      </div>

      {/* Second container */}
    </div>
  );
}
