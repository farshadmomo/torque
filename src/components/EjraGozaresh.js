import React from 'react';


export default function EjraGozaresh(props) {
    console.log(props.reportDate[0])
        return (
            <div className='gozaresh-container'>
                <div className='gozaresh-child-container'>
                    <div>موقعیت اندازه گیری:{props.measurePosition}</div>
                    <div>نوع چک لیست:{props.checkList}</div>
                    <div>اتصال:{props.connection}</div>
                </div>
                <div className='gozaresh-child-container'>
                    <div>محدوده تاری‍‍خ:
                        <span>`${JSON.stringify(props.reportDate[0])},`</span>
                    </div>
                    <div>نوع گزارش:{props.reportType}</div>
                </div>
            </div>
        );
    }
