import { openMenu, closeMenu } from "@/redux/reducers/DropdownReducer";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterHover from "./CharacterHover";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const items = [
  { title: "Homepage", path: "/", layout: "one", slice: 4 },
  { title: "New Arrival", path: "/collection/New Arrival", layout: "one", slice: 4 },
  { title: "Top Sellings", path: "/collection/TOP SELLINGS", layout: "three", slice: 5 },
  { title: "Payment", path: "/payment", layout: "three", slice: 4 },
  { title: "Cart", path: "/cart", layout: "three", slice: 4 },
];

const images = [
  {
    img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1714095999450____%E6%9C%AA%E6%A0%87%E9%A2%98-1-03____.png?x-oss-process=image/format,webp",
    name: "Hirono",
  },
];

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const ListCharacters = () => {
  const [width] = useWindowSize();
  const dispatch = useDispatch();
  const { isOpen, activeMenu } = useSelector((state) => state.dropdown);

  const visibleItems = width <= 1024 ? items.slice(0, 3) : items;

  const handleMouseEnter = (menu) => {
    dispatch(openMenu(menu.title));
  };

  const handleMouseLeave = () => {
    dispatch(closeMenu());
  };

  const activeItem = items.find((item) => item.title === activeMenu);

  return (
    <div className="list-characters flex items-center" onMouseLeave={handleMouseLeave}>
      <Link to="/">
        <img
          src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
          alt="logo"
          className="logo"
        />
      </Link>
      <nav className="nav-menu flex">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(item)}
          >
            <Link to={item.path}>
              <span className="menu-link">{item.title}</span>
            </Link>
          </div>
        ))}
      </nav>
      {isOpen && activeItem && (
        <div className="dropdown-menu">
          <CharacterHover
            name={activeItem.title}
            imgs={images}
            layoutType={activeItem.layout}
            slice={activeItem.slice}
          />
        </div>
      )}
    </div>
  );
};

export default ListCharacters;