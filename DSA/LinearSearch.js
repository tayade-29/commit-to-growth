/**
 Linear search : we search linearly until we get teh desired element
 */

const arr =[10,20,30,40,50];

function LinearSearch(num){
    for(let i=0; i<arr.length;i++){
        if(arr[i]==num){
            console.log(`num ${num} found at index: ${i}`)
        }       
    }
}

LinearSearch(40);