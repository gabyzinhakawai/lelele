let xBolinha = 20;
let yBolinha = 20;
let diametro = 20;
let raio = diametro/2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;
let trilha;
let raquetada;
let ponto;
function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}
function setup() {
  trilha.loop();
  createCanvas(600, 400);
}

function draw() {
 
  background("#EE8FAF");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  mostraRaqueteOponente();
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
 
}function movimentaBolinha(){
 
  xBolinha = xBolinha + velocidadeXBolinha;
 
   yBolinha = yBolinha + velocidadeYBolinha;
 
}
function verificaColisaoBorda(){
    if(yBolinha + raio > height || yBolinha - raio<0){
    velocidadeYBolinha *=-1
  }
  if(xBolinha + raio > width || xBolinha - raio<0){
    velocidadeXBolinha *=-1
    ponto.play();
  }
}
function mostraRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}
function mostraRaqueteOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,raqueteComprimento,raqueteAltura);
}
function movimentaRaquete(){
  if(keyIsDown(87)){//87 é W
    yRaquete -=5;
  }
  if(keyIsDown(83)){//83 é S
    yRaquete +=5;
  }  
}
function movimentaRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){//87 é W
    yRaqueteOponente -=5;
  }
  if(keyIsDown(DOWN_ARROW)){//83 é S
    yRaqueteOponente +=5;
  }  
}
function verificaColisaoRaquete(x,y){
 colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if(colidiu){
    raquetada.play();
    velocidadeXBolinha *=-1;
    if(xBolinha>100)
    xBolinha = 579;
    else
      xBolinha = 21;
     
  }
}