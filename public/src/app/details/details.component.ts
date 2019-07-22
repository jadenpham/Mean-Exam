import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  this_id: any;
  pet_data: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.this_id = params['id'];
      console.log(this.this_id);
      this._httpService.one_pet(params['id']).subscribe( data =>{
        // console.log(data, "this is the data we got back")
        this.pet_data = data;
      })
    })
  }
  delete(id){
    console.log(id);
    this._httpService.delete(id).subscribe(data =>{
      console.log(data, "deleted succesful");
      this._router.navigate(['']);
    })
  }

}
