<template>
    <div id="user-wrap">
        <sidebar1></sidebar1>
        <router-view></router-view>
    </div>
</template>
<script>
import sidebar1 from '../common/leftSideBar.vue';
export default {
    data () {
        return {
            test: 'test'
        }
    }, components: {
        sidebar1
    }
}
</script>
<style>
#user-wrap {
    display: flex;
}
</style>