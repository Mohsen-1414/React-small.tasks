import { useState } from "react";
import MenuList from "./menu-list";

function MenuItem({ item }) {
  const [displayChildrenItem, setDisplayChildrenItem] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayChildrenItem({
      ...displayChildrenItem,
      [getCurrentLabel]: !displayChildrenItem[getCurrentLabel],
    });
  }

  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span>
            <button onClick={() => handleToggleChildren(item.label)}>
              {displayChildrenItem[item.label] ? "-" : "+"}
            </button>
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayChildrenItem[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
