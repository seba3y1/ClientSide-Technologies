 theContext = document.getElementById("my-canvas").getContext('2d');
 theContext.beginPath();
 theContext.arc(200, 80, 60, 0, Math.PI * 2);
 theContext.fillStyle = "white";
 theContext.fill(); 
 theContext.closePath();
 const img = new Image();
 img.src = 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'
 img.onload = () => {
    theContext.beginPath();
    theContext.arc(200, 80, 60, 0, Math.PI * 2);
    theContext.closePath();
    theContext.clip();
 
    theContext.drawImage(img, 140, 20, 120, 120);

    
  };
 