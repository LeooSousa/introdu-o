import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome = "";
  cor = "danger";
  cor1 = "success";
  cor2 = "warning";
  cor3 = "primary";
  cor4 = "dark";
  sexo = "";

  humor = "sad";
  checked_humor = false;


  constructor(private router: Router) {}

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

  selecionaSexo(event): void {
    console.log(event.detail.value);
    this.sexo = event.detail.value;
  }

  defineNome(event): void {
    console.log(event.detail.value);
    this.nome = event.detail.value;
  }

  irParaDetalhes(){
    this.router.navigate(["/detalhes"]);
  }
}

