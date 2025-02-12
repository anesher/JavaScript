const btn = document.getElementById('btn');
const div = document.querySelector('div');

btn.addEventListener("click", function() {
  
    table = document.createElement('table');
    table.style.backgroundColor="yellow";
    table.style.width="20px";
    table.style.height="20";

    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');

        
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            td.textContent = "Número " + (i * 3 + j + 1); 
            tr.appendChild(td); 
        }

        table.appendChild(tr); 
    }

    div.appendChild(table); 
});