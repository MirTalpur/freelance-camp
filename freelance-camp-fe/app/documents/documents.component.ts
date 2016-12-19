import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent{
  pageTitle: string = "Documents Dashboard"
  
  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'aldkfjs aljksdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.policygenius.com/blog/library/uploads/2015/07/Freelancer-Liability-Featured.png'
    },
    {
      title: "My Second Doc",
      description: 'aldkfjs aljksdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.policygenius.com/blog/library/uploads/2015/07/Freelancer-Liability-Featured.png'
    },
    {
      title: "My last Doc",
      description: 'aldkfjs aljksdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.policygenius.com/blog/library/uploads/2015/07/Freelancer-Liability-Featured.png'
    }
  ]
}