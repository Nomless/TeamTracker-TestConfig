
var actions = {


  moveLineFrequency: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    return !Number.isNaN(freq) ? freq : 0
  },
  moveLineFrequencyStr: (array) => actions.moveLineFrequency(array) + "%",

  robotBreak: (array) => {
    var freq = (array.filter((value) => value === "Yes").length / array.length) * 100

    return !Number.isNaN(freq) ? freq : 0
  },
  robotBreakStr: (array) => actions.robotBreak(array) + "%",
  sum: (array) => {
    var sum = array.reduce((prev, curr) => prev + curr, 0)
    return !Number.isNaN(sum) ? sum : 0
  },  
  averagePerMatch: (array) => {
    var average = actions.sum(array) / array.length
    return !Number.isNaN(average) ? average : 0
  },
  averagePerMatchStr: (array) => actions.averagePerMatch(array) + "%",


}
