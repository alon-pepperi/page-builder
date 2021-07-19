import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PepNgxLibModule  } from '@pepperi-addons/ngx-lib';
import { PageBuilderComponent} from './index';
import { PepAddonLoaderModule } from '@pepperi-addons/ngx-remote-loader';



@NgModule({
    declarations: [
        PageBuilderComponent

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PepNgxLibModule,
        PepAddonLoaderModule,
        //// When not using module as sub-addon please remark this for not loading twice resources
        MatCardModule

        //// Example for importing tree-shakeable @pepperi-addons/ngx-lib components to a module



    ],
    exports:[PageBuilderComponent],
    providers: [

    ]
})
export class PageBuilderModule {
    constructor(
      ) {


    }
}
