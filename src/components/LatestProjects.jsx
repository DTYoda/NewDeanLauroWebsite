import ProjectWidget from "./ProjectWidget";

export default function LatestProjects() {
  return (
    <div className="h-64">
      <a id="latest-projects"></a>
      <div className="flex justify-self-center">
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
