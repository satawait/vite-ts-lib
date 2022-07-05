import MyButton from './MyButton.vue'
const sum = (a: number, b: number, ...c: number[]): number => {
    if (c.length) {
        return c.reduce((pre, next) => pre + next, a + b)
    } else {
        return a + b
    }
}

export { MyButton, sum }
