import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookACallComponent } from '../user-request/book-a-call/book-a-call.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navdata: any[] = [];
  button:any[]=[];
  bookacallService: any;
  constructor(private dataService: DataServices,
    private router: Router,public modalService: NgbModal
    ) { }
    openModal() {
      //ModalComponent is component name where modal is declare
      const modalRef = this.bookacallService.open(BookACallComponent);
      modalRef.result.then((result: any) => {
        console.log(result);
      }).catch((error: any) => {
        console.log(error);
      });
    }
  ngOnInit(): void {
    this.dataService.getPages().subscribe((response: any) => {
      this.navdata = response;
      console.log('data recieved');
      console.log(this.navdata + '-response');

    })
    this.dataService.getButton().subscribe((buttonresponse: any) => {
      this.button = buttonresponse;
      console.log('Button recieved');


    })


  }

}
