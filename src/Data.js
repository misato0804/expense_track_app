//Abstract class
export class Data {
  data;
  constructor() {
    this.data = new Array;
  }

  getData(){
    return this.data;
  }

  addData(newData){
    const returnData = { ...newData, id: this.data.length + 1 };
    this.data.push(returnData);
    return returnData;
  }

  searchData(){

  }

}