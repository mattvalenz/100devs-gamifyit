import styles from "./HeroLeft.module.css";



export default function HeroLeft() {

    return (

    <main className={styles.splitScreenLayout}>

        <section className={styles.heroLeft}>
            
            <div className={styles.yourLevelCard}>

                <span className={styles.starIcon}>
                <img
                width={40}
                height={40}
                src="/icons/silver-icon.svg"
                alt="silver xp rank icon"
                className={styles.silverIcon}
                
            />
            </span>

            Your Level:

            </div>

            <div className={styles.silverCard}>

                SILVER
            </div>
        </section>

        <section className={styles.heroRight}>

        </section>
    </main>

    );
}