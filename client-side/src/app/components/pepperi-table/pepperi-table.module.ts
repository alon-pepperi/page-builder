import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { PepHttpService, PepFileService, PepNgxLibModule, PepAddonService, PepCustomizationService } from '@pepperi-addons/ngx-lib';
import { PepListModule } from '@pepperi-addons/ngx-lib/list';
import { PepperiTableComponent } from './pepperi-table.component';

export function createTranslateLoader(http: HttpClient, fileService: PepFileService, addonService: PepAddonService) {
    const translationsPath: string = fileService.getAssetsTranslationsPath();
    const translationsSuffix: string = fileService.getAssetsTranslationsSuffix();
    const addonStaticFolder = addonService.getAddonStaticFolder();

    return new MultiTranslateHttpLoader(http, [
        {
            prefix:
                addonStaticFolder.length > 0
                    ? addonStaticFolder + translationsPath
                    : translationsPath,
            suffix: translationsSuffix,
        },
        {
            prefix:
                addonStaticFolder.length > 0
                    ? addonStaticFolder + "assets/i18n/"
                    : "/assets/i18n/",
            suffix: ".json",
        },
    ]);
}

@NgModule({
    declarations: [
        PepperiTableComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PepNgxLibModule,
        PepListModule
        // TranslateModule.forChild({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: createTranslateLoader,
        //         deps: [HttpClient, PepFileService, PepAddonService]
        //     }, isolate: false
        // }),
        //// Example for importing tree-shakeable @pepperi-addons/ngx-lib components to a module



    ],
    exports:[PepperiTableComponent, PepListModule],
    providers: [
        HttpClient,
        TranslateStore,
        PepHttpService,
        PepAddonService,
        PepFileService,
        PepCustomizationService
    ]
})
export class PepperiTableModule {
    constructor(
        //   translate: TranslateService
      ) {

        // let userLang = 'en';
        // translate.setDefaultLang(userLang);
        // userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available

        // if (location.href.indexOf('userLang=en') > -1) {
        //     userLang = 'en';
        // }
        // // the lang to use, if the lang isn't available, it will use the current loader to get them
        // translate.use(userLang).subscribe((res: any) => {
        //     // In here you can put the code you want. At this point the lang will be loaded
        // });
    }
}
