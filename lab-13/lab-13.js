function check_error(){
    const first = document.getElementById('form6Example1').value;
    const last = document.getElementById('form6Example2').value;
    const name = document.getElementById('form6Example3').value;
    const Address = document.getElementById('form6Example4').value;
    const Email = document.getElementById('form6Example5').value;
    const Phone = document.getElementById('form6Example6').value;
    const Additional_information = document.getElementById('form6Example7').value;


    let flag=true;
    document.getElementById('err_first').style.display = 'none';
    document.getElementById('err_last').style.display = 'none';
    document.getElementById('err_name').style.display = 'none';
    document.getElementById('err_address').style.display = 'none';
    document.getElementById('err_email').style.display = 'none';
    document.getElementById('err_phone').style.display = 'none';
    document.getElementById('err_info').style.display = 'none';
    //document.getElementById('err_last').style.display = 'none';

    if(first == '')
    {
        document.getElementById('err_first').style.display = 'inline-block';
        flag=false;
    }
    if(last == '')
    {
        document.getElementById('err_last').style.display = 'inline-block';
        flag=false;
    }
    if(name == '')
    {
        document.getElementById('err_name').style.display = 'inline-block';
        flag=false;
    }
    if(last == '')
    {
        document.getElementById('err_address').style.display = 'inline-block';
        flag=false;
    }
    if(last == '')
    {
        document.getElementById('err_email').style.display = 'inline-block';
        flag=false;
    }
    if(last == '')
    {
        document.getElementById('err_phone').style.display = 'inline-block';
        flag=false;
    }
    if(last == '')
    {
        document.getElementById('err_info').style.display = 'inline-block';
        flag=false;
    }
    return flag;
}