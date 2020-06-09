import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  user_term:string="";
  constructor() { }

  @Output() term_sender = new EventEmitter<string>();
  ngOnInit(): void {
    
  }

  onSubmit(event:any){
    event.preventDefault();
   this.term_sender.emit(this.user_term);
  }

}
