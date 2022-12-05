<script lang="ts">
export default {
    data() {
        return {
            show: "1",
        };
    },
    methods: {
        select: function (num: any) {
            this.show = num;
        },
    },
};
</script>


<template>
    <div style="width:300px; margin:0 auto;">
        <ul class="tabnav">
            <li @click="select('1')" v-bind:class="{ 'active': show == '1' }">
                <h5>about</h5>
            </li>
            <li @click="select('2')" v-bind:class="{ 'active': show == '2' }">
                <h5>history</h5>
            </li>
        </ul>
    </div>
    <div v-if="show == '1'" class="tabtext">
        <br>
        <h3>好き</h3>
        <p>
            Rust <br>
            ヤドン
        </p>
    </div>
    <div v-else-if="show == '2'" class="tabtext">
        <br>
        <p>
            2021年 4月 静岡大学情報学部入学 <br>
            2022年 6月 技育博2022参加 <br>
            2022年 8月 セキュリティキャンプ2022全国大会L2クラス <br>
            2022年 10月 paizaアルバイト
        </p>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

.tabtext {
    max-width: 500px;
    text-align: center;
    margin: auto;
    padding: 10px 30px;
}

.tabtext p {
    display: inline-block;
    text-align: left;
}

.tabnav {
    margin: auto;
    display: flex;
    list-style-type: none;
}

.tabnav li {
    cursor: pointer;
    width: 50%;
    background: #ddd;
    color: #333;
    padding: 10px;
    text-decoration: none;
    border-radius: 10px;
}

.tabnav li.active {
    background: #ffc3ed;
    color: #fff;
}
</style>