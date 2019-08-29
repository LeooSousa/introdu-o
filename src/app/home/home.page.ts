import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = "Leomar";
  cor = "danger";
  cor1 = "success";
  cor2 = "warning";
  cor3 = "primary";
  cor4 = "dark";


  humor = "sad";
  checked_humor = false;


  constructor() {}

  trocarCor():void{
    console.log("trocarCor");
    if (this.cor == "dark"){
      this.cor = this.cor;
    } 
    else if (this.cor == "danger"){
      this.cor = this.cor1;
    }
    else if (this.cor == "success"){
      this.cor = this.cor2;
    }
    else if (this.cor == "warning"){
      this.cor = this.cor3;
    }
    else {
      this.cor = "danger";
    }
    
  }
  
  mudaHumor(): void {
    console.log("Chamou mudaHumor");
    this.checked_humor = !this.checked_humor;
    if (this.checked_humor == true){
        this.humor="happy";
    }else {
      this.humor ="sad";
    }
  }
}

