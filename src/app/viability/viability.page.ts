import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-viability',
  templateUrl: './viability.page.html',
  styleUrls: ['./viability.page.scss'],
})
export class ViabilityPage implements AfterViewInit {

  @ViewChild('map') mapElement: ElementRef;
  origin: string = '';
  final: string = '';
  map: google.maps.Map;
  directionsRenderer: google.maps.DirectionsRenderer;
  showViabilidade: boolean = false;
  currentModal: Promise<HTMLIonModalElement>;
  frete: string;

  constructor(private httpClient: HttpClient, 
    private geolocation: Geolocation, 
    private modalController: ModalController,
    private currencyPipe: CurrencyPipe) { }

  async ngAfterViewInit() {
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    const currentPosition = await this.getCurrentPosition();
    const myLocation = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude);
    this.origin = await this.getAdressByLastLong(myLocation);
    const mapProperties: google.maps.MapOptions = {
      center: myLocation,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.directionsRenderer.setMap(this.map);
  }

  setRoute(route: google.maps.DirectionsResult) {
    this.directionsRenderer.setDirections(route)
  }

  async getRoute(origin: google.maps.LatLng, destination: google.maps.LatLng): Promise<google.maps.DirectionsResult | undefined>{
    const directionsService = new google.maps.DirectionsService();
    const promise = new Promise<google.maps.DirectionsResult | undefined>((resolve, reject)=>{
      directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },function(response, status) {
        if (status === 'OK') {
          resolve(response)
        } else {
          reject();
        }
      });
    });
    return promise;
  }

  async getCurrentPosition(){
    return await this.geolocation.getCurrentPosition();
  }

  async getLatLongByAddress(address: string): Promise<google.maps.LatLng | undefined>{
    const geocoder = new google.maps.Geocoder();
    const promise = new Promise<google.maps.LatLng | undefined>((resolve, reject)=>{
      geocoder.geocode({address: address}, (res, status) => {
        if(status !== 'OK' || !res.length){
          reject(undefined);
        }
        resolve(res[0].geometry.location);
      })

    });
    return promise;
  }

  async getAdressByLastLong(coord: google.maps.LatLng): Promise<string | undefined>{
    const geocoder = new google.maps.Geocoder();
    const promise = new Promise<string | undefined>((resolve, reject)=>{
      geocoder.geocode({location: coord}, (res, status) => {
        if(status !== 'OK' || !res.length){
          reject(undefined);
        }
        resolve(res[0].formatted_address);
      })

    });
    return promise;
  }

  async updateRoute() {
    if(this.origin.length && this.final.length){
      const originCoord = await this.getLatLongByAddress(this.origin);
      const finalCoord = await this.getLatLongByAddress(this.final);
      const route = await this.getRoute(originCoord, finalCoord);
      this.setRoute(route)
    }
    
  }

  calcViability(){

  }

  async showModal(){
    const modal = this.modalController.create({
      component: ModalComponent,
    });
    (await modal).present();
    this.currentModal = modal;
  }

  async dismissModal(){
    (await this.currentModal).dismiss();
  }
}
