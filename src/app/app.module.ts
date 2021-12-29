import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { HttpClientModule} from '@angular/common/http'

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';        
import { getStorage, provideStorage } from '@angular/fire/storage';     




import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config = {
  apiKey: "AIzaSyCYSymZASROeS-1_83SwJy1qL2p-q3z_mw",
  authDomain: "newtpo-ed541.firebaseapp.com",
  databaseURL: "https://newtpo-ed541-default-rtdb.firebaseio.com",
  projectId: "newtpo-ed541",
  storageBucket: "newtpo-ed541.appspot.com",
  messagingSenderId: "611697932479",
  appId: "1:611697932479:web:b559f2674924e92ed26e0a",
  measurementId: "G-NKQW3XK977"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(config)),     
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage()),  
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(config) ,
 
  
  
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
