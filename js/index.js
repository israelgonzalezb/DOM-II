// Your code goes here

const logo = document.querySelector( '.logo-heading' );

const navLinks = document.querySelectorAll( '.nav-link' );

const headerImg = document.querySelector( 'img' );

const h2 = document.querySelector( 'h2' );

const buttons = document.querySelectorAll( '.btn' );

const el = [logo, navLinks[0], navLinks[1], navLinks[2], navLinks[3], headerImg, h2, buttons[0], buttons[1], buttons[2]]

const ev = ['mouseover','mouseover','mouseover','click','click','drag','drag','dblclick','dblclick','dblclick'];

let beta = (x)=>{
  x.textContent = "BETA";
}

let gamma = ()=>{};
let delta = ()=>{};
let epsilon = ()=>{};
let zeta = ()=>{};
let eta = ()=>{};
let theta = ()=>{};
let iota = ()=>{};
let kappa = ()=>{};

let lambda = ()=>{
  let repeater = [];
  for( let i = 0; i < 1000; i++ ){
    repeater.push( "lAmBdA" );
  }
  repeater=repeater.join("");
  return repeater;
}

const functions = {
  "beta": beta,
  "gamma": gamma,
  "delta": delta,
  "epsilon": epsilon,
  "zeta": zeta,
  "eta": eta,
  "theta": theta,
  "iota": iota,
  "kappa": kappa,
  "lambda": lambda
}

const functionKeys = Object.keys(functions);

el.forEach((element,idx)=>{
  element.addEventListener( ev[idx], functions[functionKeys[idx]](element));
});
console.log(functionKeys);