import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cool-toggle-button',
  templateUrl: 'toggle-button.component.html',
  styleUrls: ['toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {

  @Input()
  isChecked: boolean;
  @Output()
  isCheckedChange: EventEmitter<boolean>;

  constructor() {
    this.isCheckedChange = new EventEmitter();
  }

  onChange(target) {
    this.isChecked = target.checked;
    this.isCheckedChange.emit(this.isChecked);
  }

  ngOnInit() {
  }

}
