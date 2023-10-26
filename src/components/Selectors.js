import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function Selectors() {
    const [formData, setFormData] = React.useState({
        age:"",
        person:""
    })
    function handleChange(event) {
        const {name,value} = event.target
        setAge(event.target.value);

    setFormData(prevState => ({
                ...prevState,
                [name] : value
            })
        )
    }
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [age, setAge] = React.useState('');

    return (
        <div className='form-container'>
            <form className='form-contex'>
                <div className='column-button'>
            <div className="select-container">
                <FormControl variant="standard" sx={{ m: 1, minWidth: '80%' }}>
                    <InputLabel id="demo-simple-select-standard-label">موقعیت اندازه گیری</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: '80%' }}>
                    <InputLabel id="demo-simple-select-standard-label">نوع چک لیست</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: '80%' }}>
                    <InputLabel id="demo-simple-select-standard-label">اتصال</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='randd-container'>
            <div className='date-inputs' >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="az tarikh"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="ta tarikh"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
                <h2 className='radio-header'>Custom Radio Buttons</h2>
                <div className='radio-container'>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label htmlFor="html">HTML</label>
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label htmlFor="css">CSS</label>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <label for="javascript">JavaScript</label>
                </div>
            </div>

                </div>
                <button className='form-submit'>submit</button>
            </form>
        </div>
    )
}