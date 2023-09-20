import dynamic from "next/dynamic"
import React, { useState } from "react"


const DynamicMenu = dynamic<any>(() =>import('./Menu').then(
    (mod) => (mod.Menu)
  )
)

export function Header() {
  const [showMenu, SetShowMenu] = useState(false)

  return (
    <ul>
      <li>primary menu</li>
      <li>secondary menu</li>
      <li>
        <button onClick={() => SetShowMenu(!showMenu)}>Open menu</button>
      </li>
      {showMenu && <DynamicMenu />}
    </ul>
  )
}
