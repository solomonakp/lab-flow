import React from 'react';
import '../component styles/expandableMenu.css';
import { camelCase } from 'lodash';

export function ListItem({ metaTag, iconName, text }) {
  return (
    <li>
      <a className='expandable-btn ' href='/'>
        <i className={`material-icons-outlined mr-2 item-icon`}>{iconName}</i>
        {text}
        {metaTag}
      </a>
    </li>
  );
}

export function Collapsibles({ children }) {
  return (
    <ul className='list-group accordion' id='collapsibles'>
      {children}
    </ul>
  );
}

export function CollapsibleList({ iconName, name, collapseItems }) {
  return (
    <li className='collapsible-list'>
      <button
        className='expandable-btn'
        type='button'
        data-toggle='collapse'
        data-target={`#${camelCase(name)}`}
        aria-expanded='false'
        aria-controls={camelCase(name)}
        id={`${camelCase(name)}-collapse`}
      >
        <i className={`material-icons-outlined mr-2 item-icon`}>{iconName}</i>
        {name}
        <i className={`material-icons-outlined ml-auto meta-tag`}>
          navigate_next
        </i>
      </button>
      <div
        id={camelCase(name)}
        className='collapse'
        aria-labelledby={`${camelCase(name)}-collapse`}
        data-parent='#collapsibles'
      >
        <div className='link-box'>
          {collapseItems.map((item, index) => (
            <a href='/' className='link-item' key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
export function ListHeader({ headName }) {
  return <li className='list-header'>{headName}</li>;
}

export function ListGroup({ headName, children }) {
  return (
    <ul className='list-group'>
      <ListHeader headName={headName} />
      {children}
    </ul>
  );
}
