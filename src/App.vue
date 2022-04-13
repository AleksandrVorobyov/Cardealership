<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --white: #fff;
  --black: #000;
  --red: #ca0100;
  --redActive: #d90022;
  --redWithWhite: #ff8181;
  --green: #55bc6b;
  --blackMain: #262626;
  --black100: #595d60;
  --gray: #737373;
  --gray100: #adadb0;
  --gray200: #e1e1e1;
  --gray400: #eff0f0;
  --black100: #595d60;
  --grayBorder: #c2c2c4;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto";
  color: var(--black);
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
}

body.hidden {
  overflow: hidden;
}

input,
textarea {
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
  -webkit-appearance: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
}

.big-container {
  max-width: 1900px;
  padding: 0 15px;
  margin: 0 auto;
}

.container {
  max-width: 1430px;
  padding: 0 15px;
  margin: 0 auto;
}

.display-block {
  display: block;
}

.relative {
  position: relative;
}

@media (max-width: 1170px) {
  .animated {
    animation: none;
  }

  .wow {
    animation: none;
  }
}

img {
  pointer-events: none;
}

.btn-shiny-anim {
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: var(--white);
    animation: shinyBtn1 4s ease-in-out infinite;
    filter: blur(1px);
  }

  &:hover::before {
    animation: none;
  }
}

@keyframes shinyBtn1 {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}
</style>
