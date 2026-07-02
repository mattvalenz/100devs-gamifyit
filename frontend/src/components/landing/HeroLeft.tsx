import styles from "./HeroLeft.module.css";
import ProgressBar from "./ProgressBar";

export default function HeroLeft() {
  return (
    <main className={styles.splitScreenLayout}>
      <section className={styles.heroLeft}>

        {/* Level badge */}
        <div className={styles.levelBadge}>
          <div className={styles.peachSide}>
            <span className={styles.starIcon}>
              <img
                width={24}
                height={24}
                src="/icons/silver-icon.svg"
                alt="silver xp rank icon"
                className={styles.silverIcon}
              />
            </span>
            <span className={styles.yourLevel}>Your Level:</span>
          </div>
          <div className={styles.whiteSide}>SILVER</div>
        </div>

        {/* Score card */}
        <div className={styles.scoreCard}>
          <div className={styles.tierRow}>
            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <img src="/icons/silver-icon.svg" alt="silver" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Silver<br />200XP</h4>
            </span>
            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <img src="/icons/gold-icon.svg" alt="gold" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Gold<br />200XP</h4>
            </span>
            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <img src="/icons/platinum-icon.svg" alt="platinum" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Platinum<br />200XP</h4>
            </span>
            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <img src="/icons/diamond-icon.svg" alt="diamond" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Diamond<br />200XP</h4>
            </span>
          </div>
          <ProgressBar />
        </div>

        <div className={styles.footer}>
          <h3 className={styles.freeToPlay}>Free to play</h3>
          <h2 className={styles.getStarted}>GET STARTED</h2>
          <h4 className={styles.inviteFriends}>Invite friends and <br></br>play together</h4>
        </div>

      </section>
      <section className={styles.heroRight} />
    </main>
  );
}