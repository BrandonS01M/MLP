n =  new Date();
//Año
y = n.getFullYear();
//Mes
m = n.getMonth() + 1;
//Día
d = n.getDate();

document.getElementById("date").innerHTML = d + "/" + m + "/" + y;