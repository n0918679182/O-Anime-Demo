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


  $('#month-label').click(function (e) { 
    e.preventDefault();
    $('#month-cover').removeClass('d-none');
    $('#year-cover').addClass('d-none');
    $("input[type=radio]")[0].checked = true;
  });
  $('#year-label').click(function (e) { 
    e.preventDefault();
    $('#month-cover').addClass('d-none');
    $('#year-cover').removeClass('d-none');
    $("input[type=radio]")[1].checked = true;
  });









});