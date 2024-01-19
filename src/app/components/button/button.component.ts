import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  makes: any[] = [];

  @Input() text: string;
  @Input() type: string;
  @Input() width: string;
  @Input() height: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
    this.makes = [];
  }

  ngOnInit(): void {}
  onClick() {
    this.btnClick.emit();
  }
}
