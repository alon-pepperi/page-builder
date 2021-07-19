import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAddon2Component } from './index';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PepHttpService, PepAddonService, PepFileService, PepCustomizationService, PepNgxLibModule, PepLayoutService } from '@pepperi-addons/ngx-lib';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { PepImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepAddonLoaderService } from '@pepperi-addons/ngx-remote-loader';
import {config } from './addon.config';

export function createTranslateLoader(
  http: HttpClient,
  fileService: PepFileService,
  addonLoaderService: PepAddonLoaderService
) {
 
  const translationsPath: string = fileService.getAssetsTranslationsPath();
  const translationsSuffix: string = fileService.getAssetsTranslationsSuffix();
  const addonStaticFolder = addonLoaderService.getAddonPath(config.AddonUUID);
  return new MultiTranslateHttpLoader(http, [
      {
          prefix: addonStaticFolder + translationsPath,
              // addonStaticFolder.length > 0
              //     ? addonStaticFolder
              //     : translationsPath,
          suffix: translationsSuffix,
      },
      {
          prefix: addonStaticFolder + 'assets/i18n/',
          // addonStaticFolder.length > 0
          // ? addonStaticFolder
          // :'assets/i18n/',
          suffix: '.json',
      },
  ]);
}

@NgModule({
  declarations: [SubAddon2Component],
  imports: [
    CommonModule,
    HttpClientModule,
    // MatDialogModule,
    // MatCardModule,
    // //// When not using module as sub-addon please remark this for not loading twice resources
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient, PepFileService, PepAddonLoaderService]
        }, isolate: false
    }),
    // //// Example for importing tree-shakeable @pepperi-addons/ngx-lib components to a module
    PepNgxLibModule,
    // PepButtonModule,
    PepSelectModule,
    PepImagesFilmstripModule
    // PepTopBarModule,
    // PepListModule
  ],
  exports: [SubAddon2Component],
  providers: [
    HttpClient,
    TranslateStore,
    PepHttpService,
    PepAddonService,
    PepFileService,
    PepCustomizationService,
    PepDialogService,
    PepLayoutService
  ]
})
export class SubAddon2Module {
  constructor(
    translate: TranslateService
) {

  let userLang = 'en';
  translate.setDefaultLang(userLang);
  userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available

  if (location.href.indexOf('userLang=en') > -1) {
      userLang = 'en';
  }
  // the lang to use, if the lang isn't available, it will use the current loader to get them
  translate.use(userLang).subscribe((res: any) => {
      // In here you can put the code you want. At this point the lang will be loaded
  });
}
}
