var students= [];
function submit() {
    var display_student= [];
    for(var a= 1; a<=5; a++)
    {
        var name_of_student= document.getElementById("name_"+a).value;
        console.log (name_of_student);
        students.push(name_of_student);
    }
    console.log(students);
    var length= students.length;
    console.log(length);
    for(var i= 0; i<length; i++)
    {
        display_student.push("<h4> Name - " + students[i] + "</h4>");
        console.log(display_student);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student;
    var remove_commas= display_student.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}
function sorting() {
    students.sort();
    console.log(students);
    var display_student_sort=[];
    var length= students.length;
    console.log(length);
    for(var i= 0; i<length; i++)
    {
        display_student_sort.push("<h4> Name - " + students[i] + "</h4>");
        console.log(display_student_sort);
    }
    var remove_commas= display_student_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}