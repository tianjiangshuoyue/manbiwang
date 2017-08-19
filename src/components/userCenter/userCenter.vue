<template>
    <div>
        神鬼天籁
        <sidebar></sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
import sidebar from '../common/leftSideBar.vue';
export default {
    data () {
        return {

        }
    }, components: {
        sidebar
    }
}
</script>
<style>

</style>