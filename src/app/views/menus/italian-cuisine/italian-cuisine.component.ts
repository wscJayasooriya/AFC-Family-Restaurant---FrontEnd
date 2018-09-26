import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-italian-cuisine',
  templateUrl: './italian-cuisine.component.html',
  styleUrls: ['./italian-cuisine.component.css']
})
export class ItalianCuisineComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) { }
  // constructor() {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  openVerticallyCentered1(content1) {
    this.modalService.open(content1, { centered: true });
  }
  openVerticallyCentered2(content2) {
    this.modalService.open(content2, { centered: true });
  }
  openVerticallyCentered3(content3) {
    this.modalService.open(content3, { centered: true });
  }
  openVerticallyCentered4(content4) {
    this.modalService.open(content4, { centered: true });
  }


  ngOnInit() {
  }


}
