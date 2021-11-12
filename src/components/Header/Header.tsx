import type { CSSProperties, FC } from 'react'
import type { SxProps, Theme } from '@mui/system'
import type { Menu } from '@/types/Menus'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import MenuButtons from './MenuButtons'

const Header: FC<{menus: Menu[]}> = ({ menus }) => {
  return (
    <header style={wrapper}>
      <AppBar sx={{ position: 'absolute' }}>
        <Toolbar>
          <Link to="/">Knowledge Tests</Link>
          <Box sx={navigationStyles}>
            <MenuButtons menus={menus} />
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  )
}

const navigationStyles: SxProps<Theme> = {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-end'
}

const wrapper:CSSProperties = {
  position: 'relative',
  width: '100%',
  margin: '0 auto'
}

export default Header
