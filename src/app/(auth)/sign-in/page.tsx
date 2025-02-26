"use client"

import GoogleSignInButton from "../../../components/GoogleSignInButton";

const SignInPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-8">
            <h1 className="text-black text-5xl font-semibold">Zurich Test</h1>
            <GoogleSignInButton />
        </div>
    )
}

export default SignInPage;