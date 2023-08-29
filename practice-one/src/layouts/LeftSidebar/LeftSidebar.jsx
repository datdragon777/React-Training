import React from "react";
import TagLink from "../../components/TagLink/TagLink";
import { TAG_LINKS } from "../../data/tagLinks";
import { v4 as uuidv4 } from 'uuid';


const LeftSidebar = () => {
  return (
    <div className="left-sidebar">   
      <ul>
        {TAG_LINKS.map((tag_link) => {
          const { icon, name, path } = tag_link;

          return (
            <li key={uuidv4()}>
              <TagLink icon={icon} name={name} path={path} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
