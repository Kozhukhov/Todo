$(function() {
  var countOfWords=0;
  $(".new-todo").keypress(function(e) {
    if (e.keyCode === 13) {
      countOfWords++;
      $(".todo-list").append(
        '<li>\
            <div class="view">\
                <input class="toggle" type="checkbox">\
                <label>'+e.target.value+'</label>\
                <button class="destroy"></button>\
            </div>\
            <input class="edit" value="e.target.value">\
        </li>'
      );
      e.target.value ='';
      $(".todo-count").html(countOfWords);
    }
  });

var check = document.getElementsByClassName('toggle'); 
  $("#toggle-all").click(function(){
    for(var i=0;i<check.length;i++)
    check[i].checked = this.checked;
    });

  $("body").on("click",".destroy",function(){
    $(this).parent().parent().remove();
    countOfWords--;
    $(".todo-count").html(countOfWords);
  });

  $(".clear-completed").click(function(){
    //console.log("dsd");
    for(var i=0;i<check.length;i++){
      if(check[i].checked ===true){
      
        $(check[i]).parent().parent().remove();
        i--;
        countOfWords--;
        $(".todo-count").html(countOfWords);
      }
    }
  });

  $(".filters>li:last-child").click(function(){
    //$(".filters>li:last-child").addClass("selected");
    console.log("dsds");
    for(var i=0;i<check.length;i++){
      if(check[i].checked === false){
        $(check[i]).parent().parent().;
        i--;
        countOfWords--;
        $(".todo-count").html(countOfWords);
      }
    }
  });
});
