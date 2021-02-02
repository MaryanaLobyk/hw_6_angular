import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  bubbleUpUser = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getUserInfo(): void{
    console.log(this.user);
    this.bubbleUpUser.emit(this.user);
  }

}
