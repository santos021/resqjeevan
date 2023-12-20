import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#232D3F] h-[80px]">
        <Image src={"/g20.png"} alt="img" width={100} height={100} />
        <h2 className="text-white text-[50px]">
          <Link href="/">ResQjeevan</Link>
        </h2>
        <Image src={"/Emb.png"} alt="img" width={50} height={50} />
      </div>
    </div>
  );
};

export default Navbar;
