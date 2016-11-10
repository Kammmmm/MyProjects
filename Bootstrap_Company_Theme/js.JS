
$(document).ready(function(){
        $('.list-textarea').autogrow();
});

       function hideButtons(){
            $(".btn-container").hide("fast");
            $(".new-list-input").val("");
       }

       function showSubmitContainer(){
       $(".btn-container").show("fast");
        }

        function showListPanel(){
            listName = $(".new-list-input").val();
            if(listName.length > 0 && (/^\s+$/.test(listName)) == false){
            var header = document.getElementById('list-heading');
            header.innerHTML = listName;
            $(".new-list-form").hide("fast");
            $(".new-list-panel").slideDown("fast");
        }
        else
        alert("Incorrect input data!");
      }
        
        function showTextArea(){
            $(".new-list-panel-footer").hide("fast");
            $(".new-panel-body").show("fast");
        }

        function showAddCardAgain(){
            $(".new-panel-body").hide("fast");
            $(".new-list-panel-footer").show("fast");
        }