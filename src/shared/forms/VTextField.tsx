import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type TTextFieldProps = TextFieldProps & {
    name: string;
}

export const VTextField: React.FC<TTextFieldProps> = ({ name, ...rest }) => {

    const { fieldName, clearError, defaultValue, error, registerField } = useField(name);

    const [value, setValue] = useState(defaultValue || '');

    useEffect(() => {
        registerField({
            name: fieldName,
            getValue: () => value,
            setValue: (_, newValue) => setValue(newValue)
        });
    }, [registerField, fieldName, value]);

    return (
        <TextField
            error={!!error}
            helperText={error}
            defaultValue={defaultValue}

            {...rest}

            value={value}
            onChange={e => { setValue(e.target.value); rest.onChange?.(e) }}

            onKeyDown={(e) => { error && clearError(); rest.onKeyDown?.(e) }}
        />
    );
}