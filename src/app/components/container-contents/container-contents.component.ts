import { Component } from '@angular/core';
import { Container} from '../../container'
import { ContainerService } from '../../services/container.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container-contents',
  templateUrl: './container-contents.component.html',
  styleUrl: './container-contents.component.css'
})
export class ContainerContentsComponent {
  contentsId?: string | null;
  contentsIdNumber!: number;
  containerContents?: Container;

  constructor(private activatedRoute: ActivatedRoute, private containerService: ContainerService) {}

  //Initiazling the individual container's data by
  //getting id from the route parameter, 
  //convert it from string to number 
  //and use it give out the data related to that id by subscribing to the observable
  //pass the id to the data parameter of the function
  ngOnInit(): void {
    this.contentsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.contentsIdNumber = +this.contentsId!;

    this.containerService.getContainersHttp().subscribe((data: any) => {
      this.containerContents = data[this.contentsIdNumber]
    });
  }
}
