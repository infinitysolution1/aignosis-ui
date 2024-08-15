"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-[#1e1d1d]">
      <div className=" flex flex-row justify-between w-full h-screen">
        <div className="flex flex-col items-center justify-center w-1/2 h-screen bg-[#000000] shadow-4xl z-40 relative overflow-hidden">
          <div className=" h-[50vh] w-[50vh] absolute -right-[20vh] -bottom-[20vh] ">
            <Image
              src="/blob.png"
              layout="fill"
              objectFit="contain"
              className=" opacity-40"
            />
          </div>

          <div className=" h-[50vh] w-[50vh] absolute -left-[20vh] -bottom-[20vh] ">
            <Image
              src="/blob.png"
              layout="fill"
              objectFit="contain"
              className=" opacity-40"
            />
          </div>

          <div className=" h-[50vh] w-[50vh] top-[10vh] absolute ">
            <Image
              src="/blob.png"
              layout="fill"
              objectFit="contain"
              className=" opacity-40"
            />
          </div>
          <h2 className="text-[4rem] z-40 text-white font-bold">Ai.gnosis</h2>
          <p className="text-[1rem] z-40 text-white">
            Please take the assesment to begin with the diagnosis{" "}
          </p>
          <div className=" w-9/12 mt-[5vh] z-40 py-4 px-4 border-[1px] border-[#c7c7c7]/40 rounded-xl bg-[#121212] flex flex-col items-center">
            <div className=" w-full flex flex-row justify-around">
              <div className=" flex flex-col items-start">
                <p className="text-xs text-white/80">Assessment Duration</p>
                <p className="text-xl text-white">20 mins</p>
              </div>

              <div className=" flex flex-col items-start">
                <p className="text-xs text-white/80">No. of Questions</p>
                <p className="text-xl text-white">10</p>
              </div>

              <div className=" flex flex-col items-start">
                <p className="text-xs text-white/80">Mode</p>
                <p className="text-xl text-white">Online</p>
              </div>
            </div>

            <button className="w-1/2 mt-8 border-[0.5px] border-[#b8aeba55] transition-all duration-150 hover:scale-95 py-2 px-4 bg-[#3b0d46] text-white rounded-lg">
              Start Assessment
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-1/2 bg-[#1a1a1a] py-8 px-[5%] overflow-y-scroll">
          <div className=" flex flex-col items-start h-[30vh] w-full mt-[30vh] ">
            <h2 className="text-[2rem] leading-[2rem] text-white font-bold">
              Welcome to Ai.gnosis early detection screener
            </h2>
            <p className="text-[1rem] text-white mt-[2.5vh]">
              Ai.gnosis is an online platform that helps you to detect early
              signs of developmental disorders in children.
            </p>

            <button className="w-1/2 mt-8 border-[0.5px] border-[#b8aeba55] transition-all duration-150 hover:scale-95 py-2 px-4 bg-[#3b0d46] text-white rounded-lg">
              {"Let's get started"}
            </button>
          </div>

          <div className=" flex flex-col items-start h-[30vh] w-full mt-[15vh]">
            <h2 className="text-[2rem] leading-[2rem] text-white font-bold">
              Prerequisites:
            </h2>
            <p className="text-[1rem] text-white mt-[2.5vh]">
              1. A quiet room with no distractions
            </p>
            <p className="text-[1rem] text-white mt-[0.5vh]">
              2. A device with a stable internet connection
            </p>
            <p className="text-[1rem] text-white mt-[0.5vh]">
              3. Working camera and microphone
            </p>
          </div>

          <div className=" flex flex-col items-start h-full w-full mt-[25vh]">
            <h2 className="text-[2rem] leading-[2rem] text-white font-bold">
              Registration Form
            </h2>
            <p className="text-[1rem] text-white mt-2">
              Please fill the form below to begin the assessment
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
              <div className=" grid grid-cols-2 gap-4">
                <div className="flex flex-col items-start w-full">
                  <label className="text-white text-[0.8rem]">Name</label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    className="w-full py-2 px-2 border-[0.5px] border-[#b8aeba55] rounded-lg bg-[#121212] text-white"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label className="text-white text-[0.8rem]">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    {...register("dob", { required: true })}
                    className="w-full py-2 px-2 border-[0.5px] border-[#b8aeba55] rounded-lg bg-[#121212] text-white"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label className="text-white text-[0.8rem]">
                    Age in days
                  </label>
                  <input
                    type="number"
                    name="ageInMonths"
                    {...register("ageInMonths", { required: true })}
                    className="w-full py-2 px-2 border-[0.5px] border-[#b8aeba55] rounded-lg bg-[#121212] text-white"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label className="text-white text-[0.8rem]">
                    Age in months
                  </label>
                  <input
                    type="number"
                    name="ageInMonths"
                    {...register("ageInMonths", { required: true })}
                    className="w-full py-2 px-2 border-[0.5px] border-[#b8aeba55] rounded-lg bg-[#121212] text-white"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label className="text-white text-[0.8rem]">
                    Age in years
                  </label>
                  <input
                    type="number"
                    name="ageInYears"
                    {...register("ageInYears", { required: true })}
                    className="w-full py-2 px-2 border-[0.5px] border-[#b8aeba55] rounded-lg bg-[#121212] text-white"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label className="text-white text-[0.8rem]">
                    Assessment Type
                  </label>
                  <select
                    name="assessmentType"
                    {...register("assessmentType", { required: true })}
                    className="w-full py-2 px-2 border-[0.5px] border-[#b8aeba55] rounded-lg bg-[#121212] text-white"
                  >
                    <option value="">Select Assessment Type</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                    <option value="Type 3">Type 3</option>
                  </select>
                </div>
              </div>
              <div className=" mt-6 flex flex-row justify-start items-center">
                <input type={"checkbox"} className=" h-4 w-4" />
                <label className="text-white text-sm ml-2">
                  Consent form filled
                </label>
              </div>
              <div className=" mt-2 flex flex-row justify-start items-center">
                <input type={"checkbox"} className=" h-4 w-4" />
                <label className="text-white text-sm ml-2">
                  I agree to the terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="w-1/2 mt-8 border-[0.5px] border-[#b8aeba55] transition-all duration-150 hover:scale-95 py-2 px-4 bg-[#3b0d46] text-white rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>

          <div className=" flex flex-col items-start h-full w-full mt-[25vh]">
            <h2 className="text-[2rem] leading-[2rem] text-white font-bold">
              Assessment Instructions
            </h2>

            <p className="text-[1rem] text-white mt-2">
              Please read the instructions below before starting the assessment
            </p>

            <div className="flex flex-col items-start mt-4 gap-y-4">
              <p className="text-sm text-white">
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <p className="text-sm text-white">
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <p className="text-sm text-white">
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <p className="text-sm text-white">
                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
