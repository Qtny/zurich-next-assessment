import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="text-gray-500 w-full min-w-[900px] max-w-[1024px] mt-20">
            <div className="border-gray-200 border-[1px] border-top w-full" />
            <div className="flex justify-between pt-4">
                <p className="text-sm">© 2014-2025 Zurich NextJS Assessment. All rights reserved</p>
                <div className="flex gap-4">
                    <FaFacebook className="cursor-pointer" />
                    <FaInstagram className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Footer;