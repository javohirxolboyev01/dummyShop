import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Bog'lanish
            </h2>
            <p className="text-gray-600 mb-8">
              Siz bilan aloqada bo‘lishdan mamnunmiz. Quyidagi forma orqali
              xabar qoldiring.
            </p>

            <div className="space-y-6 text-gray-700 text-base">
              <div className="flex items-start space-x-3">
                <span className="text-red-600 text-xl">
                  <CiLocationOn />
                </span>
                <div>
                  <p className="font-semibold">Manzil</p>
                  <p>Toshkent shahri, Yangi hayot tuman </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">
                  <FiPhone />
                </span>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p>+998 77 254 09 45</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className=" text-xl">
                  <CgMail />
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>javohirxolboyev021@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* O‘ng qism */}
          <div className="bg-gray-50 p-10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ismingiz
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
                  placeholder="Email manzilingiz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Xabar
                </label>
                <textarea
                  rows="5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
                  placeholder="Xabaringizni yozing..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f4b400] text-white font-semibold py-3 rounded-xl hover:bg-[#e0a800] transition"
              >
                Xabarni yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
