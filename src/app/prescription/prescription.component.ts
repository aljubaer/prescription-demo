import { Component, OnInit } from '@angular/core';
import PrescriptionItem from '../model/item.model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

import { PrescriptionService } from '../services/prescription.service';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  prescriptionItems: PrescriptionItem[] = [];
  currentPrescriptionItem: PrescriptionItem;
  closeResult = '';
  model = false;

  constructor(
    private prescriptionService: PrescriptionService,
    private pdfService: PdfService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this._getAllPrescriptionItems();
  }

  _getAllPrescriptionItems() {
    this.prescriptionItems = this.prescriptionService.getAllPrescriptionItems();
  }

  open(content, currentPrescriptionItem) {
    console.log(currentPrescriptionItem);
    this.currentPrescriptionItem = currentPrescriptionItem;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(result);
          this.closeResult = `Closed with: ${result}`;

          let selectedItems = this.getSelectedOptions();
          console.log(selectedItems);

          this.prescriptionItems.forEach((item) => {
            if (item.title === currentPrescriptionItem.title) {
              item.setSelectedPrescriptionItems(selectedItems);
            }
          });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getSelectedOptions() {
    return this.currentPrescriptionItem.items.filter((opt) => opt.checked);
  }

  onSubmit() {
    console.log(this.prescriptionItems);
    this.pdfService.generatePdf(this.prescriptionItems);
  }

  formatData(index) {
    let m = [];
    console.log(this.prescriptionItems[0].selectedItems);
    this.prescriptionItems[index].selectedItems.forEach((item) => {
      console.log(item);
      let a = {
        text: item.name,
        style: 'p_content',
      };
      m.push(a);
    });
    console.log(m);
    return m;
  }


}
