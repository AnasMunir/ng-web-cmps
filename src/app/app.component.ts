import { Component } from '@angular/core';
import { LazyModuleService } from './lazy-module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-web-cmp';
  cmpLoaded: boolean = false;
  constructor(private lazyLoader: LazyModuleService) {}

  lazyLoad() {
    this.lazyLoader.loadModule("src/app/test-carousel/test-carousel.module#TestCarouselModule")
      .then(() => {
        this.cmpLoaded = true;
        const lazyElem = document.createElement('app-test-carousel');
        const lazyContent = document.getElementById('lazyContent');
        lazyContent.appendChild(lazyElem);
      });
  }
}
