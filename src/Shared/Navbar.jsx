import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to={"/"} className="hover:text-[#63AB45] ">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-[#63AB45] ">
          All Tourists Spot
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-[#63AB45] ">
          Add Tourists Spot
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-[#63AB45] ">
          My List
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-[#63AB45] ">
          Login
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-[#63AB45] ">
          Register
        </Link>
      </li>
    </>
  );
  return (
    <div className="w-full flex justify-center my-2">
      <div className="">
        <div className="w-[1290px] flex items-center">
          {/* logo */}
          <div className="flex-1">
            <Link to={"/"} className="flex items-center">
              <img
                src="../../src/assets/IMG_20240712_195259.jpg"
                alt=""
                className="w-12  h-10"
              />
              <h2 className="font-black text-2xl">TravelPulse</h2>
            </Link>
          </div>
          {/* navbar links  */}
          <div className="flex items-center">
            {/* Link */}
            <div className="pr-24 mr-24 border-[#82828A] border-r-2 hidden lg:block">
              <ul className="flex gap-10 font-semibold text-[16px] text-[#82828A] ">
                {links}
              </ul>
            </div>
            {/* Login  icon */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <div className="rounded-full bg-[#ECF5E8] p-2 ">
                  <FaRegCircleUser className="text-[28px] text-[#63AB45]" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
