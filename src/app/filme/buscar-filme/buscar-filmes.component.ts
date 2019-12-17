import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Search } from '../search';
import { Filme } from '../filme';
import { FilmeService } from '../filme-service';


@Component({
  selector: 'app-buscar-filmes',
  templateUrl: './buscar-filmes.component.html',
  styleUrls: ['./buscar-filmes.component.css']
})
export class BuscarFilmesComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  displayedColumns = ['titulo', 'type', 'poster', 'acao'];
  public rows:Array<Search> = [];
  public search: Search[];
  public filme: Filme[];
  public errorMessage: string = "";
  public errors: any[] = [];
  public form: FormGroup;
  public nome: string;

  constructor(private fb: FormBuilder, private filmeService: FilmeService) { }

  ngOnInit() {
    
    this.form = this.fb.group({
      busca:['', [Validators.required,]],
      data:['']
    });

   

  } 

   buscarFilme(): void{
    if(this.form.dirty && this.form){
      let p = Object.assign({}, this.form.value);
      this.nome = p.busca;
      this.filmeService.getBuscarFilme(p.busca).then(data => {
          this.filme = data;
      },
        error => 
        {
          this.errors = error.errors;
          console.log(this.errors);
        } 
      );
    }
  }

}
