import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  ngOnInit() {
    console.log('on init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
