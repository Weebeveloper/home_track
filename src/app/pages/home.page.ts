import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, ReplaySubject } from 'rxjs';
import { ConfirmationPopup } from '../confirmation-popup/confirmation.popup';
import { tableType } from './table.type';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  @Input() scrollTrigger$!: ReplaySubject<number>;
  @ViewChild('contentContainer') content!: ElementRef;

  readonly tableData = [
    [
      'טקסט רכב ונרחב על העבודה עם העמודה הזאת',
      'hi2',
      'hi3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    [
      'טקסט רכב ונרחב על העבודה עם העמודה הזאת',
      'hi2',
      'hi3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    [
      'טקסט רכב ונרחב על העבודה עם העמודה הזאת',
      'hi2',
      'hi3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    [
      'טקסט רכב ונרחב על העבודה עם העמודה הזאת',
      'hi2',
      'hi3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    [
      'טקסט רכב ונרחב על העבודה עם העמודה הזאת',
      'hi2',
      'hi3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    [
      'טקסט רכב ונרחב על העבודה עם העמודה הזאת',
      'hi2',
      'hi3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
  ];

  readonly tables = [
    'משימות כלליות',
    'קניות',
    'שגרה יומית',
    'בישולים',
    'ניקיונות',
    'פתקים',
  ];

  constructor(private readonly _dialog: MatDialog) {}

  ngOnInit(): void {
    this.scrollTrigger$.subscribe((amount) => this.scrollHorizontal(amount));
  }

  ngOnDestroy(): void {
    this.scrollTrigger$?.unsubscribe();
  }

  scrollHorizontal(amount: number) {
    this.content.nativeElement.scrollLeft += amount;
    console.log(this.content);
  }

  async deleteDialog(index: number, table: tableType) {
    let chosenTable = undefined;

    switch (table) {
      case tableType.generalMissions:
        chosenTable = this.tableData[0];
        break;
      case tableType.shoppingMissions:
        chosenTable = this.tableData[1];
        break;
      case tableType.dailyMissions:
        chosenTable = this.tableData[2];
        break;
      case tableType.cookingMissions:
        chosenTable = this.tableData[3];
        break;
      case tableType.cleaningMissions:
        chosenTable = this.tableData[4];
        break;
      case tableType.personalNotes:
        chosenTable = this.tableData[5];
        break;
    }

    const dialog = this._dialog.open(ConfirmationPopup, {
      height: '40%',
      width: '40%',
    });

    const result = await firstValueFrom(dialog.afterClosed());

    if (result!!) {
      chosenTable.splice(index, 1);
      //Todo: delete here :)
    }
  }

  onItemChangeLocation(event: CdkDragDrop<string[]>, table: tableType) {
    let chosenTable = undefined;

    switch (table) {
      case tableType.generalMissions:
        chosenTable = this.tableData[0];
        break;
      case tableType.shoppingMissions:
        chosenTable = this.tableData[1];
        break;
      case tableType.dailyMissions:
        chosenTable = this.tableData[2];
        break;
      case tableType.cookingMissions:
        chosenTable = this.tableData[3];
        break;
      case tableType.cleaningMissions:
        chosenTable = this.tableData[4];
        break;
      case tableType.personalNotes:
        chosenTable = this.tableData[5];
        break;
    }

    moveItemInArray(chosenTable, event.previousIndex, event.currentIndex);
  }

  onListScroll(event: WheelEvent) {
    event.stopPropagation();
  }
}
