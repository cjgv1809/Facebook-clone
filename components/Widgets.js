import {
  SearchIcon,
  DotsHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    src: "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2018/01/jeff-bezos-ceo-amazon.jpg?tf=3840x",
    name: "Jeff Bezos",
  },
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
    <div className="flex-col hidden p-2 mt-5 lg:flex w-60">
      <div className="flex items-center justify-between mb-5 text-gray-500">
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
