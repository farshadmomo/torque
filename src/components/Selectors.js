import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

    setFormData(prevState => ({
                ...prevState,
                [name] : value
            })
        )
    }
    const DateFrom = () => {
        const [startDate, setStartDate] = React.useState(new Date());
        return (
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        );
    };
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    return (
        <div className='form-container'>
            <form className='form-contex'>
                <div className='column-button'>
            <div className="select-container">
                <FormControl fullWidth sx={{ m: 1, width: '80%' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={formData.age}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                        name="age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '80%' }}>
                    <InputLabel id="person-label">person</InputLabel>
                    <Select
                        labelId="person-lable"
                        id="person-label-id"
                        value={formData.person}
                        onChange={handleChange}
                        autoWidth
                        label="Person"
                        name="person"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>mmd</MenuItem>
                        <MenuItem value={21}>KASRA</MenuItem>
                        <MenuItem value={22}>Farshad</MenuItem>
                        <MenuItem value={22}>Farshad1223</MenuItem>
                        <MenuItem value={22}>Farshad1341</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '80%' }}>
                    <InputLabel id="person-label">person</InputLabel>
                    <Select
                        labelId="person-lable"
                        id="person-label-id"
                        value={formData.person}
                        onChange={handleChange}
                        autoWidth
                        label="Person"
                        name="person"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>mmd</MenuItem>
                        <MenuItem value={21}>KASRA</MenuItem>
                        <MenuItem value={22}>Farshad</MenuItem>
                        <MenuItem value={22}>Farshad1223</MenuItem>
                        <MenuItem value={22}>Farshad1341</MenuItem>
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