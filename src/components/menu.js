import React from 'react'
import { Link } from 'gatsby'
import menuStyles from './menu.module.css'

const Menu = ({ menuLinks }) => (
  <ul className={menuStyles.back}>
    {menuLinks.map(({ name, link }) => (
      <li key={name}>
        <Link to={link}>{name}</Link>
      </li>
    ))}
  </ul>
)

export default Menu
