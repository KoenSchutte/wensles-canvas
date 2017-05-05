        "use strict";
        var canvas, 
            context, 
            prevX, 
            currX, 
            prevY, 
            currY, 
            w, 
            h, 
            klik, 
            klikCanvas = 0;
        var kleur = "black";
    
        canvas = document.getElementById('canvas');
        context = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            bereken('move', e)
        });
        canvas.addEventListener("mousedown", function (e) {
            bereken('down', e)
        });
        canvas.addEventListener("mouseup", function (e) {
            bereken('up', e)
        });
        canvas.addEventListener("mouseout", function (e) {
            bereken('out', e)
        });
    
    function chooseColor(obj) { //Functie/switch regelt welke kleur is gekozen
        switch (obj.id) {
            case "green":
                kleur = "green";
                break;
            case "blue":
                kleur = "blue";
                break;
            case "red":
                kleur = "red";
                break;
            case "yellow":
                kleur = "yellow";
                break;
            case "purple":
                kleur = "purple";
                break;
            case "black":
                kleur = "black";
                break;
            case "white":
                kleur = "white";
                break;
        }
    }
    
    function teken() { //Tekent wat jij doet met je muis op het canvas
        context.beginPath();
		context.strokeStyle = kleur;
		context.lineWidth = document.getElementById("slider").value;
		context.lineJoin="round";
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.closePath();
		context.stroke();
    }
    
    document.getElementById("clearCanvas").addEventListener("click", function(){ //Maakt het canvas leeg
            context.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
    });
    
    document.getElementById("save").addEventListener("click", function(){ // Maakt er een png van
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    });
    
    function bereken(result, e) { // berekent waar getekent moet woren
        if (result == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop; 
            klik = true; 
        }
        if (result == 'up' || result == "out") {
            klik = false;
        }
        if (result == 'move') {
            if (klik) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                teken();
            }
        }
    }