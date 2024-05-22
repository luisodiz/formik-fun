import {TextField, Button, Grid} from '@mui/material'
import {Formik, Form, Field} from 'formik'

const SignInForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({handleChange}) => (
        <Form>
          <Grid container direction="column">
            <Field
              component={TextField}
              label="Ваш Email"
              fullWidth
              size="small"
              sx={{mb: 2}}
              onChange={handleChange('email')}
            />
            <Field
              component={TextField}
              label="Ваш пароль"
              fullWidth
              size="small"
              sx={{mb: 2}}
              onChange={handleChange('password')}
            />
            <Button variant="contained" size="large" type="submit">
              Отправить
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
