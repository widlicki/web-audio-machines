import { AppBar, Toolbar } from '@mui/material'
import Box from '@mui/material/Box'
import theme, { NavLink } from '../../../styles/theme'

export interface HeaderProps {
  isAuthenticated: boolean
}

const Header = ({ isAuthenticated }: HeaderProps) => (
  <AppBar
    elevation={0}
    position="fixed"
    sx={{
      background: theme.background.color.light,
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
      height: '13vh',
    }}
  >
    <Toolbar
      sx={{ justifyContent: 'space-between', marginTop: theme.spacing(2) }}
    >
      <Box sx={{ flex: 1 }} />
      <NavLink variant="h1" href="/" sx={{ fontSize: 24 }}>
        web &bull; audio &bull; machines
      </NavLink>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {!isAuthenticated ? (
          <>
            <NavLink variant="h6" href="/sign-in/">
              Sign In
            </NavLink>
            <NavLink variant="h6" href="/sign-up/">
              Sign Up
            </NavLink>
          </>
        ) : (
          <NavLink variant="h6" href="/sign-in/">
            Sign Out
          </NavLink>
        )}
      </Box>
    </Toolbar>
  </AppBar>
)

export default Header
