<template>
  <div>
    <div class="lds-heart"><div></div></div>
  </div>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>

<style scoped>
.lds-heart {
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 45vh;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 32px;
  height: 32px;
  background: #da1111;
  animation: lds-heart 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #da1111;
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>