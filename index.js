function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(location = "go to the office") {
    return `This Monday, I will ${location}.`
}

function wrapAdjective(special = "*") {
    return function (message = "A worker") {
       return `You are ${special}${message}${special}!`
    }
}