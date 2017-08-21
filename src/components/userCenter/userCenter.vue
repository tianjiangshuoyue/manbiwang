<template>
    <div id="user-wrap">
        <sidebar></sidebar>
        <div id="user-main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import sidebar from '../common/leftSideBar.vue';
export default {
    data () {
        return {
            test: 'test'
        }
    }, components: {
        sidebar
    }
}
</script>
<style>
#user-wrap {
    position: relative;
    display: flex;
    width: 1180px;
    margin: 0 auto;
}
#user-main {
    width: 980px;
    margin-left: 20px;
}
</style>