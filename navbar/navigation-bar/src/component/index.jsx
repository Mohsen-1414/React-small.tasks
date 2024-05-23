import MenuList from "./menu-list";

function SideBar({ menus = [] }) {
  return (
    <div className="tree-menu-container">
      <MenuList list={menus} />
    </div>
  );
}

export default SideBar;
