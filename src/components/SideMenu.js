import React from "react";
import Search from "./Search"
import MenuLinks from "./MenuLinks"
import Logo from "./Logo"

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;
