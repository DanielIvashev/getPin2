<template>
  <div>
    <canvas id="myChart" ref="chart" />
  </div>
</template>

<script>
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default {
  name: 'Chart',
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    // this.chart = new Chart(this.$refs.chart, {
    //   type: 'line',
    //   data: {
    //     labels: [],
    //     datasets: [
    //       {
    //         label: 'Visit your website',
    //         data: [{ y: 52, x: 0 }, 26, 30, 28, 20, 6, 55, 59],
    //         borderColor: 'red',
    //         backgroundColor: 'red',
    //       },
    //       {
    //         label: 'Request directions',
    //         data: [30, 14, 24, 9, 19, 10, 42, 39],
    //         borderColor: 'blue',
    //         backgroundColor: 'blue',
    //       },
    //       {
    //         label: 'Calls',
    //         data: [12, 6, 6, 3, 16, 2, 33, 9],
    //         borderColor: 'blue',
    //         backgroundColor: 'blue',
    //       },
    //     ],
    //   },
    //   options: {
    //     responsive: true,
    //     tension: 0.4,
    //     interaction: {
    //       mode: 'index',
    //       intersect: false,
    //     },
    //     stacked: false,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Line Chart',
    //       },
    //     },
    //     scales: {
    //       y: {
    //         type: 'linear',
    //         display: true,
    //         position: 'left',
    //         grid: {
    //           borderDash: [5, 5],
    //         },
    //         title: {
    //           display: true,
    //           text: 'Value',
    //         },
    //       },
    //       x: {
    //         type: 'time',
    //         time: {
    //           tooltipFormat: 'DD T',
    //         },
    //       },
    //     },
    //   },
    // });
  },
};
</script>

<style></style>
