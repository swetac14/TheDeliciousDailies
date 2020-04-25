import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheDeliciousDailies';
  compCalled = '';

  navigateToComp(navigationData: { componentCalled: string }) {
    this.compCalled = navigationData.componentCalled;
   // alert(navigationData.componentCalled);
    //console.log(navigationData.componentCalled);
  }


}
