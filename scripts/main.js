var rabbitEl = document.getElementById("conejo");

   var StartTime = new Date().getTime();
      var walkTheRabbit = function() {
         var currTime = new Date().getTime();
         var secondsElapsed = ((currTime - startTime)/1000);
         var newRight = (50 = ((currTime - startTime)/1000)*30);
         
      dogEl.style.right = newRight + "px";
      window.requestAnimationFrame(walkTheRabbit)
      };

walkTheRabbit();

var button = document.getElementById("button");
