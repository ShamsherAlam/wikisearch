import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(public http: HttpClient) { }
  // api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json 
  onSearch(userInput:string){
    return this.http.get('https://en.wikipedia.org/w/api.php',{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:userInput,
        origin:'*',
        
      }
    });
  }
}
