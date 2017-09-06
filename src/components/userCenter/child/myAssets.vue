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
                    <th class="col2">&nbsp;</th>
                    <th class="col2">总计</th>
                    <th class="col3">市值</th>
                </thead>
                <tbody>
                    <tr v-for="item in 6">
                        <td class="col1"><i></i>人民币</td>
                        <td class="col2">10,000,400.00</td>
                        <td class="col3">¥127</td>
                    </tr>
                </tbody>
                </table>

            <footer>
                <el-button type="primary">充值</el-button>
                <el-button >提现</el-button>
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
    padding-bottom: 20px;
    text-align: left;
    font-size: 16px;
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
    th, td {
        text-align: left;
    }
    th {
        height: 40px;
        &:first-child {
            width: 20%;
            padding-left: 1%;
        }
    }
    .col1 {
        width: 28%;
        padding-left: 20px;
        padding-right: 40px;
    }
    .col2 {
        width: 30%;
    //    padding-left: 40px;
    //    padding-right: 60px;
    }
    td {
        padding: 10px 0;
        border-bottom: solid 1px #f2f2f2;
        &:td {
            padding-left: 5%;
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
    margin-bottom: 40px;
}
</style>