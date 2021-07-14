import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sub-addon-2',
  templateUrl: './sub-addon-2.component.html',
  styleUrls: ['./sub-addon-2.component.css']
})
export class SubAddon2Component implements OnInit {
  options: {key:string, value:string}[] = [];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.options.push({key:'OPEN_DIALOG', value: 'Text 1' });
    this.options.push({key:'OPEN_DIALOG', value: 'Text 2' });
  }

}
