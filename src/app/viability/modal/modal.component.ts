import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismissModal(){
    this.modalCtrl.dismiss();
  }

}
