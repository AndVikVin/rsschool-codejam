let sumOfOther = (x)=>{
    let arr = [];
    x.forEach((i)=>{
        let arr2 = x.slice();
        let ind = arr2.indexOf(i);
        arr2.splice(ind,1);
        let res = arr2.reduce((sum,current)=>{
            return sum + current;
        })
        arr.push(res);
   });
    return arr;
};