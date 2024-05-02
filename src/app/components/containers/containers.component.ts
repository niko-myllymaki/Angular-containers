import { Component, OnInit} from '@angular/core';
import { ContainerService } from '../../services/container.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.css'
})
export class ContainersComponent implements OnInit {
  containers!: Observable<{ id: number, contents: Array<String>, proprietor: string }[]>

  constructor(private containerService: ContainerService) {}

  //Initialize all the containers and show them on the page. 
  //Check containers.component.html for logic
  ngOnInit(): void {
    this.containers = this.containerService.getContainersHttp();
  }

}
