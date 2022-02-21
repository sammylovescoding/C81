canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
     ctx.beginPath();
     ctx.strokeStyle="blue";
     ctx.lineWidth=6;
     ctx.arc(240,120,40,0,2*Math.PI);

     ctx.stroke();
 
     ctx.beginPath();
     ctx.strokeStyle="black";
     ctx.lineWidth=6;
     ctx.arc(340,120,40,0,2*Math.PI);

     ctx.stroke();
 
     ctx.beginPath();
     ctx.strokeStyle="red";
     ctx.lineWidth=6;
     ctx.arc(440,120,40,0,2*Math.PI);

     ctx.stroke();

     ctx.beginPath();
     ctx.strokeStyle="yellow";
     ctx.lineWidth=6;
     ctx.arc(290,160,40,0,2*Math.PI);

     ctx.stroke();

     ctx.beginPath();
     ctx.strokeStyle="green";
     ctx.lineWidth=6;
     ctx.arc(390,160,40,0,2*Math.PI);

     ctx.stroke();
