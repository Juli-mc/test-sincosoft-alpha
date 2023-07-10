import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="p-2 bg-gray-300 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Julián Marin Córdoba
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://www.instagram.com/juli.marinc/"
            color="blue-gray"
            className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <i class="fa-brands fa-instagram"></i>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.github.com/juli-mc"
            color="blue-gray"
            className="text-xl font-normal transition-colors hover:text-blue-700 focus:text-blue-700"
          >
            <i class="fa-brands fa-github"></i>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <i class="fa-regular fa-envelope"></i>
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
