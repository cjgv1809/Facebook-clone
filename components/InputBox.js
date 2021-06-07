import { useSession } from "next-auth/client";
import Image from "next/image";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef();
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (
      (!inputRef.current.value && imageToPost) ||
      (inputRef.current.value && imageToPost) ||
      inputRef.current.value
    ) {
      db.collection("posts")
        .add({
          message: inputRef.current.value,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((doc) => {
          if (imageToPost) {
            const uploadTask = storage
              .ref(`posts/${doc.id}`)
              .putString(imageToPost, "data_url");

            removeImage();

            uploadTask.on(
              "state_change",
              null,
              (error) => console.log(error),
              () => {
                storage
                  .ref("posts")
                  .child(doc.id)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection("posts").doc(doc.id).set(
                      {
                        postImage: url,
                      },
                      { merge: true }
                    );
                  });
              }
            );
          }
        });
    }

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 mx-auto">
      <div className="flex space-x-4 p-2 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          alt=""
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${
              session.user.name.split(" ")[0]
            }?`}
            className="text-xs sm:text-sm rounded-full h-12 bg-gray-100 flex-grow px-4 focus:outline-none"
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center font-bold">
              Remove Image
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-2 border-t px-4">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="hidden sm:inline-flex sm:text-xs md:text-sm lg:text-md">
            Live Video
          </p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filepickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="hidden sm:inline-flex sm:text-xs md:text-sm lg:text-md">
            Photo/Video
          </p>
          <input
            ref={filepickerRef}
            type="file"
            onChange={addImageToPost}
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="hidden sm:inline-flex sm:text-xs md:text-sm lg:text-md">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
