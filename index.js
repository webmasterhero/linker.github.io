show();
 
const link = document.querySelector("input");

const btn = document.querySelector("a");


const searcher = document.getElementById("search");

const box = document.querySelectorAll(".divs");


       btn.addEventListener("click",function(){
       
      
         
       if (link.value != "") {
         
         
          
           links = link.value;
           btn.href = links;
           
         
           
         
          
          btn.innerText = "Searching..";
          alert("New Shelf Is Created");
          
          
          
          console.log(links);
         
          
        
       }else{
         
         alert("Paste Geniun Links!");
       

        
       }
       
         
      
         if (link.value.trim()!=0) {
           
           
           links = link.value;
         
  
 
        let getvalue  = localStorage.getItem("gettask");
      
         
         
           if (getvalue == null) {
             
             
          
             array = [];
             
           }    
             
         
           
           else{
             
             
             array = JSON.parse(getvalue);
           }
           
           array.push(links);
           localStorage.setItem("gettask",JSON.stringify(array));
       
            link.value = "";

         }
         
         
       show();
      
       
       
       });
  
   function show(){
     
   
           
    let getvalue  = localStorage.getItem("gettask");
         
           if (getvalue == null) {
             

              array = [];
             
             
             
           }else{
             
             
           
             array = JSON.parse(getvalue);
       
           
           }
          
         
      
   

       
       let html = '';
       

  
      var sec = document.getElementById("section");
     

     array.forEach((item, index) => {
      
      html += `   
      
      
      
      
        


    <div class = "divs">
     
     
     
   
     <a id ="item"> 
          ${item} 
       
       </a> <br><br>
      
      <a href="" onclick ="deleteitem(${index})" id="btn2">Delete</a>
   
   
      <p id = "codelist">${index + 1001}</p>
        
     </div>
     
    
    
     
     
     
     
      
  ` ;
  
  
  
  
 
    
    
    });
   
 
  
    sec.innerHTML = html;
  
   
    
   
} 

 
     
    
    
      
     
    
      
     
     
     function  deleteitem(index){
      
         
  
          if (array != "") {
           
          
        alert("One Shelf Is Deleted") ;
          
     let getvalue = localStorage.getItem("gettask");
       
       array = JSON.parse(getvalue);
       
       
       array.splice(index, 1);
       localStorage.setItem("gettask", JSON.stringify(array));
       
       
       
       
          }else{
            
            alert("No Links!");
            
            
        
          }
      
     show();
         
    
        
     }
     
     
     
     
   let timer;
 let sec = 500;
 
 
 function livesearch(index){
   
  
   
    console.log(searcher.value);
   
   for(let i = 0; i < box.length; i++){
     
     if (box[i].innerText.toLowerCase().includes(searcher.value.toLowerCase())) {
       
      
       
     box[i].classList.remove("hidden");
   
     
     }else{
       
       box[i].classList.add("hidden");
      
       
       
     }
     
   
   }
   
 
   
   
   
 }
searcher.addEventListener("keyup",function(){
  
  
  
  
  clearTimeout(timer);
  timer = setTimeout(livesearch,1000);
});

 
 
