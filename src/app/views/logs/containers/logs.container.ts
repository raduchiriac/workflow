import { Component, ChangeDetectionStrategy, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-containers-logs',
  templateUrl: './logs.container.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable()
export class LogsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
