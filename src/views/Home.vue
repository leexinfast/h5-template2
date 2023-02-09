<template>
    <div class="home">
        <HelloWorld msg="Hello Template2" />

        <h3>Pinia基本使用</h3>
        <p>{{ countStore.count}}</p>
        <p>{{ countStore.foo }}</p>
        <p>{{ countStore.arr }}</p>
        <hr />
        <p>解构mainStore后的渲染</p>
        <p>{{ count }}</p>
        <p>{{ foo }}</p>
        <p>{{ arr }}</p>
        <hr />

        <van-cell-group title="按钮">
            <van-button type="primary" @click="handleChangeState">修改数据</van-button>
        </van-cell-group>

        <van-cell-group title="表单标题">
            <!-- 输入任意文本 -->
            <van-field  label="文本" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field type="tel" label="手机号" />
            <!-- 允许输入正整数，调起纯数字键盘 -->
            <van-field type="digit" label="整数" />
            <!-- 允许输入数字，调起带符号的纯数字键盘 -->
            <van-field type="number" label="数字" />
            <!-- 输入密码 -->
            <van-field type="password" label="密码" />
        </van-cell-group>
    </div>
</template>

<script lang="ts" setup>
    import HelloWorld from "../components/HelloWorld.vue";
    import { apiGetHomeData } from "../service/api/home";
    import { useCountStore } from "../store/module/useCountStore";
    import { storeToRefs } from "pinia";

    const countStore = useCountStore();
    const { count, foo, arr } = storeToRefs(countStore);

    const handleChangeState = () => {
        countStore.$patch((state) => {
            state.count++;
            state.foo = 'hello foo';
            state.arr.push(4);
        })
        // countStore.changeState(100);
    }

    const handleGetHomeData = () => {
        apiGetHomeData({}).then(res => {
            console.log(res)
        })
    }
    handleGetHomeData()
</script>

<style scoped>
.home {
    padding: 10px;
}
</style>
