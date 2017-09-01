<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="委托ID"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="交易对"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="方向"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="委托价">
      </el-table-column>
       <el-table-column
        prop="address"
        label="成交量">
      </el-table-column>
       <el-table-column
        prop="address"
        label="委托量">
      </el-table-column>
       <el-table-column
        prop="address"
        label="成交均价">
      </el-table-column>
       <el-table-column
        prop="address"
        label="手续费">
      </el-table-column>
       <el-table-column
        prop="address"
        label="委托时间">
      </el-table-column>
       <el-table-column
        prop="address"
        label="委托状态">
      </el-table-column>
    </el-table>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="sizes, prev, pager, next"
      :total="40">
    </el-pagination>
  </div>
</div>
</template>
<script>
/**
 * @ file: 当前委托，历史微博，持仓
 */
export default {
      data() {
        return {
          tableData: [{
            date: '02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '204',
            name: '王小虎',
            address: '￥100.00'
          }, {
            date: '01',
            name: '王小虎',
            address: '上￥100.00'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '￥100.00'
          }],
          currentPage: 1
        }
      },
      methods: {
          handleSizeChange () {

          },
          handleCurrentChange () {

          }
      }
    }
</script>
<style scoped lang="less">
.el-table, .el-pagination {
    margin-top: 20px;
}
</style>