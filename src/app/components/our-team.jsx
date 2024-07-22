import React from "react";
import Img from 'next/image';

const OurTeam = () => {
  return (
    <section className="w-full px-5 py-10 lg:p-20 flex flex-col lg:flex-row bg-[#f2f4f7] gap-6">
      <div className="w-full lg:w-1/2 h-full flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-bold">Our team</h1>
        </div>
        <div>
          <p className="text-sm font-medium">
            Our team Thousand is a full-cycle digital production company with
            its own product analytics, design, web and mobile development.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-4xl">28</span>
            <span className="text-slate-500 text-sm font-medium">team members</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-4xl">+100</span>
            <span className="text-slate-500 text-sm font-medium">projects</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-4xl">7 years</span>
            <span className="text-slate-500 text-sm font-medium">in IT sphere</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">
            All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-end">
        <Img 
          src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721637887/interns/IMG_6115_wxr8tp.png" 
          width="600" 
          height="400" 
          className="rounded-lg shadow-slate-500 shadow-lg"
          alt="Our Team"
        />
      </div>
    </section>
  );
};

export default OurTeam;
