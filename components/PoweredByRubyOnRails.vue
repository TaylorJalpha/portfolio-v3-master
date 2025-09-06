<template>
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-2">
    <AnimatedShinyText
      class="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
    >
      <span class="flex items-center gap-2">
        <img 
          src="/assets/css/rails-svgrepo-com.svg" 
          alt="Ruby on Rails" 
          class="rails-logo inline-block"
        />
        Backend powered by Ruby on Rails and PostgreSQL
      </span>
    </AnimatedShinyText>
    <div class="line-separator"></div>
  </Card>
</template>

<style scoped>
.rails-logo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.line-separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 1px;
  background: #333;
  margin: 1rem 0;
}
</style>
