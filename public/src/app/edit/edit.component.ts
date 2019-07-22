import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet_data: any;
  this_id: any;
  err: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      this.this_id = params['id'];
      // console.log(this.this_id);
      this._httpService.one_pet(params['id']).subscribe( data =>{
        this.pet_data = data;
        console.log(this.pet_data);
      })
    })
  }
  edit_pet(id){
    this._httpService.edit_pet(id, this.pet_data).subscribe(data =>{
      if(data['pet']){
        this.pet_data = data;
        this._router.navigate([''])
      } else{
        this.err = data['error']['errors'];
        console.log(this.err)
      }  
      // console.log(this.pet_data, "this is the data")
    })
  }

}
