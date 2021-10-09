import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SocialNavComponent } from './nav/social-nav/social-nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SliderAreaComponent } from './home/slider-area/slider-area.component';
import { ServicesAreaComponent } from './services-area/services-area.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    SocialNavComponent,
    AboutUsComponent,
    SliderAreaComponent,
    ServicesAreaComponent,
    MapsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '763824783116-ufs1pflejasvpuplf9iet5tvr9332onu.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
