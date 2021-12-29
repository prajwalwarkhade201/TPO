import { Component, OnInit } from '@angular/core';
     
import { HttpClient, HttpContext } from '@angular/common/http'
import { Router } from '@angular/router';

import { AngularFireStorage } from '@angular/fire/compat/storage';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  resumefile: any;

  constructor(
   private http:HttpClient,
   private route :Router,
   private firebase : AngularFireStorage
  ) { }


  uploadImage(image){
      console.log(image[0]);

      this.resumefile = image[0];
      
  }



  Uploadfile(){
    // this.http.post("https://newtpo-ed541-default-rtdb.firebaseio.com/Files.json", this.resumefile );

    this.firebase.upload('resume'+ "/"+ this.resumefile.name,this.resumefile);
    console.log("file Staorage");


   
    
  }

  submitForm(studentData: any) {
    console.log(studentData.value);

    studentData.value.upload_resume = this.resumefile;

    console.log(studentData.value);
    
    this.Uploadfile();
  
    this.http.post('https://newtpo-ed541-default-rtdb.firebaseio.com/Students.json',studentData.value).subscribe(
      data=>{
        console.log(data);
        if (data) {
          studentData.reset();
          this.route.navigate(['Profile']);
        

        }
        
      },
      err=>{
        console.log(err);
        
      }
      
    )

    


    // this.provideFirestore.list('/Students').push(studentData.value)
    // .then((val:any)=>{
    //   console.log(val);
      

    // })
    // .catch(err=>{ 
    //   console.log(err);
      
    // })
    
  }


}
