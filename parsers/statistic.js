
// param - type of command statistic
// and
// type - increment or decrement
const editStatistic = async (param, type) => {
    let statistic = await loadStatistic();
    
    switch (param) {
        case 'day': {
            type === '+' 
                ? statistic.day++ 
                : statistic.day--;

            break;
        }

        case 'next': {
            type === '+' 
                ? statistic.next++ 
                : statistic.next--;

            break;
        }

        case 'nextday': {
            type === '+' 
                ? statistic.nextday++ 
                : statistic.nextday--;

            break;
        }

        case 'now': {
            type === '+' 
                ? statistic.now++ 
                : statistic.now--;

            break;
        }

        case 'week': {
            type === '+' 
                ? statistic.week++ 
                : statistic.week--;

            break;
        }

        case 'notification': {
            type === '+' 
                ? statistic.day++ 
                : statistic.day--;

            break;
        }
    }

    await saveStatistic(statistic);
}

const loadStatistic = () => {
    return {}
}

const saveStatistic = (statistic) => {

}

module.exports = {
    loadStatistic,
    editStatistic
}