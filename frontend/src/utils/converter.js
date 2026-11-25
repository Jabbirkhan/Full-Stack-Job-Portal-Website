
export const convertData = (value) => {
    if(value > 1000000){
        return Math.floor(value / 1000) + "M";
    } else if(value > 1000){
        return Math.floor(value / 1000) + "K";
    } else {
        return value
    }
}