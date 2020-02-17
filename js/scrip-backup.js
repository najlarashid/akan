function getName(){ 
    ///alert("i was clicked");
    var gender = document.getElementById("gender").checked;
    var first = document.getElementById("first").value;
    //alert(first);
    var date = document.getElementById("date").value;
    var screen = document.getElementById("screen");
        var date = new Date(date).getDay();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = days[date];
    //alert(date);

    if(gender == true){
        var names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var name = names[date];
        alert(name);
    }else if(gender == false){
    
        var names = ["Akosua", "Adwoa", "Abenaa", "Akua", "yaa", "Afua", "Ama"];
        var name = names[date];

    }
screen.innerHTML=("Hello " +first + ", your Akan Name is " + name + "."); 
}