import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { StoreContext } from "../store/context";
import { IStoreContext } from "../InterfaceAndTypes/Interface";

export default function Nav() {
  const { handleSearch, inputChange, inputValue } = useContext(
    StoreContext
  ) as IStoreContext;

  const [open, setOpen] = useState(false);
  const navData = ["HOME", "SHOP", "CONTACT"];

  return (
    <nav
      className={` ${
        open
          ? "mobileNav"
          : "flex justify-between items-center py-2 px-4 m-4 transition-all"
      }`}
    >
      <h2
        className={`${
          open ? "hidden" : "text-subheading  font-bold"
        } md:flex text-subheading  font-bold`}
      >
        Freshy
      </h2>

      <form
        onSubmit={handleSearch}
        className={`${
          open ? "flex" : "hidden"
        } md:flex transition-all justify-center !w-full`}
      >
        <input
          onChange={(e) => inputChange(e)}
          value={inputValue}
          type="search"
          placeholder="Search by name"
          className="rounded-l text-sm px-4 border outline-none py-2"
        />
        <button
          type="submit"
          className=" bg-black align-middle text-background  px-3 text-xs cursor-pointer rounded-r"
        >
          <CiSearch className="h-5 w-5" />
        </button>
      </form>

      <ul
        className={`${
          open ? "grid gap-4" : "hidden"
        } p-2 md:p-0 md:flex md:gap-10 items-center font-medium text-xs`}
      >
        {navData?.map((nav) => (
          <li
            key={nav}
            className={`${
              nav === "HOME" && "border-b-2 border-secondaryColor"
            } p-1 hover-effect cursor-pointer transition-all`}
          >
            {nav}
          </li>
        ))}
      </ul>
      <div
        className=" md:hidden cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <p>
            <IoIosClose className="font-extrabold text-subheading" />
          </p>
        ) : (
          <p>
            {" "}
            <RiMenu2Line className=" font-extrabold text-subheading" />
          </p>
        )}
      </div>
    </nav>
  );
}
