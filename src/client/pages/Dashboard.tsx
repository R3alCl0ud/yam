import {FC} from 'react'
import {useIntl} from 'react-intl'
import ApexCharts, {ApexOptions} from "apexcharts";

import {
    CardsWidget17,
    CardsWidget20,
    CardsWidget7,
    ChartsWidget1,
    EngageWidget10,
    ListsWidget26
} from "../_metronic/partials/widgets";
import {PageTitle} from "../_metronic/layout/core";
import {toAbsoluteUrl} from "../_metronic/helpers";
import {Card} from "../components/card";
import {BasicChart, ChartData, lineChartGen} from "../components/BasicChart";
import {backDate} from "../utility/TimeStuff";
import {getCSSVariableValue} from "../_metronic/assets/ts/_utils";

const testData = [{y: 65, x: backDate(5)},
    {y: "65", x: backDate(4)},
    {y: "65", x: backDate(3)},
    {y: "65", x: backDate(2)},
    ]
function myTestChart(): ChartData {
    const labelColor = getCSSVariableValue('--bs-gray-500')

    return {
        name: "CPU Temp", data: testData,
        xaxis: {
            type: 'datatime',
            labels: {
                rotateAlways: false,
                rotate: 0,
                show: true,
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
                formatter: function(val: string, timestamp: any) {
                    console.log(timestamp)
                    if (!val) return ""
                    let meTime = new Date(val)
                    return `${meTime.getHours()}:${meTime.getMinutes()}:${meTime.getSeconds()}`
                }
            },

        }
    }
}


const DashboardPage: FC = () => (<>
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-sm-auto'>
            <Card>
                <div className={`card-header border-0 pt-5`}>
                    <div className='card-title align-items-start flex-column'>
                        <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>CPU Temperature</span>
                    </div>
                </div>
                <div className='card-body'>
                    <BasicChart chartID='MyChart' chartOptions={myTestChart()}/>
                </div>
            </Card>
        </div>
        {/*<div className='column-gap-xxl-5'/>*/}

    </div>

</>);


const DashboardWrapper: FC = () => {
    const intl = useIntl()
    return (<div>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>

            <DashboardPage/>
        </div>
    )
};




export {DashboardWrapper};