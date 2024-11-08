import React from "react";
import ScrollToTop from "react-scroll-to-top";
import reactLogo from "../../assets/logo.png";
import inmad from "../../assets/inmad.png";
const Button = () => {
  return (
    <div className="  bg-slate-100   px-16 drop-shadow-md rounded-md  h-96">
      <div className="">
        <div>
          <div style={{}} />   
          <ScrollToTop smooth />  
        </div>
        <div>
          {" "}
          <img className="w-20 m-6" src={reactLogo} alt="" />
        </div>
      </div>
      <div className=" flex justify-start p-5 text-s font-medium">
        <p className="p-5">شماره تماس : 34229101-041</p>
        <div className=" opacity-0 h-3 w-1">1</div>
        <p className="p-5">آدرس ایمیل : info@azarland.com</p>
        <div className=" opacity-0 h-3 w-1">1</div>
        <p className="p-5">
          شنبه تا پنجشنبه از ساعت 9 صبح الی 8 شب پاسخگوی شما عزیزان هستیم
        </p>
      </div>

   

      <div className="flex flex-nowrap">
        <div>
          <a className="m-1" href="url">
            راهنمای خرید
          </a>{" "}
          &nbsp;
          <br />
          <a className="m-1" href="url">
            نحوه ثبت سفارش
          </a>
          <br />
          <a className="m-1" href="url">
            رویه ارسال سفارش در آذرلند
          </a>
          <br />
          <a className="m-1" href="url">
            شیوه های پرداخت
          </a>
          <br />
          <a className="m-1" href="url">
            رویه بازگرداندن کالا در آذرلند
          </a>
        </div>
        <div className="font-sans">
          <a className="m-1" href="url">با آذربند</a>
          <a className="m-1" href="url">حریم خصوصی</a>
          <a className="m-1" href="url">شرایط استفاده</a>
          <a className="m-1" href="url"> سوالات پرتکرار </a>
        </div>
      </div>
      <div className="flex justify-between p-8">
      <div>
          {" "}
          <img className="w-16 rounded-md  " src={inmad} alt="" />
        </div>
        <p className="flex font-normal text-xs justify-end">
          درباره فروشگاه اینترنتی آذرلند
        </p>
        
      </div>
    </div>
  );
};

export default Button;
