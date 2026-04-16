<template>
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-4">
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold m-0 z-20">About me</h2>
            <p class="text-sm font-semibold text-gray-400 mt-1">Strategy & Execution</p>
            <ul class="list-disc list-inside text-sm">
                <li>Product Discovery</li>
                <li>Roadmapping</li>
                <li>Pricing & GTM Strategy</li>
                <li>Agile / Scrum / Kanban</li>
                <li>Stakeholder Alignment</li>
                <li>Cross-functional Delivery</li>
                <li>OKRs & Risk Mitigation</li>
                <li>Capacity & Resource Planning</li>
                <li>User Research & Analytics</li>
                <li>Business Development</li>
            </ul>
            <p class="text-sm font-semibold text-gray-400 mt-3">Technical Fluency</p>
            <ul class="list-disc list-inside text-sm">
                <li>Web & Mobile Platforms</li>
                <li>Cloud Infrastructure (AWS)</li>
                <li>API & Data Architecture</li>
                <li>AI/ML Pipelines</li>
                <li>CI/CD & Release Management</li>
                <li>DevOps & Infrastructure Planning</li>
            </ul>
                        <!-- CTA: Learn more about me -->
                        <NuxtLink to="/about" class="mt-4 inline-flex items-center gap-2 text-[#746CFF] hover:text-[#ff6b73] transition-colors text-sm font-medium">
                                Learn more about me
                                <svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                        </NuxtLink>
         </div>
    </Card>
</template>