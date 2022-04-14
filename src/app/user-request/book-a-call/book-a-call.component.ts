import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book-a-call',
  templateUrl: './book-a-call.component.html',
  styleUrls: ['./book-a-call.component.scss']
})
export class BookACallComponent implements OnInit {
  static result: any;

  constructor(private activeModal: NgbActiveModal) {}
  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
