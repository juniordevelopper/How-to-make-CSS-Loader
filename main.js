const ul = document.querySelector("ul");

for (let i=1; i<=6; i++) {
  let li = document.createElement('li');
  li.style.setProperty('--i', i);
  ul.appendChild(li);
}