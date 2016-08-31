// Note: `new Date` without parenthesis (`new Date()`)
ctrl.filter("dateFilter", () => (input: mycivis.IAll[], date: Date = new Date) => input.filter((value, index, array) => {
    let date2 = value.date || (value.day) ? moment(`${value.day} ${value.time}`, "YYYY-MM-DD HH:mm").toDate() : next_wday(value.wday);

    return moment(date).format("DD/MMM/YYYY") === moment(date2).format("DD/MMM/YYYY");
}));