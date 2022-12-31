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
        <v-timeline side="end" align="start">

            <v-timeline-item size="small" dot-color="pink">
                <template v-slot:opposite>
                    2021-4
                </template>
                <div style="text-align: left;">
                    <div class="text-h6">静岡大学情報学部入学</div>
                </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="pink">
                <template v-slot:opposite>
                    2022-6
                </template>
                <div style="text-align: left;">
                    <div class="text-h6">技育博2022参加</div>
                    <div>
                        プログラミングサークルSZPPとして参加しました。
                    </div>
                </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="pink">
                <template v-slot:opposite>
                    2022-8
                </template>
                <div style="text-align: left;">
                    <div class="text-h6">セキュリティキャンプ全国大会2022 L2クラス参加</div>
                </div>
            </v-timeline-item>

            <v-timeline-item size="small" dot-color="pink">
                <template v-slot:opposite>
                    2022-8
                </template>
                <div style="text-align: left;">
                    <div class="text-h6">paizaアルバイト開始</div>
                </div>
            </v-timeline-item>

        </v-timeline>
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