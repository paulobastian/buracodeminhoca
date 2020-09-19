import { Component } from '@angular/core';
import { timer } from 'rxjs';

element: HTMLElement;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Buraco de Minhoca';
  nInter = '';
  
  recalcula(){
    var nInpPro = (<HTMLInputElement>document.getElementById('inpPro')).value;    
    setTimeout(controleSubida, 1,0);
  }
}

function controleSubida(arg) {
  var el = 'minhaDiv';
  var divCor1 = 'divCor1';
  var divCor2 = 'divCor2';
  var display = document.getElementById(divCor2).style.display;
  let nTam =  parseInt((<HTMLInputElement>document.getElementById('inpPro')).value); 
  let nSob =  parseInt((<HTMLInputElement>document.getElementById('inpSob')).value); 
  let nCai =  parseInt((<HTMLInputElement>document.getElementById('inpCai')).value); 
  let nloop = Math.round(nTam / (nSob - nCai));
  let nMetade = Math.round(nloop / 2);

  if (display == "block" && arg == 0) {
    document.getElementById(divCor2).style.display = 'none';
  }

  //Mostras o quadro de chegada na metada
  if (arg == nMetade) {        
    document.getElementById(divCor1).style.display = 'block';
  }

  //Apresenta o quadro de chegada no topo
  if (arg >= nloop) {    
    document.getElementById("cDivInt").innerHTML = 'Quantidade Vezes: '+nloop;
    document.getElementById(divCor1).style.display = 'none';    
    document.getElementById(divCor2).style.display = 'block';
    clearInterval();    
  } 

  //Aqui e controle do loop;
  if(nloop >= arg){
    arg += 1;
    if (arg <= nTam) {
      setTimeout(controleSubida, 1000, arg);
    }
  }
}

