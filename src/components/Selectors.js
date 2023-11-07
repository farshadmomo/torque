import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import {DateRangePicker, defaultTheme, Provider} from '@adobe/react-spectrum';
import {parseDate} from '@internationalized/date';

export default function Selectors() {
    const [formData, setFormData] = React.useState({
        measurePosition:"",
        checkList:"",
        connection:"",
        reportDate:{start:parseDate("2023-11-07"),end:parseDate("2023-11-07")},
        reportType:""
    })
    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }))
        console.log(name,value)
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
                <Provider width="100%" backgroundColor="green-500" locale="fa-IR-u-ca-persian" theme={defaultTheme} colorScheme="lighter">
                    <DateRangePicker width="70%" locale="fa-IR-u-ca-persian" label="محدودیت تاریخ" value={formData.reportDate} name="reportDate" onChange={date => {handleChange({ target: { value: date ,name:"reportDate"} })}} />
                    {/*<p>Start date: {`${formData.reportDate?.start?.day ?? ""}-${formData.reportDate?.start?.month ?? ""}-${formData.reportDate?.start?.year ?? ""}`}</p>*/}
                    {/*<p>End date: {formData.reportDate?.end}</p>*/}
                </Provider>
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