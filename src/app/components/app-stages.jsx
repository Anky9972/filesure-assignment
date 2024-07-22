
import React from "react";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Img from "next/image";

const AppStages = () => {
  return (
    <section className="w-full px-5 py-10 lg:px-20 lg:py-20 flex flex-col gap-10">
      <div className="w-full flex justify-start text-3xl font-bold">
        <h1>Application Development Stages</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/4 flex flex-col gap-10">
          <Card className="relative shadow-lg">
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638559/interns/1_cucfvj.png"
              width="72"
              height="12"
              className="absolute right-0"
            />
            <CardHeader>
              <CardTitle className="flex gap-2 justify-start items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721644343/interns/planing_rcrrdo.png"
                    width="48"
                    height="48"
                  />
                </span>
                <span className="text-lg font-semibold">Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium text-left">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden shadow-lg">
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638558/interns/2_adeyse.png"
              width="130"
              height="172"
              className="absolute right-0"
            />
            <CardHeader>
              <CardTitle className="flex gap-2 justify-start items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721644343/interns/graphic-design_blneuv.png"
                    width="48"
                    height="48"
                  />
                </span>
                <span className="text-lg font-semibold">Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium text-left">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="relative shadow-lg">
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638558/interns/3_y2nrb9.png"
              width="135"
              height="172"
              className="absolute right-0"
            />
            <CardHeader>
              <CardTitle className="flex gap-2 justify-start items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721644343/interns/coding-language_t2susi.png"
                    width="48"
                    height="48"
                  />
                </span>
                <span className="text-lg font-semibold">Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium text-left">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Img
            src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638300/interns/hope-gif1_zfoiam.png"
            width="440"
            height="564"
          />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-10">
          <Card className="relative shadow-lg">
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638557/interns/4_iwbhmj.png"
              width="145"
              height="172"
              className="absolute right-0"
            />
            <CardHeader>
              <CardTitle className="flex gap-2 justify-start items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721644343/interns/security_haeo4a.png"
                    width="48"
                    height="48"
                  />
                </span>
                <span className="text-lg font-semibold">Testing</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium text-left">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="relative shadow-lg">
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638559/interns/5_dqeqhv.png"
              width="135"
              height="172"
              className="absolute right-0"
            />
            <CardHeader>
              <CardTitle className="flex gap-2 justify-start items-center">
                <span className="flex gap-2 justify-start items-center">
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721644343/interns/hosting_1_uszyor.png"
                    width="48"
                    height="48"
                  />
                </span>
                <span className="text-lg font-semibold">Launching</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium text-left">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="relative shadow-lg">
            <Img
              src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721638559/interns/6_xt4g1s.png"
              width="120"
              height="100"
              className="absolute right-0"
            />
            <CardHeader>
              <CardTitle className="flex gap-2 justify-start items-center">
                <span>
                  <Img
                    src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721644343/interns/application_ranqcn.png"
                    width="48"
                    height="48"
                  />
                </span>
                <span className="text-lg font-semibold">Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-medium text-left">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppStages;
