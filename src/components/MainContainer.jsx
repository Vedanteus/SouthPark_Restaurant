import React from "react";
import Delivery from "./img/delivery.png";
import Food from "./img/food.jpg";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="p-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 p-2 justify-center bg-orange-300 rounded-full">
        <p className="text-base font-bold"> Bike Delivery</p>
        <div className="w-11 h-11 rounded-full overflow-hi">
          <img src={Delivery} className="w-full h-full object-contain" alt="delivery"></img>
        </div>
        </div>

        <p className="text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-600 text-[4rem]">Your City</span>
        </p>

        <p className="text-base text-textColor text-center md:text left">
          adadadad asadada das da da sdad asdadadasdada sda dsfasd fasfdasdf  safda sfd asdf asdf asdf asfsdf asfd asfdasfdsa 
          dfasdfasdfasdf asfasdfas dfasdf asfdasdf sadfas fsfd asdf asfasfd asdf asfd asfd asdf asdfa sfdasdfasdf asdf asdf 
          adasdad asdasdadas dads ad ada sdasdads adsadsasda dasdasd asd a dads ads a da da sd ad ad ad ad ad ad sasf sadf
        </p>

        <button type="button" className="bg-orange-500 w-full md:w-auto rounded-lg px-4 py-2">Order Now</button>
      </div>
      <div className="p-4 flex-1">
        <img src={Food} className="rounded-full" alt="food"></img>
      </div>
    </div>
  )
}

export default MainContainer