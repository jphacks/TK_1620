(function () {

  var $logo;
  var beta;
  var gamma;
  var alpha;
  var motionX, motionY, motionZ;
  var motionXprev=0, motionYprev=0, motionZprev=0;

  $(function () {
    $logo = $("#logo");
    window.addEventListener("deviceorientation", deviceorientationHandler);
    window.addEventListener("devicemotion", motionHandler);
  });

  function motionHandler(event){
    motionX = event.acceleration.x;
    motionY = event.acceleration.y;
    motionZ = event.acceleration.z;

    socket.emit('sensor_update', ["acceleration", motionX - motionXprev, motionY - motionYprev, motionZ - motionZprev]);

    motionXprev = motionX;
    motionYprev = motionY;
    motionZprev = motionZ;
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

    socket.emit('sensor_update', ["orientation", beta, gamma, alpha]);

    $logo.css({
      "-webkit-transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + (180 + alpha) + "deg)",
      "transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + alpha + "deg)"
    })
  }
})();
