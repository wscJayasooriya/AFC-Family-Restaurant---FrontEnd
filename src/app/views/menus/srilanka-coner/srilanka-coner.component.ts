import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-srilanka-coner',
  templateUrl: './srilanka-coner.component.html',
  styleUrls: ['./srilanka-coner.component.css']
})
export class SrilankaConerComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

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
  openVerticallyCentered5(content5) {
    this.modalService.open(content5, { centered: true });
  }

  ngOnInit() {
  }


}
