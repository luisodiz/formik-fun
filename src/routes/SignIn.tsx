import {Box, Grid, Typography} from '@mui/material'
import SignInForm from '../components/SignInForm/SignInForm.tsx'
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={7} md={5}>
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
  )
}

export default SignIn
