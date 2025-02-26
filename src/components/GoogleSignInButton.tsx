import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleSignInButton = () => {
    const handleClick = () => {
        signIn("google", {
            callbackUrl: "/users"
        });
    }
    return (
        <button onClick={handleClick} className="flex text-black font-medium text-lg gap-4 bg-white hover:bg-gray-100 
            ease-in-out transform-all px-6 py-4 rounded-full justify-center items-center border border-gray-800">
            <Image src="/google_logo.png" alt="google logo" height={25} width={25} />
            <h3>Sign in with Google</h3>
        </button>
    )
}

export default GoogleSignInButton;