import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import reactLogo from "../../assets/logo.png";
import { HiChevronDown } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
 
function Login (){

}
const Headers = () => {
  return (
    <div dir="rtl">
      <div className="flex justify-center items-center bg-blue-600  h-12 ">
        <p className="m-1 mx-96 text-slate-50   ">
          وب سایت آذرلند درحال بروزرسانی میباشد. از صبر و شکیبایی شما
          سپاسگذاریم.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify">
        <div>
          {" "}
          <img className="w-28 m-6 mx-6" src={reactLogo} alt="" />
        </div>
        <div>
          <div>
            {" "}
            <form class=" w-72 mx-auto rounded-md">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="جستجو در هزاران محصول"
                  required
                />
                <button
                  type="submit"
                  className="text-white w-12 mr-0 rounded-xl absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-rose-900 focus:ring-4 focus:outline-none    text-sm px-4 py-2  "
                >
                  <svg
                    class="w-4 h-4 text-slate-50 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
        <div onClick={Login} className="items-center flex ml-8 ">
          <div className=" ">
            <div className=" flex  items-center  justify-around border-solid border rounded-xl w-40 h-10 m-4">
              <FaRegUserCircle className="mr-0 w-16" />
              <p className="w-36 m-0 font-normal text-sm"> ورود / ثبت نام</p>
              <HiChevronDown className="text-slate-300 w-10 ml-1" />
            </div>
          </div>
          <div>
            <i>
              <SlBasket className="size-7" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
