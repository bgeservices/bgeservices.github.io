<style scoped lang="less">
</style>

<template>
    <div>
        <h1 class="page-header">Dashboard</h1>
    </div>
</template>

<script>
    module.exports = {
        name: 'fragment-services',
        data: function () {
            return {
                individual: require('../../backend')
            }
        },
    }
</script>