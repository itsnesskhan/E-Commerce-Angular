import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sidenavClosedSource = new Subject<void>();

  sidenavClosed$ = this.sidenavClosedSource.asObservable()

  constructor() { }

  notifySidenavClosed() {
    this.sidenavClosedSource.next();
  }
}
