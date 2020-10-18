import { Injectable } from '@angular/core';
import PrescriptionItem from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor() { }

  getAllPrescriptionItems() : PrescriptionItem[] {
    let prescriptionItems: PrescriptionItem[] = [];
    
    let complaintItem = [
      {name:'ComplaintA', value:'1', checked:true},
      {name:'ComplaintB', value:'2', checked:false},
      {name:'ComplaintC', value:'3', checked:false}
    ];

    let adviceItem = [
      {name:'AdviceA', value:'1', checked:false},
      {name:'AdviceB', value:'2', checked:false},
      {name:'AdviceC', value:'3', checked:false}
    ]

    let medtItem = [
      {name:'MedicationtA', value:'1', checked:false},
      {name:'MedicationtB', value:'2', checked:false},
      {name:'MedicationtC', value:'3', checked:false}
    ]

    let historytItem = [
      {name:'HistoryA', value:'1', checked:false},
      {name:'HistoryB', value:'2', checked:false},
      {name:'HistoryC', value:'3', checked:false}
    ]

    prescriptionItems.push(new PrescriptionItem('Complaints', complaintItem));
    prescriptionItems.push(new PrescriptionItem('Medication', medtItem));
    prescriptionItems.push(new PrescriptionItem('History', historytItem));
    prescriptionItems.push(new PrescriptionItem('Advice', adviceItem));

    return prescriptionItems;

  }
}
