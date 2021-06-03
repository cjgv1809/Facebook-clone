import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <button
        onClick={signIn}
        className="p-5 bg-blue-500 text-white text-center rounded-full cursor-pointer"
      >
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;
