function multiplyValue(value: number, multiplier: number = 2) : number
{
    return value * multiplier;
}
//(for testing purposes)
//console.log(multiplyValue(10));       
//console.log(multiplyValue(10, 5));    
//console.log(multiplyValue(7, 0)); 

function processInput(input: string | number | boolean) : string | number
{
    if(typeof input === "number")
    {
        return input * 10;
    }
    else if(typeof input === "string")
    {
        return input.trim().toLowerCase();
    }
    else
    {
        return input ? "Active" : "Inactive";
    }       
}

console.log(processInput(" TypeScript ")); 
console.log(processInput(7));              
console.log(processInput(true));           
console.log(processInput(false));

