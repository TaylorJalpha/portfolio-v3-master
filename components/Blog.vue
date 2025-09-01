<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-3" href="/">
        <h2 class="text-xl font-bold m-0 z-20">Portfolio</h2>
        <!-- Animated Button -->
        <NuxtLink to="/portfolio">
            <button
                class="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
            >
                View Portfolio -&gt;
            </button>
        </NuxtLink>
        <p class="text-xs text-gray-500 mb-1 pt-5">
            Click the button above to view my portfolio projects, blog posts, etc.
        </p>
    </Card>
</template>


<!-- The current button is simply a placeholder and will need to be improved and an animated option implemented-->