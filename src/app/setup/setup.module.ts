import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StateModelsComponent } from './state-models/state-models.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';

import { HeijunkaDefinitionComponent } from './heijunka-definition/heijunka-definition.component';
import { ProjectAddComponent } from './project-add/project-add.component';

@NgModule({
  declarations: [StateModelsComponent,TopicCreateComponent,TopicSelectComponent,HeijunkaDefinitionComponent,ProjectAddComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [HeijunkaDefinitionComponent]
})
export class SetupModule { }
