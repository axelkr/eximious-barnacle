import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StateModelsComponent } from './state-models/state-models.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';

import { ProjectAddComponent } from './project-add/project-add.component';
import { SetupViewComponent } from './setup-view.component';

@NgModule({
  declarations: [StateModelsComponent, TopicCreateComponent, TopicSelectComponent,
    ProjectAddComponent, SetupViewComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [SetupViewComponent]
})
export class SetupViewModule { }
