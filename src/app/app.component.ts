import { Component } from '@angular/core';
import { WikiService } from './wiki.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageData = [];
  onKeyword(userInput_term: string) {
    this.api.onSearch(userInput_term).subscribe(
      (res: any) => {
        console.log(res);
        this.pageData = res.query.search;
      }
    );
  }

  constructor(private api: WikiService) {

  }
}
