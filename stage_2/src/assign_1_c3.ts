var arr:number[] = [3,5,4,6,7];
var count:number = 0;
for (let val of arr)
{
    console.log(val);
    count++;
    if (count === 2)
    {
        break;
    }
}
