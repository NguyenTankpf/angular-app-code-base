import { Component, OnInit } from '@angular/core';
import { Project } from '@app/core/models/project.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
