import Image from "next/image"
import styles from './StatusCard.module.css'
import ProgressBar from "@/components/profile/ProgressBar"

// Main status card shown in the top-left of the profile page grid
export default function Status(){
    return (
        <>
        {/* Outer card container — dark background with border */}
        <div className={styles.welcomeCard}>

            {/* Top row: avatar + welcome message side by side */}
            <div className={styles.userWelcome}> 
                {/* TODO: Replace with real user avatar from database */}
                <Image className={styles.profilePicture}
                    src="/icons/github-icon.svg"
                    width={70}
                    height={60}
                    alt="Profile Picture"
                />
                {/* TODO: Replace "Bob" with real username from user data */}
                <h2 className={styles.greeting}>Welcome Back, Bob!</h2>
            </div>

            {/* Level badge — shows current XP rank (e.g. Silver, Gold) */}
            {/* TODO: Make level dynamic based on user data */}
            <div className={styles.currentLevel}>
                <div className={styles.levelLeft}>
                    {/* TODO: Swap icon based on user's current level */}
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
                    {/* TODO: Make this dynamic */}
                    <span>SILVER</span>
                </div>
            </div>

            {/* Bottom row: streak badge + progress bar side by side */}
            <div className={styles.statusRow}>

                {/* Streak badge — only shows when user has an active streak */}
                {/* TODO: Conditionally render based on isStreakActive prop */}
                <div className={styles.activeStreak}>
                    <Image 
                        src="/icons/streak-icon.svg" 
                        alt="Streak" width={24} 
                        height={24} />
                    <span>Streak<br />Active!</span>
                </div>

                {/* XP progress bar — shows how far user is to next level */}
                {/* TODO: Pass real currentXP and maxXP from user data */}
                <ProgressBar currentXP={150} maxXP={500}/>
            </div>

            {/* Points remaining until next level */}
            {/* TODO: Calculate dynamically from maxXP - currentXP */}
            <span className={styles.xpText}> 50 points to the next level </span>

        </div>
        </>
    )
}