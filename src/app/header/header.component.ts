import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownDirective} from "../shared/dropdown.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  @Output() featureSelected=new EventEmitter<string>();

    protected readonly onselect = onselect;
    onSelect(feature:string){
      this.featureSelected.emit(feature);
    }
}
