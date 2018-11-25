import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-affix',
  templateUrl: './list-affix.component.html',
  styleUrls: ['./list-affix.component.css']
})
export class ListAffixComponent implements OnInit {

  listAffixDS: any;
  listAffixDC = ['no', 'name', 'hp', 'pp', 'sAtk', 'rAtk', 'tAtk', 'sDef', 'rDef', 'tDef', 'dex'];

  constructor() {
    const mockData = [
      {
        id: '001',
        name: 'Astral Soul',
        hp: '35',
        pp: '35',
        sAtk: '35',
        rAtk: '35',
        tAtk: '35',
        sDef: '35',
        rDef: '35',
        tDef: '35',
        dex: '35'
      },
      {
        id: '002',
        name: 'Ether Factor',
        hp: '10',
        pp: '6',
        sAtk: '30',
        rAtk: '30',
        tAtk: '30',
        sDef: '30',
        rDef: '30',
        tDef: '30',
        dex: '30'
      },
      {
        id: '003',
        name: 'Returner V',
        hp: '30',
        pp: '5',
        sAtk: '30',
        rAtk: '30',
        tAtk: '30',
        sDef: '30',
        rDef: '30',
        tDef: '30',
        dex: '30'
      },
    ];
    this.listAffixDS = new MatTableDataSource(mockData);
  }

  ngOnInit() {
  }

}
