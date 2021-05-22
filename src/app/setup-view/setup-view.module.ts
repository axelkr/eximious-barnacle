import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SetupViewRoutingModule } from './setup-view-routing.module';
import { MenuModule } from '../menu/menu.module';

import { SetupViewComponent } from './setup-view.component';
import { StateModelsComponent } from './state-models/state-models.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ContextCreateComponent } from './context-create/context-create.component';
import { SetupViewTitleComponent } from './setup-view-title/setup-view-title.component';

@NgModule({
  declarations: [StateModelsComponent, TopicCreateComponent, TopicSelectComponent,
    ProjectAddComponent, SetupViewComponent, ContextCreateComponent, SetupViewTitleComponent],
  imports: [
    CommonModule, FormsModule, SetupViewRoutingModule, MenuModule
  ],
  exports: [SetupViewComponent]
})
export class SetupViewModule { }
