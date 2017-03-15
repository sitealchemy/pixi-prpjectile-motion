var app = new PIXI.Application(1600, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var grenade = PIXI.Sprite.fromImage('grenade.png');
grenade.anchor.set(0.5);
grenade.x = 80;
grenade.y = 585;
app.stage.addChild(grenade);

var deg = 55;
var rad = deg * Math.PI / 180;
var velocity = 16;

var dx = velocity * Math.cos(rad);
var dy = velocity * Math.sin(rad);
var rotation = 0.1;

app.ticker.add(function(delta) {
    grenade.rotation += rotation * delta;
    grenade.position.x += dx * delta;
    grenade.position.y -= dy * delta;
    dy -= 0.18;

    if(grenade.position.y > 580){
    	dx = 0;
    	dy = 0;
    	rotation = 0;
    }
});