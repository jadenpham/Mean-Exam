import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: Router,
    ) { }
    err: any;
    pets_details: {name: "", type: "", description: ""};
    pets_skills: {skill1: "", skill2: "", skill3: ""}

  ngOnInit() {
  }
  create_pet(pet){
    // console.log(pet, "this is pet details");
    this._httpService.create_pet(pet).subscribe(data =>{
      console.log("succesful");
      if(data['pet']){
        this._route.navigate(['/pets']);
      } else{
        this.err = data['error']['errors'];
        console.log(data, "this is error json");
      }
    })
  }

}
