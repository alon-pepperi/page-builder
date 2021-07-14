import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sub-addon-3',
  templateUrl: './sub-addon-3.component.html',
  styleUrls: ['./sub-addon-3.component.css']
})
export class SubAddon3Component implements OnInit {
  
  richHtml
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.richHtml = "<h1><u>Rich Text Value Example</u></h1><h2><em style=' color: rgb(147, 200, 14);'>Pepperi Rich Text Value </em><u style='color: rgb(0, 102, 204);'>Example</u></h2><ol><li><strong><u>Pepperi Rich Text Value Example</u></strong></li><li>Pepperi Rich text [value] example</li></ol>";
  }

}
