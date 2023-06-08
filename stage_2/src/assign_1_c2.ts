let arrayN:number[] = [3,5,4,6,7];
for (let ind in arrayN)
{
    let val:number = arrayN[ind];
	
    if (val === 6)
    {
        continue;
    }
    console.log(val);
  
}
