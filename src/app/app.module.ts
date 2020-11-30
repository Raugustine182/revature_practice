import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { ImageComponent } from './image/image.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    ImageComponent,
    RecipeComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
