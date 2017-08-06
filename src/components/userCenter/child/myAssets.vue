<template>
    <div>
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main" style="width: 600px;height:400px;"></div>
        <section>
            总资产:
            <em class="money">16000</em>
        </section>
        <ul>
            <li></li>
        </ul>
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
        var myChart = echarts.init(document.getElementById('main'));
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