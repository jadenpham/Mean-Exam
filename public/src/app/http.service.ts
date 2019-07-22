import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }
   create_pet(pet){
     console.log("got to service")
     return this._http.post('/create', pet);
   }
   getAll(){
     return this._http.get('/pets')
   }
   one_pet(id){
     return this._http.get(`/onepet/${id}`);
   }
   edit_pet(id, pet_data){
     console.log(id, pet_data, "here at the service");
     return this._http.put(`/edit/${id}`, pet_data);
   }
   delete(id){
     return this._http.delete(`/delete/${id}`);
   }
}
