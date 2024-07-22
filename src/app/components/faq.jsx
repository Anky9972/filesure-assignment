import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="w-full px-5 lg:px-20 py-10 flex flex-col gap-10">
      <div className="w-full flex justify-start items-center">
        <h1 className="text-3xl font-bold">FAQ</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold border-t">
              What is the cost of a mobile application?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold border-t">
              How long will development take?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal flex flex-col gap-5">
              <span>
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer.
              </span>
              <span>
                <ul>
                  <li>
                    Average development time from start to finished application:
                  </li>
                  <li>
                    Medium projects up to <span className="font-bold">3 months</span>.
                  </li>
                  <li>
                    Large projects about <span className="font-bold">4-6 months</span>.
                  </li>
                  <li>
                    To get a more accurate estimate of the project completion
                    time, it is necessary to determine the main task of the
                    application, think over its logic and functionality.
                  </li>
                </ul>
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold border-t">
              Do you provide a guarantee for the mobile application?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold border-t">
              I will not tell my idea, do you guarantee confidentiality?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
