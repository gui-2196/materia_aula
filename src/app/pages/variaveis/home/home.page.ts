import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class HomePage implements OnInit {

  private router;
  public nome: String ='';
  public idade: Number = 0;
  public sexo: String= '';


  constructor() {
    this.router = inject (Router);
  }

  getValores() {
    console.log (this.nome);
    console.log (this.idade);
    console.log (this.sexo);
  }

  enviar () {
    let navigationExtras: NavigationExtras = {
      state: {
        nome: this.nome,
        idade: this.idade,
        sexo: this.sexo,
      },
    };
    this.router.navigate (['variaveis / detalhes'], navigationExtras);
  }

  ngOnInit() {}
    

}
