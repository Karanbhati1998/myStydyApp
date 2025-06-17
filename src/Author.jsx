import React from 'react'

const Author = () => {
  return (
    <div className="mt-12 px-4 md:px-9 py-4 bg-gray-900 rounded-lg text-white">
      <h3 className="text-xl font-semibold mb-6"> Author</h3>
      <div className="flex items-center gap-4">
        {/* Author Avatar */}
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <img
            src="https://imgproxy.learnyst.com/https://learnyst-user-assets-cdn.learnyst.com/school-assets/schools/150122/teacher/IMG_7715_Original.jpg?w=48&h=48&resizetype=fit"
            alt="Sanket Singh"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Author Name and Description */}
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold">Farz Ali</h6>
          <p className="text-sm text-gray-300 mt-2 max-w-3xl leading-relaxed">
            Farz is a Software Engineer 2 at Microsoft and an Ex-Software
            Engineer at Google. Prior to Google, he has worked at LinkedIn and
            InterviewBit as well. He was selected for Google Summer of Code
            under Harvard University in 2019. He has mentored thousands of
            students and has received great feedback for his teaching skills.
            Sanket has spoken at PyCon Italy, NDC Melbourne, and is an upcoming
            speaker at React Nexus and PyCon MEA.
          </p>
        </div>

        {/* Social Icons - Optional Placeholder SVGs */}
        <div className="ml-auto flex gap-4">
          {/* Placeholder for YouTube */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            fill="white"
            className="cursor-pointer hover:text-red-500 transition"
          >
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z" />
          </svg>

          {/* Placeholder for LinkedIn */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            fill="white"
            className="cursor-pointer hover:text-blue-500 transition"
          >
            <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z" />
            <path d="M64 384h192v576h-192v-576z" />
            <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-4 my-5">
        {/* Author Avatar */}
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <img
            src="https://imgproxy.learnyst.com/https://learnyst-user-assets-cdn.learnyst.com/school-assets/schools/150122/teacher/DSC00921.webp?w=48&h=48&resizetype=fit"
            alt="Riya Bansal"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Author Name and Description */}
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold">Riya Bansal</h6>
          <p className="text-sm text-gray-300 mt-2 max-w-3xl leading-relaxed">
            Riya Bansal is a software engineer at Microsoft and an experienced
            Backend Developer. Prior to Microsoft, Riya has also worked at
            Flipkart and American Express as well. She has mentored thousands of
            students in past has received great feedback for her teaching
            skills. Riya speaks regularly at a lot of international
            conferences..
          </p>
        </div>

        {/* Social Icons - Optional Placeholder SVGs */}
        <div className="ml-auto flex gap-4">
          {/* Placeholder for YouTube */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            fill="white"
            className="cursor-pointer hover:text-red-500 transition"
          >
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z" />
          </svg>

          {/* Placeholder for LinkedIn */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            fill="white"
            className="cursor-pointer hover:text-blue-500 transition"
          >
            <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z" />
            <path d="M64 384h192v576h-192v-576z" />
            <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Author