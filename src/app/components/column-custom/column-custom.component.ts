import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column-custom',
  templateUrl: './column-custom.component.html',
  styleUrl: './column-custom.component.css'
})
export class ColumnCustomComponent {
  @Input() value! : string;
  @Input() pipeType! : string;
}
