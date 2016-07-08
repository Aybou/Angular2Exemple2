/**
 * Article
 */
export class Article{
    id: number;
    Description: string;
    Prix: number;
    
    
  

  constuctor ( id: number,Description: string,  Prix: number ){
    this.id = id;
    this.Description= Description;
    this.Prix = Prix;
   
    
  }
}
