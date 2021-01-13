import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:beforeunload', ['$event'])
  onUnload(event) {
    this.storage.updateStorage();
  }

  // ======================================= //
  constructor(private storage: StorageService) { }
  ngOnInit() {
    this.storage.initialStorage();
  }
  // ======================================= //
}