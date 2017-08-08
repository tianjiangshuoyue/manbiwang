<template>
    <div id="my-assets">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="assets-chart-wrap">
            <div id="assets-chart" style="width:200px;height:200px;">
            </div>
        </div>
        <div>
            <header id="assets-value">
                
                总资产:
                <em >16000</em>
            </header>
            <ul>
                <li class="title">
                    <span></span>
                    <span>持有</span>
                    <span>市值</span>
                </li>
                 <li v-for="item in 6">
                    <span><i></i>人民币</span>
                    <span>127</span>
                    <span>¥127</span>
                </li>
                
            </ul>
            
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
#my-assets{
    display: flex;
    >div {
        width: 48%;
    }
}
#assets-value {
    padding: 20px 0;
    em {
        font-size: 20px;
        color: #4182ef;
        font-style: normal;
    }
    
}
.title {
    background-color: #f7f7f7;
    color: #999999;
}
ul {
    text-align: center;
    color: #222222;
    li {
        padding: 10px 0;
        border-bottom: solid 1px #f2f2f2;
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
        span {
            display: inline-block;
            width: 32%;
        }
    }
}
footer {
    margin-top: 20px;
}
</style>