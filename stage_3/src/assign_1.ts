console.log("Find median of 2 sorted array");
const A:number[] = [2,5,4,7,10,3]
	const B:number[] = [4,6,8,11,28,2]

	const merged_arr:number[] = A.concat(B); //Merge A and B arrays
	const merged_Arr:number[] = merged_arr.sort((a,b) => a-b);//sort the arrays using comparison function
	//Calling median function
	const median:number = findMedian(merged_Arr);
	//calculate median
	//If the length of array is odd it returns the single middle element
	//If the length of array is even then calculate the average of 2 middle element
	console.log(median);


	function findMedian(merged_Arr:number[]):any { 
	  
		const length:number = merged_Arr.length;
		
		if (length % 2 === 0) {
		  // If the length is even
		  const midIndex1:number = length / 2;
		  const midIndex2:number = midIndex1 - 1;  
		  return ( (merged_Arr[midIndex1] + merged_Arr[midIndex2]) / 2);
		} else {
		  // If the length is odd
		  const midIndex:number = Math.floor(length / 2);
		  return merged_Arr[midIndex];
		}
	  }
