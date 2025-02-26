import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

type UserInterface = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UsersTable = ({ users }: { users: UserInterface[] }) => {
    const EmailRow = ({ email }: { email: string }) => {
        const [show, setShow] = useState<boolean>(false);

        const handleClick = () => {
            setShow((prev) => !prev);
        }
        const maskedEmail = (email: string) => {
            const emArr = email.split("@");
            const maskLength = emArr[0].length - 2;
            let masked = emArr[0][0];
            for (let i = 0; i < maskLength; i++) {
                masked += "*";
            }
            masked += emArr[0][emArr[0].length - 1];

            return masked + "@" + emArr[1];
        }

        return (
            <div className="flex gap-4 pl-8 items-center">
                <button onClick={handleClick}>
                    {show ? <FaEye /> : <FaEyeSlash />}
                </button>
                {show ? email : maskedEmail(email)}
            </div>
        )
    }

    return (
        <table className="table-fixed w-full">
            <thead>
                <tr className="h-12">
                    <th className="bg-blue-300 rounded-tl-xl border-collapse w-[10%]">Profile</th>
                    <th className="bg-blue-300 w-[30%]">First Name</th>
                    <th className="bg-blue-300 w-[30%]">Last Name</th>
                    <th className="bg-blue-300 rounded-tr-xl w-[30%]">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, i) => {
                    return (
                        <tr key={`user-${i}`} className="h-20 odd:bg-slate-100 last:rounded-b-xl">
                            <td className="flex justify-center items-center h-20"><Image className="rounded-full" src={user.avatar} alt="" height={40} width={40} /></td>
                            <td className="text-center">{user.first_name}</td>
                            <td className="text-center">{user.last_name}</td>
                            <td className="text-center"><EmailRow email={user.email} /></td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
    )
}

export default UsersTable;