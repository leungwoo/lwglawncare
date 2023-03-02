import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstName: any;
  lastName: any;
  email: any;
  phone: any;
  message: any;

  constructor() {}

  ngOnInit(): void {}
}
