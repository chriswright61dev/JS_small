//Write a function that partitions the array into two subarrays: 
// one with all even integers, and the other with all odd integers. 
// Return your result in the following format:

// [[evens], [odds]]

function evenOddPartition(arr) {
return [arr.filter(num => num%2 == 0),arr.filter(num => num%2 != 0)]

}