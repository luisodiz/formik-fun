import {Field, Form, Formik} from 'formik'
import {Button, TextField} from '@mui/material'
import * as yup from 'yup'

const SignUpSchema = yup.object().shape({
  fullName: yup.string().required('Поле обязательное'),
  email: yup
    .string()
    .email('Неверный формат email адреса')
    .required('Поле обязательное'),
  password: yup.number().required('Поле обязательное'),
  confirmPassword: yup.number().required('Поле обязательное'),
})

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
      validationSchema={SignUpSchema}
    >
      {({values, errors, handleChange}) => (
        <Form>
          <Field
            as={TextField}
            fullWidth
            label="Имя"
            value={values.fullName}
            error={!!errors.fullName}
            helperText={errors.fullName}
            onChange={handleChange('fullName')}
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Email"
            value={values.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange('email')}
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Пароль"
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange('password')}
            sx={{mb: 2}}
            size="small"
          />
          <Field
            as={TextField}
            fullWidth
            label="Пароль еще раз"
            value={values.confirmPassword}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
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
