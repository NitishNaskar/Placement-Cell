function getallstudentname(){
    $.ajax({
        type: "get",
        url: "/student/all-student",
        success: function(data){
            let temp="";
            for(const elsent of data){
                temp=temp+`<option value="${elsent.s_name}++${elsent._id}">${elsent.s_name}</option>`;
            }
            document.getElementById("all-student").innerHTML=temp;
        }
    });
}