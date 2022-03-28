# ytimg-to-imgur
Jest to bardzo proste narzędzie służące do automatycznego wrzucania miniaturek z YouTube na hosting zdjęć Imgur!

### Jak to skonfigurować?
To proste! Pierwsze czego potrzebujesz to **Node.JS** oraz **npm**. Po pobraniu kodu, wpisujesz w konsoli `npm i` - zainstaluje Ci to wszystkie moduły używane przez program (ich listę znajdziesz niżej). Kolejnym krokiem jest [stworzenie swojej aplikacji na Imgurze](https://api.imgur.com/oauth2/addclient) - da Ci to `CLIENT_ID` i `CLIENT_SECRET`. Dalej stwórz plik `.env` w którym podasz `CLIENT_ID` i `CLIENT_SECRET` w podanym formacie:
```
CLIENT_ID = <twoje_id>
CLIENT_SECRET = <twoj_token>
```
Czy to tyle? Tak!

### Jak tego użyć?
Znajdując się w folderze otwórz cmd i wpisz `node .` aby uruchomić program.
Program zapyta Cię o link do filmu, musisz go podać.
I to tyle, jeśli cała konfiguracja przeszła prawidłowo, program powinien zwrócić Ci link ze zdjęciem.

#### Używane biblioteki npm:
- `imgur`
- `tslib` (bez tego `imgur` nie działał)
- `dotenv`
