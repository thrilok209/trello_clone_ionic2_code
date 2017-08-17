import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TaskcompletedPage } from '../taskcompleted/taskcompleted';
import { TaskpendingPage } from '../taskpending/taskpending';
import { SettingsPage } from '../settings/settings';
import { NeedsubPage } from '../needsub/needsub';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TaskcompletedPage;
  tab3Root: any = TaskpendingPage;
  tab5Root: any = NeedsubPage;
  tab4Root: any = SettingsPage;

  constructor() {

  }
}
