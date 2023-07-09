import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer'
})
export class FilerPipe implements PipeTransform {

  transform(allproducts:any[], searchTerm:string, propertyname:string): any[] {
// for holding the search result
 const result: any[]=[];

    if(!allproducts||searchTerm==''||propertyname==''){
      return allproducts;
    }

    allproducts.forEach((item:any)=>{
      //property name = searchTerm
      if(item[propertyname].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
