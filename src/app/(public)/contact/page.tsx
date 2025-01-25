
import Header from "../../../app/components/Header"

import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactHeader() {
    return (
        <div  > <Header />
            <div className="h-80 w-full  bg-Bi justify-center items-center pt-24 bg-cover bg-center">

                <div className="relative text-center ">
                    <h1 className="text-5xl font-bold text-black">Contact</h1>
                    <p className="text-gray-700 mt-2 pt-5">
                        <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Contact</span>
                    </p>
                </div>
            </div>




            <div className="flex flex-col justify-center items-center mt-16 text-gray-500">
                <h1 className="font-bold text-4xl text-black">Get In Touch With Us</h1>
                <p className="text-sm w-[40%] pt-6 text-center ">For More Information About Our Product & Services. Please Feel Free To Drop Us
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate</p>
            </div>
    <div className="flex flex-row justify-center">

    

            <div className="bg-white min-h-screen flex flex-col w-[40%]">
                <div className="flex flex-col w-[50%] justify-center items-center mt-32 ">
                    <main className="flex justify-start mr-14 gap-6 ">< FaMapMarkerAlt size={25} className="mt-1 font-bold" />

                        <h1 className="font-semibold mr-8 text-2xl text-black pb-4">
                            Address
                        </h1>
                    </main>


                    <p className="w-44 ml-12  text-left text-sm text-gray-900 font-medium">236 5th SE Avenue, New
                        York NY10000, United
                        States</p>
                </div>


                <div className="flex flex-col w-[50%] justify-center items-center mt-24 ">
                    <main className="flex justify-start mr-14 gap-6 ">< FaPhoneAlt size={22} className="mt-1 font-bold" />

                        <h1 className="font-semibold mr-8 text-2xl text-black pb-3">
                            Phones
                        </h1>
                    </main>
                    <p className="w-44 ml-12  text-left text-sm text-gray-900 font-medium">Mobile: +(84) 546-6789

                        Hotline: +(84) 456-6789</p>
                </div>



                <div className="flex flex-col w-[50%] justify-center items-center mt-24 ">
                    <main className="flex justify-start mr-8 gap-4 " ><FaClock size={22} className="mt-1 font-bold" />

                        <h1 className="font-semibold mr-0 ml-4 text-2xl text-black pb-4">
                            Working Time
                        </h1>
                    </main>
                    <p className="w-44 ml-12  text-left text-sm text-gray-900 font-medium">Monday Friday: 9:00
                        22:00- <br />

                        Saturday Sunday: 9:00-
                        21:00</p>
                </div>


            </div>

<div className="">
<div className="max-w-lg mx-auto p-6 mt-28">
      <form className="space-y-6">
        {/* Name */}
        <div className="space-y-7">
          <label htmlFor="name" className="block text-base font-semibold text-gray-700">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Abc"
            className="mt-1 block w-96 pl-6  h-16 rounded-sm border border-gray-500 border-solid shadow-md  focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>

        {/* Email */}
        <div  className="space-y-7">
          <label htmlFor="email" className="block pt-9 text-base font-semibold text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Abc@def.com"
            className="mt-1 block w-96 pl-6 h-14 rounded-md border border-gray-700 shadow-md focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>

        {/* Subject */}
        <div  className="space-y-7">
          <label htmlFor="subject" className="block pt-9 text-base font-semibold text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="This is an optional"
            className="mt-1 block w-96 h-14 pl-6 rounded-md border border-gray-700 shadow-md focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>

        {/* Message */}
      

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-44 mb-10 mt-7 bg-white border border-gray-700 text-gray-900 py-2 px-4  rounded-xl hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

</div>

</div>

            <div className="flex flex-row items-center gap-14 justify-around  bg-pink-50 h-72">
                <div className="w-[80%] flex gap-16">


                    <div className=" flex flex-col ">

                        <h1 className="font-extrabold text-3xl">Free Delivery</h1>

                        <p className="text-gray-500 text-xl pt-4">For all oders over $50, consectetur
                            adipim scing elit</p>
                    </div>

                    <div className=" flex flex-col ">

                        <h1 className="font-extrabold text-3xl ">90 Days Return</h1>

                        <p className="text-gray-500 text-xl pt-4">If goods have problems, consectetur
                            adipim scing elit.</p>
                    </div>


                    <div className=" flex flex-col ">

                        <h1 className="font-extrabold text-3xl">Free Delivery</h1>
                        <p className="text-gray-500 text-xl pt-4">100% secure payment, consectetur
                            adipim scing elit</p>
                    </div>


                </div>
            </div>
        </div>
    );
}
