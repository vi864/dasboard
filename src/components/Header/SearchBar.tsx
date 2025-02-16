import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Search Term:", searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="relative p-1 rounded-lg w-[300px] border dark:bg-gray-700 dark:border-none">

                    <button
                        type="submit"
                        className="absolute left-0 top-1/2 px-2 -translate-y-1/2"
                    >
                        <CiSearch size={"20px"} />
                    </button>

                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-transparent pl-7 pr-2 text-black focus:outline-none dark:text-white xl:w-125"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
