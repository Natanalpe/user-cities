import { setLocale, mixed } from "yup";

setLocale({
    mixed: {
        default: "O campo não é válido.",
        required: "Não se esqueça de preencher este campo."
    },
    string: {
        email: () => "O campo precisa conter um e-mail válido.",
        max: ({ max }) => `O campo pode ter no máximo ${max} caracteres.`,
        min: ({ min }) => `O campo precisa ter no mínimo ${min} caracteres.`,
        length: ({ length }) => `O campo precisa ter exatamente ${length} caracteres.`
    },
    date: {
        max: ({ max }) => `A data deve ser menor que ${max}.`,
        min: ({ min }) => `A data deve ser maior que ${min}.`
    },
    number: {
        integer: () => "O campo precisa ter um valor inteiro.",
        negative: () => "O campo precisa conter um valor negativo.",
        positive: () => "O campo precisa conter um valor positivo.",
        moreThan: ({ value }) => `O campo precisa conter um valor maior que ${value}.`,
        lessThan: ({ value }) => `O campo precisa conter um valor menor que ${value}.`,
        min: ({ min }) => `O campo precisa conter um valor com mais de ${min} caracteres.`,
        max: ({ max }) => `O campo precisa conter um valor com menos de ${max} caracteres.`,
    },
    boolean: {},
    object: {},
    array: {}
});