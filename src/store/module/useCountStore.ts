import { defineStore } from "pinia";
export const useCountStore = defineStore('main', {
    state: () => ({
        count: 10,
        foo: 'bar',
        arr: [1, 2, 3],
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
    },
    actions: {
        changeState(num: number) {
            this.count += num;
            this.foo = 'hello template';
            this.arr.push(4);
            // this.$patch({
            //     count: this.count+num,
            //     foo: 'hello template',
            //     arr: [...this.arr, 4],
            // })
        }
    }
})
