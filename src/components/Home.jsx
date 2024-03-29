import React from "react";
import img from "../assets/img/hro.jpg";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5">
      <div className="w-full lg:w-2/4 space-y-4 mt-20">
        <h1 className="text-5xl font-semibold leading-tight">
          Discover amazing books..
        </h1>
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
        <Button title="Order Now" />
      </div>
      <div>{/* <img src={img} alt='img'/> */}</div>
    </div>
  );
};

export default Home;
