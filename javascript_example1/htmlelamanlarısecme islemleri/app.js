let value;

value = document.getElementsByTagName("p");
console.log(value[0]);
value = document.getElementById("link");
console.log(value);
value = document.getElementsByClassName("kutu");
console.log(value[0]);
value = document.querySelector(".kutu");
console.log(value);
value = document.querySelector("#link");
console.log(value);
value = document.querySelector("p");
console.log(value);
value = document.querySelectorAll("p");
console.log(value);
value = document.querySelector("a").getAttribute("href");
console.log(value);
value = document.querySelector(".kutu");
value.textContent += " yeni deger ";
console.log(value);
value = document.querySelector(".kutu");
console.log(value.innerHTML);

let sayi1 = 1;

value.innerHTML =
  "<ul>  <li> Java" + "-" + sayi1 + "</li> <li>React</li> <li> Html</li> </ul>";
console.log(value);
value.innerHTML = ` <ul> <li> Java-${sayi1 + 5}</li>
<li> React </li>    
 <li> Html </li>
</ul> `;

let newLink = document.createElement("a");
newLink.id = "newlink";
newLink.className = "mylink";
newLink.href = "https://www.youtube.com";
newLink.target = "_blank";
newLink.textContent = "yeni youtube linki";
console.log(newLink);
value.appendChild(newLink);
console.log(value.children);
console.log(value.classList);
console.log(value.childNodes);
console.log(newLink.parentElement.parentElement);
