import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="bg-[url(/backgr.png)] pt-64 pb-60 relative z-10 after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(106,98,197,0.7)]">
      <div className="container">
        <h1 className="text-words font-bold text-[84px] text-center font-primary w-[962px] m-auto">
            You're Unique.Your Website Should be too</h1>
            <p className="text-words font-normal text-2xl font-primary w-[700px] text-center m-auto pt-5">A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </p>
            <div className="flex gap-7 capitalize justify-center mt-4">
                <Button title="get free quoto"/>
                <Button title="Learn More"/>
            </div>
            <div className=" relative after:absolute after:bottom-0 after:right-0 after:w-full after:h-full ">
                <img src="/bannside.png" alt="bannside" />
            </div>
      </div>
    </section>
  );
};

export default Banner;
