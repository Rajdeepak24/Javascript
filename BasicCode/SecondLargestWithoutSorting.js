let n = [3,8,1,98,12,46,67]
let l = 0
let sl = 0;
for (let i =0; i<n.length; i++){
    if(n[i]>l){
        sl = l;
        sl = n[i]
    }
}
console.log("second Largest",sl)