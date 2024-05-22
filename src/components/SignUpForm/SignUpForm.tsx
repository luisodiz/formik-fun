import {Field, Form, Formik} from 'formik'
import {Button, TextField} from '@mui/material'

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={() => console.log('submitted')}
    >
      {({values, handleChange}) => (
        <Form>
          <Field
            as={TextField}
            fullWidth
            label="Имя"
            value={values.email}
            onChange={handleChange('fullName')}
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Email"
            value={values.email}
            onChange={handleChange('email')}
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Пароль"
            value={values.password}
            onChange={handleChange('password')}
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Пароль еще раз"
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            sx={{mb: 2}}
            size="small"
          />
          <Button fullWidth variant="contained" size="large" type="submit">
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
