import { Component } from '@angular/core';

import { ActivityPage } from '../activity/activity';
import { SuggestionPage } from '../suggestion/suggestion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages

  tab1Root: any = ActivityPage;
  tab2Root: any = SuggestionPage;
  constructor() {

  }
}
