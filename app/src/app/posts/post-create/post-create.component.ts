import { Component } from "@angular/core";

//@Component is a decorator
@Component({
  selector:'app-post-create', //selector allows us to use template
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent
{
  onAddPost(){
    alert('post added!')
  }
}
