import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent { 
    debounce: Subject<string> = new Subject<string>();
 }