<template>
  <div id="bento-grid" ref="rootEl" class="bg-gray-10 py-24 sm:py-32">
    <BlurFade :inView="inView" :delay="120">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-white/60">
          Product
          <span class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#E63946]" aria-hidden="true"></span>
          Operating Model
        </span>
        <h2 class="mt-5 text-3xl sm:text-4xl font-semibold sm:font-bold tracking-tight text-white/95 leading-tight">
          My Product Management Approach
        </h2>
      </div>
      <p
        class="mx-auto mt-6 max-w-2xl text-center text-xl sm:text-2xl font-semibold leading-tight text-white/85"
      >
        Ship secure, reliable, and scalable products
      </p>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div
            class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
          >
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p
                class="mt-2 text-2xl/7 font-bold text-gray-950 max-lg:text-center"
              >
                Agile Methodologies
              </p>
              <p
                class="mt-2 max-w-lg text-lg/7 text-gray-600 max-lg:text-center"
              >
                Leverage Agile, Scrum, and pragmatic process design—paired with clear communication—to deliver predictable outcomes and de‑risk execution.
              </p>
            </div>
            <div
              class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm"
            >
              <div
                class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"
              >
                <img
                  class="size-full object-cover object-top"
                  src="assets/css/ios-mockup-bento-grid-agile-card.png" 
                  alt="Agile Methodologies"
                />
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"
          />
        </div>
        <div class="relative max-lg:row-start-1">
          <div
            class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
          >
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p
                class="mt-2 text-2xl/7 font-bold text-gray-950 max-lg:text-center"
              >
                Optimized Load Times
              </p>
              <p
                class="mt-2 max-w-lg text-lg/7 text-gray-600 max-lg:text-center"
              >
                Partner closely with engineering to optimize performance for fast, accessible experiences that improve SEO and user satisfaction.
              </p>
            </div>
            <div
              class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2"
            >
              <img
                class="w-full max-lg:max-w-xs"
                src="assets/css/bento-grid-seo.png"
                alt="Performance Optimization"
              />
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"
          />
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white" />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
          >
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p
                class="mt-2 text-2xl/7 font-bold text-gray-950 max-lg:text-center"
              >
                Security-First Approach
              </p>
              <p
                class="mt-2 max-w-lg text-lg/7 text-gray-600 max-lg:text-center"
              >
                I Prioritize security across initiatives and drive controls to prevent vulnerabilities—protecting data, systems, and people.
              </p>
            </div>
            <div
              class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2"
            >
              <img
                class="h-[min(152px,40cqw)] w-80 object-cover object-center mx-auto max-w-full"
                src="assets/css/bento-grid-security-badge.png"
                alt="Security Badge"
              />
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
          />
        </div>
        <div class="relative lg:row-span-2">
          <div
            class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
          >
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10"> 
              <p
                class="mt-2 text-2xl/7 font-bold text-gray-950 max-lg:text-center"
              >
                API-First Integrations
              </p>
              <p
                class="mt-2 max-w-lg text-lg/7 text-gray-600 max-lg:text-center"
              >
                I lead API‑first integrations and love wiring scalable REST and GraphQL services—from Stripe and Plaid to PayPal, Airtable, Salesforce, and more—to unlock business capability.
              </p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div
                class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl"
              >
                <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div
                    class="-mb-px flex text-sm font-medium leading-6 text-gray-400"
                  >
                    <div
                      class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
                    >
                      Stripe.jsx
                    </div>
                    <div class="border-r border-gray-600/10 px-4 py-2">
                      App.jsx
                    </div>
                  </div>
                </div>
                <div class="px-6 pb-14 pt-6">
                  <pre
                    class="overflow-x-auto rounded-lg bg-gray-900 p-6 text-sm font-mono text-white"
                    style="
                      background-image: linear-gradient(
                        135deg,
                        transparent 50%,
                        rgba(255, 255, 255, 0.05) 50%
                      );
                      background-size: 4px 4px;
                    "
                  ><code class="language-js">
  <span style="color: #1DA1F2;">const</span> stripe = Stripe('<span style="color: #1DA1F2;">pk_test_51Jf0p1F0yWp3Wf0p1F0yWp3Wf0p1F0yWp3Wf0p1F0yWp3Wf0p1F0yWp3</span>');
  <span style="color: #1DA1F2;">const</span> <span style="color: #1DA1F2;">const</span>  form = document.getElementById('<span style="color: #4CAF50;">payment-form</span>');
  form.addEventListener('<span style="color: #FF9800;">submit</span>', async (e) => {
    e.preventDefault();
  <span style="color: #1DA1F2;">const</span>  { error } = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: document.querySelector('<span style="color: #9C27B0;">#email</span>').value,
      payment_method: {
        card: cardElement,
        billing_details: {
          name: document.querySelector('<span style="color: #9C27B0;">#name</span>').value,
        },
      },
    });
    if (error) {
      // <span style="color: #f64c4c;">Handle error</span>
    } else {
      // <span style="color: #4CAF50;">Payment successful</span>
    }
  });
                    </code></pre>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
          />
        </div>
      </div>
    </div>
    </BlurFade>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BlurFade from '@/components/BlurFade.vue'

const rootEl = ref<HTMLElement | null>(null)
const inView = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!rootEl.value) return
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inView.value = true
          if (observer && rootEl.value) observer.unobserve(rootEl.value)
        }
      })
    },
    { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  )
  observer.observe(rootEl.value)
})

onBeforeUnmount(() => {
  if (observer && rootEl.value) observer.unobserve(rootEl.value)
  observer = null
})
</script>

<style scoped></style>
