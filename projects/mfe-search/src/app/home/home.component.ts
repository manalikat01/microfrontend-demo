// ...existing code...
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // ngModel-bound string (was conflicting with EventEmitter)
  searchText: string = '';
  // keep emitter for parent communication
  @Output() search = new EventEmitter<string>();

  // optional helper if you want to call it manually
  onSearchChange(e: any) {
    let value = e.target.value;
    this.searchText = value;
    this.search.emit(value);
  }
}
// ...existing code...