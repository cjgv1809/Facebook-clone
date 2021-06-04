import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Post = forwardRef(
  ({ name, message, email, postImage, image, timestamp }, ref) => {
    return (
      <div className="flex flex-col" ref={ref}>
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
          <div className="flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={image}
              width={40}
              height={40}
              alt=""
            />
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-gray-400">
                {timestamp ? (
                  new Date(timestamp?.toDate()).toLocaleDateString()
                ) : (
                  <p className="text-xs text-gray-400">Loading...</p>
                )}
              </p>
            </div>
          </div>
          <p className="p-4">{message}</p>
        </div>
        {postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={postImage} objectFit="contain" layout="fill" />
          </div>
        )}
        <div
          className="flex 
        justify-between 
        items-center 
        rounded-b-2xl
         bg-white 
         shadow-md 
         text-gray-400 border-t"
        >
          <div className="inputIcon rounded-bl-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="inputIcon rounded-none">
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="inputIcon rounded-br-2xl">
            <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
