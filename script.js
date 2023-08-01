function validation()                                    
{ 
    var name = document.forms["form"]["Nom"];               
    var email = document.forms["form"]["Email"];     
    var comment = document.forms["form"]["message"];  

    if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }    
     
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (comment.value == "")                  
    { 
        alert("Écrivez un message."); 
        comment.focus(); 
        return false; 
    } 
    return true; 
}