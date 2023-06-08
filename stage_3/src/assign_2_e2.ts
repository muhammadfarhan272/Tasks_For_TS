
let numb:number[] = [3,2,4];

	let targ:number = 6;
	for (let i:number = 0; i < numb.length; i++) {
	  //here we find complement
	  let complement:number = targ - numb[i];

	  for (let j:number = i + 1; j < numb.length; j++) {
		// compliment is match to num[j] then we get the target
		if ( numb[j] === complement ) {
		  // console.log(complement);
		  // console.log(numb[j]);
		  console.log([i, j]);
          break;
		}
		
	  }
	}
