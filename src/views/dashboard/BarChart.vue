<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'


const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      day: [], num: []
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
        var _infostr = '{"chart":[{"num":3.02,"time":"02-01"},{"num":13.0,"time":"02-02"},{"num":12.0,"time":"02-03"},{"num":506.0,"time":"02-04"},{"num":2.01,"time":"02-06"},{"num":20.01,"time":"02-07"},{"num":5040.0,"time":"02-08"},{"num":11.0,"time":"02-10"},{"num":451.0,"time":"02-14"},{"num":0.0,"time":"02-15"},{"num":7.0,"time":"02-16"}],"chartT":[{"num":3.0,"time":"02-01"},{"num":2.0,"time":"02-02"},{"num":2.0,"time":"02-03"},{"num":1.0,"time":"02-04"},{"num":4.0,"time":"02-06"},{"num":2.0,"time":"02-07"},{"num":5.0,"time":"02-08"},{"num":2.0,"time":"02-10"},{"num":3.0,"time":"02-14"},{"num":1.0,"time":"02-15"},{"num":1.0,"time":"02-16"}]}'
        var _info1 = eval('(' + _infostr + ')');
        var _info = _info1.chart
        var day = []
        var num = []
        _info.forEach(function(item) {
          day.push(item.time)
          num.push(item.num)
        })

        console.log(day, num)

        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: day,
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            }
          }],
          series: [{
            name: 'pageA',
            type: 'line',
            stack: 'vistors',
            barWidth: '60%',
            data: num,
            animationDuration
          }]
        })


      console.log('day:' + this.day)
    }
  }
}
</script>
