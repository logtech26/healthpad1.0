import { Component, OnInit } from '@angular/core';
import { ProviderService } from './services/provider/provider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appcaremetric';
  providers: any[] = [];
   
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {}
   
}
