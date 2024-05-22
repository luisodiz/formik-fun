import {Box, Container, Grid, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

import SignInForm from '../../components/SignInForm/SignInForm.tsx'

const SignInPage = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid sm={7} md={5}>
          <Typography
            variant="h2"
            component="h2"
            sx={{fontSize: '2.5rem', mb: 2, textAlign: 'center'}}
          >
            Авторизация
          </Typography>

          <SignInForm />

          <Box mt={2}>
            Если у вас нет аккаунта, пожалуйста,{' '}
            <Link to="/sign-up">зарегистрируйтесь</Link>.
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SignInPage
