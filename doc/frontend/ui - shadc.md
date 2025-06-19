# Dokumentacja: Generowanie komend w shadc

Poniżej znajdują się podstawowe komendy służące do generowania komend w narzędziu `shadc`:

- `shadc generate <nazwa_komendy>`  
   Generuje szkielet nowej komendy o podanej nazwie.

- `shadc list`  
   Wyświetla listę dostępnych komend.

- `shadc help <nazwa_komendy>`  
   Wyświetla pomoc dotyczącą wybranej komendy.

- `shadc remove <nazwa_komendy>`  
   Usuwa wskazaną komendę.

## Przykład użycia

```bash
# Generowanie nowej komendy o nazwie "deploy"
shadc generate deploy

# Wyświetlanie listy wszystkich komend
shadc list

# Uzyskiwanie pomocy dla komendy "deploy"
shadc help deploy

# Usuwanie komendy "deploy"
shadc remove deploy
```
