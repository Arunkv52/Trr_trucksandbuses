import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Myaccordition = () => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full py-3"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className={"text-[16px] text-[#ffffffa7]"}>
            Fuel Management
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-[15px]">
              Analyse fuel and DEF utilisation, identify and monitor events of
              fuel refilling and draining.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className={"text-[16px] text-[#ffffffa7]"}>
            Uptime Management
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-[15px]">
              Receive maintenance and predictive uptime alerts, register for
              services, and track repair progress in real-time.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={"text-[16px] text-[#ffffffa7]"}>
            Fleet Management
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-[15px]">
              Access actionable vehicle insights to enhance fleet efficiency and
              optimise asset utilisation.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className={"text-[16px] text-[#ffffffa7]"}>
            Marketplace
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-[15px]">
              Switch to a consolidated platform to discover Eicher and partner
              services for smarter fleet management.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Myaccordition;
