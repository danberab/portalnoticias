import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'ComentsComponent',
    templateUrl: './coment.html',
})

export class ComentsComponent{
    sesion ={
        id:'',
        personal_id:'',
        usuario:''
    };

    id='';
        
    notes =[];
    note = {
        id:'',
        nota:'',
        usuario_id:'',
        nombre:''
    };

    coment ={
        id:'',
        comentario:'',
        fecha_emision:'',
        nota_id:'',
        usuario_id:''
    };

    coments=[];
    responses=[];

    my_response={
        id:'',
        respuesta:'',
        fecha_emision:'',
        comentario_id:''
    }
    
      constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
        this.activatedRoute.params.subscribe(params => {
          this.id = params.id;
        });

          this.sesion= JSON.parse(localStorage.getItem('session'))[0];
          if(this.sesion){
            this.note.usuario_id=this.sesion.id;
            this.note.nombre=this.sesion.usuario;
            this.addComent();
          }else{
              window.location.href='/notes';
          }
          
    }

    addComent(){
        this.http.post<any>('http://localhost:3000/addComent',
            {id:this.id}, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.note=data.resNotes[0];
            }, 
            error: error => 
                console.error('There was an error!', error)
        });

      this.getComents();
    }

    getComents(){
        this.http.post<any>('http://localhost:3000/showComents',
            {id:this.id}, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.coments=data.resComents;
            }, 
            error: error => 
                console.error('There was an error!', error)
        });
    }

    register(){
        this.coment.nota_id=this.id;
        this.coment.usuario_id=this.sesion.id;
        this.http.post<any>('http://localhost:3000/registerComent',
            this.coment, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.coments=data.resComents;
            }, 
            error: error => 
                console.error('There was an error!', error)
        });
        this.getComents();
        this.coment.comentario='';

    }

    showResponses(comentId){
        this.http.post<any>('http://localhost:3000/showResponses',
            {comentId}, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.responses = data.resResponses;
            }, 
            error: error => 
                console.error('There was an error!', error)
        });
        this.getComents();
        this.coment.comentario='';

    }

    registerResponse(comentId){
        this.my_response.comentario_id=comentId;

        this.http.post<any>('http://localhost:3000/registerResponse',
            this.my_response, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.responses = data.resResponses;
            }, 
            error: error => 
                console.error('There was an error!', error)
        });
        this.getComents();
        this.my_response.respuesta='';

    }

    

}