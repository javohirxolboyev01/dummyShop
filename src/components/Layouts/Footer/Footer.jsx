import React from "react";
import Logo from "@/assets/logo/Logo2.png";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
const Footer = () => {
  return (
    <footer className="bg-white text-black px-8 py-12 border-t mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={Logo} alt="Logo" className="w-[120px] h-[25px] " />
          <p className="text-sm text-gray-600 my-5">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Links</h3>
          <div className="flex flex-col space-y-2 text-sm text-gray-700">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/shop">Shop</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Newsletter</h3>
          <div className="flex border-b border-black pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <button className="text-sm font-semibold uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <hr className="my-6" />
        <p>2025 funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
