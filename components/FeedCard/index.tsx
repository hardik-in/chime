import React from "react";
import Image from "next/image";
import { TiMessages } from "react-icons/ti";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="flex border-zinc-500 border border-l-0 border-t-0 border-r-0 border-b-1 p-4 hover:bg-[#0B192C] cursor-pointer">
      <div className="w-[10%] text-center mt-3">
        <Image
          alt="User-Image"
          src={"https://avatars.githubusercontent.com/u/91404384?v=4"}
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
      </div>
      <div className="w-[90%]">
        <h5 className="font-semibold">Hardik Sharma</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          earum iste assumenda quia, eveniet non. Nesciunt illo totam autem
          eveniet, ipsa dignissimos
        </p>
        <div className="flex justify-evenly mt-3 text-xl items-center">
          <div>
            <TiMessages />
          </div>
          <div>
            <FaRetweet />
          </div>
          <div>
            <AiOutlineLike />
          </div>
          <div>
            <MdOutlineFileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
