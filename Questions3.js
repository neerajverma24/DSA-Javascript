// Day 11 :  =================================================================================================
// Questions : Finding the duplicate from an Array

let num = [2, 2, 3, 4, 5, 6, 7]
function findDuplicate(num) {
    let obj = {}
    for (let i = 0; i <= num.length; i++) {
        if (obj[num[i]]) return num[i]
        else obj[num[i]] = 'no duplicate'
    }
}
console.log(findDuplicate(num));