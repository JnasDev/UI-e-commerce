import React from "react";
import ip14 from "../../img/ip14.png";

function Header() {
  return (
    <section class="bg-gray-900 pt-24">
      <div class="grid max-w-[1240px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-[#111827]">
        <div class="mr-auto place-self-center lg:col-span-7 bg-[#111827]">
          <h1 class="bg-[#111827] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-gray-400 leading-none md:text-5xl xl:text-5xl dark:text-white">
          Our store is the best place to buy the products you love.
          </h1>
          <p class="max-w-2xl bg-[#111827] mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, earum recusandae.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Buy now
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center bg-[#111827] px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 text-white hover:text-black"
          >
            About us
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#111827]">
          <img
          className="bg-[#111827]"
            src={ip14}
            alt="mockup"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Header;
