export const restructureForecastData = (data) => {
    return data.map(({dt, temp:{min, max}}) => ({date: dt*1000, min, max}));
}
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const  isEmptyObject = (obj) => Object.keys(obj).length === 0;