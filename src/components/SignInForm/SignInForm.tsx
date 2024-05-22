import {TextField, Button} from '@mui/material'
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
          <Field
            component={TextField}
            label="Email"
            fullWidth
            size="small"
            sx={{mb: 2}}
            onChange={handleChange('email')}
          />
          <Field
            component={TextField}
            label="Пароль"
            fullWidth
            size="small"
            sx={{mb: 2}}
            onChange={handleChange('password')}
          />
          <Button fullWidth variant="contained" size="large" type="submit">
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
