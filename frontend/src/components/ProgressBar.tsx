import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.line} />
        <div className={styles.fill} />
        <div className={styles.dots}>
          <div className={styles.dotStart}>✓</div>
          <div className={styles.dotComplete} />
          <div className={styles.dotInactive} />
        </div>
      </div>
      <div className={styles.labels}>
        <span className={styles.labelDone}>Done</span>
        <span className={styles.labelActive}>Active</span>
        <span className={styles.labelLater}>Later</span>
      </div>
    </div>
  );
}