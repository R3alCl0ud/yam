import {useRef, FC, useEffect} from "react";
import {getCSS, getCSSVariableValue} from "../_metronic/assets/ts/_utils";
import ApexCharts, {ApexOptions} from "apexcharts";
import {array, number, string} from "yup";
import {useThemeMode} from "../_metronic/partials";
import {backDate, randomIntFromInterval} from "../utility/TimeStuff";
import Chart from "chart.js";

type ChartData = {
    name: string,
    data: any[],
    xaxis: object
}
const testData = [{y: 65, x: backDate(5)},
    {y: "65", x: backDate(4)},
    {y: "65", x: backDate(3)},
    {y: "65", x: backDate(2)},
    {y: "65", x: backDate(1)}
]

const defaultData: ChartData = {
    name: "CPU Temp",
    data: testData,
    xaxis: {
        type: 'datatime',
        labels: {
            show:false,
            formatter: (val, timestamp) =>{
                console.log(val)
                return `${val.getHours()}:${val.getMinutes()}:${val.getSeconds()}`
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    }
}

type Props = {
    className?: string,
    chartID: string,
    style?: object,
    chartOptions?: ChartData
}


const BasicChart: FC<Props> = ({className, chartID, style = {height: '100%'}, chartOptions = defaultData}) => {
    const chartRef = useRef<HTMLDivElement | null>(null)
    const {mode} = useThemeMode()

    useEffect(() => {
        const chart = refreshChart()

        setInterval(() => {
            if (!chartRef)
                return
            // console.log(chartOptions)
            // @ts-ignore
            chartOptions.data.push({y: randomIntFromInterval(0,100), x: backDate(0.01)})
            let datapoints = 6
            if (chartOptions.data.length > datapoints) chartOptions.data = chartOptions.data.slice(chartOptions.data.length - datapoints)
            chart?.updateSeries([chartOptions]);
        }, 1000)

        return () => {
            if (chart) {
                chart.destroy()
            }
        }

    }, [chartRef, mode])

    const refreshChart = () => {
        if (!chartRef.current) {
            return
        }

        const height = parseInt(getCSS(chartRef.current, 'height'))

        const chart = new ApexCharts(chartRef.current, lineChartGen(chartOptions));
        if (chart) {
            chart.render()
        }

        return chart
    }


    return (<div ref={chartRef} id={chartID} style={style}></div>)
}



const lineChartGen = (data: ChartData): ApexOptions => {
    const labelColor = getCSSVariableValue('--bs-gray-500')
    const borderColor = getCSSVariableValue('--bs-gray-200')
    const baseColor = getCSSVariableValue('--bs-primary')
    const secondaryColor = getCSSVariableValue('--bs-gray-300')

    return {
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['blue'],
            curve: 'smooth'
        },
        chart: {
            fontFamily: 'inherit',
            type: 'line',
            height: 500,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: true,
                easing: 'linear',
                speed:100,
                dynamicAnimation: {
                    speed: 10
                }
            },
        },
        series: [{
            name: data.name,
            data: data.data
        }],
        xaxis: data.xaxis,
        yaxis: {
            max: 100,
            min: 0,
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        colors: [baseColor, secondaryColor],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                show: false
            }
        },
        // fill: {
        //     opacity: 1,
        // },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                show: false,
                formatter: function (val) {
                    return `${val} Degrees`
                },
            },
            x: {
                formatter: function (val: number, opts?: any) {
                    return ""+val;
                }
            }
        },
    };
}


export {BasicChart, lineChartGen};
export type {ChartData};
