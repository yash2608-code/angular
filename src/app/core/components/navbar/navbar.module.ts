import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        NavbarComponent
    ],
    declarations: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
