import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-button',
  templateUrl: './large-button.component.html',
  styleUrls: ['./large-button.component.css']
})
export class LargeButtonComponent implements OnInit {
  
  @Input() icon: object;
  @Input() label: object;

  constructor() { }

  ngOnInit() {
    
  }

}
