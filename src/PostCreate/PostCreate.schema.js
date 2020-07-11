import * as Yup from 'yup';

export const PostCreateSchema = Yup.object({
    // mixed is all types
    image: Yup.mixed()
        .required('image is required'),
    description: Yup.string()
        .max(2000, 'Description is too long'),
  });



