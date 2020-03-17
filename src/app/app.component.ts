import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Array Types
  tableData: any[] = [];

  // Variable
  title: string = '';
  url: string = '';
  created_at: string = '';
  author: string = '';

  searchedText: string = '';

  constructor(private service: GetdataService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getData();
  }

  // To get Table Data
  getData() {
    this.service.getData().subscribe(data =>{
      this.tableData = data['hits'];
      console.log(this.tableData);  
    })
  }

  open(item: any,content) {

    this.title = item.title;
    this.url = item.url;
    this.created_at = item.created_at;
    this.author = item.author;

    this.modalService.open(content);
  }

  searchText(event) {
    console.log(event.target.value);
    this.searchedText = event.target.value;
  }
}
