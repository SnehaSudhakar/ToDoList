
$(document).ready(() => {

    //hiding the label
    $('#newTask').focus(() => {
        $("#taskLabel").hide();
    })

    //Adding task
    $("#addBtn").click(() => {
        var enteredTask = $("#newTask").val();   //assign entered task to a variable

        //newly entered task
        if (enteredTask != "") {
            var task = `<li class="d-flex justify-content-between list-unstyled bg-white rounded text-dark p-2 my-3">
                            <div class="content overflow-hidden">
                                <input type="checkbox" class="form-check-input border border-secondary p-2" >
                                <label>${enteredTask}</label>
                            </div>
                            <span class="dltTask  mx-2"><i class="fa-solid fa-trash-can"></i></span >
                         </li>`;

            $(".taskList").append(task); //append entered task to the list
            $("#newTask").val("");   //clearing input field
            $("#taskLabel").show(); //show label on input field
        }
        else {
            // empty task alert
            var emptyAlert = `<div class="alert alert-danger p-1 mx-2 mt-2">
                                <button class="btn-close float-end " data-bs-dismiss="alert"></button>
                                <p class="text-center text-danger">Task cannot be empty</p>
                            </div>`;

            $(".taskBar").after(emptyAlert); //placing emptyalert after input field
        }

        //delete task from the list
        $(".dltTask").click(function () {
            $(this).parent().remove();
        });

    });
});
