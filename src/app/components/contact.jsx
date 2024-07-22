import React from "react";
import {
  Card
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="w-full px-5 py-10 lg:px-20 lg:py-20 bg-gradient-to-r from-[#FABC1F] to-[#7CA546] flex flex-col lg:flex-row justify-between gap-10">
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="text-4xl font-bold text-white">Let's discuss</div>
        <div className="text-4xl font-bold text-white">Your project</div>
        <div>
          <p className="text-white">
            Let&apos;s figure out how to create an effective application,<br />
            its cost and terms of its development.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-end">
        <Card className='flex flex-col p-5 w-full lg:w-3/4 gap-5'>
          <div className="flex flex-col gap-5 lg:flex-row w-full">
            <div className='flex flex-col border-b w-full lg:w-1/2'>
              <span className="text-xs font-medium text-slate-500">Full name</span>
              <span className="text-sm font-normal">My name</span>
            </div>
            <div className='flex flex-col border-b w-full lg:w-1/2'>
              <span className="text-xs font-medium text-slate-500">Phone number</span>
              <div className="text-sm font-normal flex gap-2">
                <span></span>
                <span>+91</span>
                <span>0000000000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row w-full">
            <div className='flex flex-col border-b w-full lg:w-1/2'>
              <span className="text-xs font-medium text-slate-500">Business name</span>
              <span className="text-sm font-normal">ABC Technologies PVT LTD</span>
            </div>
            <div className='flex flex-col border-b w-full lg:w-1/2'>
              <span className="text-xs font-medium text-slate-500">Business mail</span>
              <span className="text-sm font-normal">demoaccount@gmail.com</span>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button className="bg-[#FABC1F]">Discuss the project</Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
