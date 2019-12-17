import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from "@angular/elements";
import { TestCarouselComponent } from './test-carousel/test-carousel.component';

// external modules
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [TestCarouselComponent],
  entryComponents: [TestCarouselComponent],
  imports: [
    CommonModule,
     // externals
     NgbCarouselModule
  ],
  bootstrap: [TestCarouselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestCarouselModule {
  constructor(private injector: Injector) {
    console.log('TestCarouselModule loaded');

    const carouselCE = createCustomElement(TestCarouselComponent, {injector: this.injector});
    customElements.define('app-test-carousel', carouselCE);
  }
 }
