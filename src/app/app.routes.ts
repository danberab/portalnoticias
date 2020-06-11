import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { NotesComponent} from './components/notes/notes.component';
import { LoginComponent} from './components/login/login.component';
import { ComentsComponent} from './components/coments/coments.component';

const app_routes: Routes =[
    {path: 'login', component: LoginComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'notes/:id', component: ComentsComponent},
    {path: 'coments', component: ComentsComponent},
    {path: 'coments/:id', component: ComentsComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);