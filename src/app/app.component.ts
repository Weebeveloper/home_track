import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly scrollTrigger$ = new ReplaySubject<number>(1);

  onScroll(event: WheelEvent) {
    if (event.deltaY !== 0) {
      this.scrollTrigger$.next(event.deltaY);
    }
  }
}
