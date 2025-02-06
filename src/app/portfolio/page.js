import Copywrite from "@/components/Copywrite";
import Navigation from "@/components/navigation";
import ProjectWidget from "@/components/ProjectWidget";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-7xl m-16">Portfolio</h1>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:gap-16 2xl:grid-cols-3 2xl:gap-8">
          <ProjectWidget />
          <ProjectWidget />
          <ProjectWidget />
          <ProjectWidget />
          <ProjectWidget />
          <ProjectWidget />
        </div>
      </div>
      <Copywrite />
    </div>
  );
}
