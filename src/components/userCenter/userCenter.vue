<template>
    <div id="user-wrap">
        <sidebar></sidebar>
        <router-view></router-view>
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
    display: flex;
}
</style>