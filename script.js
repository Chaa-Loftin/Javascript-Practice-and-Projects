var start = new Date().getTime();
            
        //step 1: choose shape based on comp choice.
            
            function pickShape() {
                
                var choice = Math.floor(Math.random() * 2);
                
                var squareHeight = Math.floor((Math.random() * 150) + 25);
                
                var squareWidth = squareHeight;
                
                start = new Date().getTime();
                
                if (choice == 0) {
                    
                    document.getElementById("shape").style.width = squareWidth;
                    
                    document.getElementById("shape").style.height = squareHeight;
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                    
                } else  {
                    
                    document.getElementById("shape").style.width = squareWidth;
                    
                    document.getElementById("shape").style.height = squareHeight;
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                    
                } 
                
            }
            
            //set how far the shape will move relative to the page
            
            function moveShape() {
                
                var x = Math.floor(Math.random() * 300);
                
                var y = Math.floor(Math.random() * 500);
                
                document.getElementById("shape").style.position = "relative";
                
                document.getElementById("shape").style.top = x;
                
                document.getElementById("shape").style.left = y;
                
            }
            
            function pickColor() {
                
                var x = Math.floor(Math.random() * 6);
                
                var colors = ["red","blue","green","yellow","purple","black"];
                
                document.getElementById("shape").style.backgroundColor = colors[x];
                        
                }
                
                
        
            document.getElementById("shape").onclick = function() {
                
                var end = new Date().getTime();
                
                var timeTaken = ((end - start)/1000);
                
                pickShape();
                
                pickColor();

                moveShape();
                
                
                document.getElementById("timeTaken").innerHTML = timeTaken + " s";
                
            }