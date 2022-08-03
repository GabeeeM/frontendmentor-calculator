# React Calculator

## General Information
This is a calculator that I developed in react and bootstrapped with create react app, the design was taken from [frontend mentor](https://www.frontendmentor.io/challenges). This was the first
attempt I made at developing a webapp without any guidance after I felt like I had gotten a basic grasp on how to use react.


## Technologies Used
- React - version 18.0
- Tailwind - version 3.1.7

## Demo
![Usage Gif](https://github.com/GabeeeM/frontendmentor-calculator/blob/main/calc-demo.gif)

## Challenges and Room for Improvement
Since this was the first time I had tried to make a webapp with react on my own, I had a very slow start and did not make any progress for a while as I was trying to get used to using tailwind and 
developing in react without any guidance. One bug that had persisted was a crash that would occur after you pressed del after calculating an equation, to which I later discovered was due to attempting to use .split("")
on an integer. If I were to attempt this project again, I would not rely so heavily on the eval method and instead try to implement my own method of calculating a formula from a string.