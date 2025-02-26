"use client"

import { redirect } from "next/navigation";

const ErrorPage = () => {
    const handleClick = () => {
        redirect("/sign-in");
    }

    return (
        <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-semibold">You have not log in!</h1>
                <h1>You need to login to view this page</h1>
            </div>

            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600" onClick={handleClick}>Go to Sign Up Page</button>
        </div>
    )
}

export default ErrorPage;