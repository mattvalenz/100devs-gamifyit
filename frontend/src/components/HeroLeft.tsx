import styles from "./HeroLeft.module.css";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function HeroLeft() {
  return (
    <main className={styles.splitScreenLayout}>

      <section className={styles.heroLeft}>

        {/* Level badge */}
        <div className={styles.leftCards}>
          <div className={styles.peachcard}>
            <span className={styles.icon}>
              <Image src="/icons/silver-icon.svg" alt="icon" className={styles.silverIcon} width={30} height={30} />
            </span>
            <h3 className={styles.yourLevel}>Your Level:</h3>
          </div>
          <h3 className={styles.silver}>SILVER</h3>
        </div>

        {/* Score card */}
        <div className={styles.scoreCard}>

          {/* 4 tier icons + scores */}
          <div className={styles.tierRow}>

            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <Image src="/icons/silver-icon.svg" alt="silver" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Silver<br />200XP</h4>
            </span>

            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <Image src="/icons/gold-icon.svg" alt="gold" className={styles.tierIcon} width={24} height={24} loading="lazy"/>
              </span>
              <h4 className={styles.tierScore}>Gold<br />200XP</h4>
            </span>

            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <Image src="/icons/platinum-icon.svg" alt="platinum" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Platinum<br />200XP</h4>
            </span>

            <span className={styles.tierItem}>
              <span className={styles.iconWrap}>
                <Image src="/icons/diamond-icon.svg" alt="diamond" className={styles.tierIcon} width={24} height={24} />
              </span>
              <h4 className={styles.tierScore}>Diamond<br />200XP</h4>
            </span>

          </div>

          {/* Progress bar */}
          <ProgressBar />

        </div>

        <div className={styles.footer}>

            <h4 className={styles.freeToPlay}>Free to play</h4>

            <button className={styles.getStarted}>Get Started</button>

            <h4 className={styles.inviteFriends}>Invite friends and <br></br> play together</h4>

        </div>

      </section>

      <section className={styles.heroRight} />

    </main>
  );
}