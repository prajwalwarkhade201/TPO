import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';
import { TransferService } from '../services/transfer.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireList ,AngularFireDatabase } from '@angular/fire/compat/database';
import { asapScheduler } from 'rxjs';
import { computeMsgId } from '@angular/compiler';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  studentsData = [];
  PerticulrStudent :string;



  newStudent:any;

  name : any ; 
  email: any;
  phone: any;
  clgCollege: any;
  hscCollege: any;
  sscPassing: any;
  clgPassing: any;
  clgPercentage: any;
  hscPassing: any;
  hscPercentage: any;
  sscCollege: any;
  sscPercentage: any;
  additionalCourses: any;
  resume: any;
  newItem: any;
  downloadURL: string;

 


  constructor(
    private http:HttpClient,
    private service : TransferService,
    private afStorage: AngularFireStorage,
    private database :AngularFireDatabase

  ) {

   
    
  }

ngOnInit(): void {

 
this.afStorage.storage.ref().child('resume/').listAll().then(data=>{


  let dataList = data.items.pop();

  
  dataList.getDownloadURL().then(
    val=>{
      this.downloadURL = val;
    }
  )
  
  
// data.items[0].getDownloadURL().then(
//   val=>{
   
   
//     // console.log(val);

 

//       this.downloadURL = val;
   
//   }
// )



setTimeout(() => {
  console.log(this.downloadURL);
}, 2000);
  
})




    this.http.get('https://newtpo-ed541-default-rtdb.firebaseio.com/Students.json')
    .subscribe(
      (data:object)=>{
        this.studentsData  = Object.entries(data);


        let newStu = this.studentsData.pop();
        
       this.newStudent =  newStu[1];

       
          this.name = this.newStudent.f_Name;
          this.clgCollege = this.newStudent.cname;
          this.phone = this.newStudent.con_num;
          this.hscCollege = this.newStudent.cname_hsc;
          this.sscPassing = this.newStudent.yearpassing_ssc;
          this.clgPassing = this.newStudent.y_pass;
          this.email = this.newStudent.e_mail;
         this.clgPercentage = this.newStudent.percentage;
          this.hscPassing = this.newStudent.year_hsc;
         this.hscPercentage = this.newStudent.percentage_hsc;
          this.sscCollege = this.newStudent.cname_ssc;
         this.sscPercentage = this.newStudent.percentage_ssc;
        this.additionalCourses = this.newStudent.additionalc;
        this.resume=this.newStudent.upload_resume;
        
   
        
        
      },
      error=>{
        console.log(error);
        
      }
    )


    
    

}






}
