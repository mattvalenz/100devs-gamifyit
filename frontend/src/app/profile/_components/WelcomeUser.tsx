import Image from "next/image"

export default function WelcomeUser(){
    return (
        <>
        <Image className="rounded-full border-2 border-primary"
            src="https://via.placeholder.com/100/7BB9FA/ffffff"
            width={100}
            height={100}
            alt="Profile Picture"
        />
        <h2 style={{ fontFamily: 'var(--font-orbit)' }}>Welcome User</h2>
        {/* Streak Active */}
        {/* Progress Bar */}
        <span> Lorem ipsum dolor sit amet consectetur.</span>
        </>
    )
}