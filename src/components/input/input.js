
import React from "react";
import { useController } from "react-hook-form";
import TextField from "@mui/material/TextField";

function Input({ control, name, rules, placeholder }) {
    const {
        field,
        fieldState: { invalid },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <TextField
            {...field}
            placeholder={placeholder}
            error={invalid}
            helperText={invalid ? "This field is required" : ""}
            fullWidth
            multiline={name === "message"}
            rows={4}
        />
    );
}

export default Input;
