import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlertaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Título da Mensagem',
      subHeader: 'Subtítulo da mensagem (opcional)',
      message: 'A mensagemdeve ser uma frase curta e completa.',
      buttons:['OK'],
    });
    await alert.present();
  }
  async presentAlertmultipleButtons(){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Alert',
      subHeader: 'Subtítulo ',
      message: 'A mensagemdeve ser uma frase curta e completa.',
      buttons:['Cancel', 'Open Modal', 'Delete'],
    });
    await alert.present();
  }
  async presentAlertConfirm(){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Confirmar!',
      message: 'texto da mensagem',
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass:'secondary',
          handler:() => {
            console.log('Cancelou');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ],
    });
    await alert.present();
  }
  async presentAlertPrompt(){
    const alert = await this.alertController.create({
      header: 'Inputs',
      inputs:[
        {
          name: 'quantidade',
          placeholder: 'quantidade',
          type: 'number',
          min: 1,
          max:30
        },
        {name: 'name1', type:'text', placeholder: 'Placeholder 1'}
      ],
      buttons:['OK']
    });
    await alert.present();
  }


ngOnInit(): void {

}
}
