import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import PaidIcon from "@mui/icons-material/Paid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ResourceCard = () => {
  return (
    <div className="w-[189px] max-h-[294px] sm:w-[597px] sm:h-[209px] p-4 flex justify-between rounded-sm shadow-md">
      <div className="sm:w-1/2 space-y-3">
        <p className="text-xs text-skin-main font-bold">Advanced</p>
        <h1 className="text-xl mt-2">Top 5 UI/UX Tools to Improve Design</h1>
        <div className="flex justify-between sm:w-1/2 my-2">
          <div className="inline-flex item-center text-skin-hoverBlue font-semibold ">
            <CircleIcon className="w-[14px] my-auto" />

            <p className="ml-2 text-xs my-auto font-semibold">500 XP</p>
          </div>
          <div className="inline-flex item-center text-skin-hoverBlue font-semibold">
            <PaidIcon className="w-[14px] my-auto font-semibold" />
            <p className="ml-2 text-xs my-auto text-black">Free</p>
          </div>
        </div>
        <button className="w-full sm:w-inherit btn-blue text-xs py-2 my-2"><RemoveRedEyeIcon className="w-[11px]"/> <span className="my-auto ml-2">View Resource</span></button>
      </div>
      <img src="/Dummy.png" alt="" className="w-[228px] h-[166px] hidden sm:block"/>
    </div>
  );
};

export default ResourceCard;
