import Navigation from "@/components/navigation";
import LatestProjects from "@/components/LatestProjects";
import Copywrite from "@/components/Copywrite";

export default function Index() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-9xl">Dean Lauro</h1>
          <p className="text-xl">Producer, artist, hip-hop</p>
        </div>
        <div className="h-24 flex items-center justify-center border-t border-white">
          <a className="text-2xl" href="#latest-projects">
            ▼ Latest Projects ▼
          </a>
        </div>
      </div>
      <LatestProjects />
      <Copywrite />
    </div>
  );
}
