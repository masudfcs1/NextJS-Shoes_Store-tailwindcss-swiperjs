import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 2, name: "About", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({ showCatmenu, setshowCatmenu, setmobileMenu }) => {
  return (
    <ul className=" flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className=" cursor-pointer flex py-4 px-5 border-b flex-col relative"
                onClick={() => setshowCatmenu(!showCatmenu)}
              >
                <div className=" flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatmenu && (
                  <ul className=" bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href="/"
                          onClick={() => {
                            setshowCatmenu(false);
                            setmobileMenu(false);
                          }}
                        >
                          {" "}
                          <li className=" py-4 px-8 border-b flex justify-between">
                            {submenu.name}{" "}
                            <span className=" opacity-50 text-sm">1</span>
                          </li>{" "}
                        </Link>
                      );
                    })}{" "}
                  </ul>
                )}
              </li>
            ) : (
              <li className=" py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setmobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
