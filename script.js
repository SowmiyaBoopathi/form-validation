function validate_form()
{
//input
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const number=document.getElementById("number").value;
    const age=document.getElementById("age").value;
    const gender=document.getElementById("gender").value;
    const event=document.getElementById("event").value;
    const message=document.getElementById("message").value;


    // error
    const name_error=document.getElementById("name-error");
    const email_error=document.getElementById("email-error");
    const number_error=document.getElementById("number-error");
    const age_error=document.getElementById("age-error");
    const gender_error=document.getElementById("gender-error");
    const event_error=document.getElementById("event-error");
    const message_error=document.getElementById("message-error");


    // name 

    function name_validate()
    {
        if (name.trim() ==='')
        {
            name_error.textContent="please enter valid name ";
            return false;
        }
        return true;
    }


    // email
    function email_validate()
    {
        const email_last=email.slice(-10);

        if(email_last != "@gmail.com")
        {
            email_error.textContent="please enter valid email (eg. example@gmail.com)";
            return false
        }
        return true;

    }
    
    //phone number
    function phone_validation()
    {
        let n=number.length;
        if (n !=10)
        {
            number_error.textContent="please enter valid phone number";
            return false;
        }
        
        else  if (isNaN(Number(number))) {

                number_error.textContent="please enter only digits"; 
                return false;
            }

        return true;
    }


    // age 
    function age_validation()
    {
        if(age<18)
        {
            age_error.textContent="Age must be greater the 18";
            return false;
        }
        return true;
    }


    // meassage
    function meassage_validation()
    {
        let n=(message.trim()).length;
        if(n<10)
        {
            message_error.textContent="give message greater than 10 letters ";
            return false;
        }
        return true;
    }
     
    //form validate
    function form_valid()
    {
        let valid=true;
        valid=name_validate() && email_validate() && phone_validation() && age_validation() && meassage_validation();
        if (valid)
        {
            alert("Form Submitted successfully");
        }
        else{
            alert("Please enter the fields correctly ");
        }
    }

    form_valid();
}

