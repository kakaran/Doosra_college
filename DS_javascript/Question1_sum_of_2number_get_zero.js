//checking sum of zero Probleam 1
//[-5,-4,-3,-2,0,2,4,6,8] -> input 

// this solution is o(n^2) quadratic time complexity;  //o(n^2) means are double loop using method;
// var arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// for(let i=0;i<arr.length-1;i++)
// {
//     for(let j=1;j<=arr.length;j++)  
//     {
//         let value = arr[i]+arr[j];
//         if(value == 0)
//         {
//             console.log(arr[i] , arr[j] + " = " + value );
//         }
//     }
// }

//second tipe syntax of this question

// function getSumPairZero(array)
// {
//     for(let number of array)
//     {
//         for(let j=1;j<array.length;j++)
//         {
//             if(number + array[j] === 0)
//             {
//                 return[number , array[j]];
//             }
//         }   
//     }
// }

// const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);

// console.log(result);

//this solutions are o(n) linear time complexity

function findsum(array)
{
    let left=0;
    let right=array.length-1;

    while(left<right)
    {
        sum = array[left]+array[right];
        if(sum === 0){
            return [array[left],array[right]];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }
}

const result = findsum([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);