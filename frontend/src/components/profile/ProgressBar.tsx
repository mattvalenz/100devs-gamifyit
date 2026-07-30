import styles from '@/components/profile/ProgressBar.module.css'

// Props the progress bar needs to calculate and display XP progress
interface ProgressBarProps{
    currentXP: number; // User's current XP points
    maxXP: number // XP needed to reach next level
}

export default function ProgressBar({ currentXP, maxXP }: ProgressBarProps){
        // Calculate what percentage of the bar should be filled
        // e.g. 150/500 = 30%
    const fillPercentage = (currentXP / maxXP) * 100

    return (
        // Outer track — full width grey/peach background bar
        <div className={styles.track}>

            {/* Fill — colored bar that grows based on XP percentage */}
            {/* Width is set dynamically via inline style */}
            <div className={styles.fill} style={{ width: `${fillPercentage}%` }} />
            <div className={styles.dots}>
                {/* First dot — active/completed milestone  */}
                <div className={styles.dotStart}></div>

                {/* Remaining dots — inactive milestones not yet reached */}
                <div className={styles.dotInactive}></div>
                <div className={styles.dotInactive}></div>
                <div className={styles.dotInactive}></div>
            </div>
        </div>
    )
}