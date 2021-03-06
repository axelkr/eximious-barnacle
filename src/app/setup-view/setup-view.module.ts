import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SetupViewRoutingModule } from './setup-view-routing.module';
import { MenuModule } from '../menu/menu.module';

import { SetupViewComponent } from './setup-view.component';
import { FocusComponent } from './focus/focus.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ContextCreateComponent } from './context-create/context-create.component';
import { SetupViewMenuComponent } from './setup-view-menu/setup-view-menu.component';
import { SetupStateModelComponent } from './setup-state-model/setup-state-model.component';

@NgModule({
  declarations: [FocusComponent, TopicCreateComponent, TopicSelectComponent,
    ProjectAddComponent, SetupViewComponent, ContextCreateComponent, SetupViewMenuComponent, SetupStateModelComponent],
  imports: [
    CommonModule, FormsModule, SetupViewRoutingModule, MenuModule
  ],
  exports: [SetupViewComponent]
})
export class SetupViewModule { }
