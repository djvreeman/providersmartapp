import {Component, OnInit} from '@angular/core';
import {SubjectDataService} from '../services/subject-data-service.service';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-social-concern-panel',
  templateUrl: './social-concern-panel.component.html',
  styleUrls: ['./social-concern-panel.component.css']
})

export class SocialConcernPanelComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  displayedColumns = ['name', 'data', 'date'];


  ngOnInit(): void {
  }

}
