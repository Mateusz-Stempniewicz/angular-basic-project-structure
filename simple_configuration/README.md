# angular-basic-project-structure

![Xcactus](https://img.shields.io/badge/Company-Xcactus-ff00f4.svg)
![Intern](https://img.shields.io/badge/Level-Intern-brightgreen.svg)

![Angular](https://img.shields.io/badge/Angular-1.6.*-red.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Simple configuration

### Opis
Zawiera przykładowe taski dla budowy projektu. Projekt możemy uruchomić w trybie developerskim lub zbudować aplikację gotową do wrzucenia na produkcję. 

### Zależności
Do budowy projektu wykorzystałem [Gulpa](https://gulpjs.com/) + zewnętrzne pakiety do niego.
Pakiety zostały zainstalowane przy pomocy [npm'a](https://www.npmjs.com), ich wersje można znaleźć w pliku [package.json](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/blob/master/simple_configuration/frontend/package.json)

```Wskazówka: Przed rozpoczęciem pracy należy sprawdzić czy są to najnowsze wersje pakietów i czy ewentualnie nie zmieniło się ich API po aktualizacji.```

Wykorzystane zależności:
- [gulp](https://gulpjs.com/)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-connect](https://www.npmjs.com/package/gulp-connect)
- [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
- [gulp-flatten](https://www.npmjs.com/package/gulp-flatten)
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-rimraf](https://www.npmjs.com/package/gulp-rimraf)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-strip-debug](https://www.npmjs.com/package/gulp-strip-debug)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-util](https://www.npmjs.com/package/gulp-util)
- [run-sequence](https://www.npmjs.com/package/run-sequence)

### Zewnętrzne biblioteki
W projekcie zostały wykorzystane również:
- [RequireJS](http://requirejs.org/)
- [AngularJS](https://docs.angularjs.org/guide)
- [Bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)

### Uruchomienie projektu
1. Zainstaluj [Node + npm](https://nodejs.org/en/download/) 
2. Odpal konsolę i przejdź do katalogu ```simple_configuration_1\frontend\```
3. Uruchom polecenie ```npm install```. Polecenie zainstaluje wszystkie dodatkowe moduły i biblioteki zawarte w pliku package.json
4. Aplikację w trybie developerskim uruchomisz komendą ```gulp webserver```
5. Po odpaleniu aplikacji otwórz przeglądarkę i przejdź pod adress ```localhost:10090```

Projekt można również zbudować pod produkcję: ``` gulp build:production```

Przebudowanie projektu z ustawieniami produkcyjnymi nie uruchomi nam serwera lokalnego.

