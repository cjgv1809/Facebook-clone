import {
  SearchIcon,
  DotsHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezos" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  {
    src: "https://i2.wp.com/executives.technology/wp-content/uploads/2019/12/danielek.jpg?fit=400%2C400&ssl=1",
    name: "Daniel Ek",
  },
  {
    src: "http://c.files.bbci.co.uk/F55F/production/_102651826_gettyimages-77062671.jpg",
    name: "Larry Page",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
