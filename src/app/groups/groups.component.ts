import { Component, OnInit } from '@angular/core';
import { Group } from "../group";
import { GROUPS } from "../tempGroups";
import { Person } from "../person";
import { PEOPLE } from "../people";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups = GROUPS;
  people = PEOPLE;

  selectedGroup: Group;

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }

  constructor() { }

  ngOnInit() {
  }

}
