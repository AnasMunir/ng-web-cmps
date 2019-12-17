import { Injectable, NgModuleFactoryLoader, Injector, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyModuleService {

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) { }

  private moduleRef: NgModuleRef<any>;

  loadModule(path: string): Promise<void> {
    if (this.moduleRef) {
      return Promise.resolve();
    }
    return this.loader
      .load(path)
      .then(moduleFactory => {
        this.moduleRef = moduleFactory.create(this.injector).instance;
        console.debug('this.moduleRef', this.moduleRef);
      })
      .catch(err => {
        console.error('error loading module', err);
      })
  }
}
