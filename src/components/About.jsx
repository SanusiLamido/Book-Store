import React from "react";
import img from "../assets/img/book.jpg";
import {HiCheckBadge} from "react-icons/hi2";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between lg:px-32 px-5">
      <div>
        {/* { <img src={img} alt="img" /> } */}
      </div>
      <div>
        <h1>About Products</h1>
        <h2>Experience Book shopping redefined</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div>
            <HiCheckBadge size={25} className="text-backgroundColor"/>
        </div>
        <h2> Fiction </h2>
      </div>
    </div>
  );
};

export default About;
