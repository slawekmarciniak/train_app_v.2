import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "home", path: "/train_app_v.1/", exact: true },
  { name: "add workout", path: "/train_app_v.1/add_workout" },
  { name: "training list", path: "/train_app_v.1/training_list" },
  { name: "history", path: "/train_app_v.1/history" },
  { name: "contact", path: "/train_app_v.1/contact" },
  { name: "admin", path: "/train_app_v.1/admin" },
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
