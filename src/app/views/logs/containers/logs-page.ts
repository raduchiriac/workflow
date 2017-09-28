import { Component, ChangeDetectionStrategy, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-pages-logs-page',
  templateUrl: './logs-page.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable()
export class LogsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
