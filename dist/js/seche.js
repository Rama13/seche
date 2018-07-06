function gtagPP(pp){
    if( pp==1 ){
      $(".ppcomp1").attr('id', 'thirdComp');
      $(".ppcomp2").removeAttr('id');
      $(".ppcomp1").css("display","none");
      $(".ppcomp2").css("display","none");

      $("#tagbtn1").addClass("active-btn-blue");
      $("#tagbtn1").removeClass("btnGray");
      $("#tagbtn2").removeClass("active-btn-blue");
      $("#tagbtn2").addClass("btnGray");

      $("#firstComp").css("display","block");

      $("#devis-gratuit").removeAttr('href');
      $("#devis-gratuit").attr('href', 'pageDemandeDevis-amiante-Part.html');

      $("#trouver-mon-contact").removeAttr('href');
      $("#trouver-mon-contact").attr('href', '#');

    }else{
      $(".ppcomp1").removeAttr('id');
      $(".ppcomp2").attr('id', 'thirdComp');
      $(".ppcomp1").css("display","none");
      $(".ppcomp2").css("display","none");

      $("#tagbtn2").addClass("active-btn-blue");
      $("#tagbtn2").removeClass("btnGray");
      $("#tagbtn1").removeClass("active-btn-blue");
      $("#tagbtn1").addClass("btnGray");

      $("#firstComp").css("display","block");

      $("#devis-gratuit").removeAttr('href');
      $("#devis-gratuit").attr('href', 'pagedemandedevis-Amiante-Pro.html');

      $("#trouver-mon-contact").removeAttr('href');
      $("#trouver-mon-contact").attr('href', '#');
    }
 }

 function gtag(number){

    if( number == 1){
      $("#firstComp").css("display","block");
      $("#secondComp").css("display","none");
      $("#thirdComp").css("display","none");
      $("#firstCompOpacity").addClass("active-opacity");
    }

    if( number == 2){
      $("#firstComp").css("display","none");
      $("#secondComp").css("display","block");
      $("#thirdComp").css("display","none");
      $("#secondCompOpacity").addClass("active-opacity");
    }

    if( number == 3){
      $("#firstComp").css("display","none");
      $("#secondComp").css("display","none");
      $("#thirdComp").css("display","block");
      $("#thirdCompOpacity").addClass("active-opacity");
    }

 }