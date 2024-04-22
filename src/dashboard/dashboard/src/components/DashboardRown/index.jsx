import React from "react";
import { Text } from "./..";

export default function DashboardRown({
  dynamictext = "N",
  dynamictext1 = "Nihal Mutha",
  dynamictext2 = "View Profile",
  ...props
}) {
  return (
    <div {...props}>
      <Text
        as="p"
        className="ml-[18px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-800 text-center !font-normal tracking-[0.32px]"
      >
        {dynamictext}
      </Text>
      <div className="flex flex-col items-start gap-0.5">
        <Text size="s" as="p" className="!font-medium tracking-[0.28px]">
          {dynamictext1}
        </Text>
        <Text size="xs" as="p" className="!text-gray-500">
          {dynamictext2}
        </Text>
      </div>
    </div>
  );
}
