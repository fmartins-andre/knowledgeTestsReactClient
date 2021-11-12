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

    </Box>
  )
}

const contents: SxProps<Theme> = (theme) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`
})

const gridLayout: SxProps<Theme> = (theme) => ({
  display: 'grid',
  gap: 2,
  gridTemplateColumns: `minmax(${theme.breakpoints.values.xs}, 1fr)`,
  gridTemplateRows: '64px minmax(400px, 1fr) max-content',
  minHeight: '100vh',
  height: '100%',
  maxWidth: theme.breakpoints.values.xl,
  [theme.breakpoints.up('xl')]: {
    margin: `${theme.spacing(1)} auto`,
    borderRadius: '0.8rem',
    boxShadow: `0 0 30px ${theme.palette.primary.main}`,
    overflow: 'hidden'
  }
})

export default Layout
