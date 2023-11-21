import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import EjraGozaresh from "./EjraGozaresh";
export default function Inputs() {
    const theme = createTheme({
        direction: 'rtl',
    });
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [rtlPlugin],
    });
    const [formData, setFormData] = React.useState({
        measurePosition:"",
        checkList:"",
        connection:"",
        reportDate:"",
        // reportStartDate:"",
        // reportEndDate:"",
        reportType:""
    })
    function handleChange(event) {
        const {name,value} = event.target
        // if(name==="reportDate"){
        //     if(value.length===2){
        //     setFormData(prevState => ({
        //         ...prevState,
        //         reportStartDate : value[0].toISOString().substring(0,10),
        //         reportEndDate : value[1].toISOString().substring(0,10),
        //     }))            }
        // } else {
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }))
    //}
    //     console.log(name,value)
    }
    // const [value, setValue] = React.useState(dayjs('2022-04-17'));
    // const [values, setValues] = React.useState([
    //     new DateObject().subtract(4, "days"),
    //     new DateObject().add(4, "days")
    // ])
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        // const inputsData = [
        //     {measurePosition : formData.measurePosition},
        //     {checkList : formData.checkList},
        //     {connection : formData.connection},
        //     {reportDate : formData.reportDate},
        //     {reportType : formData.reportType}
        // ]
    }

    return (
        <div className='form-container'>
            <form className='form-contex' onSubmit={handleSubmit}>
                <div className='column-button'>
                    <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
            <div className="select-container" dir="rtl">
                <FormControl variant="standard" sx={{ m: 1, minWidth: '80%'}} theme={theme}>
                    <InputLabel id="demo-simple-select-standard-label" sx={{fontSize : "20px"}}>موقعیت اندازه گیری</InputLabel>
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
                    <InputLabel id="demo-simple-select-standard-label" sx={{fontSize : "20px"}}>نوع چک لیست</InputLabel>
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
                    <InputLabel id="demo-simple-select-standard-label" sx={{fontSize : "20px"}}>اتصال</InputLabel>
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
                    </ThemeProvider>
                    </CacheProvider>
            <div className='randd-container'>
            <div className='date-inputs' >
                <label className='range-label'>محدوده تاریخ</label>
                <DatePicker
                    inputClass='range-picker'
                    name='reportDate'
                    value={formData.reportDate}
                    onChange={rangeDate => handleChange({target: {value:rangeDate , name:"reportDate"}})}
                    range
                    rangeHover
                    calendar={persian}
                    locale={persian_fa}
                    showOtherDays
                />
            </div>
                <h2 className='radio-header'>نوع گزارش</h2>
                <div className='radio-container'>
                    <div className='radio-items'>
                        <input
                            type="radio"
                            id="connectionList"
                            name="reportType"
                            value="connection list"
                            onChange={handleChange}
                        />
                      <label htmlFor="connectionList">لیست اتصالات به ترتیب امتیاز منفی</label>
                    </div>
                    <div className='radio-items'>
                         <input
                             type="radio"
                             id="NA"
                             name="reportType"
                             value="NA"
                             onChange={handleChange}
                         />
                     <label htmlFor="NA">+NA</label>
                    </div>
                    <div className='radio-items'>
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

                </div>
                <button className='form-submit'>اجرای گزارش</button>
            </form>
            <EjraGozaresh
                measurePosition = {formData.measurePosition}
                checkList = {formData.checkList}
                connection = {formData.connection}
                reportDate = {formData.reportDate}
                reportType = {formData.reportType}
            />
        </div>
    )
}
