import * as React from "react";
import {TextField} from "@mui/material";
import {useState} from "react";

interface FancyTextfieldProps {
    limit: number;
    onChange?: (value: string) => void;
}
export const FancyTextfield = (props : FancyTextfieldProps) => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    const onChangeEvt = (event) => {
        const newValue = event.target.value.substring(0, props.limit);
        setCount(newValue.length)
        setValue(newValue)
        if (props.onChange) {
            props.onChange(newValue)
        }
    }
    return <TextField onChange={onChangeEvt} value={value} helperText={count + '/' + props.limit}></TextField>
}