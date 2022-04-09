import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUser';
import { Repositorios } from '../../models/repositorios';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  rep: Repositorios[] | any 

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser

      }

    )

    this.ghService.findRepositor(this.username).subscribe(
      (repositorios) => {
        this.rep = repositorios

             }

    ) 
  }

}
