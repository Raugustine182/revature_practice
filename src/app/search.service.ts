import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
  private results:Array<Result>[] =[];
  constructor(public http:HttpClient) {
    
  }

  search(searchString: string) {
    console.log("https://www.themealdb.com/api/json/v1/1/search.php?s=" +searchString);
    this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`)
      .subscribe(response =>
      {
        console.log(response);
        
        // this.results.push(response.meals[0])
      })
    throw new Error('Method not implemented.');
  }

  

  
}
class Result{
  _title: string;
  _tubeLink: string;
  _ingredients: string[] = [];
  _measures:string[] = [];
  _instructions:string;
  _thumbnail: string;



  constructor(result:any)
  {
    this._title = result.strMeal;
    this._tubeLink= result.strYouTube;
    for(let i =1;i<21;i++)
    {
      this._ingredients.push(result[`strIngredient${i}`]);
      this._measures.push(result[`strMeasure${i}`]);
    };
    this._instructions=result.strInstructions; 
    this._thumbnail=result.strMealThumb;
  }
  get title ():string{return this._title}
  get tubeLink ():string{return this._tubeLink}
  get ingredients ():string[]{return this._ingredients}
  get measures():string[]{return this._measures}
  get instructions():string{return this._instructions}
  get thumbnail ():string{return this._thumbnail}
  
}
