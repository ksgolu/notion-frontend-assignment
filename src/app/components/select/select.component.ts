import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() options: Array<{ text: string; value: string }> = [];

  customSelectActive = false;
  selectedValue: string | undefined;
  selectedText: string | undefined;
  list: Array<{ text: string; value: string }>;

  constructor() {
    this.list = [];
  }
  ngOnInit() {
    this.list = this.options;
    this.options = [];
  }

  toggleCustomSelect() {
    this.customSelectActive = !this.customSelectActive;
  }

  selectOption(value: string, selectedText: string) {
    this.selectedValue = value;
    this.selectedText = selectedText;
    this.customSelectActive = false;
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.customSelectActive) {
      const target = event.target as HTMLElement;
      const value = target.textContent?.trim();
      if (value) {
        this.selectedValue = value;
        this.customSelectActive = false;
      }
    }
  }
}
