import {TextField} from "@mui/material";
import {useState} from "react";

export const FancyTextField = ({limit}) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    const onChange = (e) => {
        const newValue = e.target.value.substring(0, limit);
        setCount(newValue.length)
        setValue(newValue);
    }
    return <TextField helperText={count+"/" + limit} onChange={onChange} value={value} />
}