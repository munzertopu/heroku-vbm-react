// Setting Button js
jQuery(document).ready(function(){
    $(".showSettingButton").click(function(){
      $("#setting-dropdown").toggle();
    });
  });
                        

$(document).on("click", function(event){
    ;var $trigger = $(".showSettingButton")
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $("#setting-dropdown").fadeOut("fast");
    }            
});




// Setting Button js
$(document).ready(function(){
    $("#showNotification").click(function(){
      $("#main-notification").toggle();
    });
  });
                        

$(document).on("click", function(event){
    var $trigger = $("#showNotification");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $("#main-notification").fadeOut("fast");
    }            
});


// Setting Button js
$(document).ready(function(){
    $(".search-menu-icon").click(function(){
      $(".chooseModule").slideToggle('slow');
    });
  });
                        

$(document).on("click", function(event){
    var $trigger = $(".search-menu-icon");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".chooseModule").fadeOut("fast");
    }            
});




$(document).ready(function(){
    $(".iconModuleClose").click(function(){
      $('.chooseModule').hide();
    });
  });


  //notification modal js

// Notification Bar JS

$(document).ready(function(){
  $("#plusNotificationBar").click(function(){
    $(".to-notification-sidebar").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-notification-sidebar").fadeOut("fast");
  }            
});

// Another Notification bar
$(document).ready(function(){
  $("#to-plusNotificationBar").click(function(){
    $(".to-notification-sidebar-2").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#to-plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-notification-sidebar-2").fadeOut("fast");
  }            
});


// Search Suggestion JS

//Seeding 
var source = [{
  value: "#",
  label: "Seed"
},
{
  value: "#",
  label: "Seeding Module"
},
{
  value: "#",
  label: "Seeding Sub Module"
},
{
  value: "#",
  label: "Seeding Sub Module 2"
},
];

$(document).ready(function() {
$("input#autocomplete").autocomplete({
  source: source,
  select: function(event, ui) {
      window.location.href = ui.item.value;
  }
});
});

//Purchasing


var source_purchasing = [

{
  value: "#",
  label: "2468135"
},
{
  value: "#",
  label: "246813578"
},
{
  value: "#",
  label: "246813579"
},
{
  value: "#",
  label: "246813580"
},

];
$(document).ready(function() {
$("input#autocomplete-purchase").autocomplete({
  source: source_purchasing,
  select: function(event, ui) {
      window.location.href = ui.item.value;

  }
});
});


 //notification modal js


// Purchasing-action-menu

$(document).ready(function(){
  $("#pur-dash-plusNotificationBar").click(function(){
    $(".to-Purchasing-action-menu").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#pur-dash-plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-Purchasing-action-menu").fadeOut("fast");
  }            
});


// Purchasing-action-menu-1

$(document).ready(function(){
  $("#to-plusNotificationBar").click(function(){
    $(".to-Purchasing-action-menu-1").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#to-plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-Purchasing-action-menu-1").fadeOut("fast");
  }            
});



// Purchasing-action-menu-2

$(document).ready(function(){
  $("#plusNotificationBar").click(function(){
    $(".to-Purchasing-action-menu-2").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-Purchasing-action-menu-2").fadeOut("fast");
  }            
});


// Purchasing-action-menu-3

$(document).ready(function(){
  $("#to-plusNotificationBar").click(function(){
    $(".to-Purchasing-action-menu-3").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#to-plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-Purchasing-action-menu-3").fadeOut("fast");
  }            
});




// Patching-list-data

$(document).ready(function(){
  $("#plusNotificationBar").click(function(){
    $(".to-Patching-list-data").slideToggle('slow');
  });
}); 

$(document).on("click", function(event){
  var $trigger = $("#plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-Patching-list-data").fadeOut("fast");
  }            
});


// Patching-Production-data

$(document).ready(function(){
  $("#plusNotificationBar").click(function(){
    $(".to-Patching-production-data").slideToggle('slow');
  });
});

$(document).on("click", function(event){
  var $trigger = $("#plusNotificationBar");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".to-Patching-production-data").fadeOut("fast");
  }            
});