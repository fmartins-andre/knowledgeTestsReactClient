import type { FC } from 'react'
import type { SxProps, Theme } from '@mui/system'
import Box from '@mui/material/Box'
import { Header } from '../Header'
import { Menu } from '@/types/Menus'

const Layout:FC<{menus:Menu[]}> = ({ children, menus }) => {
  return (
    <Box sx={gridLayout}>
      <Header menus={menus}/>

      <Box sx={contents} component="main">
        {children}
      </Box>

      <Box sx={contents} component="footer">
        footer
        <br />
        teste
      </Box>
    </Box>
  )
}

const contents: SxProps<Theme> = (theme) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`
})

const gridLayout: SxProps<Theme> = (theme) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'minmax(320px, 1fr)',
  gridTemplateRows: '64px minmax(400px, 1fr) max-content',
  gap: 2,
  minHeight: '100vh',
  height: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  boxShadow: '0 0 30px ' + theme.palette.primary.main,
  [theme.breakpoints.up('xl')]: {
    margin: '10px auto',
    borderRadius: '0.8rem',
    overflow: 'hidden'
  }
})

export default Layout
