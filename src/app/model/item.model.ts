export default class PrescriptionItem {
    title: string;
    items: any[];
    selectedItems: any[];
  
    constructor(title: string, items) {
      this.title = title;
      this.items = items;
      this.selectedItems = [];
    }

    addSelectedItem(item: any) {
        this.selectedItems.push(item);
    }

    removeItem(item: any) {
        this.selectedItems = this.selectedItems.filter((val: any) => {
            return item.name !== val.name;
        });
    }

    setSelectedPrescriptionItems(items: any[]) {
        this.selectedItems = items;
    }
  }