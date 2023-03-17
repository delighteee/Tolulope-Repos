<template>
   <div class="errorpage">
    <img  class="errorimage"  alt="404" />
    <h1 class="errordisplay">404</h1>
    <h1 class="errortitle">
        Page not found
    </h1>
    <button class="btn">
        <a href="/">Go back to Repos</a></button>
   </div> 
</template>

<script></script>

<style scoped>

/* .errorimage {
    width: 100%;
    height: 100%;
    margin-top: 2em;
    opacity: 50%;
} */

.errorpage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
   
}


.errordisplay {
    font-size: 10rem;
    text-align: center;
    color: #445249;
    font-weight: 600;
}
</style>
