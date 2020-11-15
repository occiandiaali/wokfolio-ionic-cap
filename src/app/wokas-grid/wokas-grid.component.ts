import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-wokas-grid',
  templateUrl: './wokas-grid.component.html',
  styleUrls: ['./wokas-grid.component.scss'],
})
export class WokasGridComponent implements OnInit {
  searchTerm = '';
  searchControl: FormControl;
  items: any;
  searching = false;

  constructor(private dataService: DataService) {
    this.searchControl = new FormControl(); // add this
  }

  ngOnInit() {
    this.setFilteredItems('');

    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm);
  }

}
