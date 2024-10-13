import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExamplesComponent } from './examples/examples.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, 
    {path:'bio', component:BioComponent},
    {path:'skills', component:SkillsComponent},
    {path:'examples', component:ExamplesComponent},
    {path:'contact-me', component:ContactMeComponent},
];
