import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-presenter',
  templateUrl: './shop-presenter.component.html',
  styleUrls: ['./shop-presenter.component.scss']
})
export class ShopPresenterComponent implements OnInit {

  grade = 3;
  constructor() { }

  ngOnInit() {
  }

}
