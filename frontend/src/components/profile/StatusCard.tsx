import Image from "next/image"
import styles from './StatusCard.module.css'
import ProgressBar from "@/components/profile/ProgressBar"

// Welcome Card 
export default function Status(){
    return (
        <>
        <div className={styles.welcomeCard}>
            <div className={styles.userWelcome}> 
                {/* Separating picture and Welcome message */}
                <Image className={styles.profilePicture}
                    // src="https://via.placeholder.com/100/7BB9FA/ffffff"
                    src="/icons/github-icon.svg"
                    width={70}
                    height={60}
                    alt="Profile Picture"
                />
                <h2 className={styles.greeting}>Welcome Back, Bob!</h2>
            </div>

            {/* Current Level Badge */}
            <div className={styles.currentLevel}>
                <div className={styles.levelLeft}>
                    <div className={styles.iconWrap}>
                        <Image 
                        src="/icons/silver-icon.svg" 
                        alt="Level" 
                        width={20} 
                        height={20} />
                    </div>
                    <span>Your Level:</span>
                </div>
                <div className={styles.levelRight}>
                    <span>SILVER</span>
                </div>
            </div>
            <div className={styles.statusRow}>
                {/* Streak Badge */}
                <div className={styles.activeStreak}>
                <Image 
                    src="/icons/streak-icon.svg" 
                    alt="Streak" width={24} 
                    height={24} />
                    <span>Streak<br />Active!</span>
                </div>

                {/* Progress Bar */}
                <ProgressBar currentXP={150} maxXP={500}/>
            </div>
                <span className={styles.xpText}> 50 points to the next level </span>
        </div>
    
        </>
    )
}