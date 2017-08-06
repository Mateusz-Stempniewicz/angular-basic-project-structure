# angular-basic-project-structure

![Xcactus](https://img.shields.io/badge/Company-Xcactus-ff00f4.svg)
![Intern](https://img.shields.io/badge/Level-Intern-brightgreen.svg)

![Angular](https://img.shields.io/badge/Angular-1.6.*-red.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Repozytorium zawiera podstawową strukturę katalogów dla projektów opartych o AngularJS.

- [./backend/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/backend) - katalog dla części serwerowej projektu. Dużo lepszym rozwiązaniem może być wydzielenie części serwerowej do osobnego     repozytorium, przy takim założeniu ten folder jest zbędny.

- [./frontend/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend) - zawiera aplikację kliencką.

- [./frontend/gulp/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/gulp) - zawiera pliki z taskami do budowania projektu

- [./frontend/app/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/app) - zawiera projekt

- [./frontend/app/config/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/app/config) - zawiera pliki konfiguracyjne części klienckiej. 
    Najczęściej różne pliki są wykorzystywane dla różnych środowisk, np. inna konfiguracja będzie dla środowiska developerskiego, 
    inna dla środowiska testowego i jeszcze inna dla środowiska produkcyjnego.
    
- [./frontend/app/html/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/app/html) - zawiera szablony widoków napisane w HTML

- [./frontend/app/js/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/app/js) - zawiera moduły, kontrollery, servisy, dyrektywy angulara tworzące logikę naszej aplikacji

- [./frontend/app/resources/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/app/resources) - zawiera dodatkowe zasoby, np. czcionki, grafiki

- [./frontend/app/sass/](https://github.com/Mateusz-Stempniewicz/angular-basic-project-structure/tree/master/frontend/app/sass) - zawiera arkusze stylów dla naszej aplikacji, jeśli u projekcie chcemy użyć LESS'a warto zmienić nazwę na less
