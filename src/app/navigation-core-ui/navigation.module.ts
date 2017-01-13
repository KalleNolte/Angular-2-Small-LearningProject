import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Page404Component } from '../shared/page404/page404.component';

import { NoteModule } from '../application-components/notes/note.module'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { routing } from './navigation.routing';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    NoteModule,
    routing
  ],
  declarations: [
    ToolbarComponent,
    Page404Component
  ],
  exports: [
    ToolbarComponent
  ]
})
export class NavigationModule { }
