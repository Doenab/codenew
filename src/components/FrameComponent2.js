import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.fRAMEAWrapper}>
      <header className={styles.fRAMEA}>
        <div className={styles.novaaLabel}>
          <div className={styles.novaa}>Novaa</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.maleWrapper}>
            <div className={styles.male}>Male</div>
          </div>
          <div className={styles.femaleWrapper}>
            <div className={styles.female}>Female</div>
          </div>
          <div className={styles.trendsWrapper}>
            <div className={styles.trends}>Trends</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
