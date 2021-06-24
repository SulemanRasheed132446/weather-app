export const restructureForecastData = (data) => {
    return data.map(({dt, temp:{min, max}}) => ({date: formatDate(dt*1000), min, max}));
}
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (date) => {
    return `${months[new Date(date).getMonth()]} , ${new Date(date).getDate()}`
}