import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: 'modals.component.html',
  styleUrls: ['modals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class ModalsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }

}
