import { Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    { path: '', component: BioComponent },
    { path: 'bio', component: BioComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact-me', component: ContactMeComponent },
];
