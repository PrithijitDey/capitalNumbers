import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookACallComponent } from '../user-request/book-a-call/book-a-call.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  navdata: any[] = [];
  button:any[]=[];

    constructor(private dataService: DataServices,
      private router: Router,public bookacallService: NgbModal) {}
    openModal() {

      const modalRef = this.bookacallService.open(BookACallComponent);
        modalRef.result.then((result: any) => {
            console.log(result);
        }).catch((error: any) => {
        console.log(error);
      });
    }



  ngOnInit(): void {
    this.dataService.getButton().subscribe((buttonresponse: any) => {
        this.button = buttonresponse;
        console.log('Button recieved');
  })


}
}


