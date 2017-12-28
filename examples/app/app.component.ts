import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { TranslateService } from '@ngx-translate/core';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";

export const AppTranslations = {
  en: {
    'en': 'English',
    'ru': 'Русский',
    'EXAMPLES.WITHOUT_SOURCE_FILES': 'Without source files',
    'EXAMPLES.WITH_SOURCE_FILES': 'With source files',
    'EXAMPLES.PROGRESS_STATE': 'Progress state',
    'EXAMPLES.PROGRESS': 'Progress',
    'EXAMPLES.DOCS_LIST': 'Composites list',
    'EXAMPLES.UPLOAD': 'Upload documents'
  },
  ru: {
    'en': 'English',
    'ru': 'Русский',
    'EXAMPLES.WITHOUT_SOURCE_FILES': 'Без исходных файлов',
    'EXAMPLES.WITH_SOURCE_FILES': 'С исходными файлами',
    'EXAMPLES.PROGRESS_STATE': 'Состояние загрузки или обработки',
    'EXAMPLES.PROGRESS': 'Загрузка или обработка',
    'EXAMPLES.DOCS_LIST': 'Список документов',
    'EXAMPLES.UPLOAD': 'Загрузить документы'
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listIndex: number = 0;
  public themes: Theme[];
  public selectedTheme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Composite';
  public url: string;
  public langs: string[] = [];
  public selectedLang: string = 'en';

  public list: any[] = [
    {
      name: 'Composite view', id: 'composite', route: 'composite'
    },
    {
      name: 'Composite Edit', id: 'composite_edit', route: 'composite_edit'
    },
    {
      name: 'Checklist', id: 'checklist', route: 'checklist'
    }
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private themeService: PipThemesService,
    private router: Router,
    public media: ObservableMedia,
    private translate: TranslateService
  ) {
    this.selectedTheme = this.themeService.selectedTheme;
    this.themes = this.themeService.themes;

    translate.setDefaultLang(this.selectedLang);
    translate.use(this.selectedLang);
    this.langs = translate.getLangs();
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs' ? true : false;
      this.mode = change && change.mqAlias == 'xs' ? null : 'side';
    })

    router.events.subscribe((url: any) => {

      if (url.url && url.url != this.url) {
        this.url = url.url;
        this.listIndex = this.list.findIndex((item) => {
          return "/" + item.route == this.url;
        })

        this.listIndex = this.listIndex == -1 ? 0 : this.listIndex;
      }
    });

  }

  public ngOnInit() { }

  public ngAfterViewInit() { }

  public onListItemIndexChanged(index: number) {

    this.listIndex = index;
    this.sidenav.close();
  }

  public changeTheme(theme) {
    this.selectedTheme = theme;
    this.themeService.selectedTheme = theme;
  }

  public changeLanguage(lang) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

}
