import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList = [{
    title:'do my video1',
    dueDate:'25/10/2021',
    completed:true,
    favourite: false
    },
   {
    title :'improve design1',
  dueDate:'25/10/2021',
  completed:false,
  favourite: false
  },{
  title :'work harder1',
  dueDate:'25/10/2021',
  completed:false,
  favourite: true,
  },{
  title :'work harder2',
  dueDate:'25/10/2021',
  completed:false,
  favourite: true,
  },{
  title :'work harder',
  dueDate:'25/10/2021',
  completed:false,
  favourite: true,
  }];


  constructor() { }

  ngOnInit(): void {
  }
  logListItems(){
    console.table([
    this.todoList,
    ]);
  }
  }

