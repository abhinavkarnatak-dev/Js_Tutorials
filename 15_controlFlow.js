/* Switch case
If you don't use break,
it will execute all the code,
including and below the true condition,
except the default case,
till a new break is found.
*/
const month = 9
switch (month) {
    case 1:
        console.log("January");        
        break;
    case 2:
        console.log("February");        
        break;
    case 3:
        console.log("March");        
        break;
    case 4:
        console.log("April");        
        break;
    case 5:
        console.log("May");        
        break;
    case 6:
        console.log("June");        
        break;
    case 7:
        console.log("July");        
        break;
    case 8:
        console.log("August");        
        break;
    case 9:
        console.log("September");        
        break;
    case 10:
        console.log("October");        
        break;
    case 11:
        console.log("November");        
        break;
    case 12:
        console.log("December");        
        break;
    default:
        console.log("Enter a valid month");
        break;
}