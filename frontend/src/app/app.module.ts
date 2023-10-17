import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
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
import {MatTabsModule} from '@angular/material/tabs';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ErrorComponent,
    HomepageComponent,
    CreateComponent,
    SearchComponent,
    UpdateComponent,
    HomeContentComponent,
    AccessComponent,
    MultipletabsComponent,
    MenuComponent,
    AutocomplteComponent,
    CollapsiblecontentComponent,
    ImagesComponent,
    SliderComponent,
    TooltipsComponent,
    PopupsComponent,
    LinksComponent,
    CssPropertiesComponent,
    IframesComponent,
    ForgotpwdComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,MatTabsModule,MdbAccordionModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
