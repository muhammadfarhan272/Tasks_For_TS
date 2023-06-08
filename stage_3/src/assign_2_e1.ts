debugger;
let num:number[] = [2, 7, 12, 15];

	let target:number = 9;
	for (let i:number = 0; i < num.length; i++) {
	  //here we find complement
	  let complement:number = target - num[i];

	  for (let j:number = i + 1; j < num.length; j++) {
		// compliment is match to num[j] then we get the target
		if ( num[j] === complement ) {
		  // console.log(complement);
		  // console.log(num[j]);
		  console.log([i, j]);
          break;
		}
		
	  }
	}
