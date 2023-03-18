<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p>
      Hi, It is a pleasure to have you here. My name is Tolulope, and I am a
      front-end designer currently wschooling at AltSchool Africa. I am extremely
      passionate about design, and I am thrilled to be embarking on this journey
      to explore and expand my skills and interception between design and front-end development.
    </p>
    <h3>Welcome to my Repository Portfolio!</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}




.greetings h1,
.greetings h3, .greetings p {
  text-align: center;
  
}


.greetings h3{
  margin-top: 1em;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3, .greetings p{
    text-align: left;
  }
}
</style>
