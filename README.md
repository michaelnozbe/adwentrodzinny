# AdwentRodzinny.pl

Strona adwentowa stworzona przez [Michała Śliwińskiego](https://michael.team) we współpracy z rodzinami ze Wspólnoty Rodzin Świętego Maksymiliana przy klasztorze Franciszkanów w Gdyni. [Tuataj autorzy inicjatywy i współpracujący rodzice](https://adwentrodzinny.pl/onas/).

## Blog, który codziennie ładuje wpis z danego dnia

Cała technologia to strony statyczne na Jekyllu, oparte na GitHubie i hostowane za darmo na GitHub Pages.

Wpis na każdy dzień adwentu to odpowiednio sformatowany blog post:

`YYYY-MM-DD-YYMMDD.md`

Czyli rok, miesiąc i dzień po czym rok miesiąc i dzień pisane bardziej kompaktowo.

Każdy wpis jest formatowany w [Markdown](https://michael.team/markdown), gdzie ma tytuł "#" i potem treść. Czasami okraszoną zdjęciem (z pixabay.com lub Dall-e) lub embedowanym video.

Oprócz tego używamy listy mailingowej opartej o platformę GetResponse.

## Najważniejsze podstrony:

- [strona główna](https://adwentrodzinny.pl/)
- [lista wpisów](https://adwentrodzinny.pl/lista/)
- i potem pozostałe podstronki, typu "o nas", "wieniec" i takie tam…  

## Strona główna ładuje aktualny dzień

Czyli generalnie sprawdza datę dzisiejszą w formacie YYMMDD i potem ładuje wpis za pomocą funkcji JavaScript: `getDay()`, który jest w pliku `js/scripts.js`

Jeśli nie ma adwentu, zamieniamy stronę główną na tą stronę która się nazywa `index-before` - tam jest licznik dni do następnego adwentu, ze skryptu `js/counter.js`

Aby załadować konkretny dzień na stronie głównej, inny niż dzień aktualny, wystarczy podać zmienną `?d=YYMMDD` do adresu i podać dzień, który chcemy załadować.

## Strona wpisów

Strona wpisów pokazuje listę wpisów na dany rok adwentowy. Aby działała poprawnie, trzeba:

- dodać wszystkie wpisy na nowy rok - mogą być na początku puste, wystarczy aby każdy wpis miał swój tytuł
- zaktualizować zmienną "zisyear" na aktualny rok

Dodatkowo po odpaleniu się tej strony uruchamiany jest skrypt `getList()`, który sprawdza, aktualny dzień i dodaje aktywne odnośniki do wszystkich dni, które już minęły, aby czytelnicy mogli wrócić do jakiś dni, których na przykład nie zdążyli zrobić.

Aby zobaczyć odnośniki do wszystkich dni, aby na przykład sprawdzić czy są te dni dobrze sformatowane, wystarczy dodać do adresu zmienną `?d=test` i wtedy każdy wpis będzie miał swój link.

## Co należy zrobić, aby odpalić kalendarz na nowy rok:

- Przygotować tytuły wpisów na każdy dzień i zrobić puste wpisy z tymi tytułami
- Uzupełnić wpisy tak, aby były gotowe na czas
- Zmienić rok na nowy w `lista.md`, stare na `listaXX.md`
- W pierwszą niedzielę adwentu zmienić `index.md` na treść z `index-advent.md`
- Sprawdzić wszystkie wpisy na liście wpisów - jak się wczytują, jakie mają treści, itd. 
- Gotowe - adwent może ruszać!

## Powiadomienia mailowe codzienne

- Wysłać mailing w piątek przed adwentem
- Przygotować mailingi na każdy dzień adwentu aby startowały około 6 rano - `12:12 EST NYC`

## Co zrobić po adwencie?

- w `counter.js` zmienić pierwszą linijkę na datę adwentu za rok
- zamienić `index.md` na treść z `index-before.md`
- wysłać ostatni mailing z życzeniami noworocznymi i podziękowaniem za wspólną zabawę

## Automatyzacja

- [Skrót Siri do kopiowania lub dodawania wpisów](https://www.icloud.com/shortcuts/11627d7185eb4c6eac7a2a8a790e0b79)