import React from 'react';
import '../component styles/expandableMenu.css';
export function Item({ metaTag, className, iconName, text }) {
  return (
    <button class='expandable-btn '>
      <i className={`${className} material-icons material-icons-outlined mr-2`}>
        {iconName}
      </i>
      {text}
      {metaTag}
    </button>
  );
}

function ExpandableMenu({ iconName, text, listItems }) {
  return (
    <div className='expandible'>
      <button
        class='expandable-btn '
        type='button'
        data-toggle='collapse'
        data-target={`#${text}`}
        aria-expanded='false'
        aria-controls={text}
      >
        <i className={` material-icons material-icons-outlined mr-2`}>
          {iconName}
        </i>
        {text}
        <i className={`material-icons material-icons-outlined ml-auto `}>
          navigate_next
        </i>
      </button>
      <div class='collapse multi-collapse' id={text}>
        {listItems.map((item) => (
          <a className={'expandable-item'} href='/'>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExpandableMenu;
