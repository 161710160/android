import { Component } from "@angular/core";

// Import Http Client &Observable
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Tambah disini 
  public items:any;

  //Tambah "public http: HttpClient" dibagian constructor
  constructor(public navCtrl: NavController, public http: HttpClient){
  // memanggil method getData
  this.getData();
  }
  // buat method getData()
  getData(){
    let url = "http://what.pro/api/latihan";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
      console.log(result);
    });
  }

}
