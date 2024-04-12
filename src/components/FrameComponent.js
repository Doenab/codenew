import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.novaaWrapper}>
        <div className={styles.novaa}>Novaa</div>
      </div>
      <div className={styles.buttonsIconParent}>
        <img
          className={styles.buttonsIcon}
          loading="lazy"
          alt=""
          src="/buttons--icon@2x.png"
        />
        <img
          className={styles.buttonsIcon1}
          loading="lazy"
          alt=""
          src="/buttons--icon-1@2x.png"
        />
        <img
          className={styles.buttonsIcon2}
          loading="lazy"
          alt=""
          src="/buttons--icon-2@2x.png"
        />
        <img
          className={styles.buttonsIcon3}
          loading="lazy"
          alt=""
          src="/buttons--icon-3@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
