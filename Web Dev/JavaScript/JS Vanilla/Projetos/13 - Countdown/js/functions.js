(function readyJS(win, doc) {
    'use strict';

    //DOM
    const giveway = doc.querySelector('.giveway-date');
    const boxes = doc.querySelectorAll('.box h3');
    const boxesContainer = doc.querySelector('.boxes-container');

    //GIVEWAY DATE
    const monthsArr = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const weekdaysArr = [
        'Monday',
        'Tuesday',
        'Wednesdey',
        'Thrusday',
        'Friday',
        'Saturday',
        'Monday'
    ]
    //SET FROM X DAYS FROM TODAY (REMOVE BRACKETS TO MAKE IT WORK)
    {
        let tempDate = new Date();
        let tempYear = tempDate.getFullYear();
        let tempMonth = tempDate.getMonth();
        let tempDay = tempDate.getDate();
        const givewayDate = new Date(tempYear, tempMonth, tempDay + 10, 8, 0);
    }

    //SET SPECIFIC DATE
    const givewayDate = new Date(2021, 11, 31, 12, 30, 0);
    const year = givewayDate.getFullYear();
    const month = monthsArr[givewayDate.getMonth()];
    const day = givewayDate.getDate();
    const weekday = weekdaysArr[givewayDate.getDay()];
    let hour = givewayDate.getHours();
    let minute = givewayDate.getMinutes();

    //TIME VALUES
    const oneDayMs = 24 * 60 * 60 * 1000;
    const oneHourMs = 60 * 60 * 1000;
    const oneMinuteMs = 60 * 1000;

    //CODE
    //ADD A ZERO IF THE HOUR OR MIN VALUE IS LOWER THEN 10
    function checkHourAndMin(value) {
        if (value < 10) {
            return (value = `0${value}`);
        }
        else {
            return value;
        }
    }
    hour = checkHourAndMin(hour);
    minute = checkHourAndMin(minute);

    //CHANGE TEXT FROM GIVEWAY
    giveway.textContent = `Giveway ends on ${weekday}, ${day} ${month} ${year}, at ${hour}:${minute}`

    //CHANGE TIME
    function getRemainingTime() {
        //DATE MS
        const givewayDateMs = givewayDate.getTime();
        const currentDateMs = new Date();
        const dateDifferenceMs = givewayDateMs - currentDateMs;

        //REMAINING TIME VARS
        let remainingDays = Math.floor(dateDifferenceMs / oneDayMs);
        let remainingHours = Math.floor((dateDifferenceMs % oneDayMs) / oneHourMs);
        let remaininMinutes = Math.floor((dateDifferenceMs % oneHourMs) / oneMinuteMs);
        let remaininSecs = Math.floor((dateDifferenceMs % oneMinuteMs) / 1000);

        //REMAINING TIME VALUES
        let timeValues = [remainingDays, remainingHours, remaininMinutes, remaininSecs];

        //ADD A ZERO IF A VALUE IS LOWER THEN 10
        function formatValue(value) {
            if (value < 10) {
                return (value = `0${value}`);
            }
            else {
                return value;
            }
        }

        //CHANGE THE TEXT OF EVERY TIME BOX
        boxes.forEach(function (item, index) {
            item.textContent = formatValue(timeValues[index]);
        });
        if (dateDifferenceMs < 0) {
            clearInterval(countdown);
            boxesContainer.classList.remove('grid');
            boxesContainer.innerHTML = '<h4 class="expired">Sorry, this giveway has expired!</h4>'
        }
    }

    //EXECUTE THE FUNCTION EVERY 1S
    let countdown = setInterval(getRemainingTime, 1000);

})(window, document);