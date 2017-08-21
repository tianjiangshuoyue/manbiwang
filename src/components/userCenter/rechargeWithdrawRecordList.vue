<template>
    <div>
        <header class="nav-title">充值／提现记录</header>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="时间" width="180">
            </el-table-column>
            <el-table-column prop="name" label="类型" width="180">
            </el-table-column>
            <el-table-column prop="address" label="金额/数量">
            </el-table-column>
            <el-table-column prop="address" label="详情">
            </el-table-column>
            <el-table-column prop="address" label="备注">
            </el-table-column>
            <el-table-column prop="address" label="状态">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
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
            tableData: [
            ],
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
        components: {
        }
    }
}
</script>
<style lang="less" scoped>
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
.el-table {
    margin-bottom: 40px;
}
</style>