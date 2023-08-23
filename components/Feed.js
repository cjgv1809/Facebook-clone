import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pt-6 xl:mr-40">
      <div className="max-w-xs mx-auto md:max-w-lg lg:max-w-2xl pb-44">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
