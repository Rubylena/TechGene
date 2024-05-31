import strawberry from "../assets/images/strawberry.jpg";
import redgrapes from "../assets/images/banana.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className=" bg-banner mb-7 h-[18em] sm:h-[20em] p-[1em]  relative  ">
      <div className=" py-[5em] sm:p-[5em] w-[90%] md:w-[50%] mx-auto text-center">
        <p className=" text-secondaryColor font-semibold -mb-1  text-text ">
          100% Organic
        </p>
        <h2 className=" text-heading sm:text-[2rem] font-bold font-sans ">
          Healthy Fruits & Vegetables
        </h2>

        <button className="hover-effect text-secondaryColor border-2 my-5 sm:my-3 border-secondaryColor p-2 rounded">
          Shop now
          <FaArrowRightLong className="inline sm:mx-2" />
        </button>
      </div>

      <div className=" ">
        <img
          alt="photo"
          src={strawberry}
          className=" w-[5em] h-[5em] sm:w-[12em] sm:h-[12em] absolute top-0 -right-3 object-cover rounded-t-md rounded-l-full opacity-75"
        />
        <img
          alt="photo"
          src={redgrapes}
          className="w-[5em] h-[5em] sm:w-[12em] sm:h-[12em] absolute bottom-0 -left-3 object-cover rounded-t-md rounded-r-full opacity-75  scale-y-[-1]"
        />
      </div>
    </div>
  );
}
