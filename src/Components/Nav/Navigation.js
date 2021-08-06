import { NavLink } from "react-router-dom";
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
  const nav = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact && item.exact}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="mainNav">
        <ul>{nav}</ul>
      </nav>
    </>
  );
};

export default Navigation;
