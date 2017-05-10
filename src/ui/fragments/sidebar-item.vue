<style scoped lang="less">
</style>

<template>
    <li :class="{active: isActive}">
        <router-link :to="path">
            {{label}}
            <span class="sr-only" v-if="isActive">(current)</span>
        </router-link>
    </li>
</template>

<script>
    module.exports = {
        name: 'fragment-sidebar-item',
        props: [ 'label', 'path' ],
        computed: {
            isActive: function () {
                return this.$route.fullPath === this.path
            }
        },
    }
</script>