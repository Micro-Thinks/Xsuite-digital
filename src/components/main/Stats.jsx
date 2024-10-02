import React from 'react'

const Stats = () => {
  return (
    <div class="bg-gray-50  min-h-[350px] flex items-center justify-center font-sans">
      <div class="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-12 gap-32 rounded-3xl px-72 py-12">
        <div class="text-center">
          <h3 class="text-gray-800 text-4xl font-sans font-extrabold">5.4<span class="text-blue-600">M+</span></h3>
          <p class="text-gray-500 text-base font-semibold mt-3">Total Users</p>
        </div>
        <div class="text-center">
          <h3 class="text-gray-800 text-4xl font-sans font-extrabold">$80<span class="text-blue-600">K</span></h3>
          <p class="text-gray-500 text-base font-semibold mt-3">Revenue</p>
        </div>
        <div class="text-center">
          <h3 class="text-gray-800 text-4xl font-sans font-extrabold">100<span class="text-blue-600">K</span></h3>
          <p class="text-gray-500 text-base font-semibold mt-3">Engagement</p>
        </div>
        <div class="text-center">
          <h3 class="text-gray-800 text-4xl font-sans font-extrabold">99.9<span class="text-blue-600">%</span></h3>
          <p class="text-gray-500 text-base font-semibold mt-3">Server Uptime</p>
        </div>
      </div>
    </div>
  )
}

export default Stats