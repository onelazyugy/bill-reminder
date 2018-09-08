import { Component, OnInit, Injector } from '@angular/core';

@Component({
    selector: 'app-setting-bill',
    templateUrl: './setting-bill-menu-item.component.html',
    styleUrls: ['./setting-bill-menu-item.component.css']
})
export class SettingBillMenuItemComponent implements OnInit {
    showNum = 0;
    constructor(private injector: Injector) {}

    ngOnInit() {

    }
}
