import { Box } from '@mui/material'
import { TestComponent } from '../../components/commons/TestComponent'

export const HomePage = () => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          alignItems: 'center',
          background: theme.palette.secondary.dark,
          display: 'flex',
          gap: theme.spacing(5),
          height: theme.spacing(20),
          justifyContent: 'center',
          width: 'calc(100vw - 78px)',
        })}
      >
        <TestComponent />
      </Box>
    </Box>
  )
}
