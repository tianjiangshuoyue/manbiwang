<template>
    <div id="my-assets-wrap">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="assets-chart-wrap">
            <div id="assets-chart" style="width:250px;height:250px;">
            </div>
        </div>
        <div id="data-wrap">
            <header id="assets-value">
                
                总资产:
                <em >¥ 16000.00</em>
            </header>
            <table id="assets-list">
                <thead class="title">
                    <th></th>
                    <th>持有</th>
                    <th>市值</th>
                </thead>
                <tbody>
                    <tr v-for="item in 6">
                        <td>人民币</td>
                        <td>127</td>
                        <td>¥127</td>
                    </tr>
                </tbody>
                </table>

            <footer>
                <el-button type="primary">充值</el-button>
                <el-button type="text">提现</el-button>
            </footer>
        </div>

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: {

            }
        }
    }, mounted() {// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('assets-chart'));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} <br/> {c} ({d}%)"
            },
            legend: false,
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: '人民币',
                            itemStyle: {
                                normal: {
                                    color: '#fa84b4'
                                }
                            }
                        },
                        {
                            value: 335,
                            name: '以太坊',
                            itemStyle: {
                                normal: {
                                    color: '#7a9a80'
                                }
                            }
                        },
                        {
                            value: 335,
                            name: '比特币',
                            itemStyle: {
                                normal: {
                                    color: '#f7921a'
                                }
                            }
                        },
                        {
                            value: 335,
                            name: '小蚁股',
                            itemStyle: {
                                normal: {
                                    color: '#2b98f0'
                                }
                            }
                        },
                        {
                            value: 335,
                            name: '莱特币',
                            itemStyle: {
                                normal: {
                                    color: '#bebebe'
                                }
                            }
                        },
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }
}
</script>
<style lang="less" scoped>
#data-wrap {
    padding-left: 20px;
    border-left: solid 1px #f2f2f2;
}
#my-assets-wrap{
    display: flex;
    color: #222;
    >div {
        width: 48%;
    }
}
#assets-chart-wrap {
    position: relative;
}
#assets-chart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#assets-value {
    padding: 20px 0;
    em {
        font-size: 20px;
        color: #4182ef;
        font-style: normal;
    }
    
}
#assets-list {
    width: 100%;
     text-align: center;
    color: #222222;
    border-collapse: collapse;
    thead {
        background-color: #f7f7f7;
        color: #999999;
    }
    th {
        &:first-child {
            width: 20%;
            padding-left: 1%;
        }
    }
    td {
         padding: 10px 0;
        border-bottom: solid 1px #f2f2f2;
         span {
            display: inline-block;
            width: 32%;
        }
         i {
            display: inline-block;
            width: 6px;
            height: 6px;
            margin-right: 10px;
            border-radius: 50%;
            background: #fb84b4;
            &.yitebi {
                background: #fb84b4;
            }
        }
    }
}
footer {
    margin-top: 20px;
}
</style>