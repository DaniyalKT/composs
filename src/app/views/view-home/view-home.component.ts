import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent {
  data =[
    {value:30 , label: '# Of User'},
    {value: 48 , label: '# Views'},
    {value: 60 , label: '# Likes'}
  ]

  ItemList=[
    {
      image: '../../../assets/Images/couch.jpg',
      title: 'Couch',
      descriptions:'this is conftable couch'
    },
    {
      image: '../../../assets/Images/dresser.jpg',
      title: 'Deresser',
      descriptions:'this is fantastic dresser'
    }
  ]

}
