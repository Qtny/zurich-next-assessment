"use client"

const SignInPage = () => {
    function handleSignIn() {
        console.log("signed in")
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-8">
            <h1 className="text-white text-5xl font-semibold">Zurich Test</h1>
            <button onClick={handleSignIn} className="bg-blue-700 hover:bg-blue-600 ease-in-out transform-all px-8 py-4 rounded-md">Sign in Google</button>
        </div>
    )
}

export default SignInPage;