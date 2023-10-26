import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
    return (
        <div className='form-container'>
            <div className="select-container">
                <FormControl fullWidth sx={{ m: 1, width: '35%' }}>
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
                <FormControl fullWidth sx={{ m: 1, width: '35%' }}>
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
            <div className='date-inputs'>
                <input className="date-from-input"/>
                <input className="date-to-input"/>
            </div>
        </div>
    )
}