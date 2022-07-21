import { Component, OnInit } from '@angular/core';
import { MatSnackBar, VERSION } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

export interface Font {
  /**
   * The class (as in CSS classes)
   */
  fontClass: string;
  /**
   * The name of the font
   */
  name: string;
  /**
   * Whether the font is open-sourced
   */
  isOpenSource: boolean;
}
export declare type FontClass = 'font-droid-sans' | 'font-google-sans' | 'font-lato' | 'font-montserrat' | 'font-open-sans' | 'font-oswald' | 'font-roboto' | 'font-roboto-condensed' | 'font-work-sans';
@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  version = VERSION;
  fonts: Font[] = [
    {
      fontClass: 'font-droid-sans',
      name: 'Droid Sans',
      isOpenSource: true
    },
    {
      fontClass: 'font-google-sans',
      name: 'Google Sans',
      isOpenSource: false
    },
    {
      fontClass: 'font-lato',
      name: 'Lato',
      isOpenSource: true
    },
    {
      fontClass: 'font-montserrat',
      name: 'Montserrat',
      isOpenSource: true
    },
    {
      fontClass: 'font-open-sans',
      name: 'Open Sans',
      isOpenSource: true
    },
    {
      fontClass: 'font-oswald',
      name: 'Oswald',
      isOpenSource: true
    },
    {
      fontClass: 'font-roboto',
      name: 'Roboto',
      isOpenSource: true
    },
    {
      fontClass: 'font-roboto-condensed',
      name: 'Roboto Condensed',
      isOpenSource: true
    },
    {
      fontClass: 'font-work-sans',
      name: 'Work Sans',
      isOpenSource: true
    }
  ]
  defaultFont: Font = {
    fontClass: 'font-roboto',
    name: 'Roboto',
    isOpenSource: true
  };
  /**
   * An array of font classes
   */
  fontClasses = this.fonts.map(font => font.fontClass);
  /**
   * A raw array of font class
   * (Aka without the `font-` prefix)
   */
  fontClassesRaw = this.fontClasses.map(font => {
    return font.replace(new RegExp('^font-'), '');
  })
  /**
   * Lorem ipsum placeholder text
   */
  loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu risus non lectus efficitur consectetur in eu leo. In placerat lacinia urna quis tincidunt. Praesent hendrerit tempus nisl a vestibulum. Mauris eu fermentum lorem. Nam tellus nisi, pulvinar non orci vel, ullamcorper tempor turpis. Donec mollis, odio vitae commodo efficitur, sem augue finibus odio, quis porttitor tellus nisl vel eros. Morbi sit amet nunc metus. Nam fringilla sit amet eros quis elementum. Nulla nulla mauris, mollis in gravida sit amet, volutpat sed eros. In purus ligula, varius vitae efficitur a, tristique vel metus. Nunc ultrices ornare neque, nec efficitur lectus accumsan quis.';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    // By default, add the 'font-roboto' class
    // this._addClass('font-roboto');
    if (this.getParameterByName('font')) {
      let fontParam = this.getParameterByName('font');
      // console.log(this.getParameterByName('font'));
      if (this.fontClasses.indexOf(fontParam) > -1) {
        this.applyFontClass(fontParam as FontClass);
      } else if (['google-sans', 'lato', 'montserrat', 'open-sans', 'oswald', 'roboto'].indexOf(fontParam) > -1) {
        this.applyFontClass(`font-${fontParam}` as FontClass);
      } else {
        console.warn('Font query parameter is invalid!');
      }
    } else {
      this.applyFont(this.defaultFont);
    }
  }
  /**
   * Gets a query parameter by its name
   * @returns The parameter's property
   */
  getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  /**
   * Checks whether a font class is applied to the document's body
   */
  isFontClassApplied(fontClass: FontClass): boolean {
    return this._containsClass(fontClass);
  }
  /**
   * Removes a class from the document body's classList
   * @param className The class to remove
   */
  private _removeClass(className: string) {
    document.body.classList.remove(className);
  }
  /**
   * Checks whether the document's body contains a class
   * @param className the class to check
   * @returns A boolean - true if the document's body does contain the class, false if it doesn't
   */
  private _containsClass(className: string): boolean {
    return document.body.classList.contains(className);
  }
  /**
   * Adds an array of classes to the document's body
   * @param classes The array of classes
   */
  private _addClasses(classes: string[]) {
    for (let i = 0; i < classes.length; i++) {
      document.body.classList.add(classes[i]);
    }
  }
  /**
   * Adds a class to the document's body
   * @param className The class to add
   */
  private _addClass(className: string) {
    document.body.classList.add(className);
  }
  /**
   * Removes all font classes except the font class passed in as an argument
   * @param fontClass The font class to not be removed
   */
  private _removeFontClasses(fontClass: FontClass) {
    for (let i = 0; i < this.fontClasses.length; i++) {
      if (this.fontClasses[i] !== fontClass) {
        if (this._containsClass(this.fontClasses[i])) {
          this._removeClass(this.fontClasses[i]);
        }
      }
    }
  }
  /**
   * Resets the font class to the default
   */
  resetFontClass() {
    this.applyFont(this.defaultFont);
  }
  /**
   * Applies a font
   * @param font The font to apply to the document body
   */
  applyFont(font: Font) {
    this._removeFontClasses(font.fontClass as FontClass);
    if (!this._containsClass(font.fontClass)) {
      this._addClass(font.fontClass);
    }

    this.snackBar.open(`Successfully set font to ${font.name}!`, null, { duration: 3000 });
  }
  /**
   * Applies a font class.
   * @param fontClass The font class to apply to the document body as a string.
   */
  applyFontClass(fontClass: FontClass | string) {
    this._removeFontClasses(fontClass as FontClass);
    if (!this._containsClass(fontClass)) {
      this._addClass(fontClass);
    }

    this.snackBar.open(`Successfully set font class to ${fontClass}!`, null, { duration: 3000 });
  }
}
