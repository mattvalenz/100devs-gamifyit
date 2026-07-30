import StatusCard from '@/components/profile/StatusCard'
import Navbar from '@/components/shared/Navbar';

export default function ProfilePage() {
  return (
    <> 
    <Navbar/>
    
    <main className="min-h-screen p-3" style={{ backgroundColor: 'rgb(0, 39, 62)' }}>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 p-4 text-white">
          <StatusCard/>
        </div>
        <div className=" p-4 text-white">Trophies</div>
        <div className=" p-4 text-white">Settings</div>
        <div className="col-span-2  p-4 text-white">Empty</div>
        <div className=" p-4 text-white">Quest</div>
        <div className=" p-4 text-white">Empty Box</div>
        <div className="col-start-4 col-end-4  p-4 text-white">Empty Box</div>

      </div>
    </main>
    
    </>
  );
}