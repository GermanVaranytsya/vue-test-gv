<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-card style="padding: 20px;" shadow="always">
                    Dashboard
                </el-card>
            </el-header>

            <el-main>
                <el-row style="margin-top: 20px;" type="flex" class="row-bg" justify="center">
                    <el-col :span="6" v-for="(c, index) in campaigns" :key="c" >
                        u.
                        <!--:offset="index > 0 ? 1 : 0-->
                        <el-card class="box-card">
                            <div slot="header">
                                <h2>Card name</h2>
                                <p class="small-margin">Challenge</p>
                            </div>
                            <div class="text item card-body">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <p>
                                                APPROVED POSTS
                                            </p>
                                            <p class="small-margin">
                                            {{ c.approved_posts }}
                                            </p>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <p>
                                                INFLUENCES
                                            </p>
                                            <p class="small-margin">
                                            <h1>2328190</h1>
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" style="margin-top: 20px;">
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <p>
                                                LIKES
                                            </p>
                                            <p class="small-margin">
                                            <h1>2328190</h1>
                                            </p>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <p>
                                                COMMENTS
                                            </p>
                                            <p class="small-margin">
                                            <h1>2328190</h1>
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="card-bottom">
                                <div class="bottom clearfix">
                                    <el-button type="text" class="hide-reject-button">HIDE</el-button>
                                    <el-button type="text" class="show-button">SHOW</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                campaign: {
                    approved_posts: '',
                    approved_likes: '',
                    approved_comments: ''
                },
                campaigns: []
            }
        },
        mounted() {
                this.$http.get('http://pastebin.com/raw/u5uq9cCj')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => console.log(data));
        }
    }
</script>

<style>
    .text {
        font-size: 14px;
    }

    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    }

    .item {
        margin-bottom: 18px;
    }

    .el-card__header {
        border-top: 8px solid #c07ff5;
    }

    .card-bottom {
        padding: 20px;
        border-top: 8px solid #6cbfa6;
    }

    .card-body {
        padding: 20px;
    }

    .el-card__body {
        padding: 0px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        max-width: 430px;
    }

    p.small-margin {
        margin-top: -15px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .show-button {
        padding: 0;
        float: right;
    }

    .hide-reject-button {
        padding: 0;
        float: left;
    }
</style>
