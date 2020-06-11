import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'notes',
    templateUrl: './listado.html',
})

export class NotesComponent{
sesion ={
    id:'',
    personal_id:'',
    tipo:''
};
    
notes =[];
note = {
    id:'',
    nota:'',
    usuario_id:'',
    personal_id:'',
    tipo:''
};

  constructor(private http: HttpClient){
      this.sesion= JSON.parse(localStorage.getItem('session'))[0];
      if(this.sesion){
        this.note.personal_id=this.sesion.personal_id;
        this.note.usuario_id=this.sesion.id;
        this.note.tipo=this.sesion.tipo;
        this.getNotes();
      }else{
          window.location.href='/login';
      }
     

}


    getNotes(){
        this.http.post<any>('http://localhost:3000/allNotes',
            this.sesion, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.notes=data.resNotes;
            }, 
            error: error => 
                console.error('There was an error!', error)
        });

    }

    register(){
        this.http.post<any>('http://localhost:3000/registerNote',
            this.note, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
               this.getNotes();
            }, 
            error: error => 
                console.error('There was an error!', error)
        });

    }

   

    

    




}
