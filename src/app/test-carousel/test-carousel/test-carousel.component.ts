import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-carousel',
  templateUrl: './test-carousel.component.html',
  styleUrls: ['./test-carousel.component.scss']
})
export class TestCarouselComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit() {
  }

}
