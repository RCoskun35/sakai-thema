import { Pipe, PipeTransform } from '@angular/core';
import { RelatedOrganization } from 'src/app/models/organization_model';

@Pipe({
  name: 'joinNames',
  standalone: true
})
export class JoinNamesPipe implements PipeTransform {

  transform(parents: RelatedOrganization[]): string {
    return parents.map(parent => '('+parent.id+')'+parent.name ).join('<br>');
  }

}
