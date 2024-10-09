window.onload = pageLoad;

function pageLoad() {
    document.getElementById('start').addEventListener('click', startGame);
}

function startGame() {
    alert("เริ่มเกมแล้ว!");
    addBox();
    timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var totalTime = 30; 
    var remainingTime = totalTime;
    var x = document.getElementById('clock');

    timer = setInterval(function() {
        remainingTime--;
        x.innerText = `เวลาที่เหลือ: ${remainingTime} วินาที`;

        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("เกมจบ! หมดเวลาแล้ว.");
            clearScreen(); 
            x.innerText = "";
			document.getElementById('numbox').value = "";
        } else {
            var allBox = document.querySelectorAll("#layer div");
            if (allBox.length === 0) {
                clearInterval(timer);
                alert("คุณชนะ!");
                clearScreen(); 
                x.innerText = ""; 
				document.getElementById('numbox').value = "";
            }
        }
    }, TIMER_TICK);
}


function addBox() {
    var numbox = parseInt(document.getElementById('numbox').value);
    var gameLayer = document.getElementById('layer');
    var colorDrop = document.getElementById('color').value;

    for (var i = 0; i < numbox; i++) {
        var tempBox = document.createElement('div');
		tempBox.className = "square " + colorDrop
        tempBox.id = "box" + i;
        tempBox.style.left = Math.random() * (500 - 50) + "px"; 
        tempBox.style.top = Math.random() * (500 - 50) + "px";

        gameLayer.appendChild(tempBox);
        bindBox(tempBox);
    }
}

function bindBox(box) {
    box.onclick = function() {
        this.remove();
    }
}

function clearScreen() {
    var allBox = document.querySelectorAll("#layer div");
    
    for (var i = 0; i < allBox.length; i++) {
        allBox[i].remove();
    }
}



