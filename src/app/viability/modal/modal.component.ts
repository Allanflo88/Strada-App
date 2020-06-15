import { Component, OnInit, LOCALE_ID, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() frete: string;
  despesas: string = "R$ 1.200,00";
  total: string;

  constructor(private modalCtrl: ModalController, private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.calcFrete();
  }

  async dismissModal(){
    this.modalCtrl.dismiss();
  }

  calcFrete(){
    let frete: string | number = this.frete.replace("R$", "").replace(".", "").replace(",", ".");
    frete = parseFloat(frete);
    let despesas: string | number = this.despesas.replace("R$", "").replace(".", "").replace(",", ".");
    despesas = parseFloat(despesas);
    const total = (frete - despesas);
    this.total = this.currencyPipe.transform(total, 'BRL',);

  }

}
