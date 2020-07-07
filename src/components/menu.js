import React from "react"
import { Link } from "gatsby"

const Menu = ({ menuLinks }) => (
  <div
    style={{
      background: `#f4f4f4`,
      paddingTop: `10px`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-evenly`,
      }}
    >
      {menuLinks.map(({ name, link }) => (
        <li key={name}>
          <Link to={link}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Menu
