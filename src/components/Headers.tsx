import LogOutButton from "./LogOutButton";

const Headers = () => {
    return (
        <div className="my-8 w-full min-w-[900px] max-w-[1024px] flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-4xl font-semibold">Zurich NextJS Assessment</h1>
            {/* Name */}
            <div className="flex font-semibold gap-4 justify-center items-center">
               <LogOutButton />
            </div>
        </div>
    )
}

export default Headers;