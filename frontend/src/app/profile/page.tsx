import WelcomeUser from '@/app/profile/_components/WelcomeUser'

export default function ProfilePage() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 bg-blue-800 p-4 text-white">
          <WelcomeUser/>
        </div>
        <div className="bg-blue-800 p-4 text-white">Trophies</div>
        <div className="bg-blue-800 p-4 text-white">Settings</div>
        <div className="col-span-2 bg-blue-800 p-4 text-white">Empty</div>
        <div className="bg-blue-800 p-4 text-white">Quest</div>
        <div className="bg-blue-800 p-4 text-white">Empty Box</div>
        <div className="col-start-4 col-end-4 bg-blue-800 p-4 text-white">Empty Box</div>

      </div>
    </main>
  );
}