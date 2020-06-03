import { Component } from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component
({
selector: 'app-property-card',
templateUrl: 'Property-Card.Componet.html',
styleUrls: ['Property-Card.Compnet.css']
})
export class PropertyCardComponent
{
  Property: any = {
  id: 1,
  Type: 'MY  House',
  Price: 12000
  };
}
