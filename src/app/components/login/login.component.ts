import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'login',
    templateUrl: './login.html',
})

export class LoginComponent{
    usuario={
        id:'',
        tipo:'',
        personal_id:'',
        usuario:'',
        contrasenia:''
    }

    constructor(private http: HttpClient){

    }

    login(){
        this.http.post<any>('http://localhost:3000/login',
            this.usuario, 
            {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        ).subscribe({
            next: data =>{
                this.usuario=data;
                localStorage.setItem('session', JSON.stringify(data));
                window.location.href='/notes';
            }, 
            error: error => 
                console.error('There was an error!', error)
        });
    }



}