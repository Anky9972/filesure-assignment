import React from "react";
import Img from "next/image";

const LogoBar = () => {
  return (
    <section className="w-full p-5 lg:p-20">
      <div className="w-full border-b border-t flex items-center py-10">
        <div className="w-full grid grid-cols-3 lg:flex flex-wrap justify-between items-center gap-5 lg:gap-10">
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721566770/interns/image_10_rxjzsd.png"
            width="163"
            height="72"
            alt="Logo"
          />
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721566770/interns/image_10_rxjzsd.png"
            width="163"
            height="72"
            alt="Logo"
          />
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721566770/interns/image_10_rxjzsd.png"
            width="163"
            height="72"
            alt="Logo"
          />
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721566770/interns/image_10_rxjzsd.png"
            width="163"
            height="72"
            alt="Logo"
          />
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721566770/interns/image_10_rxjzsd.png"
            width="163"
            height="72"
            alt="Logo"
          />
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721566770/interns/image_10_rxjzsd.png"
            width="163"
            height="72"
            alt="Logo"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row px-10 py-5 lg:py-10">
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Full development cycle</h1>
            <p>We use proven technologies</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Web</h2>
              <p className="text-sm">
                PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js /
                <br /> Nuxt / MySQL / Laravel / GO lang / django / Python
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Mobile</h2>
              <p className="text-sm">
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm
                /<br /> Coroutine / RxJava / RxSwift / Unit Test / Navigation
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-1/4 flex flex-col gap-2">
          <ul className="w-full flex flex-col gap-2">
            {[
              "iOS development",
              "Android development",
              "Web development",
              "UI/UX design",
              "Testing",
              "Launch",
              "IT consulting",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 hover:font-bold hover:cursor-pointer">
                <span className="hover:border-b">{item}</span>
                <Img
                  src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721646669/interns/Icon_Color_yszync.png"
                  width="6"
                  height="5"
                  alt="Arrow Icon"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
