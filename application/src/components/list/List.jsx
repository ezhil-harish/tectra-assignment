import React from 'react'
import { NavLink } from 'react-router-dom'

const List = ({ to, listName, picture }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
      }
    >
      <img src={picture} className='sidebar-link__img' aria-label='sidebar__List__img' alt="" />
      <span className="sidebar-link__label">{listName}</span>
    </NavLink>
  )
}

export default List