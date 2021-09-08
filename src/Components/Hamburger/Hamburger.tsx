import {FC} from 'react'

import "./style.css";

interface HamburgerProps {
  handleHamburger: () => void;
  drawerIsOpen: boolean;
}

const Hamburger: FC<HamburgerProps> = ({ handleHamburger, drawerIsOpen }) => {
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
