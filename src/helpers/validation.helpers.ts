import * as yup from 'yup';

export type ValidationError = {
    path: string;
    message: string;
};

export const noteSchema = yup.object().shape({
    name: yup.string().required(),
    created: yup.string().required(),
    category: yup.string().required(),
    content: yup.string().required(),
    archived: yup.boolean().required()
});
