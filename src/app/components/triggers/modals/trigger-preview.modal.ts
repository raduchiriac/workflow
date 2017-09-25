import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

// import { Trigger } from '../../_models';

// import { TriggerService } from '../../_services';

@Component({
  selector: 'app-trigger-preview',
  templateUrl: 'trigger-preview.modal.html',
  styleUrls: ['trigger-preview.modal.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TriggerPreviewModal implements OnInit, OnDestroy {

  // triggers: Observable<Array<Trigger>>;
  open$:Boolean

  // private subscription: Subscription;

  constructor(
    // private triggerService: TriggerService
  ) {
    // this.triggers = triggerService.triggers;
    this.open$ = false;
  }

  ngOnInit() {
    // this.subscription = this.triggers
    //   .subscribe(triggers => {}, error => {
    //     // Do something with error
    //   });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  openModal() {
    // !this._document.body.classList.contains("no-scrolling")) && this._document.body.classList.add("no-scrolling");
    if (this.open$ === true) {
      return;
    }
    this.open$ = true;
  }

  closeModal() {
    // this._document.body.classList.contains("no-scrolling")) && this._document.body.classList.remove("no-scrolling");
    this.open$ = false;
  }
}
