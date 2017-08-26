<template>
  <div id="rechargeWithdrawRecordList">
    <header class="nav-title">充值／提现记录</header>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="账单时间"
        width="135">
      </el-table-column>
      <el-table-column
        prop="payWay"
        label="类型"
        width="135">
      </el-table-column>
      <el-table-column
        prop="cashNum"
        label="金额/数量"
        width="135">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="详情"
        width="135">
      </el-table-column>
      <el-table-column
        prop="tips"
        label="备注"
        width="135">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="135">
      </el-table-column>
      <el-table-column
        prop="option"
        label="操作">
        <template scope="scope">
          <span class="tBtn">撤销</span>
          <span class="tBtn">去认证</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                     layout="sizes, prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  /**
   * 提现记录
   */

  export default {
    data() {
      return {
//        tableData: [
//          {
//            date: '2017-06-30 20:00',
//            type: '充值',
//            money: '￥100.00',
//            detail: '工商银行 尾号1234',
//            mark: 'C2认证失败，照片不符合要求',
//            checkType: '待审核'
//          }
//        ],
        tableData: [{
          date: '2016-05-02',
          payWay: '王小虎',
          cashNum: '￥1000',
          detail: '上海市普陀区金沙江路',
          tips: '1518 弄',
          status: '等待汇出',
          option: ''
        }, {
          date: '2016-05-04',
          payWay: '王小虎',
          cashNum: ''
        }, {
          date: '2016-05-01',
          payWay: '王小虎',
          cashNum: ''
        }, {
          date: '2016-05-03',
          payWay: '王小虎',
          cashNum: ''
        }],
        currentPage2: 5
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      components: {}
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  #rechargeWithdrawRecordList{
    .el-table{
      table {
        text-align: center;
        font-size: 12px;

        thead {
          height: 36px;
        }

        tr {
          height: 48px;
        }

        th {
          text-align: center;
        }

        td {
        }

        .tBtn {
          color: #1793e6;
          margin: 0 3px;
          cursor: pointer;
        }
      }
      margin-top:20px;
      margin-bottom:40px;
    }
  }

</style>
<style lang="less" rel="stylesheet/less" scoped>
  form {
    padding-top: 40px;
    padding-left: 135px;
  }

  p {
    margin-top: 10px;
    padding: 20px;
    background-color: #f5f9ff;
    border: solid 1px #d7e5f4;
    font-size: 12px;
  }
</style>

