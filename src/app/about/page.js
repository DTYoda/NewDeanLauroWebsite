import Copywrite from "@/components/Copywrite";
import Navigation from "@/components/navigation";

export default function About() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1 flex flex-col items-center w-screen my-16">
          <div className="text-7xl">About</div>
          <div className="md:w-[80vw] xl:w-[60vw] w-full border h-72 border-white my-8">
            {" "}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 2xl:gap-16 w-screen md:w-[100vw] 2xl:w-[80vw] my-8">
            <div className="flex items-center justify-center flex-col sm:flex-row">
              <div className="h-[350px] w-[350px] border border-white"></div>
              <div className="h-[250px] sm:h-[350px] w-[350px] sm:w-[250px] border border-gray-50"></div>
            </div>

            <div className="flex items-center justify-center flex-col sm:flex-row">
              <div className="h-[350px] w-[350px] border border-white"></div>
              <div className="h-[250px] sm:h-[350px] w-[350px] sm:w-[250px] border border-gray-50"></div>
            </div>

            <div className="flex items-center justify-center flex-col sm:flex-row">
              <div className="h-[350px] w-[350px] border border-white"></div>
              <div className="h-[250px] sm:h-[350px] w-[350px] sm:w-[250px] border border-gray-50"></div>
            </div>

            <div className="flex items-center justify-center flex-col sm:flex-row">
              <div className="h-[350px] w-[350px] border border-white"></div>
              <div className="h-[250px] sm:h-[350px] w-[350px] sm:w-[250px] border border-gray-50"></div>
            </div>
          </div>
        </div>
        <Copywrite />
      </div>
    </div>
  );
}
