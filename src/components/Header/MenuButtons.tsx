import type { FC } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Menu } from '@/types/Menus'

const MenuButtons:FC<{menus:Menu[]}> = ({ menus }) => {
  const buttons = menus.map((menu, index) => (
    <Button key={index} href={menu.href} sx ={{ fontSize: '1rem !important' }}>
      {menu.text}
    </Button>
  ))
  return (
    <ButtonGroup variant="contained" sx={{ boxShadow: 0 }}>
      {buttons}
    </ButtonGroup>
  )
}

export default MenuButtons
