function get_num(){
    let x=prompt("Enter number");
    x=parseInt(x);
    if(x%2==0)
    {
        document.getElementById('r').innerHTML='<h2 style="color:orange"><u>this number is even</u></h2>'
    }
    else{
        document.getElementById('r').innerHTML='<h2 style="color:blue"><u>this number is even</u></h2>';
    }
}