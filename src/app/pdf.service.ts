import { Injectable } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PrescriptionItem from './model/item.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  prescriptionItems: PrescriptionItem[] = [];
  isTableView = true;

  pageHeight = 100;

  constructor() {}

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

  designMedication() {
    return [
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            height: 50,
            style: 'medicine_table',
            columnGap: 10,
            columns: [
              {
                width: '20%',
                text: '১ + ১ + ১',
              },
              {
                text: '৪ ফোঁটা',
              },
              {
                width: 'auto',
                text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
              },
              {
                width: '10%',
                text: '১ দিন',
              },
            ],
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            layout: 'noBorders',
            table: {
              widths: [
                '45%',
                this.isTableView ? '40%' : 'auto',
                this.isTableView ? '15%' : 'auto',
              ],
              height: 50,
              style: 'medicine_table',
              body: [
                [
                  { text: '১ + ১ + ১' },
                  {
                    text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
                  },
                  { text: '১ দিন' },
                ],
              ],
            },
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            height: 50,
            style: 'medicine_table',
            columnGap: 10,
            columns: [
              {
                width: '20%',
                text: '১ + ১ + ১',
              },
              {
                text: '৪ ফোঁটা',
              },
              {
                width: 'auto',
                text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
              },
              {
                width: '10%',
                text: '১ দিন',
              },
            ],
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            layout: 'noBorders',
            table: {
              widths: [
                '45%',
                this.isTableView ? '40%' : 'auto',
                this.isTableView ? '15%' : 'auto',
              ],
              height: 50,
              style: 'medicine_table',
              body: [
                [
                  { text: '১ + ১ + ১' },
                  {
                    text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
                  },
                  { text: '১ দিন' },
                ],
              ],
            },
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            height: 50,
            style: 'medicine_table',
            columnGap: 10,
            columns: [
              {
                width: '20%',
                text: '১ + ১ + ১',
              },
              {
                text: '৪ ফোঁটা',
              },
              {
                width: 'auto',
                text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
              },
              {
                width: '10%',
                text: '১ দিন',
              },
            ],
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            layout: 'noBorders',
            table: {
              widths: [
                '45%',
                this.isTableView ? '40%' : 'auto',
                this.isTableView ? '15%' : 'auto',
              ],
              height: 50,
              style: 'medicine_table',
              body: [
                [
                  { text: '১ + ১ + ১' },
                  {
                    text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
                  },
                  { text: '১ দিন' },
                ],
              ],
            },
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            height: 50,
            style: 'medicine_table',
            columnGap: 10,
            columns: [
              {
                width: '20%',
                text: '১ + ১ + ১',
              },
              {
                text: '৪ ফোঁটা',
              },
              {
                width: 'auto',
                text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
              },
              {
                width: '10%',
                text: '১ দিন',
              },
            ],
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            layout: 'noBorders',
            table: {
              widths: [
                '45%',
                this.isTableView ? '40%' : 'auto',
                this.isTableView ? '15%' : 'auto',
              ],
              height: 50,
              style: 'medicine_table',
              body: [
                [
                  { text: '১ + ১ + ১' },
                  {
                    text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
                  },
                  { text: '১ দিন' },
                ],
              ],
            },
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            height: 50,
            style: 'medicine_table',
            columnGap: 10,
            columns: [
              {
                width: '20%',
                text: '১ + ১ + ১',
              },
              {
                text: '৪ ফোঁটা',
              },
              {
                width: 'auto',
                text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
              },
              {
                width: '10%',
                text: '১ দিন',
              },
            ],
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            layout: 'noBorders',
            table: {
              widths: [
                '45%',
                this.isTableView ? '40%' : 'auto',
                this.isTableView ? '15%' : 'auto',
              ],
              height: 50,
              style: 'medicine_table',
              body: [
                [
                  { text: '১ + ১ + ১' },
                  {
                    text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
                  },
                  { text: '১ দিন' },
                ],
              ],
            },
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            height: 50,
            style: 'medicine_table',
            columnGap: 10,
            columns: [
              {
                width: '20%',
                text: '১ + ১ + ১',
              },
              {
                text: '৪ ফোঁটা',
              },
              {
                width: 'auto',
                text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
              },
              {
                width: '10%',
                text: '১ দিন',
              },
            ],
          },
        ],
        style: 'p_content',
      },
      {
        stack: [
          { text: 'Medicine name', style: 'medicine_name' },
          {
            layout: 'noBorders',
            table: {
              widths: [
                '45%',
                this.isTableView ? '40%' : 'auto',
                this.isTableView ? '15%' : 'auto',
              ],
              height: 50,
              style: 'medicine_table',
              body: [
                [
                  { text: '১ + ১ + ১' },
                  {
                    text: 'জর বাড়লে; খাওয়ার আধ ঘণ্টা আগে; খাওয়ার আধ ঘণ্টা আগে;',
                  },
                  { text: '১ দিন' },
                ],
              ],
            },
          },
        ],
        style: 'p_content',
      },
    ];
  }

  generatePdf(items: PrescriptionItem[]) {
    this.prescriptionItems = items;
    let name = `ড. হাসান শাহরিয়ার`;
    let title = `এম বি বি এস
   জেনারেল মেডিসিন
   রেজিঃ নংঃ ১০১০
   তৎক্ষণাৎ উত্তরা উৎপল হটাৎ
   `;

    let docDefinition = {
      pageSize: 'A4',
      pageOrientation: 'portrat',
      pageMargins: [40, 100, 40, 60],

      footer: function (currentPage, pageCount) {
        return {
          stack: [
            {
              canvas: [
                {
                  type: 'line',
                  x1: 0,
                  y1: 0,
                  x2: 595 - 2 * 40,
                  y2: 0,
                  lineWidth: 1,
                },
              ],
            },
            {
              text: currentPage.toString() + ' of ' + pageCount,
              style: 'header_title',
            },
            {
              text: 'long long text long long text long long text long long text long long text',
              style: 'header_title',
            },
          ],
          style: 'header',
        };
      },
      header: {
        stack: [
          // { text: name, style: 'header_name' },
          // { text: title, style: 'header_title' },
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 0,
                x2: 595 - 2 * 40,
                y2: 0,
                lineWidth: 1,
              },
            ],
          },
        ],
        style: 'header',
      },
      content: [
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 5,
              x2: 595 - 2 * 40,
              y2: 5,
              lineWidth: 1,
            },
          ],
        },
        {
          margin: [0, 0],
          style: 'body_content',
          table: {
            widths: ['30%', '1%', '69%'],
            body: [
              [
                {
                  border: [false, false, false, false],
                  stack: [
                    {
                      text: 'Complaints',
                      style: 'p_title',
                    },
                    {
                      ul: this.formatData(0),
                    },
                    {
                      text: 'History',
                      style: 'p_title',
                    },
                    {
                      ul: this.formatData(2),
                    },
                  ],
                },
                {
                  border: [true, false, false, false],
                  text: '',
                },
                {
                  border: [false, false, false, false],
                  style: 'medication_section',
                  stack: [
                    {
                      text: 'Medication',
                      style: 'p_title',
                    },
                    {
                      ol: this.designMedication(),
                      style: 'order_list',
                    },
                    {
                      text: 'Advice',
                      style: 'p_title',
                    },
                    {
                      ul: this.formatData(3),
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
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
          border: '1px solid black',
        },
        body_content: {
          // height: 500,
          background: 'red'
        },
        p_title: {
          fontSize: 18,
          margin: [0, 0],
        },
        p_content: {
          fontSize: 12,
          margin: [2, 0],
        },
        order_list: {
          fontSize: 15,
        },
        medication_section: {
          margin: [4, 4],
        },
        medicine_name: {
          fontSize: 15,
        },
        medicine_table: {
          margin: [10, 0, 0, 0],
        },
      },
      defaultStyle: {
        font: 'kalpurush',
      },
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
  }
}
