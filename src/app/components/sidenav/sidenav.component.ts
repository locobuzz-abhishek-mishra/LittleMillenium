import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  today: number = Date.now();
  // public bufferValue;

    events = [
          {
            id: 'id',
            title: 'Business Meeting',
            time: '05:00 PM',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Ask for a Vacation',
            time: '05:00 PM',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Dinner with Micheal',
            time: '05:00 PM',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Deadline for Project ABC',
            time: '05:00 PM',
            state: 'state'
        },
    ];

    todolists = [
          {
            id: 'id',
            title: 'Get to know Angular more',
            time: 'Added:4 days ago',
        },
        {
            id: 'id',
            title: 'Configure new Router',
            time: 'Added:4 days ago',
        },
        {
            id: 'id',
            title: 'Invite Joy to play Carroms',
            time: 'Added:4 days ago',
        },
        {
            id: 'id',
            title: 'Check SRS of Project X',
            time: 'Added:4 days ago',
        },
    ];

    messages = [
        {from: 'Catherin', subject: 'Shopping', content: 'hi there??'},
        {from: 'Jack', subject: 'Function', content: 'yes'},
        {from: 'Karina', subject: 'Get together', content: 'nice'},
        {from: 'Micheal', subject: 'Trip', content: 'ya.. I will'},
        {from: 'Ashik', subject: 'Meeting', content: 'Time??'},
        {from: 'Joy', subject: 'Party', content: 'Lets enjoy'},
    ];

}
