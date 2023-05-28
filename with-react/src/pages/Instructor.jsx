import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Footer, CourseDetHome, Divider } from "components";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Instructor = () => {
  return (
    <>
      <div className="bg-light_green h-[100vh] grid grid-cols-3 gap-4 px-10 py-20">
        <div className="flex flex-col col-span-1 p-4 text-center teacherProfile">
          <div className="w-[10rem] h-[10rem] rounded-full bg-white mx-auto profileIcon overflow-hidden">
            <img src="/images/img_image_521X510.png" alt="profile" />
          </div>
          <h1 className="text-xl text-emerald-600 mt-6">Mr. Teacher</h1>
          <p className="text-sm text-gray_700 mt-2 font-sans">
            Lecturer, Language Expert
          </p>
          <Divider />
          <div className="flex w-1/2 mx-auto mt-2 justify-evenly">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="flex flex-col p-4 col-span-2 teacherProfile">
          <h3 className="text-lg text-emerald-600 font-bold">
            About Mr. Teacher
          </h3>
          <p className="text-sm font-sans mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            expedita maiores provident repellat cupiditate? Aliquid odit, minus
            dicta possimus aliquam impedit blanditiis at saepe eligendi fugiat
            ipsam hic nobis asperiores ducimus nihil? Excepturi assumenda
            laborum esse minima illo fuga sequi, fugiat accusamus nesciunt
            tenetur saepe.
          </p>
          <h3 className="text-lg text-emerald-600 font-bold mt-8">Courses</h3>
          <div className="grid grid-cols-3 mt-6">
            <CourseDetHome
              id={1}
              imageDir={"/images/teacher.jpg"}
              courseName={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa maiores provide"
              }
              price={20}
              rating={4.3}
              // authorId={"Mr. Teacher"}
              description={"This is a course about making videos"}
            />
            <CourseDetHome
              id={1}
              imageDir={"/images/student.jpg"}
              courseName={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa maiores provide"
              }
              price={20}
              rating={3.9}
              // authorId={"Mr. Teacher"}
              description={"This is a course about making videos"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Instructor;
