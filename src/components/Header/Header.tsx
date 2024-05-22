import {Paper, Container, Button, Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'

import Logo from '../Logo/Logo.tsx'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Paper
      variant="elevation"
      square={true}
      elevation={2}
      component="header"
      sx={{py: '10px'}}
    >
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Logo />
          </Grid>
          <Grid item xs={8} container justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={() => navigate('/sign-in')}
              size="large"
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Header
