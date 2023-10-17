import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AuthService } from './auth/auth.service';
import { AccessComponent } from './access/access.component';
import { MultipletabsComponent } from './multipletabs/multipletabs.component';
import { MenuComponent } from './menu/menu.component';
import { AutocomplteComponent } from './autocomplte/autocomplte.component';
import { CollapsiblecontentComponent } from './collapsiblecontent/collapsiblecontent.component';
import { ImagesComponent } from './images/images.component';
import { SliderComponent } from './slider/slider.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { PopupsComponent } from './popups/popups.component';
import { LinksComponent } from './links/links.component';
import { CssPropertiesComponent } from './css-properties/css-properties.component';
import { IframesComponent } from './iframes/iframes.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  // {path : "",redirectTo:"homepage"}
  {path : "",component:LoginPageComponent},
  {path : "forgot",component:ForgotpwdComponent,
  children :[{path : 'back',component:LoginPageComponent},
  ]},
  {path : "admin",component:AdminComponent},
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate:[AuthService],
    children: [
      {path :'home',component:HomeContentComponent},
      {path: '', component:HomeContentComponent},
      {path : "tabs",component:MultipletabsComponent},
      {path : "menu",component:MenuComponent},
      {path : "autocomplete",component:AutocomplteComponent},
      {path : "collapsible-content",component:CollapsiblecontentComponent},
      {path : "images",component:ImagesComponent},
      {path : "slider",component:SliderComponent},
      {path : "tooltips",component:TooltipsComponent},
      {path : "popups",component:PopupsComponent},
      {path : "links",component:LinksComponent},
      {path : "css-properties",component:CssPropertiesComponent},
      {path: 'iframes', component:IframesComponent},
      {path : 'update',component:UpdateComponent},
      {path : 'updated', component:SearchComponent},
      {path: 'create', component: CreateComponent,
      children:[
        {path : 'search', component:SearchComponent}
      ]  
    },
      { path: 'search', component: SearchComponent }]},
      {path : 'access-denied', component:AccessComponent,canActivate:[AuthService]},
      {path : "logout",component:LoginPageComponent},
      {path : "**",component:ErrorComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
