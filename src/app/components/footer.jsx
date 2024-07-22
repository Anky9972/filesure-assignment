import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Img from "next/image";

const Footer = () => {
  return (
    <div className="w-full px-5 lg:px-20 py-5">
      <Card className="flex flex-col justify-center items-center w-full bg-black">
        <CardHeader>
          <CardTitle>
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635277/interns/logo-bg-3_2_hkyw9n.png"
              width="290"
              height="113"
              alt="Logo"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex text-[#969696] gap-2 justify-center items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635463/interns/smartphone_outline_24_awsori.png"
                    width="24"
                    height="24"
                    alt="Phone Icon"
                  />
                </span>
                <span className="text-xs">Contact nums</span>
              </div>
              <div className="flex text-white font-semibold text-sm">
                <span>+91</span>
                <span>0000000000</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex text-[#969696] gap-2 justify-center items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635505/interns/mail_outline_24_itzh3v.png"
                    width="24"
                    height="24"
                    alt="Mail Icon"
                  />
                </span>
                <span className="text-xs">Gmail</span>
              </div>
              <div className="flex text-white font-semibold text-sm">
                <span>demo@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex text-[#969696] gap-2 justify-center items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635505/interns/place_outline_24_ssk4tc.png"
                    width="24"
                    height="24"
                    alt="Address Icon"
                  />
                </span>
                <span className="text-xs">Address</span>
              </div>
              <div className="flex text-white font-semibold text-sm">
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex text-[#FFFFFF] gap-2 justify-center items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635505/interns/document_outline_24_upu7wn.png"
                    width="24"
                    height="24"
                    alt="Request Icon"
                  />
                </span>
                <span className="text-xs text-[#969696]">Leave a request</span>
              </div>
              <div className="flex text-white font-semibold text-sm">
                <span>Leave a request</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-white">We work throughout the world</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
