document.getElementById("grow").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

    });

    document.getElementById("blue").addEventListener("click", function(){

        document.getElementById("box").style.backgroundColor = "blue";

    });


    document.getElementById("destroy").addEventListener("click", function(){

       document.getElementById('box').style.display='none'
            
    });

    document.getElementById("reset").addEventListener("click", function(){

        document.getElementById('box').style="height:150px; width:150px; background-color:orange; margin:25px"
   
    });