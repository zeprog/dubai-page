<template>
  <h1 class="startAnimated">DUBAI</h1>
</template>

<style lang="scss" scoped>
h1 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 74px;
  opacity: 0;
  &.startAnimated {
    animation-name: startAnimate;
    animation-duration: 2s;
  }
}

@keyframes startAnimate {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>