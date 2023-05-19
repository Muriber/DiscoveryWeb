const currentDiv = document.getElementById('ft_todo');
function add (){
	var newDiv = document.createElement("div");
	newDiv.textContent = window.prompt("Introduce tu nuevo ToDo");
 	newDiv.appendChild(document.createTextNode(newDiv.textContent));
 	currentDiv.insertBefore(newDiv, currentDiv.firstChild);
	 console.log(encodeURIComponent(newDiv.textContent));
	document.cookie = "cookie"+newDiv.textContent+"="+encodeURIComponent(newDiv.textContent)+";"+"SameSite=Strict";
	console.log(document.cookie);
};

currentDiv.addEventListener("click", function(s_div){
if (confirm("Seguro desea borrar el elemento?"))
{
	currentDiv.removeChild(s_div.target);
}
});