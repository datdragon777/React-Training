import React from "react";
import TagLink from "../../components/TagLink/TagLink";
import { tag_links } from "../../data/tagLinks";
import { v4 as uuidv4 } from 'uuid';


const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul>
        {tag_links.map((tag_link) => {
          const { icon, name, path } = tag_link;

          return (
            <li key={uuidv4()}>
              <TagLink icon={icon} name={name} link={path} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
