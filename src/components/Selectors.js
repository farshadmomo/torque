import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer, DemoItem  } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { parseISO, format } from 'date-fns';

export default function Selectors() {
    const [formData, setFormData] = React.useState({
        measurePosition:"",
        checkList:"",
        connection:"",
        reportDate:"",
        reportType:""
    })
    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }))
        console.log(formData)
    }
    // const [value, setValue] = React.useState(dayjs('2022-04-17'));

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
                        value={formData.measurePosition}
                        name='measurePosition'
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
                        value={formData.checkList}
                        name='checkList'
                        onChange={handleChange}
                        label="checkList"
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
                        value={formData.connection}
                        onChange={handleChange}
                        name="connection"
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
                {/*<LocalizationProvider dateAdapter={AdapterDateFnsJalali}>*/}
                {/*    <DemoContainer components={['DatePicker', 'DatePicker']}>*/}
                {/*        <DatePicker*/}
                {/*            label="از تاریخ"*/}
                {/*            name="fromDate"*/}
                {/*            value={formData.fromDate}*/}
                {/*            onChange={date => handleChange({ target: { value: date.toLocaleDateString('fa-IR'), name: 'fromDate' } })}*/}
                {/*        />*/}
                {/*    </DemoContainer>*/}
                {/*</LocalizationProvider>*/}
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                        <DemoItem label="تاریخ گزارش" component="DateRangePicker" value={formData.reportDate} >
                            <DateRangePicker
                                name="reportDate"
                                onChange={date => handleChange({ target: { value: new Date(date).toLocaleDateString('fa-IR') , name: 'reportDate' } })}
                                // defaultValue={[formData.fromDate, formData.toDate]}
                            />
                        </DemoItem>
                </LocalizationProvider>
            </div>
                <h2 className='radio-header'>نوع گزارش</h2>
                <div className='radio-container'>
                        <input
                            type="radio"
                            id="connectionList"
                            name="reportType"
                            value="connectionList"
                            onChange={handleChange}
                        />
                      <label htmlFor="connectionList">لیست اتصالات به ترتیب امتیاز منفی</label>
                         <input
                             type="radio"
                             id="NA"
                             name="reportType"
                             value="NA"
                             onChange={handleChange}
                         />
                     <label htmlFor="NA">+NA</label>
                         <input
                             type="radio"
                             id="NB"
                             name="reportType"
                             value="NB"
                             onChange={handleChange}
                         />
                     <label htmlFor="NB">NB</label>
                </div>
            </div>

                </div>
                <button className='form-submit'>submit</button>
            </form>
        </div>
    )
}