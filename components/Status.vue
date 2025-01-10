<template>
  <Card :colSpan="'lg:col-span-2'" :rowSpan="'md:row-span-1'" title="Time zone">
    <div class="flex justify-between w-full items-start mb-2">
      <div class="flex flex-col text-xl">
        <h2>Project Status</h2>
      </div>
      <span class="relative flex h-3 w-3">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
        ></span>
      </span>
    </div>
    <p class="text-md">
      Currently working on a few initiatives..<a
        href="https://formability.eu"
        target="_blank"
      ></a>
    </p>
  </Card>
</template>
