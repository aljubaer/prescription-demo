import { Component, OnInit } from '@angular/core';
import PrescriptionItem from '../model/item.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";

import { PrescriptionService } from '../services/prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptionItems: PrescriptionItem[] = [];
  currentPrescriptionItem: PrescriptionItem;
  closeResult = '';
  model = false;

  constructor(private prescriptionService: PrescriptionService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this._getAllPrescriptionItems();
  }

  _getAllPrescriptionItems() {
    this.prescriptionItems = this.prescriptionService.getAllPrescriptionItems();
  }

  open(content, currentPrescriptionItem) {
    console.log(currentPrescriptionItem);
    this.currentPrescriptionItem = currentPrescriptionItem;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
      this.closeResult = `Closed with: ${result}`;

      let selectedItems = this.getSelectedOptions();
      console.log(selectedItems);

      this.prescriptionItems.forEach(item => {
        if (item.title === currentPrescriptionItem.title) {
          item.setSelectedPrescriptionItems(selectedItems);
        }
      })

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  getSelectedOptions() { // right now: ['1','3']
    return this.currentPrescriptionItem.items
              .filter(opt => opt.checked)
  }

  onSubmit() {
    console.log(this.prescriptionItems);
    this.generatePdf();
  }

  formatData(index){
    let m = [];
    console.log(this.prescriptionItems[0].selectedItems);
    this.prescriptionItems[index].selectedItems.forEach(item => {
      console.log(item);
      let a = {
        text: item.name,
        style: 'p_content'
      }
      m.push(a);
    });
    console.log(m);
    return m;
  }

  generatePdf(){
    //this.formatData(0);
    // const documentDefinition = { content: docDefinition };
   let name = `ড. হাসান শাহরিয়ার`;
   let title = `এম বি বি এস
   জেনারেল মেডিসিন
   রেজিঃ নংঃ ১০১০
   তৎক্ষণাৎ উত্তরা উৎপল
   `;

    let docDefinition = {
    content: [{ 
      stack: [
        '',
        {text: name, style: 'header_name'},
        {text: title, style: 'header_title'}
      ], 
      style: 'header' 
    },
    {
      canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]
    },
    {
      margin: [0, 0],
      style: 'body_content',
      table: {
        widths: [ '40%', '3%', '57%' ],
        heights: 400,
        body: [
          [
            {
              border: [false, false, false, false],
              stack: [
                {
                  text: 'Complaints',
                  style: 'p_title'
                }, 
                {
                ul: this.formatData(0),
                },
                {
                  text: 'History',
                  style: 'p_title'
                }, 
                {
                ul: this.formatData(2),
                }
              ]
            },
            {
              border: [true, false, false, false],
              text: '',
            }, 
            {
              border: [false, false, false, false],
							stack: [
                {
                  text: 'Medication',
                  style: 'p_title'
                }, 
                {
                ul:this.formatData(1),
                },
                {
                  text: 'Advice',
                  style: 'p_title'
                }, 
                {
                ul: this.formatData(3),
                }
              ]
            }, 
          ],
        ]
      }
    },
  ],
    styles: {
          header: {
              bold: false,
              alignment: 'center',
          },
          header_name: {
            fontSize: 20,
          },
          header_title: {
            fontSize: 10,
          },
          line: {
            width: '100%',
            border: '1px solid black'
          },
          body_content: {
            height: 500
          },
          p_title: {
            fontSize: 18,
            margin: [0, 10]
          },
          p_content: {
            fontSize: 12,
            margin: [10, 0]
          },
     },
     defaultStyle: {
           font: 'kalpurush'
        }
     };
     pdfMake.fonts = {
      kalpurush: {
                 normal: 'kalpurush.ttf',
                //  bold: 'Verdana Bold.ttf',
                //  italics: 'Verdana Italic.ttf',
                //  bolditalics: 'Verdana Bold Italic.ttf'
           },
  };
    pdfMake.createPdf(docDefinition).open();
    pdfMake.tableLayouts = {
      exampleLayout: {
        hLineWidth: function (i, node) {
          if (i === 0 || i === node.table.body.length) {
            return 0;
          }
          return (i === node.table.headerRows) ? 2 : 1;
        },
        vLineWidth: function (i) {
          return 0;
        },
        hLineColor: function (i) {
          return i === 1 ? 'black' : '#aaa';
        },
        paddingLeft: function (i) {
          return i === 0 ? 0 : 8;
        },
        paddingRight: function (i, node) {
          return (i === node.table.widths.length - 1) ? 0 : 8;
        }
      }
    };
   }

}
