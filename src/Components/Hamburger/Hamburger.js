import "./style.css";

const Hamburger = ({ handleHamburger, drawerIsOpen }) => {
  return (
    <div
      onClick={handleHamburger}
      className={`burger ${drawerIsOpen ? "active" : null}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
