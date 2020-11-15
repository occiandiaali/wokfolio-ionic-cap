import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];

  constructor() {
    this.items = [
      {
        image: 'https://cdn.pixabay.com/photo/2018/01/17/06/21/electrician-3087536_960_720.jpg',
        title: 'Mechanic',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2015/12/17/23/34/wire-1098059_960_720.jpg',
        title: 'Electrician',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2017/03/15/20/52/lines-2147450_960_720.jpg',
        title: 'Plumber',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2015/12/17/23/34/wire-1098059_960_720.jpg',
        title: 'Nanny',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2017/03/15/20/52/lines-2147450_960_720.jpg',
        title: 'Generator repair',
      },
    ];
   } // ctr

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
} // class
