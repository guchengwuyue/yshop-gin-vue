<template>
          <div :class="className" ref="chart" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";

export default {
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "300px",
    },
  },
  data() {
    return {
      chart: null,
      column: [],
      orderCountDatas: [],
    };
  },
  mounted() {
    var datastr = '{"column":["打印复印","广告印刷"],"orderCountDatas":[{"name":"打印复印","value":672},{"name":"广告印刷","value":1474}]}'
    var obj = eval('(' + datastr + ')');
    this.column = obj.column
    this.orderCountDatas = obj.orderCountDatas
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart, "macarons");

      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: "10",
          data: this.column,
        },
        calculable: true,
        series: [
          {
            name: "商品分类销售占总销售的比例",
            type: "pie",
            roseType: "radius",
            radius: [15, 95],
            center: ["50%", "38%"],
            data: this.orderCountDatas,
            animationEasing: "cubicInOut",
            animationDuration: 2600,
          },
        ],
      });
    },
  },
};
</script>


<style lang="scss" scoped>
  .acea-row{
    /deep/.el-avatar--small {
      width: 22px;
      height: 22px;
      line-height: 22px;
    }
  }
  .checkTime{
    /deep/.el-radio__input{
      display: none;
    }
  }
  .ivu-pl-8{
    margin-left: 8px;
    font-size: 14px;
  }
  .divBox {
    // padding: 0 20px !important;
  }
  .dashboard-console-visit {
    /deep/.el-card__header{
      padding: 14px 20px !important;
    }
    ul {
      li {
        list-style-type: none;
        margin-top: 12px;
      }
    }
  }
  .ivu-mb{
    margin-bottom: 10px;
  }
</style>

