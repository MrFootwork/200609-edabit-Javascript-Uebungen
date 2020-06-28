# 200609-edabit-Javascript-Übungen

In order to practise coding in JavaScript I am doing a lot of coding challenges on edabit.
Here is my collection of all my solutions.

```
const recompose = (string) =>
  string
    .split(/([aeiou]+)/gi)
    .map((group) => [ ...group ].reverse().join(''))
    .join('')
    .replace(/([A-Z])/g, ' $1')
```

Sieht sehr schön aus! ❤️
