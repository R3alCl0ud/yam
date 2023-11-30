export const backDate = (secondsAgo: number, now = Date.now()) =>
    new Date(now - secondsAgo * 1000)


export function randomIntFromInterval(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
