import { FaMicrosoft } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

export default function PartnersRow(){
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center"
        >
            <figure>
                <FaMicrosoft className="text-9xl text-white"/>
                <figcaption className="text-center text-white text-xl m-2">
                    Microsoft
                </figcaption>
            </figure>
            <figure>
                <FaGoogle className="text-9xl text-white"/>
                <figcaption className="text-center text-white text-xl m-2">
                    Google
                </figcaption>
            </figure>
            <figure>
                <FaMeta className="text-9xl text-white"/>
                <figcaption className="text-center text-white text-xl m-2">
                    Meta
                </figcaption>
            </figure>
            <figure>
                <FaApple className="text-9xl text-white"/>
                <figcaption className="text-center text-white text-xl m-2">
                    Apple
                </figcaption>
            </figure>
        </div>
    );
}