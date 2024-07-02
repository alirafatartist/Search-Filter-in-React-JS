// Home.js
"use client";
import React from "react";
import { data } from "./data";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchby,setSearchby]=useState("first_name")

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Keeper</h1>
      <div className="options">
        <p
          className="items-center text-sm font-normal min-w-[50px] whitespace-nowrap relative px-3 py-2 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.1)] bg-[#1d1d42] text-white"
        >
          Search by 👇
        </p>
        <div
          className={`flex gap-4 items-center my-4`}
        >
          <div className="radio-item">
            <label
              htmlFor="first_name"
              className=" items-center cursor-pointer text-sm font-normal min-w-[50px] whitespace-nowrap relative px-3 py-2 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.1)] bg-[#1d1d42] text-white"
              onClick={()=>setSearchby('first_name')}
            >
              <input
                type="radio"
                name="search"
                id="first_name"
                className="mr-2"
              />
              First Name
            </label>
          </div>
          <div className="radio-item">
            <label
              htmlFor="last_name"
              className=" items-center cursor-pointer text-sm font-normal min-w-[50px] whitespace-nowrap relative px-3 py-2 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.1)] bg-[#1d1d42] text-white"
              onClick={()=>setSearchby('last_name')}
            >
              <input
                type="radio"
                name="search"
                id="last_name"
                className="mr-2"
              />
              Last Name
            </label>
          </div>
          <div className="radio-item">
            <label
              htmlFor="email"
              className=" items-center cursor-pointer text-sm font-normal min-w-[50px] whitespace-nowrap relative px-3 py-2 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.1)] bg-[#1d1d42] text-white"
              onClick={()=>setSearchby('email')}
            >
              <input type="radio" name="search" id="email" className="mr-2" />
              Email
            </label>
          </div>
          <div className="radio-item">
            <label
              htmlFor="phone"
              className=" items-center cursor-pointer text-sm font-normal min-w-[50px] whitespace-nowrap relative px-3 py-2 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.1)] bg-[#1d1d42] text-white"
              onClick={()=>setSearchby('phone')}
            >
              <input type="radio" name="search" id="phone" className="mr-2" />
              Phone
            </label>
          </div>
        </div>
      </div>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Search contacts"
        onChange={searchHandler}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b-2 border-gray-300 py-2 px-4">
                First Name
              </th>
              <th className="border-b-2 border-gray-300 py-2 px-4">
                Last Name
              </th>
              <th className="border-b-2 border-gray-300 py-2 px-4">Email</th>
              <th className="border-b-2 border-gray-300 py-2 px-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((x) => x[searchby].toLowerCase().includes(search))
              .map((contact, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100 text-center" : "bg-white text-center"}
                >
                  <td className="border-gray-300 border py-2 px-4">
                    {contact.first_name}
                  </td>
                  <td className="border-gray-300 border py-2 px-4">
                    {contact.last_name}
                  </td>
                  <td className="border-gray-300 border py-2 px-4">
                    {contact.email}
                  </td>
                  <td className="border-gray-300 border py-2 px-4">
                    {contact.phone}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}