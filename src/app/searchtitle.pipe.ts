import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtitle'
})
export class SearchtitlePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    return value.filter(item =>{
      if(args){
        const search = args[0].toLowerCase();
        const title = item.title.toLowerCase();

        if(title.includes(search)){
          return item
        }
      }
      else{
        return item
      }
    }  
    );
  }

}
