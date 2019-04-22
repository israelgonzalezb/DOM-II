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

let gamma = (x)=>{
  x.style.color="red";
};

let delta = (x)=>{
  x.style.display="none";
};

let epsilon = (x)=>{
  x.style.border="thin dotted red";
};

let zeta = (x)=>{
  x.textContent = "zzz";
};

let eta = (x)=>{
  x.style.WebkitFilter="grayscale(100%)";
};

let theta = (x)=>{
  x.style.fontSize="90px";
};

let iota = (x)=>{
  x.previousElementSibling.textContent = "DINOSAURS ARE BIG AND GREEN AND SCARY AND THEY WILL EAT YOUR FOOD I'M WARNING YOU RUN IF YOU SEE A DINOSAUR ON AN ISLAND"
};

let kappa = (x)=>{
  let lambdaLogo = document.createElement("img");
  lambdaLogo.src = 'img/lambda-logo.jpeg'
  x.previousElementSibling.append(lambdaLogo);
};

let lambda = ()=>{
  let repeater = [];
  for( let i = 0; i < 1000; i++ ){
    repeater.push( "lAmBdA" );
  }
  repeater=repeater.join("");
  alert("Check the console log!!");
  console.log(repeater);
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
  element.addEventListener( ev[idx], x=>(functions[functionKeys[idx]](element)));
//  console.log(element, ev[idx]);
});
//console.log(functionKeys);