import ProjectWidget from "./ProjectWidget";

export default function LatestProjects() {
  return (
    <div className="flex items-center w-screen flex-col">
      <a id="latest-projects"></a>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:gap-16 2xl:gap-0">
        <ProjectWidget />
        <ProjectWidget />
        <ProjectWidget />
      </div>
      <br></br>
      <a
        href="/portfolio"
        className="text-center flex justify-center underline"
      >
        View All Projects
      </a>
    </div>
  );
}
