function formvalidation() {
    const email = document.getElementById('email_id').value;
    const mobile = document.getElementById('mo_id').value;
    const credit = document.getElementById('credit_id').value;
    const code = document.getElementById('zip').value;
    let flag = true;

    if (email == '') {
        document.getElementById("email_er_id").innerHTML = "Please Enter Your email";
        flag = false;
    }
    else if (!(/^\w{6,}@[a-zA-Z]{1,}\.[a-zA-Z]{1,}$/).test(email)) {
        document.getElementById("email_er_id").innerHTML = "Please Enter Valid email";
        flag = false;
    }

    if (mobile == '') {
        document.getElementById("mobile_er_id").innerHTML = "Please Enter Your Mobile Number";
        flag = false;
    }
    else if (!(/^[1-9]\d{9}$/).test(mobile)) {
        document.getElementById("mobile_er_id").innerHTML = "Please Enter Valid Mobile Number";
        flag = false;
    }

    if (credit == '') {
        document.getElementById("credit_er_id").innerHTML = "Please Enter Your Credit Card Number";
        flag = false;
    }
    else if (!(/^[1-9]{1}\d{5}$/).test(credit)) {
        document.getElementById("credit_er_id").innerHTML = "Please Enter Valid Credit Card Number";
        flag = false;
    }

    if (code == '') {
        document.getElementById("zip_er_id").innerHTML = "Please Enter Zip Code";
        flag = false;
    }
    else if (!(/^[1-9]\d{5}$/).test(code)) {
        document.getElementById("zip_er_id").innerHTML = "Please Enter Valid Zip Code";
        flag = false;
    }

    return flag;
}