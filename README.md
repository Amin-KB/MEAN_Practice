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
