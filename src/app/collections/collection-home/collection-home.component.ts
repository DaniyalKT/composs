import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {
  data = [
    { name: 'ali', age: 30, job: 'designer', employed: true },
    {name:'danial' , age:25, job:'web developer' , employed: true},
    {name:'sara' , age:17 , job: 'architector', employed: false}
  ]
  header = [
    {key:'name' , value:'Name', show: true},
    {key:'age' , value:'Age', show: true},
    {key:'job' , value:'Job', show: true},
    {key:'employed' , value:'Employed', show: true},
  ]
} 