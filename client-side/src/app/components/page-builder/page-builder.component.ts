import { ActivatedRoute } from '@angular/router';
import { PepHttpService } from '@pepperi-addons/ngx-lib';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable, of, Subject, timer } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: 'pep-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.scss']
})
export class PageBuilderComponent implements OnInit {

    carouselAddon;
    addonsTemp = [];
    addons$: Observable<any[]>;
    @Input() hostObject: any;
    @Output() hostEvents: EventEmitter<any> = new EventEmitter<any>();


    constructor(
        private http: PepHttpService,
        private route: ActivatedRoute
    ) {



    }

    ngOnInit(){
        this.addons$ = this.getRelations(this.route.snapshot.params.addon_uuid)
            .pipe(
                map( res => {
                    this.carouselAddon = res['relations'][res['relations'].length - 1];
                    res['relations'].pop();
                    return res['relations'];
                }));


        // const res = this.http.getPapiApiCall(`/addons/api/${uuid}/api/relations`)
        // this.addons$ = of([
        //     {
        //         // remoteEntry: 'https://cdn.pepperi.com/Addon/Public/db26ded0-a1c0-4c73-a140-2a736dc2ae6e/0.0.2/sub_addon_1.js',
        //         remoteEntry: 'http://localhost:4401/sub_addon_1.js',
        //         remoteName: 'sub_addon_1',
        //         exposedModule: './SubAddon1Module',
        //         componentName: 'SubAddon1Component',
        //         uuid: 'db26ded0-a1c0-4c73-a140-2a736dc2ae6e'
        //     },
        //     {
        //         remoteName: "sub_addon_2",
        //         // remoteEntry: "https://cdn.pepperi.com/Addon/Public/f93658be-17b6-4c92-9df3-4e6c7151e038/0.0.15/sub_addon_2.js",
        //         remoteEntry: 'http://localhost:4402/sub_addon_2.js',
        //         componentName: "SubAddon2Component",
        //         exposedModule: "./SubAddon2Module",
        //         uuid: "f93658be-17b6-4c92-9df3-4e6c7151e038"
        //     },
        //     {
        //         // remoteEntry: 'https://cdn.pepperi.com/Addon/Public/951ab333-9af6-4636-b90b-04508ba070cc/0.0.7/sub_addon.js',
        //         remoteEntry: 'http://localhost:4403/sub_addon_3.js',
        //         remoteName: 'sub_addon_3',
        //         exposedModule: './SubAddon3Module',
        //         componentName: 'SubAddon3Component',
        //         uuid: "f93658be-17b6-4c92-9df3-4e6c7151e038"
        //     }
        // ]);
        // this.carouselAddon = {
        // remoteEntry: 'https://cdn.staging.pepperi.com/Addon/Public/43265507-7ac4-44ab-8270-d3cf9b2608b4/0.0.5/sub_addon_4.js',
        // // remoteEntry: 'http://localhost:4404/sub_addon_4.js',
        // remoteName: 'sub_addon_4',
        // exposedModule: './SubAddon4Module',
        // componentName: 'SubAddon4Component',
        // uuid: '43265507-7ac4-44ab-8270-d3cf9b2608b4'
        // };

    }

    onAddonChange(e){
        // switch(e.action){
        //     case 'addon-loaded':


        // }
    }

    getRelations(addonUUID): Observable<any[]> {

        // debug locally
        return this.http.postHttpCall('http://localhost:4500/api/relations', {RelationName: `PageComponent` });
        // return this.http.postPapiApiCall(`/addons/api/${addonUUID}/api/relations`, {RelationName: `PageComponent` });

    }

}
