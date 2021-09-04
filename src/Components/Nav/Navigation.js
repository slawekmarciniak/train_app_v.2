import { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Hamburger from "../Hamburger";
import CloseButton from "../Buttons";

import "./styles.css";

const list = [
  { name: "home", path: "/", exact: true },
  { name: "add workout", path: "/add_workout" },
  { name: "training list", path: "/training_list" },
  { name: "history", path: "/history" },
  // { name: "contact", path: "/contact" },
  { name: "login", path: "/login" },
];

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const handleHamburger = () => {
    setMenuIsOpen((prev) => !prev);
  };
  const handleClose = () => {
    setMenuIsOpen(false);
  };

  const nav = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact && item.exact}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <Hamburger handleHamburger={handleHamburger} drawerIsOpen={menuIsOpen} />
      <Drawer
        style={{ backgroundColor: "red" }}
        open={menuIsOpen}
        variant={"persistent"}
      >
        <nav className="mainNav">
          <CloseButton handleClose={handleClose} />
          <ul>{nav}</ul>
        </nav>
      </Drawer>
    </>
  );
};

export default Navigation;
