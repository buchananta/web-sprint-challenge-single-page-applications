import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup.string().min(2, "name must be at least two characters."),
  size: yup.string().min(1, "please Select a Size.")
})

export default formSchema;