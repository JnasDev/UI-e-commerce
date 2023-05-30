import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="fixed w-full z-20 top-0 left-0 ">
      <div class="max-w-[1240px] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-700 ">
            ThanaDev
          </span>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 hover:shadow-[0px_0px_10px_#1e40af] md:mr-0"
          >
            SHOPPING
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#111827] rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#111827] rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#111827] rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }

export default Navbar;
