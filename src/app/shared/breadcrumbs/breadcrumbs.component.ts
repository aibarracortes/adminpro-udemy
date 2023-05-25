import { Component } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {

  titulo: string;
  descripcion: string;

  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {
    
    this.getDataRoute()
    .subscribe( data => {
      console.log(data);
      this.titulo = data['titulo'];
      this.title.setTitle(this.titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: data['descripcion']
      };
      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( evento =>  (<ActivationEnd>evento).snapshot.firstChild === null),
      map( evento => (<ActivationEnd>evento).snapshot.data )
    );
  }

}
