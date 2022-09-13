export function getDateOnly(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

export function getUID() {
    return (new Date()).getTime();
}

export function showPrice(number) {

    number = number.toFixed(2)
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}