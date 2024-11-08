import React from "react";
import SampleSlider from "./SampleSlider";
import Package from "./Package";
import Cards from "./Cards";
function Body() {
  return (
    <div className="bg-slate-100 divide-transparent divide-slate-900">
      <SampleSlider/>
      <Package/>
      <Cards/>    
        <div className="flex justify-center my-7 bg-slate-100 font-bold font-serif text-gray-800 w-120 h-64 ">
        وب سایت رسمی آذرلند
      </div>
    </div>
  );
}

export default Body;
