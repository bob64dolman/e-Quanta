var ReactBlazeJSMeteorMemoryArray = [];
// port 2819
var ReactBlazeJSMeteorSwitchArray = [];

function ReactBlazeJSMeteorMemoryArray() {}
function ReactBlazeJSMeteor(thiz) {
  console.log($("#page1").css("display", "none"));
  console.log($("#page2").css("display", "none"));
  console.log($("#page3").css("display", "none"));
  console.log($("#page4").css("display", "none"));
  console.log($("#page5").css("display", "none"));
  console.log($("#page7").css("display", "none"));

  //console.log(thiz.getElementsByTagName("a")[0].innerHTML);

  switch (thiz.getElementsByTagName("a")[0].innerHTML) {
    case "Computation":
      $("#page1").css("display", "block");
      break;
    case "Dashboard":
      $("#page2").css("display", "block");
      break;
    case "Components":
      $("#page3").css("display", "block");
      break;
    case "Grid":
      $("#page4").css("display", "block");
      break;
    case "Project BladeStorm":
      $("#page5").css("display", "block");
      break;
    case "Avatar":
      $("#page7").css("display", "block");
      break;
    default:
      break;
  }
}
// ---------Responsive-navbar-active-animation-----------
function test(thiz) {
  ReactBlazeJSMeteor(thiz);
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    ReactBlazeJSMeteor(this);

    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test(document);
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test(document);
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test(document);
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

function addQuanta(tt) {
  beep();
  $("#quantal").html(" " + $("#quantal").html() + tt + "");
}

function addQuantaEX() {
  beep();
  var tt = $("#page3-number").val();
  $("#quantal").html(
    $("#quantal").html() + "|" + dec2bin(Number(tt) + 1) + "} "
  );
}

/* Super POSITION SOUND WAVE */
function beep() {
  var snd = new Audio(
    "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
  );
  snd.play();
}

//bladestorm
function BladeStormV4(quanta_line_360) {
  $(".page1-results-lyrics")[Math.Random() * 12].css("display: block;");
}
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fjan-25-2020-pictures-of-planets-in-order-25-pictures-of-planets-in-order-flowers-ink-may-2013--614459942919585278%2F&psig=AOvVaw0kMk-nx5tROA0Gfnh5GKJy&ust=1705283021270000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJilmLjg24MDFQAAAAAdAAAAABAD

function speak(div) {
  var to_speak = new SpeechSynthesisUtterance(div.innerHTML);
  to_speak.lang = "en-US";
  var voices = window.speechSynthesis.getVoices();
  //console.log(voices);
  //to_speak.voice = voices[2];
  window.speechSynthesis.speak(to_speak);
}

/*Deep code man*/
function stars() {
  let e = document.createElement("div");
  switch (Math.round((Math.random() * 100) % 2)) {
    case 0:
      e.setAttribute("class", "star");
      //console.log("|0}");
      break;
    default:
      e.setAttribute("class", "starr");
      // console.log("|1}");

      break;
  }
  document.body.appendChild(e);
  //let ee = document.createElement("div");
  //ee.setAttribute("class", "starr");
  document.body.appendChild(e);
  e.style.left = Math.random() * +innerWidth + "px";

  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + "px";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  stars();
}, 50);

/* Hot code */

// Options
var options = {
  /* Which hue should be used for the first batch of rockets? */
  startingHue: 120,
  /* How many ticks the script should wait before a new firework gets spawned, if the user is holding down his mouse button. */
  clickLimiter: 5,
  /* How fast the rockets should automatically spawn, based on ticks */
  timerInterval: 40,
  /* Show pulsing circles marking the targets? */
  showTargets: true,
  /* Rocket movement options, should be self-explanatory */
  rocketSpeed: 2,
  rocketAcceleration: 1.03,
  /* Particle movement options, should be self-explanatory */
  particleFriction: 0.95,
  particleGravity: 1,
  /* Minimum and maximum amount of particle spawns per rocket */
  particleMinCount: 25,
  particleMaxCount: 40,
  /* Minimum and maximum radius of a particle */
  particleMinRadius: 3,
  particleMaxRadius: 5
};

// Local variables
var fireworks = [];
var particles = [];
var mouse = { down: false, x: 0, y: 0 };
var currentHue = options.startingHue;
var clickLimiterTick = 0;
var timerTick = 0;
var cntRocketsLaunched = 0;

// Helper function for canvas animations
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (cb) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// Helper function to return random numbers within a specified range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Helper function to calculate the distance between 2 points
function calculateDistance(p1x, p1y, p2x, p2y) {
  var xDistance = p1x - p2x;
  var yDistance = p1y - p2y;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Setup some basic variables
var canvas = document.getElementById("canvas");
var canvasCtx = canvas.getContext("2d");
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

// Resize canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Firework class
function Firework(sx, sy, tx, ty) {
  // Set coordinates (x/y = actual, sx/sy = starting, tx/ty = target)
  this.x = this.sx = sx;
  this.y = this.sy = sy;
  this.tx = tx;
  this.ty = ty;

  // Calculate distance between starting and target point
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
  this.distanceTraveled = 0;

  // To simulate a trail effect, the last few coordinates will be stored
  this.coordinates = [];
  this.coordinateCount = 3;

  // Populate coordinate array with initial data
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }

  // Some settings, you can adjust them if you'd like to do so.
  this.angle = Math.atan2(ty - sy, tx - sx);
  this.speed = options.rocketSpeed;
  this.acceleration = options.rocketAcceleration;
  this.brightness = random(50, 80);
  this.hue = currentHue;
  this.targetRadius = 1;
  this.targetDirection = false; // false = Radius is getting bigger, true = Radius is getting smaller

  // Increase the rockets launched counter
  cntRocketsLaunched++;
}

// This method should be called each frame to update the firework
Firework.prototype.update = function (index) {
  // Update the coordinates array
  this.coordinates.pop();
  this.coordinates.unshift([this.x, this.y]);

  // Cycle the target radius (used for the pulsing target circle)
  if (!this.targetDirection) {
    if (this.targetRadius < 8) this.targetRadius += 0.15;
    else this.targetDirection = true;
  } else {
    if (this.targetRadius > 1) this.targetRadius -= 0.15;
    else this.targetDirection = false;
  }

  // Speed up the firework (could possibly travel faster than the speed of light)
  this.speed *= this.acceleration;

  // Calculate the distance the firework has travelled so far (based on velocities)
  var vx = Math.cos(this.angle) * this.speed;
  var vy = Math.sin(this.angle) * this.speed;
  this.distanceTraveled = calculateDistance(
    this.sx,
    this.sy,
    this.x + vx,
    this.y + vy
  );

  // If the distance traveled (including velocities) is greater than the initial distance
  // to the target, then the target has been reached. If that's not the case, keep traveling.
  if (this.distanceTraveled >= this.distanceToTarget) {
    createParticles(this.tx, this.ty);
    fireworks.splice(index, 1);
  } else {
    this.x += vx;
    this.y += vy;
  }
};

// Draws the firework
Firework.prototype.draw = function () {
  var lastCoordinate = this.coordinates[this.coordinates.length - 1];

  // Draw the rocket
  canvasCtx.beginPath();
  canvasCtx.moveTo(lastCoordinate[0], lastCoordinate[1]);
  canvasCtx.lineTo(this.x, this.y);
  canvasCtx.strokeStyle = "hsl(" + this.hue + ",100%," + this.brightness + "%)";
  canvasCtx.stroke();

  // Draw the target (pulsing circle)
  if (options.showTargets) {
    canvasCtx.beginPath();
    canvasCtx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
    canvasCtx.stroke();
  }
};

// Particle class
function Particle(x, y) {
  // Set the starting point
  this.x = x;
  this.y = y;

  // To simulate a trail effect, the last few coordinates will be stored
  this.coordinates = [];
  this.coordinateCount = 5;

  // Populate coordinate array with initial data
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }

  // Set a random angle in all possible directions (radians)
  this.angle = random(0, Math.PI * 2);
  this.speed = random(1, 10);

  // Add some friction and gravity to the particle
  this.friction = options.particleFriction;
  this.gravity = options.particleGravity;

  // Change the hue to a random number
  this.hue = random(currentHue - 20, currentHue + 20);
  this.brightness = random(50, 80);
  this.alpha = 1;

  // Set how fast the particles decay
  this.decay = random(0.01, 0.03);
}

// Updates the particle, should be called each frame
Particle.prototype.update = function (index) {
  // Update the coordinates array
  this.coordinates.pop();
  this.coordinates.unshift([this.x, this.y]);

  // Slow it down (based on friction)
  this.speed *= this.friction;

  // Apply velocity to the particle
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed + this.gravity;

  // Fade out the particle, and remove it if alpha is low enough
  this.alpha -= this.decay;
  if (this.alpha <= this.decay) {
    particles.splice(index, 1);
  }
};

// Draws the particle
Particle.prototype.draw = function () {
  var lastCoordinate = this.coordinates[this.coordinates.length - 1];
  var radius = Math.round(
    random(options.particleMinRadius, options.particleMaxRadius)
  );

  // Create a new shiny gradient
  var gradient = canvasCtx.createRadialGradient(
    this.x,
    this.y,
    0,
    this.x,
    this.y,
    radius
  );
  gradient.addColorStop(0.0, "white");
  gradient.addColorStop(0.1, "white");
  gradient.addColorStop(
    0.1,
    "hsla(" + this.hue + ",100%," + this.brightness + "%," + this.alpha + ")"
  );
  gradient.addColorStop(1.0, "black");

  // Draw the gradient
  canvasCtx.beginPath();
  canvasCtx.fillStyle = gradient;
  canvasCtx.arc(this.x, this.y, radius, Math.PI * 2, false);
  canvasCtx.fill();
};

// Create a bunch of particles at the given position
function createParticles(x, y) {
  var particleCount = Math.round(
    random(options.particleMinCount, options.particleMaxCount)
  );
  while (particleCount--) {
    particles.push(new Particle(x, y));
  }
}

// Add an event listener to the window so we're able to react to size changes
window.addEventListener("resize", function (e) {
  canvas.width = canvasWidth = window.innerWidth;
  canvas.height = canvasHeight = window.innerHeight;
});

// Add event listeners to the canvas to handle mouse interactions
canvas.addEventListener("mousemove", function (e) {
  e.preventDefault();
  mouse.x = e.pageX - canvas.offsetLeft;
  mouse.y = e.pageY - canvas.offsetTop;
});

canvas.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mouse.down = true;
});

canvas.addEventListener("mouseup", function (e) {
  e.preventDefault();
  mouse.down = false;
});

// Main application / script, called when the window is loaded
function gameLoop() {
  // This function will rund endlessly by using requestAnimationFrame (or fallback to setInterval)
  requestAnimFrame(gameLoop);

  // Increase the hue to get different colored fireworks over time
  currentHue += 0.5;

  // 'Clear' the canvas at a specific opacity, by using 'destination-out'. This will create a trailing effect.
  canvasCtx.globalCompositeOperation = "destination-out";
  canvasCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
  canvasCtx.fillRect(0, 0, canvasWidth, canvasHeight);
  canvasCtx.globalCompositeOperation = "lighter";

  // Loop over all existing fireworks (they should be updated & drawn)
  var i = fireworks.length;
  while (i--) {
    fireworks[i].draw();
    fireworks[i].update(i);
  }

  // Loop over all existing particles (they should be updated & drawn)
  var i = particles.length;
  while (i--) {
    particles[i].draw();
    particles[i].update(i);
  }

  //Meteor
  $("#page2-id").html(
    $("#page2-id").html() + "eP.:  " + cntRocketsLaunched + ", "
  );

  // Draw some text
  canvasCtx.fillStyle = "lime";
  canvasCtx.font = "24px Roboto";
  var state = $("#quanta-state").html();
  var results = "";
  switch (state) {
    case "e⇵":
      results = "2";
      break;
    case "e↓":
      results = "-1";
      break;
    case "e↑":
      results = "1";
      break;
    case "e0":
      results = "0";
      break;
  }
  canvasCtx.fillText(
    "Quanta-State | " +
      state +
      " } Beaming e-particles (eP) => " +
      cntRocketsLaunched +
      "e (electrons)(Grid)(NeucleuS)(" +
      results +
      ")",
    40,
    44
  );
  canvasCtx.fillText(
    "N | 01 }_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________;",
    40,
    100
  );

  canvasCtx.fillText(
    "N | 11 }_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________;",
    40,
    100
  );

  canvasCtx.fillText(
    "N | 11 }_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________;",
    40,
    300
  );
  canvasCtx.fillText(
    "N | 10 }_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________;",
    40,
    500
  );
  canvasCtx.fillText(
    "N | 00 }_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________;",
    40,
    700
  );

  // Launch fireworks automatically to random coordinates, if the user does not interact with the scene
  if (timerTick >= options.timerInterval) {
    if (!mouse.down) {
      // fireworks.push(
      //    new Firework(
      //     canvasWidth / 2,
      //     canvasHeight,
      //     random(0, canvasWidth),
      //     random(0, canvasHeight / 2)
      //)
      // );
      timerTick = 0;
    }
  } else {
    timerTick++;
  }

  // Limit the rate at which fireworks can be spawned by mouse
  if (clickLimiterTick >= options.clickLimiter) {
    if (true) {
      var state = $("#quanta-state").html();
      console.log(state);
      switch (state) {
        case "e↓":
          fireworks.push(
            //mouse.x,mouse.y
            new Firework(canvasWidth / 2, canvasHeight, 500, 500)
          );

          break;
        case "e⇵":
          fireworks.push(
            //mouse.x,mouse.y
            new Firework(canvasWidth / 2, canvasHeight, 300, 300)
          );

          break;
        case "e↑":
          fireworks.push(
            //mouse.x,mouse.y
            new Firework(
              canvasWidth / 2,
              canvasHeight,
              Math.round((Math.random() * 800) % 800),
              100
            )
          );
          break;
        case "e0":
          // fireworks.push(
          //mouse.x,mouse.y
          // new Firework(canvasWidth / 2, canvasHeight, 1000, 300)
          //   );

          break;
      }

      clickLimiterTick = 0;
    }
  } else {
    clickLimiterTick++;
  }
}

window.onload = gameLoop();

// particles
var RENDERER = {
  BASE_PARTICLE_COUNT: 50,
  WATCH_INTERVAL: 100,

  init: function () {
    this.setParameters();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  },
  setParameters: function () {
    this.$window = $(window);
    this.$container = $("#jsi-particle-container");
    this.$canvas = $("<canvas />");
    this.context = this.$canvas
      .appendTo(this.$container)
      .get(0)
      .getContext("2d");
    this.particles = [];
    this.watchIds = [];
    this.gravity = { x: 0, y: 0, on: false, radius: 100, gravity: true };
  },
  setup: function () {
    this.particles.length = 0;
    this.watchIds.length = 0;
    this.width = this.$container.width();
    this.height = this.$container.height();
    this.$canvas.attr({ width: this.width, height: this.height });
    this.distance = Math.sqrt(
      Math.pow(this.width / 2, 2) + Math.pow(this.height / 2, 2)
    );
    this.createParticles();
  },
  reconstructMethods: function () {
    this.watchWindowSize = this.watchWindowSize.bind(this);
    this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    this.render = this.render.bind(this);
  },
  createParticles: function () {
    for (
      var i = 0,
        count =
          ((((this.BASE_PARTICLE_COUNT * this.width) / 500) * this.height) /
            500) |
          0;
      i < count;
      i++
    ) {
      this.particles.push(new PARTICLE(this));
    }
  },
  watchWindowSize: function () {
    this.clearTimer();
    this.tmpWidth = this.$window.width();
    this.tmpHeight = this.$window.height();
    this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
  },
  clearTimer: function () {
    while (this.watchIds.length > 0) {
      clearTimeout(this.watchIds.pop());
    }
  },
  jdugeToStopResize: function () {
    var width = this.$window.width(),
      height = this.$window.height(),
      stopped = width == this.tmpWidth && height == this.tmpHeight;

    this.tmpWidth = width;
    this.tmpHeight = height;

    if (stopped) {
      this.setup();
    }
  },
  bindEvent: function () {
    this.$window.on("resize", this.watchWindowSize);
    this.$container.on("mousemove", this.controlForce.bind(this, true));
    this.$container.on("mouseleave", this.controlForce.bind(this, false));
  },
  controlForce: function (on, event) {
    this.gravity.on = on;

    if (!on) {
      return;
    }
    var offset = this.$container.offset();
    this.gravity.x = event.clientX - offset.left + this.$window.scrollLeft();
    this.gravity.y = event.clientY - offset.top + this.$window.scrollTop();
  },
  render: function () {
    requestAnimationFrame(this.render);

    var context = this.context;
    context.save();
    context.fillStyle = "hsla(0, 0%, 0%, 0.3)";
    context.fillRect(0, 0, this.width, this.height);
    context.globalCompositeOperation = "lighter";

    for (
      var i = 0,
        particles = this.particles,
        gravity = this.gravity,
        count = particles.length;
      i < count;
      i++
    ) {
      var particle = particles[i];

      for (var j = i + 1; j < count; j++) {
        particle.checkForce(context, particles[j]);
      }
      particle.checkForce(context, gravity);
      particle.render(context);
    }
    context.restore();
  }
};
var PARTICLE = function (renderer) {
  this.renderer = renderer;
  this.init();
};
PARTICLE.prototype = {
  THRESHOLD: 100,
  SPRING_AMOUNT: 0.001,
  LIMIT_RATE: 0.2,
  GRAVIY_MAGINIFICATION: 10,

  init: function () {
    this.radius = this.getRandomValue(5, 15);
    this.x =
      this.getRandomValue(
        -this.renderer.width * this.LIMIT_RATE,
        this.renderer.width * (1 + this.LIMIT_RATE)
      ) | 0;
    this.y =
      this.getRandomValue(
        -this.renderer.width * this.LIMIT_RATE,
        this.renderer.height * (1 + this.LIMIT_RATE)
      ) | 0;
    this.vx = this.getRandomValue(-3, 3);
    this.vy = this.getRandomValue(-3, 3);
    this.ax = 0;
    this.ay = 0;
    this.gravity = false;
    this.transformShape();
  },
  getRandomValue: function (min, max) {
    return min + (max - min) * Math.random();
  },
  transformShape: function () {
    var velocity = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    this.scale = 1 - velocity / 15;
    this.hue = (180 + velocity * 12) % 360 | 0;
  },
  checkForce: function (context, particle) {
    if (particle.gravity && !particle.on) {
      return;
    }
    var dx = particle.x - this.x,
      dy = particle.y - this.y,
      distance = Math.sqrt(dx * dx + dy * dy),
      magnification = particle.gravity ? this.GRAVIY_MAGINIFICATION : 1;

    if (distance > this.THRESHOLD * magnification) {
      return;
    }
    var rate =
      this.SPRING_AMOUNT / magnification / (this.radius + particle.radius);
    this.ax = dx * rate * particle.radius;
    this.ay = dy * rate * particle.radius;

    if (!particle.gravity) {
      particle.ax = -dx * rate * this.radius;
      particle.ay = -dy * rate * this.radius;
    }
    if (distance > this.THRESHOLD * (particle.gravity ? 2 : 1)) {
      return;
    }
    context.lineWidth = particle.gravity ? 0.5 : 3;
    context.strokeStyle =
      "hsla(" +
      this.hue +
      ", 70%, 30%, " +
      Math.abs(this.THRESHOLD - distance) / this.THRESHOLD +
      ")";
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(particle.x, particle.y);
    context.stroke();
  },
  render: function (context) {
    context.save();
    context.fillStyle = "hsl(" + this.hue + ", 70%, 40%)";
    context.translate(this.x, this.y);
    context.rotate(Math.atan2(this.vy, this.vx) + Math.PI / 2);
    context.scale(this.scale, 1);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.restore();

    this.x += this.vx;
    this.y += this.vy;
    this.vx += this.ax;
    this.vy += this.ay;

    if (
      (this.x < -this.radius && this.vx < 0) ||
      (this.x > this.renderer.width + this.radius && this.vx > 0) ||
      (this.y < -this.radius && this.vy < 0) ||
      (this.y > this.renderer.height + this.radius && this.vy > 0)
    ) {
      var theta = this.getRandomValue(0, Math.PI * 2),
        sin = Math.sin(theta),
        cos = Math.cos(theta),
        velocity = this.getRandomValue(-3, 3);

      this.x =
        -(this.renderer.distance + this.radius) * cos + this.renderer.width / 2;
      this.y =
        -(this.renderer.distance + this.radius) * sin +
        this.renderer.height / 2;
      this.vx = velocity * cos;
      this.vy = velocity * sin;
    }
    this.transformShape();
  }
};
$(function () {
  RENDERER.init();
});

// crazy code
//quantum console pipeline
//https://www.esegece.com/products/apps/websockets/websocket-server

var StringData10 = "";
var StringData11 = "";
var StringData01 = "";

var ObserveOps = []; // all operations
var Observe = []; // everything else

$("#electron-all").on("DOMSubtreeModified", function () {
  console.log("q-c-a-l-c-u-l-a-t-e-y-w-p-");

  var $dollar = $(".electron-class").length - 2;

  if ($dollar >= 3 + 2) {
    console.log("~Blizzard~");
  }

  for (var i = 0; i < $dollar; i++) {
    // Init, making sure we capture the QuantaStatement
    if (
      $(".box-muis").eq(i).attr("quanta") === void 0 &&
      typeof $(".box-muis").eq(i) !== undefined
    ) {
      $(".box-muis").eq(i).attr("quanta", $(".box-muis").eq(i).html().trim());
    }
    //console.log($(".box-muis").eq(i).attr("quanta").substring(0, 1));
    if ($(".box-muis").eq(i).attr("quanta").substring(0, 1) == "O") {
      // Insert O-Opertation to SnakeBox
      $(".box-muis").eq(i).css("border-left", "5px solid purple");
    }

    // Electron Quanata Statement with updates flipped random quanta
    $(".box-muis")
      .eq(i)
      .html(
        "<div class='box-muis-stamp'>" +
          String(Math.random() + 1)
            .split("")
            .reverse()
            .join("")
            .concat("</div><div class='box-muis-value'>")
            .concat($(".box-muis").eq(i).attr("quanta"))
            .concat("</div>")
      );

    // Watch and Observe Quanta-Statementd and on Updates Calc.Data.

    for (var q = i + 1; q < $(".box-muis-value").length; q++) {
      if ($(".box-muis-value").eq(q).html() == "") {
        q++;
        continue;
      } else if ($(".box-muis").eq(i).attr("quanta").substring(0, 1) == "O") {
        // create collection of all operation
        ObserveOps.push($(".box-muis").eq(i).attr("quanta"));
        console.log("OPERATE: (a)Q, (b)Q i:" + i + " q:" + q);

        // StringData10 = $(".box-muis-value").eq(i).html();
        // StringData11 = $(".box-muis-value").eq(q).html();

        if (true) {
          // Quanta, Operator, Quanta, Operator Quanta (rand)
          //StringData01 += StringData11;
          //StringData01 += StringData10;
          var command27 = ObserveOps[RRandom(0, ObserveOps.length - 1)];

          switch (command27) {
            case "O|00}":
              command27 = "*";
              break;
            case "O|11}":
              command27 = "/";
              break;
            case "O|01}":
              command27 = "+";
              break;
            case "O|10}":
              command27 = "-";
              break;
          }

          StringData01 =
            "(e) >> " +
            eval(
              Quanta(Observe[RRandom(0, Observe.length - 1)]) +
                command27 +
                Quanta(Observe[RRandom(0, Observe.length - 1)])
            );
        }
      } else {
        Observe.push($(".box-muis").eq(i).attr("quanta"));
      }
      setTimeout(function () {
        console.log(StringData01, Observe, ObserveOps);
        StringData01 = "";
        Observe.length = 0; // safe ram memory
        ObserveOps.length = 0;
      }, 5000);
    }
    //console.log(StringData01, ObserveOps, Observe);
  }
  if (StringData01 !== "") {
    var r = $(
      "<div class='box-result'>" + StringData01 + "</div>"
    ).insertBefore($(".box-result").eq(0));

    setTimeout(function () {
      r.remove();
    }, 5000);
    StringData01 = "";
    Observe = [];
    ObserveOps = [];
  }
});

var QCc = new WebSocket("ws://localhost:7017");
//QCc.addEventListener("connection", (quanta) => {
QCc.onmessage = function (message) {
  console.log("Quanta State: " + message.data);

  $("<div class='electron-class'>" + message.data + "</div>").insertBefore(
    $("#electron-id")
  );

  var t = $(
    "<div class='contect'>" + message.data.replace(/\|/gi, "_") + "</div>"
  ).insertBefore($(".contect").eq(0));
  $(".contect").eq(0).css("background-color", "#000016");
  setTimeout(function () {
    t.fadeOut("normal", function () {
      t.remove();
    });
  }, 1337);

  var Qq = $("<div class='box-muis'>" + message.data + "</div>").insertBefore(
    $(".box-muis").eq(0)
  );
  setTimeout(function () {
    Qq.fadeOut("normal", function () {
      Qq.remove();
    });
  }, 5000);

  // Show tabs
  $("#electron-id").insertBefore(
    document.getElementsByClassName("electron-class")[2]
  );

  var Qquanta = $(".dot").eq(RRandom(0, 99));
  //setTimeout(function () {
  Qquanta.html(message.data);
  var q = $(".electron-class").eq(2);
  setTimeout(function () {
    q.fadeOut("slow", function () {
      q.remove();
    });
    Qquanta.html("");
  }, 5001);
  //}, 4800);
};
QCc.onopen = function () {
  console.log("Hello server");
  // QCc.close();
};
QCc.addEventListener("open", () => {
  console.log("Quanta Console Open: ");
  setInterval(function () {
    QCc.send($("#quantal").html()); //time
    console.log(isOpen(QCc));
    console.log("quanta send");
  }, 5000);
});

//function QuantaOpen() {
QCc.addEventListener("message", (quanta) => {
  console.log("Quanta Console: " + quanta.data);
});
QCc.addEventListener("open", function () {
  console.log("open--quanta--V");
  //QCc.send("<u>Quanta Open Key Ⓨ</u>");
  // Display Blob q when connected
  $(".mod").css("display", "block");
});
QCc.addEventListener("close", function () {
  // Display Blob q when connected
  $(".mod").css("display", "none");
});
/**}**/

function QuantaSend(message) {
  QCc.addEventListener("open", function (QuantaData) {
    console.log("open--quanta--V--send--message" + message);
    QCc.send(message + " s");
  });
}
//QuantaOpen();
//QuantaSend(0);
localStorage.setItem("QuantaState", $("#quantal").html());

for (let [key, value] of Object.entries(localStorage)) {
  console.log(`${key}: ${value}`);
}
//});

QCc.onclose = () => {
  console.log("WS-closed.");
};
QCc.onopen = () => {
  console.log("WS-onopen.");
};

function isOpen(ws) {
  return ws.readyState === ws.OPEN;
}

function RRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//clear qblob onload
setTimeout(function () {
  $(".dot").empty();
}, 1999 + 2001);

function Quanta(QuantaStatement) {
  try {
    QuantaStatement.substring(0, 1);
  } catch (e) {
    var X = 10;
    return (Math.E * X) ^ 2;
  }

  if (QuantaStatement.substring(0, 1) !== void 0) {
    switch (QuantaStatement.substring(0, 1)) {
      case "|":
        break;
      case "S":
        break;
      case "N":
        break;
    }
  } else {
    return -9999;
  }

  return bin2dec(QuantaStatement.replace(/\D/g, ""), 2);
}

function bin2dec(x) {
  return parseInt(x, 2) - 1;
}