import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  dateList: Array<{ text: string; value: string }> = [];
  monthList: Array<{ text: string; value: string }> = [];
  yearList: Array<{ text: string; value: string }> = [];
  gradeList: Array<{ text: string; value: string }> = [];
  constructor() {}

  ngOnInit() {
    this.dateList = [
      { text: '1', value: '1' },
      { text: '2', value: '2' },
      { text: '3', value: '3' },
      { text: '4', value: '4' },
      { text: '2', value: '8' },
      { text: '3', value: '10' },
      { text: '4', value: '15' },
      { text: '4', value: '31' },
    ];
    this.monthList = [
      { text: '1', value: 'January' },
      { text: '2', value: 'March' },
      { text: '3', value: 'May' },
      { text: '4', value: 'July' },
      { text: '4', value: 'December' },
    ];
    this.yearList = [
      { text: '1', value: '1900' },
      { text: '2', value: '2000' },
      { text: '3', value: '2010' },
      { text: '4', value: '2024' },
    ];
    this.gradeList = [
      { text: '1', value: 'Grade 1' },
      { text: '2', value: 'Grade 5' },
      { text: '3', value: 'Grade 10' },
      { text: '4', value: 'Grade 12' },
    ];
  }
}
