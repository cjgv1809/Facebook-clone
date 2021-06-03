import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 rounded-xl cursor-pointer hover:bg-gray-200">
      {src && (
        <Image
          src={src}
          height={30}
          width={30}
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
