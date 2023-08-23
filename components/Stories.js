import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Daniel Ek",
    src: "https://static.footballtransfers.com/images/cn/image/upload/q_90,w_1200,h_800,ar_3.2/footballcritic/hjy2jteoe0s60affn3to",
    profile:
      "https://i2.wp.com/executives.technology/wp-content/uploads/2019/12/danielek.jpg?fit=400%2C400&ssl=1",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile:
      "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2018/01/jeff-bezos-ceo-amazon.jpg?tf=3840x",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center mx-auto space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
