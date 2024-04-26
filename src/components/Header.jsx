import React from "react";
import Logo from "./img/bug.png";
import Avatar from "./img/avatar.png";
import {TbPaperBag} from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { async } from "@firebase/util";

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  }

  return (
  <header className="fixed z-50 w-screen p-6 px-16 bg-slate-300">
    {/* desktop tablet */}
    <div className="hidden md:flex w-full h-full items-center justify-between">
      <Link to={"/"} className="flex items-center gap-2">
        <img src={Logo} className="w-12 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold"> SOUTH PARK</p>
    </Link>
    
    <div className="flex items-center gap-8"> 
      <ul className="flex items-center gap-8 ml-auto">
      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
      </ul>

      <div className="flex items-center justify-center">
      <TbPaperBag className="text-textColor text-2xl cursor-pointer"/>
      
      </div>

      <div className="relative">
      <motion.img whileTap={{scale : 0.5}}
      src={Avatar} className="w-10 min-w-40 h-10 min-h-40 cursor-pointer" alt="userprofile" onClick={login}/>
      </div>
    </div>
  </div>

    {/* mobile*/}
    <div className="flex md:hidden w-full h-full"></div>
  </header>
  );
};

export default Header;