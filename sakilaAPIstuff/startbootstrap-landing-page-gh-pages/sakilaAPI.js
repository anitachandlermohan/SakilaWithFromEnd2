


function getAll(){
    let xhttp = new XMLHttpRequest();
    let url = "http://localhost:8080/api/film_list";
    let film_table = document.createElement("TABLE");
    let table_body = document.createElement("TBODY");
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){

            let film_list = JSON.parse(xhttp.responseText);
           
            for(let i in film_list){
                let row = document.createElement("TR");
                // title column //
                let title_cell = document.createElement("TD");
                let title_cell_text = document.createTextNode( JSON.stringify(film_list[i].title));
                title_cell.appendChild(title_cell_text);
                row.appendChild(title_cell);

                // description column //
                let desc_cell = document.createElement("TD");
                let desc_cell_text = document.createTextNode(JSON.stringify(film_list[i].description));
                desc_cell.appendChild(desc_cell_text);
                row.appendChild(desc_cell);

                //append this row to table// 
                table_body.appendChild(row);

            }

        }
       
    }
    
    xhttp.open("GET", url,true);

    xhttp.send();
    film_table.appendChild(table_body);
    document.getElementById("filmlist").appendChild(film_table);
    
   
}   

function getFilmByID(){
    // document.getElementById("film_list").removeChild(document.getElementById("film_list").lastChild);
    let filmID = document.getElementById("inputFID").value;
    let xhttp = new XMLHttpRequest();
    url = "http://localhost:8080/api/film_list/" + filmID;
    let film_table = document.createElement("TABLE");
    let table_body = document.createElement("TBODY");
    
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){

            let film_list = JSON.parse(xhttp.responseText);
            let search_result = document.createTextNode(JSON.stringify(film_list.title));

            let row = document.createElement("TR");
            let title_cell = document.createElement("TD");
            let title_cell_text = document.createTextNode( JSON.stringify(film_list.title));
             title_cell.appendChild(title_cell_text);
            row.appendChild(title_cell);
            table_body.appendChild(row);

        }
    }
    xhttp.open("GET", url,true);
    xhttp.send();
    film_table.appendChild(table_body);
    document.getElementById("filmlist").appendChild(film_table);
    
}
 function getFilmByCat(){
     let xhttp = new XMLHttpRequest();
     let filmCAT = document.getElementById("inputCAT").value;
    let url = "http://localhost:8080/api/category/" + filmCAT;
    console.log(url);
    let film_table = document.createElement("TABLE");
    let table_body = document.createElement("TBODY");
    xhttp.onload = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){

            let film_list = JSON.parse(xhttp.responseText);
            console.log(xhttp.responseText);
            for(let i in film_list){
                let row = document.createElement("TR");
                // title column //
                let title_cell = document.createElement("TD");
                let title_cell_text = document.createTextNode( JSON.stringify(film_list[i].title));
                title_cell.appendChild(title_cell_text);
                row.appendChild(title_cell);

                // description column //
                let desc_cell = document.createElement("TD");
                let desc_cell_text = document.createTextNode(JSON.stringify(film_list[i].description));
                desc_cell.appendChild(desc_cell_text);
                row.appendChild(desc_cell);

                //append this row to table// 
                table_body.appendChild(row);

            }

        }
       
    }
    
    xhttp.open("GET", url);
   
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.responseType="json";
    xhttp.send();
    film_table.appendChild(table_body);
    document.getElementById("filmlist").appendChild(film_table);

 }

 function clearSearch(){
     let film_list_node = document.getElementById("filmlist");
     let first_node = film_list_node.firstChild;
     console.log(film_list_node.childNodes.length);
     while ( first_node){
         film_list_node.removeChild(first_node);
         first_node = film_list_node.firstChild;
     }
     
 }

   


