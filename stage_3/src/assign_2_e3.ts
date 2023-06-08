
let Num:number[] = [3,3];

	let Targ:number = 6;
	for (let i:number = 0; i < Num.length; i++) {
	  //here we find complement
	  let complement:number = Targ - Num[i];

	  for (let j:number = i + 1; j < Num.length; j++) {
		// compliment is match to num[j] then we get the target
		if ( Num[j] === complement ) {
		  // console.log(complement);
		  // console.log(Num[j]);
		  console.log([i, j]);
          break;
		}
		
	  }
	}