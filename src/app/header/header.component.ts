import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  collapsed = true;
  @Output('navigateTo') navigateToComponent = new EventEmitter<{ componentCalled: string }>();


  callRecipes() {
   // alert("recipes");
    this.navigateToComponent.emit({
      componentCalled: "recipes"
    });
  }
  callShoppingList() {
    //alert("shopping list");
    this.navigateToComponent.emit({
      componentCalled: "shopping-list"
    });
  }


}
