
let arr = [2,7,11,15]
let tag = 18
console.log(arr)
const map = new Map()

for(let i=0; i<arr.length; i++){
    // console.log(arr[i])
    const target = tag-arr[i]
    if(map.has(target)){
        console.log([map.get(target), i])
        break;
    }
    map.set(arr[i],i)
}
// console.log("Amppp-->",map)
