$(document).ready(function () {
  $('#user-menu').hide();
  $('#search').hide();
  $('#login').hide();
  var havelogin = false;

  $('#user-btn').click(function(){
    if(havelogin === true){
      $('#user-menu').slideToggle();
      $('#search').slideUp();
    }else if(havelogin === false){
      $('#login').show();
    }
  });

  $('#login-btn').click(()=>{
    havelogin = true;
    $('#login').hide();
  });

  $('#logout').click(function(){
    havelogin = false;
    $('#user-menu').hide();
  })

  $('#search-btn').click(function () { 
    if(havelogin === true){
      $('#search').slideToggle();
      $('#user-menu').slideUp();
    }else if(havelogin === false){
      $('#login').show();
    }
  });
  
  $('#close-btn').click(function () { 
    $('#login').hide();
  });










});