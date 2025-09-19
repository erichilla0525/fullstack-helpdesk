import { FcSearch } from "react-icons/fc";

export default function SearchBar() {
    return(
        <div className="w-full p-5 mt-40 md:text-center relative" >
            <div className="relative inline-block">
                <FcSearch className="text-2xl absolute translate-y-1/2" />
                <input className="w-full max-w-md h-8 bg-white p-5 font-bold md:text-center border-2" type="search" placeholder="Search for content..."/>
            </div>
        </div>
    );
}