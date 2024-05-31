import { MdOutlineAccessTime } from "react-icons/md";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { useContext } from "react";
import Product from "./Product";
import { StoreContext } from "../../store/context";
import { IStoreContext } from "../../InterfaceAndTypes/Interface";

export default function AllProducts() {
  const { index, product, handleTab, inputValue } = useContext(
    StoreContext
  ) as IStoreContext;

  const tabs = ["All", "Fruits", "Vegetables", "Proteins", "Searched"];

  return (
    <>
      <div className="my-5">
        <h3 className="text-center font-semibold text-subheading sm:text-heading my-5 text-[#191919]">
          Featured Products
        </h3>

        <div className="flex gap-10 items-center justify-center font-medium w-full border-b-2 pb-1 cursor-pointer">
          {tabs.map((tab, i) => {
            return (
              <h4
                key={i}
                onClick={() => handleTab(i)}
                className={`${
                  inputValue === "" && i === 4
                    ? "hidden"
                    : i === index
                    ? "text-secondaryColor underline decoration-4 underline-offset-8"
                    : "text-fade text-text sm:text-[1rem] block"
                }`}
              >
                {tab}
              </h4>
            );
          })}
        </div>

        <div className="px-5">
          {product?.length > 0 ? (
            <Product product={product} />
          ) : (
            <div className="text-center py-20">
              <p>No product at this time</p>
            </div>
          )}
        </div>
      </div>

      <div className="my-5 grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col border p-3 gap-10 ">
        <div className=" text-center">
          <LiaShuttleVanSolid className=" text-secondaryColor text-[1.5rem] mx-auto my-1 animate-bounce" />
          <h3 className="font-bold text-text">Free Shipping</h3>
          <p className="text-[0.7rem] py-1">For all Order over 10000</p>
        </div>
        <div className="text-center">
          <MdOutlineAccessTime className=" text-secondaryColor text-[1.5rem] mx-auto my-1 animate-pulse" />
          <h3 className="font-bold text-text ">Delivery On Time</h3>
          <p className="text-[0.7rem] py-1"> If you have problems</p>
        </div>

        <div className="text-center">
          <MdPayment className=" text-secondaryColor text-[1.5rem] mx-auto my-1 animate-bounce" />
          <h3 className="font-bold text-text ">Secure payment</h3>
          <p className="text-[0.7rem] py-1">100% secure payment</p>
        </div>

        <div className="text-center">
          <MdSupportAgent className=" text-secondaryColor text-[1.5rem] mx-auto my-1 animate-pulse " />
          <h3 className="font-bold text-text ">24/7 support</h3>
          <p className="text-[0.7rem] py-1">Dedicated support</p>
        </div>
      </div>
    </>
  );
}
