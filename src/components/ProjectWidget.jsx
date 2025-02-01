import Image from "next/image";

export default function ProjectWidget() {
  return (
    <div className="flex gap-4">
      <Image
        width={300}
        height={200}
        className="rounded-xl border"
        src={null}
      ></Image>
      <div className="w-64 flex flex-col text-gray-400">
        <h2 className="text-white">Project Name</h2>
        <p className="flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Type</p>
        <p>Date</p>
      </div>
    </div>
  );
}
