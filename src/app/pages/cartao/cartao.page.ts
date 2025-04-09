import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonItem, IonIcon, IonLabel, IonButton, IonRow, IonCol } from '@ionic/angular/standalone';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons'
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonButton, IonLabel, IonIcon, IonItem, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonImg, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CartaoPage implements OnInit {

  constructor() {
    addIcons({pin,wifi,wine,warning,walk});
  }

  ngOnInit() {
  }

}
