<template>
    <div>
        <header class="nav-title">提现记录</header>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="申请时间" width="180">
            </el-table-column>
            <el-table-column prop="name" label="提现方式" width="180">
            </el-table-column>
            <el-table-column prop="address" label="金额">
            </el-table-column>
            <el-table-column prop="address" label="详情">
            </el-table-column>
            <el-table-column prop="address" label="状态">
            </el-table-column>
            <el-table-column prop="address" label="备注">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
        </el-table>
        <p>仅显示最新5条充值记录，如需查询全部充值记录，请去
            <router-link to="/">充值/提现记录</router-link>
        </p>
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
            ]
        }
    },
    components: {
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
</style>