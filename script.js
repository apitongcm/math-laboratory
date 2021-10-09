//CONSOLE APPLICATION FOR FINDING THE ROOTS
// Ax^2 + Bx + C = 0 
//USE the function findroot
// Ax^3 + Bx^2 + Cx + D = 0 
//USE the function cubicEq

const myroot1= document.querySelector(".demo1");
const myroot2= document.querySelector(".demo2");

function myfun()
{
    console.log("Hello");
    return "World";
  
}

function abTest(a,b)
{
    if(a < 0 || b < 0)
    {
       return undefined;
    }
    else
    {
       let answer = Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
       return answer;
    }    
}

function findRoot1(a,b,c)
{
    //discriminant
    let discriminant = Math.pow(b,2) - 4*a*c;
    if(discriminant < 0)
    {
        return "roots are imaginary";
    }
    //quadratic equation
    let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    return root1;
}

function findRoot2(a,b,c)
{
   //discriminant
   let discriminant = Math.pow(b,2) - 4*a*c;
   if(discriminant < 0)
   {
       return "roots are imaginary";
   }
   let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
    return root2;  
}

function perfectSquare(root1,root2)
{
    if(root1 == root2)
    {
        console.log("perfect square")
    }
    else
    {
        console.log("not a perfect square");
    }
}


//myfun();
//abTest(2,2);

// let getRoot1 = findRoot1(1,6,9);
// let getRoot2 = findRoot2(1,6,9); 

// myroot1.innerHTML = "the root is " + getRoot1;
// myroot2.innerHTML = "the second root is " + getRoot2;
// perfectSquare();


//find the roots of a three variable equation
function synthDivision(x,a,b,c,d)
{
    let e = x*a + b;
    let f = x*e + c;
    let g = x*f + d;
    
    if(g == 0)
    {
        console.log(findRoot1(a,e,f));
        console.log(findRoot2(a,e,f));
       
    }
    else
    {
        console.log("imaginary");
    }
}

//synthDivision(1,1,-6,11,-6);

function cubicEq(a,b,c,d)
{
    for(let x = 0; x < 10; x++)
        {
            let e = x*a + b;
            let f = x*e + c;
            let g = x*f + d;
            
            if(g == 0)
            {
                console.log(findRoot1(a,e,f));
                console.log(findRoot2(a,e,f));
                console.log("break");
 
            }
            else
            {
                console.log("contains imaginary roots");
            }
  
        }
}

cubicEq(1,-6,11,-6);
cubicEq(1,-3,4,5);
