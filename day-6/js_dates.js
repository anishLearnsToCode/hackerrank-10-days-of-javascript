function getDayName(dateString) {
    const date = new Date(dateString);
    const options = {
        weekday: 'long'
    };

    return new Intl.DateTimeFormat('en-Us', options).format(date);
}
