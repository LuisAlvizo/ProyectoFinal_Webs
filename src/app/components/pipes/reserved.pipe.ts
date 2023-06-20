import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "reversed" })
export class ReverseStr implements PipeTransform {
    //toma el valor de tipo string
  transform(value: string): string {
    //se declara una variable tipo string para almacenar la nueva palabra
    let newStr: string = "";
    //se declara un bucle de manera inversa para ir asignando las palabras al revés
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }
}