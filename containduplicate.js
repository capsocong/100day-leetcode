var containsDuplicate = function(nums) {
    //c1 brute force 
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] === nums[j] ) return true
    //     }
    // }
    // return false

    // c2 using set
    // var seen = new Set()
    // for(let num of nums){
    //     if(seen.has(num)) return true
    //     seen.add(num)
    // }
    // return false

    // c3 using hashmap
    let hashmap = {}
    for(let num of nums){
        if(hashmap[num]) return true
        hashmap[num] = true
    }
    return false

};