<template>
    <div id="app">
        <router-link tag="h2" :to="'/dashboard'">
            <el-card style="padding: 20px; cursor: pointer;text-align: center" shadow="always">
                Dashboard
            </el-card>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<style>

    @import '/src/style/style.css';

</style>
