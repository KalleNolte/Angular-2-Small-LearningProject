import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNoteComponent } from './main-note/main-note.component';
import { NoteFormComponent } from './note-form/note-form.component';

    const routes: Routes =[
        {
            path: 'notes', component: MainNoteComponent,
        },
        {
            path: 'notes/form', component: NoteFormComponent
        }
    ]


export const routing: ModuleWithProviders = RouterModule.forChild(routes);