import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  all_pets: any;
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this._httpService.getAll().subscribe(data =>{
      this.all_pets = data;
    })
  }

}
