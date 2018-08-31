import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'header-title',
    templateUrl: './header-title.component.html',
    styleUrls: ['./header-title.component.css']
})

export class HeaderTitle implements OnInit{
    @Input() headerTitle;
    
    ngOnInit() {
        
    }

}