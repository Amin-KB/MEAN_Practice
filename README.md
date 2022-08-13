Create C
Component
1.Creating a class :export class PostCreateComponent{}
2.import from angular/core: import { Component } from '@angular/core';
3.use decorator: @Component({
  selector:'app-post-create', //selector allows us to use template
  templateUrl: './post-create.component.html'
})

4. then import the component class to app.modeule.ts: import {PostCreateComponent} from './posts/post-create/post-create.component'
5.add the Name of component to @NgModule: @NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent
  ]



Listening to Events

in Angular we use Event binding

1. <button (click)="onAddPost()">Save post</button>
2. then we go to our class in ts file and giving the name of the methode in to the class: export class PostCreateComponent
{
  onAddPost(){
    alert('post added!')
  }
}
#with only event bing we can only see alert
