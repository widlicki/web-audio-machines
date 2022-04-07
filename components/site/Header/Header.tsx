import { AppBar, Link, Toolbar } from '@mui/material'
import Box from '@mui/material/Box'
import theme from '../../../styles/theme'
import NavLink from '../../base/NavLink/NavLink'

export interface HeaderProps {
  isAuthenticated: boolean
}

const Header = ({ isAuthenticated }: HeaderProps) => {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        background: theme.background.color.light,
        borderBottom: `${theme.border.size.md} solid ${theme.palette.secondary.main}`,
        height: theme.spacing(12),
      }}
    >
      <Toolbar
        sx={{ justifyContent: 'space-between', marginTop: theme.spacing(2) }}
      >
        <Box sx={{ flex: 1 }} />
        <Link
          variant="h4"
          href="/"
          sx={{
            fontSize: 24,
            color: 'common.white',
            textDecoration: 'none',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          web &bull; audio &bull; machines
        </Link>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {!isAuthenticated ? (
            <>
              <NavLink to="/sign-in">Sign In</NavLink>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </>
          ) : (
            <NavLink to="/sign-in">Sign Out</NavLink>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
