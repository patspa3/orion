$(document).ready(function() {
    if (localStorage.NavStatus == '0'){
        $("aside.navbar").addClass("hide");
        $("aside.navbar").removeClass("show");
    }
});

$(document).on('click', '.navbar-toggler', function(e){
    
    if ($("aside.navbar").hasClass('show')){
        $("aside.navbar").addClass("hide");
        $("aside.navbar").removeClass("show");
    }else{
        $("aside.navbar").addClass("show");
        $("aside.navbar").removeClass("hide");
    }
    
    if (localStorage.NavStatus == '0'){
        localStorage.setItem("NavStatus",'1');
    }else{
        localStorage.setItem("NavStatus",'0');
    }
});


