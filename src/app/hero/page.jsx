"use client"
import React from "react";
import Header from "../components/header";
import Img from 'next/image';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#f2f4f7] px-5 lg:px-20 relative">
      <Header />
      <div className="w-full lg:w-1/3 flex flex-col gap-5 mt-28 lg:mt-32">
        <h1 className="text-xl lg:text-4xl">
          <span className="font-bold">
            <span className="text-[#ffba00]">User-Centric Excellence: </span>
            <span className="font-medium">
              Our <br />
            </span>
            App Development Services
          </span>
          <br />
          <span className="font-medium">Tackles Your Pain Points</span>
        </h1>
        <p className="text-sm lg:text-base">
          Experience a Seamless Digital Journey with Desun - Where Every Line of
          Code Resolves Your Challenges and{" "}
          <span className="font-bold text-[#ffba00]">
            Elevates Your App Experience
          </span>{" "}
          to Unparalleled Heights.
        </p>
      </div>
      <div className="max-w-[600px] bg-white p-6 flex flex-col gap-8 rounded-xl shadow-lg mt-10 lg:mt-20">
        <div className="w-full">
          <h2 className="font-bold text-lg lg:text-xl">
            Leave your contacts and we will call you back within 30 minutes
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <span className="text-base font-medium text-slate-400">Full name</span>
            <span className="text-lg">My Name</span>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <span className="text-base font-medium text-slate-400">Phone number</span>
            <span className="text-lg">+91 0000000000</span>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full lg:w-1/2">
            <span className="text-base font-medium text-slate-400">Business name</span>
            <span className="text-lg">ABC Technologies PVT LTD</span>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <span className="text-base font-medium text-slate-400">Business mail</span>
            <span className="text-lg">demoaccount@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-[#80a948] text-sm lg:text-base font-bold text-white rounded-lg px-4 py-2">
            Get <span className="hidden lg:inline">Consultation</span>
          </button>
        </div>
      </div>
      <Img 
        src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721565712/interns/Group_1_kjplii.png" 
        width="624" 
        height="1976" 
        className="absolute right-0 top-6 hidden lg:block" 
        alt="Hero Image"
      />
    </section>
  );
};

export default Hero;
