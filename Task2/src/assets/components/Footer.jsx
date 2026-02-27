import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="grid grid-cols-5 text-white/80 text-lg p-4 bg-black/90">
        <h1>
          <span className="text-[tomato] text-2xl font-bold py-5">B</span>rand
        </h1>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold mb-3">Company</h1>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="w-[100rem] h-[1px] bg-[tomato] mt-8 "></div>

        <div className="flex items-center justify-center gap-4 mt-20 text-sm text-white/500">
          <span>© 2025 Ahmad Ali. All Rights Reserved.</span>

          {/* Social Icons */}
          <div className="flex gap-3">
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
