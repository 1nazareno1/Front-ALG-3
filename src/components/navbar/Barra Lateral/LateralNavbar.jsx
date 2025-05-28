import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { LinkButton, StyledNavbar } from './StyledComponents'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { MenuLinks } from '../../../utils/Commons'

export const LateralNavbar = () => {
  const [expandedNavbar, setExpandedNavbar] = useState(false)
  const [showText, setShowText] = useState(false)
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const navigate = useNavigate()
  const theme = useTheme()
  const timeoutRef = useRef(null)
  const isLogged = false

  if (!isDesktop) return null

  const handleMouseEnter = () => {
    setExpandedNavbar(true)
    timeoutRef.current = setTimeout(() => {
      setShowText(true)
    }, 200)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShowText(false)
    setExpandedNavbar(false)
  }

  return (
    <StyledNavbar
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        background: theme.palette.primary.light,
        borderRight: `1px solid ${theme.palette.secondary.light}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 90px)',
        width: '78px',
        paddingTop: theme.spacing(2),
        gap: theme.spacing(3),
      }}
    >
      <Box display={'flex'} flexDirection={'column'} gap={1}>
        {MenuLinks.map((button) => {
          if (!isLogged && button.logged) return
          return (
            <LinkButton
              button={button}
              className="button"
              key={button.title + '-LateralNavbar'}
              pathname={pathname}
              expandednavbar={expandedNavbar ? 1 : 0}
              onClick={() => {
                navigate(button.link)
              }}
            >
              {button.icon}
              <Typography
                className="text"
                sx={{
                  display: 'none',
                  transitionDelay: '0.3s',
                  fontWeight: pathname == button.link ? 800 : 400,
                }}
              >
                {showText ? button.title : ''}
              </Typography>
            </LinkButton>
          )
        })}
      </Box>
    </StyledNavbar>
  )
}
