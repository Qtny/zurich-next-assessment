import { signOut } from "next-auth/react";

const LogOutButton = () => {
    const handleClick = () => {
        signOut({
            callbackUrl: "/sign-in",
            redirect: true
        });
    }
    return (
        <button onClick={handleClick} className="flex text-white font-semibold text-base gap-4 bg-blue-800 hover:bg-blue-600 
            ease-in-out transform-all px-4 py-2 rounded-lg justify-center items-center">
            <h3>Sign out</h3>
        </button>
    )
}

export default LogOutButton;