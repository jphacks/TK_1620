(function () {

  var $logo;
  var beta=0;
  var gamma=0;
  var alpha=0;
  var motionX, motionY, motionZ;
  var motionXprev=0, motionYprev=0, motionZprev=0;
  var event_counter = 0;
  var event_interval = 10;

  $(function () {
    $logo = $("#logo");
    window.addEventListener("deviceorientation", deviceorientationHandler);
    window.addEventListener("devicemotion", motionHandler);
  });

  function motionHandler(event){
    /**
    if (event_counter%event_interval == 0){
      motionX = event.acceleration.x;
      motionY = event.acceleration.y;
      motionZ = event.acceleration.z;

      socket.emit('sensor_update', ["acceleration", motionX - motionXprev, motionY - motionYprev, motionZ - motionZprev]);

      motionXprev = motionX;
      motionYprev = motionY;
      motionZprev = motionZ;
    }
    event_counter += 1;
	*/
  }
  /**
  *
  * @param event
  */
  function deviceorientationHandler(event) {
    //ジャイロセンサー情報取得
    // X軸
    beta = event.beta;
    // Y軸
    gamma = event.gamma;
    // Z軸
    alpha = event.alpha;
    var html = "";
    html += "X回転 : " + beta + "<br>";
    html += "Y回転 : " + gamma + "<br>";
    html += 'Z回転 : ' + alpha;
    $("#debug").html(html);

    
    if (event_counter%event_interval ==0){
      socket.emit('sensor_update', ["orientation", beta, gamma, alpha]);
    }
    event_counter += 1;
    

    $logo.css({
      "-webkit-transform": "rotateX(" + (135 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + (180 + alpha) + "deg)",
      "transform": "rotateX(" + (135 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + (180 + alpha) + "deg)"
    })
  }
})();
