import React from "react";
import { GiFeather } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";

interface sideButtons {
  tittle: String;
  icon: React.ReactNode;
}

const sideBarButtons: sideButtons[] = [
  {
    tittle: "Home",
    icon: <MdHome />,
  },
  {
    tittle: "Explore",
    icon: <MdOutlineExplore />,
  },
  {
    tittle: "Notifications",
    icon: <IoIosNotifications />,
  },
  {
    tittle: "Messages",
    icon: <BiSolidMessageSquareDetail />,
  },
  {
    tittle: "Bookmarks",
    icon: <BsFillBookmarkStarFill />,
  },
  {
    tittle: "Profile",
    icon: <CgProfile />,
  },
];

export default function Home() {
  return (
    <div className="flex items-center h-screen w-screen">
      {/* Left Panel */}
      <div className="w-[25%] h-full border-zinc-500 border-r-[1px] py-10 px-20">
        <button className="text-[#FF6500] hover:text-[#FF4500] hover:bg-[#0B192C] rounded-full transition-all duration-500 ease-in-out">
          <GiFeather className="text-5xl" />
        </button>
        <div className="mt-5">
          <ul>
            {sideBarButtons.map((item) => (
              <li
                key={String(item.tittle)}
                className="flex items-center gap-3 text-xl font-semibold mb-3 hover:bg-[#0B192C] rounded-full p-3 cursor-pointer transition-all duration-500 ease-in-out"
              >
                <span className="text-[#FF6500]">{item.icon}</span>
                <span>{item.tittle}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[#0B192C] font-mono font-bold text-2xl p-4 mt-4 w-full rounded-full hover:bg-[#1E3E62] transition-all duration-500 ease-in-out">
          Publish
        </button>
      </div>

      {/* Posts */}
      <div className="w-[45%] overflow-scroll h-screen hide-scrollbar">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>

      {/* Right Panel */}
      <div className="w-[30%] h-full  border-zinc-500 border-l-[1px]"></div>
    </div>
  );
}
