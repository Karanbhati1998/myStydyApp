import React from 'react'

const Footer = () => {
  return (
    <div className="mt-12 px-4 md:px-9 py-8 bg-gray-800 rounded-lg text-white">
      <h3 className="text-xl font-semibold mb-4">📘 About This Course</h3>
      <div className="text-sm leading-relaxed space-y-4 text-gray-300">
        <p>
          This online course on Data Structures and Algorithms in JavaScript is
          designed to provide you with a comprehensive understanding of core
          programming concepts and their implementation in JavaScript. The
          course covers a wide range of topics, including arrays, linked lists,
          stacks, queues, trees, graphs, sorting algorithms, searching
          algorithms, and dynamic programming.
        </p>
        <p>
          The course begins with an introduction to JavaScript and its features,
          followed by an overview of data structures and algorithms. You will
          learn how to implement these structures and algorithms in JavaScript
          and apply them to solve real-world programming problems.
        </p>
        <p>
          Throughout the course, you will be presented with hands-on coding
          exercises, quizzes, and projects to help reinforce your learning. By
          the end of the course, you will have gained a deep understanding of
          how to leverage JavaScript to build efficient and scalable
          applications using data structures and algorithms.
        </p>

        <p>
          <strong>Advantages of Learning JavaScript:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            <strong>High demand:</strong> JavaScript is in high demand in the
            tech industry, and there is a shortage of skilled JavaScript
            developers.
          </li>
          <li>
            <strong>Cross-platform:</strong> JavaScript is a cross-platform
            language that can be used to develop web applications for any
            device.
          </li>
          <li>
            <strong>Versatility:</strong> JavaScript is a versatile language
            that can be used for front-end development, back-end development,
            mobile app development, and more.
          </li>
          <li>
            <strong>Large community:</strong> JavaScript has a large and active
            community of developers who constantly contribute to its growth and
            development.
          </li>
        </ul>

        <p>
          <strong>Industry Relevance of JavaScript:</strong>
        </p>
        <ol className="list-decimal list-inside pl-4 space-y-1">
          <li>
            <strong>Front-end development:</strong> JavaScript is used to build
            interactive user interfaces and dynamic web applications on the
            client-side.
          </li>
          <li>
            <strong>Back-end development:</strong> JavaScript can be used to
            build scalable and efficient server-side applications using Node.js.
          </li>
          <li>
            <strong>Mobile app development:</strong> JavaScript frameworks like
            React Native and Ionic can be used to build cross-platform mobile
            applications.
          </li>
          <li>
            <strong>Data visualization:</strong> JavaScript is used to build
            data visualizations and interactive dashboards for businesses and
            organizations.
          </li>
        </ol>

        <p>
          The course will also cover a range of algorithms that are commonly
          used in programming. You will learn about sorting algorithms such as
          bubble sort, insertion sort, and quicksort. You will also learn about
          searching algorithms such as <strong>linear search</strong>,{" "}
          <strong>binary search</strong>, and{" "}
          <strong>depth-first search</strong>.
        </p>

        <p>
          By the end of this course, you will have a strong foundation in data
          structures and algorithms in JavaScript. You will be able to analyze
          problems and apply the appropriate data structure and algorithm to
          solve them. You will also be able to write efficient and optimized
          code using JavaScript.
        </p>
      </div>
    </div>
  );
}

export default Footer