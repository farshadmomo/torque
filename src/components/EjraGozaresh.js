import React from 'react';


export default function EjraGozaresh(props) {
        return (
            <div className={props.dlgOpen?'gozaresh-container':'gozaresh-closed'}>
                <div className='gozaresh-child-container'>
                    <div>موقعیت اندازه گیری:{props.measurePosition}</div>
                    <div>نوع چک لیست:{props.checkList}</div>
                    <div>اتصال:{props.connection}</div>
                </div>
                <div className='gozaresh-child-container'>
                    <div>محدوده تاری‍‍خ:
                        <span>{new Date(props.reportStartDate).toLocaleDateString('fa-IR')} تا {new Date(props.reportEndDate).toLocaleDateString('fa-IR')}</span>
                    </div>
                    <div>نوع گزارش:{props.reportType}</div>
                </div>
            </div>
        );
    }
