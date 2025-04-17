import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {

  private route = inject (Router);
  private activedRoute = injec(ActivatedRoute);
  public nome!: String;
  public idade!: Number;
  public sexo!: String;
  public s!: String;


  constructor() { 
    this.activedRoute.queryParams.subscribe (() => {
      let state = this.route.getCurentNavigation ()?.extras.state ;
      if (state) {
        this.nome = state ['nome'];
        this.idade = state ['idade'];
        this.s = state ['sexo'];

      }
      if (this.s == 'm') {
        this.sexo = 'Masculino';
      } else {
        this.sexo ='Feminino';
      }

    });
  }

  ngOnInit() {
  }

}
