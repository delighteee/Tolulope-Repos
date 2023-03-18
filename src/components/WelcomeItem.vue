<template>
  <div>
    <slot> </slot>
  </div>
</template>

<style>
:root {
  --cardWidth: 240px;
  --cardHeight: 280px;
  --cardMargin: 16px;
  --textColor: #b2c1ba;
  --greenb: hsla(160, 100%, 37%, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");

h2 {
  margin: 0;
  padding: 4px 24px;
  color: linear-gradient(-45deg, #23a6d5, #23d5ab);
  font-size: 24px;
}

h3 {
  margin: 0;
  padding: 8px 4px 0px 4px;
  color: var(--textColor);
  font-size: 16px;
}

p {
  margin: 0;
  padding: 8px 4px 0px 4px;
  color: var(--textColor);
  font-size: 16px;
}

.main-section {
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: #0f0f0f;
  padding: 1em;
  border: 0.5px solid #364137;
  margin: 1em;
  border-radius: 8px;
}

.title-card {
  display: flex;
  align-items: left;
  justify-content: start;
  padding: 0 1em;
  width: 100%;
}
.date {
  display: flex;
  justify-content: space-between;
  margin-top: 0.4em;
  font-size: 12px;
  color: #69686c;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  font-size: 16px;
  color: #69686c;
}

button {
  background: var(--greenb);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.main-section:hover {
  background: #1d1d1d;
}

button:hover {
  background: #047725;
}
</style>
