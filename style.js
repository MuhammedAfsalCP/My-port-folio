function sentMail(event) {
    event.preventDefault();

    if (document.getElementById("email_name").value.trim().length > 0 &&
        document.getElementById("email_message").value.trim().length > 0
    ) {
        var params = {
            name: document.getElementById("email_name").value,
            email: document.getElementById("email_address").value,
            message: document.getElementById("email_message").value,
            
           
        };
        const serviceID = "service_btlwrap";
        const templateID = "template_r10g6c1";
        emailjs.send(serviceID, templateID, params)
            .then(function
                (res) {
                document.getElementById("email_name").value = "";
                document.getElementById("email_address").value = "";
                document.getElementById("email_message").value = "";
                
                console.log(res);
                alert("Your Message Sent Successfully");
            }
            )
            .catch((err) => console.log(err))

    } else if (document.getElementById("email_name").value.trim().length == 0) {
        alert("Name cant be empty");
    }
    else if (document.getElementById("email_message").value.trim().length == 0) {
        alert("Message cant be empty");
    }
}