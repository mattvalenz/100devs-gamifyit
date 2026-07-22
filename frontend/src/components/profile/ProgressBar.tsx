import styles from '@/components/profile/ProgressBar.module.css'

interface ProgressBarProps{
    currentXP: number;
    maxXP: number
}

export default function ProgressBar({ currentXP, maxXP }: ProgressBarProps){
    const fillPercentage = (currentXP / maxXP) * 100
    console.log(fillPercentage)
    return (
        <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${fillPercentage}%` }} />
            <div className={styles.dots}>
                <div className={styles.dotStart}></div>
                <div className={styles.dotInactive}></div>
                <div className={styles.dotInactive}></div>
                <div className={styles.dotInactive}></div>
            </div>
        </div>
    )
}