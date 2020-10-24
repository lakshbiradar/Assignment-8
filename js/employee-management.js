/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
var emp = [["Ketaki", "Manager", 6434], ["Joe", "Team Lead", 2343], ["Rea", "Sr. Developer", 4343], ["Anita", "Sr. Developer", 4546], ["John", "Sr. Developer", 8789]];
//window.console.log(emp);

function myfunction(empl)
{
    "use strict";
    var tr = document.createElement("tr");
    var h = '<tr><td>' +empl[0]+ '</td><td>' +empl[1]+ '</td> <td>' +empl[2]+ '</td></tr>';
    tr.innerHTML = h;
    var td = tr.appendChild(document.createElement("td"));
    var del = td.appendChild(document.createElement("input"));
    del.type = "button";
    del.value = "Delete";
    del.innerText= empl;
    del.addEventListener("click", del_Emp);
    $("display_table").appendChild(tr);
}

var del_Emp = function (empl) {
    "use strict";
    var a = empl.target.parentNode.parentNode.children[0].innerText;
    var ind = emp.findIndex(employee => {
        if(employee[0] === a){
            return true;
        }
    });
 //window.console.log(ind);
    emp.splice(ind, 1);
    disp_emp();
}

var disp_emp = function () {
    "use strict";
    var head = "<th>Name</th><th>Title</th><th>Extension</th><th></th>";
    $("display_table").innerHTML = head;
    emp.forEach(myfunction);
    $("count").innerHTML = `Showing ${emp.length} Employees`;
}

var add_emp = function () {
    "use strict";
    var name = $("name").value;
    var title = $("title").value;
    var ext = $("ext").value;
    var error = "Required";
    var flag = 1;
    if(name === "")
    {
        flag = 0;
        $("name_e").innerHTML = error;
    }
    if(title === "")
    {
        flag = 0;
        $("title_e").innerHTML = error;
    }
    if(ext === "")
    {
        flag = 0;
        $("ext_e").innerHTML = error;
    }

    if(flag === 1)
    {
        emp.push([name, title, parseInt(ext, 10)]);
        $("name_e").innerHTML = "";
        $("title_e").innerHTML = "";
        $("ext_e").innerHTML = "";
        $("Employee").reset();
        disp_emp();
    }

}

window.addEventListener("load", function() {
    "use strict";
    $("add").addEventListener("click", add_emp);
    disp_emp();
});


