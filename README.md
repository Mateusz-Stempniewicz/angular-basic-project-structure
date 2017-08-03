# angular-basic-project-structure
Ropzytorium zawiera podstawową strukturę katalogów dla projektów opartych o AngularJS.

./backend - katalog dla części serwerowej projektu. Dużo lepszym rozwiązaniem może być wydzielenie części serwerowej do osobnego repozytorium, przy takim założeniu ten folder jest zbędny.

./frontend - zawiera aplikację kliencką.
  ./gulp - zawiera pliki z taskami do budowania projektu
  ./app - zawiera projekt
    ./config - zawiera pliki konfiguracyjne części klienckiej. Najczęściej różne pliki są wykorzystywane dla różnych środowisk, np. inna konfiguracja będzie dla środowiska developerskiego, inna dla środowiska testowego i jeszcze inna dla środowiska produkcyjnego.
    ./html - zawiera szablony widoków napisane w HTML
    ./js - zawiera moduły, kontrollery, servisy, dyrektywy angulara tworzące logikę naszej aplikacji
    ./resources - zawiera dodatkowe zasoby, np. czcionki, grafiki
    ./sass - zawiera arkusze stylów dla naszej aplikacji, jeśli u projekcie chcemy użyć LESS'a warto zmienić nazwę na less