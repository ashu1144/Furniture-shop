import React from "react";
import check from "../assets/check1.png";
import alert from "../assets/alert-circle.png";
const OfferBanner = () => {
  return (
    <div className="bg-[#272343] text-white w-full h-10 p-2 max-sm:hidden">
      <div className="flex justify-between max-w-[80vw] m-auto ">
            <div className="flex gap-3">
                <img src={check} alt="" />
                <span>free shopping on all orders over $50</span>
            </div>
            <div className="flex items-center gap-5">
                <span>
                    Eng<select name="" id=""></select>
                </span>
                <span>faqs</span>
                <span>
                    <img src={alert} alt="" className="inline mr-1" />
                    need help
                </span>
            </div>
      </div>
    </div>
  );
};

export default OfferBanner;
