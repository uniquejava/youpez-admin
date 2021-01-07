import {Component, OnInit} from '@angular/core'
import {SettingsService} from "../../services/settings.service"

@Component({
  selector: 'app-theme-settings',
  templateUrl: './app-theme-settings.component.html',
  styleUrls: ['./app-theme-settings.component.scss']
})
export class AppThemeSettingsComponent implements OnInit {


  public appThemes = [
    {
      name: 'white',
      theme: 'app-theme--white'
    },
    {
      name: 'light',
      theme: 'app-theme--light'
    }, {
      name: 'darker',
      theme: 'app-theme--darker'
    },
    {
      name: 'dark',
      theme: 'app-theme--dark'
    }
  ]

  public sideBarThemes = [
    {
      name: 'black',
      theme: 'app-theme-sidebar--black'
    },
    {
      name: 'dark-blue',
      theme: 'app-theme-sidebar--dark-blue'
    },
    {
      name: 'white',
      theme: 'app-theme-sidebar--white'
    },
    {
      name: 'blue',
      theme: 'app-theme-sidebar--blue'
    },
    {
      name: 'grey',
      theme: 'app-theme-sidebar--grey'
    },
    {
      name: 'gradient',
      theme: 'app-theme-sidebar--gradient'
    },
  ]

  public headerThemes = [
    {
      name: 'black',
      theme: 'app-theme-header--black'
    },
    {
      name: 'white',
      theme: 'app-theme-header--white'
    },
    {
      name: 'dark-blue',
      theme: 'app-theme-header--dark-blue'
    },
  ]

  constructor(private settingsService: SettingsService,) {
  }

  ngOnInit(): void {
  }

  changeThemeHelper(themes, name) {
    themes
      .filter(el => el.name !== name)
      .forEach(el => {
        this.settingsService.removeTheme(el.theme)
      })

    themes
      .filter(el => el.name === name)
      .forEach(el => {
        this.settingsService.setTheme(el.theme)
      })
  }


  onSetSideBarTheme(name) {
    this.changeThemeHelper(this.sideBarThemes, name)
  }

  onSetTheme(name) {
    this.changeThemeHelper(this.appThemes, name)
  }

  onSetHeaderTheme(name) {
    this.changeThemeHelper(this.headerThemes, name)
  }

  onChangeTheme(name) {
    if (name === 'light') {
      this.settingsService.loadLightTheme()
    }
    if (name === 'dark') {
      this.settingsService.loadDarkTheme()
    }
  }

}
