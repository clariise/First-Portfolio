import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] max-sm:px-0"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#45174c] to-[#1c164d] rounded-lg max-sm:rounded-none flex-col justify-end items-center gap-[132px] w-full"
      >
        <div className="flex justify-center items-center flex-col">
          <p className="text-stone-300 text-lg mb-[23px]">CONTACT ME</p>
          <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">
            Got a project? Let's talk!
          </p>
          <p className="text-stone-300 font-semibold md:text-2xl lg:text-4xl">
            clcarmona001@gmail.com
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full mt-[132px] ">
          <p className="text-white font-bold hidden md:block">
            Clarisse Carmona
          </p>
          <div className="flex justify-between gap-[19px]">
            <a href="#home" className="text-white font-semibold">
              Home
            </a>
            <a href="#services" className="text-white font-semibold">
              Services
            </a>
            <a href="#portfolio" className="text-white font-semibold">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
