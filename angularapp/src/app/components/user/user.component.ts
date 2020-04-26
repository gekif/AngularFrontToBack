import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})


export class UserComponent {
  // Properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;

  // Method
  constructor(){
    // this.sayHello();
    console.log(this.age);
    this.hasBirtday();
    console.log(this.age);
  }

  sayHello(){
    console.log(`Hello ${this.firstName}`);
  }

  hasBirtday(){
    this.age += 1;
  }
}
