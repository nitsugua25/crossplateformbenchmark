import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  items: { id: number; title: string }[] = [];
  inputValue: string = '';

  generateItems(): void {
    const count = parseInt(this.inputValue, 10);
    if (isNaN(count) || count <= 0) {
      this.items = [];
      return;
    }

    this.items = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`
    }));
  }
}
