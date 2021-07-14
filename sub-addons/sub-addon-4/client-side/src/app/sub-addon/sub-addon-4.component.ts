import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { UIControl, ObjectsDataRow } from '@pepperi-addons/ngx-lib';
import { fakeCardsUIControl, fakeItems, fakeLinesUIControl } from './fake-data';

@Component({
  selector: 'sub-addon-4',
  templateUrl: './sub-addon-4.component.html',
  styleUrls: ['./sub-addon-4.component.css']
})
export class SubAddon4Component implements OnInit {
  options: {key:string, value:string}[] = [];
  items;
  uiControl;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadlist();
  }

  loadlist() {
    const loadLines = true;
    const uiControl = loadLines
        ? this.getLinesUiControl()
        : this.getCardsUiControl();
    const rows = loadLines ? this.getLinesData() : this.getCardsData();

    this.uiControl = uiControl;
    this.items = rows;
}

private getLinesUiControl(): UIControl {
    return JSON.parse(fakeLinesUIControl);
}

private getLinesData(): Array<ObjectsDataRow> {
    return JSON.parse(fakeItems);
}

private getCardsUiControl(): UIControl {
    return JSON.parse(fakeCardsUIControl);
}

private getCardsData(): Array<ObjectsDataRow> {
    return this.getLinesData();
}

}
