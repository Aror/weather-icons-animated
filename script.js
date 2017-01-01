window.onload = function () {

$(".container-icon-clear-day").on("click", clearDayAnimation);
$(".container-icon-clear-night").on("click", clearNightAnimation);
$(".container-icon-partly-cloudy-day").on("click", partlyCloudyDayAnimation);
$(".container-icon-partly-cloudy-night").on("click", partlyCloudyNightAnimation);
$(".container-icon-cloudy").on("click", cloudyAnimation);
$(".container-icon-rain").on("click", rainAnimation);
$(".container-icon-thunderstorm").on("click", thunderstormAnimation);
$(".container-icon-snow").on("click", snowAnimation);
$(".container-icon-hail").on("click", hailAnimation);
$(".container-icon-sleet").on("click", sleetAnimation);
$(".container-icon-fog").on("click", fogAnimation);
$(".container-icon-wind").on("click", windAnimation);
$(".container-icon-tornado").on("click", tornadoAnimation);

//Stops all currently active animations
function killAllAnimation() {
    TweenMax.killAll(false,true,true,true);
}

//Icon Clear Day
function clearDayAnimation() {
    killAllAnimation();
    var sun = $(".icon-sun");
    var sunBeamEven = $(".icon-sun-beam-animated:even");
    var sunBeamOdd = $(".icon-sun-beam-animated:odd");
    TweenMax.to(sun, 12, { rotation: "+=360", svgOrigin: "50 50", smoothOrigin: true, repeat: -1, ease: Linear.easeNone });
    TweenMax.to(sunBeamEven, 4, { scale: 0.5, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Linear.easeNone });
    TweenMax.to(sunBeamOdd, 4, { scale: 0.5, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Linear.easeNone, delay: 3});
}

//Icon Clear Night
function clearNightAnimation() {
    killAllAnimation();
    var moon = $("#icon-moon-part-moon");
    var starSmall = $("#icon-moon-part-star-small");
    var starLargeOne = $("#icon-moon-part-star-l1");
    var starLargeTwo = $("#icon-moon-part-star-l2");
    var tlM = new TimelineMax();
    var tlS = new TimelineMax();
    tlM.set(moon, {rotation:"0"});
    tlS.set(starSmall, {scale: 1});
    tlS.set(starLargeOne, {scale: 1});
    tlS.set(starLargeTwo, {scale: 1});
    tlM.to(moon, 5, {ease: Linear.easeNone, transformOrigin: "50% 50%", smoothOrigin: true, yoyo: true, repeat:-1, rotation:"20"});
    tlS.to(starSmall, 5, {scale: 1.5, transformOrigin: "50% 50%", repeat: -1, smoothOrigin: true, yoyo: true, ease: Linear.easeNone});
    tlS.to(starLargeTwo, 5, {scale: 0.5, transformOrigin: "50% 50%", repeat: -1, smoothOrigin: true, yoyo: true, ease: Linear.easeNone},0);
    tlS.to(starLargeOne, 5, {scale: 0.5, transformOrigin: "50% 50%", repeat: -1, smoothOrigin: true, yoyo: true, ease: Linear.easeNone},2.5);
}

//Icon Partly Cloudy Day
function partlyCloudyDayAnimation() {
    killAllAnimation();
    var sun = $("#icon-pcd-sun");
    var sunBeamEven = $(".icon-partly_cloudy_day-sun-beam-animated:even");
    var sunBeamOdd = $(".icon-partly_cloudy_day-sun-beam-animated:odd");
    TweenMax.set(sunBeamEven, {scale:1});
    TweenMax.set(sunBeamOdd, {scale:1});
    TweenMax.to(sun, 12, { rotation: "+=360", transformOrigin: "50% 50%", repeat: -1, ease: Linear.easeNone });
    TweenMax.to(sunBeamEven, 4, { scale: 0.5, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Linear.easeNone });
    TweenMax.to(sunBeamOdd, 4, { scale: 0.5, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Linear.easeNone, delay: 3});
}

//Icon Partly Cloudy Night
function partlyCloudyNightAnimation() {
    killAllAnimation();
    var moon = $("#icon-pcn-moon");
    var tlm = new TimelineMax();
    tlm.set(moon,{rotation:"0"});
    tlm.to(moon, 5, {ease: Linear.easeNone, transformOrigin: "50% 50%", smoothOrigin: true, yoyo: true, repeat:-1, rotation:"20"});
}

//Icon Cloudy
function cloudyAnimation() {
    killAllAnimation();
    var cloud = $("#icon-cloudy");
    var tl = new TimelineMax();
    var bezierPath = [{ x: -30, y: 0 }, { x: 0, y: 0 }];
    tl.set(cloud,{x:0,y:0});
        tl.to(cloud, 10, { bezier: {
        type: 'soft',
        values: bezierPath,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, yoyo:true, repeat:-1});
}

//Icon Rain
function rainAnimation() {
    killAllAnimation();
    var raindropFill = $("#icon-rain-raindrop-fill");
    var raindropOutline = $("#icon-rain-raindrop-outline");
    var tlRF = new TimelineMax({repeat:-1, clearProps:"all"});
    var tlRO = new TimelineMax({repeat:-1, clearProps:"all"});
    var bezierPath = [{ x: 0, y: 0 }, { x: 0, y: 16 }];
    tlRF.set(raindropFill, {x: 0, y: 0, autoAlpha:0}); 
        tlRF.to(raindropFill, 2.5, { bezier: {
        type: 'soft',
        values: bezierPath,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tlRF.to(raindropFill, 1.25, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone},0);
    tlRO.set(raindropOutline, {x: 0, y: 0, autoAlpha:0}); 
        tlRO.to(raindropOutline, 2.5, { bezier: {
        type: 'soft',
        values: bezierPath,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tlRO.to(raindropOutline, 1.25, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone},0);
}

//Icon Thunderstorm
function thunderstormAnimation() {
    killAllAnimation();
    var lightning = $("#icon-thunderstorm-lightning");
    var tl = new TimelineMax();
    tl.set(lightning, {autoAlpha:0}); 
    tl.to(lightning, 2, {ease: Elastic.easeOut.config(3, 0.1), autoAlpha:1, yoyo: true, repeat:-1});
}

//Icon Snow
function snowAnimation() {
    killAllAnimation();
    var snow = $("#snowflake");
    var tl = new TimelineMax({repeat:-1});
    var bezierPath = [{ x: 5, y: 4 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }];
    tl.set(snow, {x: 0, y: 0, autoAlpha:0}); 
        tl.to(snow, 10, { bezier: {
        type: 'soft',
        values: bezierPath,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tl.to(snow, 5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0.5);
}

//Icon Hail
function hailAnimation() {
    killAllAnimation();
    var hailOne = $("#icon-hail-drop1");
    var hailTwo = $("#icon-hail-drop2");
    var hailThree = $("#icon-hail-drop3");
    var hailFour = $("#icon-hail-drop4");
    var hailFive = $("#icon-hail-drop5");
    var hailSix = $("#icon-hail-drop6");
    var tlOne = new TimelineMax({repeat:-1});
    var tlTwo = new TimelineMax({repeat:-1});
    var tlThree = new TimelineMax({repeat:-1});
    var tlFour = new TimelineMax({repeat:-1});
    var tlFive = new TimelineMax({repeat:-1});
    var tlSix = new TimelineMax({repeat:-1});
    var bezierPathOne = [{x:0,y:0},{ x: 0, y: 14 }, { x: 0, y: 14 }, {x:-5, y: 10}, {x:-10, y: 14}, {x:-10, y: 14}, {x:-10, y: 14}];
    var bezierPathTwo = [{x:0,y:0},{ x: 0, y: 14 }, { x: 0, y: 14 }, {x:-2, y: 12}, {x:-2, y: 12}, {x:-4, y: 14},{x:-4, y: 14}];
    var bezierPathThree = [{x:0,y:0},{ x: 0, y: 14 }, { x: 0, y: 14 }, {x:2, y: 12}, {x:2, y: 12}, {x:4, y: 14},{x:4, y: 14}];
    var bezierPathFour = [{x:0,y:0},{ x: 0, y: 14 }, { x: 0, y: 14 }, {x:5, y: 10}, {x:10, y: 14}, {x:10, y: 14}, {x:10, y: 14}];
    tlOne.set(hailOne,{x:0,y:0});
    tlTwo.set(hailTwo,{x:0,y:0});
    tlThree.set(hailThree,{x:0,y:0});
    tlFour.set(hailFour,{x:0,y:0});
    tlFive.set(hailFive,{x:0,y:0});
    tlSix.set(hailSix,{x:0,y:0});
    tlSix.set(hailSix, {autoAlpha:0}); 
        tlSix.to(hailSix, 1, { bezier: {
        type: 'quadratic',
        values: bezierPathFour,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01},0.5);
    tlSix.to(hailSix, 0.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0.5);
    tlFive.set(hailFive, {autoAlpha:0}); 
        tlFive.to(hailFive, 1, { bezier: {
        type: 'quadratic',
        values: bezierPathFour,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01},0.3);
    tlFive.to(hailFive, 0.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0.3);
    tlFour.set(hailFour, {autoAlpha:0}); 
        tlFour.to(hailFour, 1, { bezier: {
        type: 'quadratic',
        values: bezierPathThree,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01},0.2);
    tlFour.to(hailFour, 0.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0.2);
    tlThree.set(hailThree, {autoAlpha:0}); 
        tlThree.to(hailThree, 1, { bezier: {
        type: 'quadratic',
        values: bezierPathTwo,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01},0.1);
    tlThree.to(hailThree, 0.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone},0.1);
    tlOne.set(hailOne, {autoAlpha:0}); 
        tlOne.to(hailOne, 1, { bezier: {
        type: 'quadratic',
        values: bezierPathOne,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tlOne.to(hailOne, 0.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone},0);
    tlTwo.set(hailTwo, {autoAlpha:0}); 
        tlTwo.to(hailTwo, 1, { bezier: {
        type: 'quadratic',
        values: bezierPathOne,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01},0.5);
    tlTwo.to(hailTwo, 0.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0.5);
}

//Icon Sleet
function sleetAnimation() {
    killAllAnimation();
    var snow = $("#icon-sleet-snowflake");
    var raindropOne = $("#icon-sleet-raindrop1");
    var raindropTwo = $("#icon-sleet-raindrop2");
    var tls = new TimelineMax({repeat:-1});
    var tlro = new TimelineMax({repeat:-1});
    var tlrt = new TimelineMax({repeat:-1});
    var bezierPathR = [{ x: 0, y: 0 },{ x: 0, y: 16 }];
    var bezierPathS = [{ x: 5, y: 4 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }];
    tls.set(snow, {x: 0, y: 0, autoAlpha:0}); 
        tls.to(snow, 10, { bezier: {
        type: 'soft',
        values: bezierPathS,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tls.to(snow, 5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0.5);
    tlro.set(raindropOne, {x: 0, y: 0, autoAlpha:0}); 
        tlro.to(raindropOne, 5, { bezier: {
        type: 'soft',
        values: bezierPathR,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tlro.to(raindropOne, 2.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0);
    tlrt.set(raindropTwo, {x: 0, y: 0, autoAlpha:0}); 
        tlrt.to(raindropTwo, 5, { bezier: {
        type: 'soft',
        values: bezierPathR,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01});
    tlrt.to(raindropTwo, 2.5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0);
}

//Icon Fog
function fogAnimation() {
    killAllAnimation();
    var fogOne = $("#icon-fog-1");
    var fogTwo = $("#icon-fog-2");
    var tlOne = new TimelineMax();
    var tlTwo = new TimelineMax();
    var bezierPathOne = [{ x: 6, y: 0 }, { x: 0, y: 0 }, {x:-6, y:0}, {x:0, y:0}];
    var bezierPathTwo = [{ x: -6, y: 0 }, { x: 0, y: 0 }, {x:6, y:0}, {x:0, y:0}];
    tlOne.set(fogOne,{x:0,y:0});
        tlOne.to(fogOne, 6, { bezier: {
        type: 'thru',
        values: bezierPathOne,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
    tlTwo.set(fogTwo,{x:0,y:0});
        tlTwo.to(fogTwo, 6, { bezier: {
        type: 'thru',
        values: bezierPathTwo,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
}

//Icon Wind
function windAnimation() {
    killAllAnimation();
    var wind = $("#icon-wind");
    var tl = new TimelineMax();
    var bezierPath = [{ x: 15, y: 0 }, { x: -5, y: 0 }];
        tl.set(wind,{x:0,y:0});
        tl.to(wind, 5, { bezier: {
        type: 'soft',
        values: bezierPath,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, yoyo:true, repeat:-1});
}

//Icon Tornado
function tornadoAnimation() {
    killAllAnimation();
    var tornadoOne = $("#tornado-line-1");
    var tornadoTwo = $("#tornado-line-2");
    var tornadoThree = $("#tornado-line-3");
    var tornadoFour = $("#tornado-line-4");
    var tornadoFive = $("#tornado-line-5");
    var tlOne = new TimelineMax();
    var tlTwo = new TimelineMax();
    var tlThree = new TimelineMax();
    var tlFour = new TimelineMax();
    var tlFive = new TimelineMax();
    var bezierPathOne = [{ x:5, y: 0 },{ x: 0, y: 0 }, { x: -5, y: 0 },{ x: 0, y: 0 }];
    var bezierPathTwo = [{ x:10, y: 0 },{ x: 0, y: 0 }, { x: -10, y: 0 },{ x: 0, y: 0 }];
    var bezierPathThree = [{ x:15, y: 0 },{ x: 0, y: 0 }, { x: -15, y: 0 },{ x: 0, y: 0 }];
    var bezierPathFour = [{ x:10, y: 0 },{ x: 0, y: 0 }, { x: -10, y: 0 },{ x: 0, y: 0 }];
    var bezierPathFive = [{ x:20, y: 0 },{ x: 0, y: 0 }, { x: -20, y: 0 },{ x: 0, y: 0 }];
    tlOne.set(tornadoOne,{x:0,y:0});
    tlTwo.set(tornadoTwo,{x:0,y:0});
    tlThree.set(tornadoThree,{x:0,y:0});
    tlFour.set(tornadoFour,{x:0,y:0});
    tlFive.set(tornadoFive,{x:0,y:0});
        tlOne.to(tornadoOne, 5, { bezier: {
        type: 'soft',
        values: bezierPathOne,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
    tlTwo.to(tornadoTwo, 5, { bezier: {
        type: 'soft',
        values: bezierPathTwo,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
    tlThree.to(tornadoThree, 5, { bezier: {
        type: 'soft',
        values: bezierPathThree,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
    tlFour.to(tornadoFour, 5, { bezier: {
        type: 'soft',
        values: bezierPathFour,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
    tlFive.to(tornadoFive, 5, { bezier: {
        type: 'soft',
        values: bezierPathFive,
        smoothOrigin: true,
        timeResolution: 12,
    }, ease: Linear.easeNone, rotation:0.01, repeat:-1});
}

}

