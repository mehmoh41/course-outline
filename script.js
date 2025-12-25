// Course Outlines Data
const courseOutlines = {
    'html-css': {
        title: 'HTML & CSS Complete Course',
        duration: '45 days',
        levels: 'Beginner → Intermediate → Advanced',
        description: 'Master the fundamentals of web development with HTML5 and CSS3. This comprehensive course covers everything from basic tags to advanced responsive design techniques.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>This course will take you from complete beginner to advanced web developer, covering modern HTML5 and CSS3 techniques used in professional web development.</p>
                
                <h3>📚 Beginner Level (Days 1-15)</h3>
                <div class="outline-section">
                    <h4>Week 1: HTML Fundamentals</h4>
                    <ul>
                        <li>Introduction to HTML5 and web standards</li>
                        <li>Basic HTML structure and document types</li>
                        <li>Headings, paragraphs, and text formatting</li>
                        <li>Links, images, and multimedia elements</li>
                        <li>Lists (ordered, unordered, description)</li>
                        <li>Tables and forms basics</li>
                        <li>Semantic HTML elements (header, nav, main, footer, article, section)</li>
                    </ul>
                    
                    <h4>Week 2: CSS Fundamentals</h4>
                    <ul>
                        <li>CSS syntax, selectors, and specificity</li>
                        <li>Colors, backgrounds, and borders</li>
                        <li>Typography and font properties</li>
                        <li>Box model (margin, padding, border, content)</li>
                        <li>Display properties and positioning</li>
                        <li>Float and clear properties</li>
                        <li>CSS units (px, em, rem, %, vh, vw)</li>
                    </ul>
                </div>
                
                <h3>🚀 Intermediate Level (Days 16-30)</h3>
                <div class="outline-section">
                    <h4>Week 3: Advanced CSS Techniques</h4>
                    <ul>
                        <li>Flexbox layout system</li>
                        <li>CSS Grid layout</li>
                        <li>Responsive design principles</li>
                        <li>Media queries and breakpoints</li>
                        <li>CSS animations and transitions</li>
                        <li>Transform properties (translate, rotate, scale)</li>
                        <li>CSS variables and custom properties</li>
                    </ul>
                    
                    <h4>Week 4: Modern Web Development</h4>
                    <ul>
                        <li>Advanced form elements and validation</li>
                        <li>CSS frameworks introduction</li>
                        <li>CSS methodologies (BEM, SMACSS)</li>
                        <li>CSS preprocessors overview</li>
                        <li>Browser developer tools</li>
                        <li>Cross-browser compatibility</li>
                        <li>Performance optimization techniques</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 31-45)</h3>
                <div class="outline-section">
                    <h4>Week 5: Professional Techniques</h4>
                    <ul>
                        <li>Advanced CSS animations and keyframes</li>
                        <li>CSS architecture and organization</li>
                        <li>Dark mode implementation</li>
                        <li>Accessibility best practices (WCAG guidelines)</li>
                        <li>CSS performance optimization</li>
                        <li>Critical CSS and above-the-fold content</li>
                        <li>Modern CSS features (container queries, aspect-ratio)</li>
                    </ul>
                    
                    <h4>Week 6: Real-world Projects</h4>
                    <ul>
                        <li>Build a responsive landing page</li>
                        <li>Create a multi-page website</li>
                        <li>Develop a portfolio website</li>
                        <li>Implement advanced animations</li>
                        <li>Deploy websites to hosting platforms</li>
                        <li>Code review and optimization</li>
                        <li>Final project presentation</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Personal Portfolio:</strong> Create a professional portfolio website</li>
                    <li><strong>Business Website:</strong> Build a complete business website with multiple pages</li>
                    <li><strong>Landing Page:</strong> Design and develop a modern landing page with animations</li>
                    <li><strong>Responsive Blog:</strong> Create a fully responsive blog layout</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Web Docs - HTML</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">MDN Web Docs - CSS</a></li>
                    <li><a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML Tutorial</a></li>
                    <li><a href="https://www.w3schools.com/css/" target="_blank">W3Schools CSS Tutorial</a></li>
                    <li><a href="https://html.spec.whatwg.org/" target="_blank">HTML Living Standard</a></li>
                    <li><a href="https://www.w3.org/Style/CSS/" target="_blank">W3C CSS Specifications</a></li>
                </ul>
            </div>
        `
    },
    'tailwind': {
        title: 'Tailwind CSS Mastery',
        duration: '30 days',
        levels: 'Beginner → Intermediate',
        description: 'Learn Tailwind CSS, the utility-first CSS framework that helps you build modern websites rapidly without leaving your HTML.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Master Tailwind CSS from the ground up. Learn to build beautiful, responsive websites faster than ever before using utility-first CSS principles.</p>
                
                <h3>📚 Beginner Level (Days 1-15)</h3>
                <div class="outline-section">
                    <h4>Week 1: Tailwind Fundamentals</h4>
                    <ul>
                        <li>Introduction to utility-first CSS</li>
                        <li>Setting up Tailwind CSS in your project</li>
                        <li>Configuration file (tailwind.config.js)</li>
                        <li>Basic utilities: spacing, colors, typography</li>
                        <li>Layout utilities: flexbox and grid</li>
                        <li>Responsive design with Tailwind</li>
                        <li>Dark mode implementation</li>
                    </ul>
                    
                    <h4>Week 2: Building with Utilities</h4>
                    <ul>
                        <li>Component-driven development</li>
                        <li>Creating reusable utility patterns</li>
                        <li>Customizing the default theme</li>
                        <li>Adding custom colors and fonts</li>
                        <li>Working with pseudo-classes</li>
                        <li>Animation and transition utilities</li>
                        <li>Form styling with Tailwind</li>
                    </ul>
                </div>
                
                <h3>🚀 Intermediate Level (Days 16-30)</h3>
                <div class="outline-section">
                    <h4>Week 3: Advanced Techniques</h4>
                    <ul>
                        <li>Creating custom components</li>
                        <li>Just-in-time (JIT) compilation</li>
                        <li>Purging unused CSS</li>
                        <li>Optimization for production</li>
                        <li>Working with CSS-in-JS</li>
                        <li>Integrating with JavaScript frameworks</li>
                        <li>Advanced responsive patterns</li>
                    </ul>
                    
                    <h4>Week 4: Real-world Projects</h4>
                    <ul>
                        <li>Building a landing page</li>
                        <li>Creating a dashboard interface</li>
                        <li>Developing an e-commerce layout</li>
                        <li>Implementing complex animations</li>
                        <li>Accessibility best practices</li>
                        <li>Performance optimization</li>
                        <li>Final project completion</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Admin Dashboard:</strong> Build a modern admin interface</li>
                    <li><strong>Landing Page:</strong> Create a marketing landing page</li>
                    <li><strong>E-commerce Layout:</strong> Design product pages and shopping cart</li>
                    <li><strong>Blog Template:</strong> Develop a responsive blog layout</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://tailwindcss.com/docs" target="_blank">Official Tailwind CSS Documentation</a></li>
                    <li><a href="https://tailwindui.com/" target="_blank">Tailwind UI Components</a></li>
                    <li><a href="https://headlessui.com/" target="_blank">Headless UI</a></li>
                    <li><a href="https://play.tailwindcss.com/" target="_blank">Tailwind Playground</a></li>
                </ul>
            </div>
        `
    },
    'javascript': {
        title: 'JavaScript Complete Course',
        duration: '60 days',
        levels: 'Beginner → Intermediate → Advanced',
        description: 'Master JavaScript from basics to advanced concepts. Learn ES6+, DOM manipulation, async programming, and modern frameworks.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Comprehensive JavaScript course covering everything from basic syntax to advanced concepts like async programming, APIs, and modern ES6+ features.</p>
                
                <h3>📚 Beginner Level (Days 1-20)</h3>
                <div class="outline-section">
                    <h4>Week 1: JavaScript Basics</h4>
                    <ul>
                        <li>Introduction to JavaScript and its history</li>
                        <li>Setting up development environment</li>
                        <li>Variables, data types, and operators</li>
                        <li>Functions and scope</li>
                        <li>Arrays and array methods</li>
                        <li>Objects and object manipulation</li>
                        <li>Control flow (if/else, switch, loops)</li>
                    </ul>
                    
                    <h4>Week 2: DOM Manipulation</h4>
                    <ul>
                        <li>Document Object Model (DOM)</li>
                        <li>Selecting and modifying elements</li>
                        <li>Creating and removing elements</li>
                        <li>Event handling and event listeners</li>
                        <li>Form validation and submission</li>
                        <li>Basic animations with JavaScript</li>
                        <li>Browser developer tools</li>
                    </ul>
                    
                    <h4>Week 3: ES6+ Features</h4>
                    <ul>
                        <li>Let, const, and block scope</li>
                        <li>Arrow functions</li>
                        <li>Template literals</li>
                        <li>Destructuring assignment</li>
                        <li>Spread and rest operators</li>
                        <li>Classes and inheritance</li>
                        <li>Modules and imports/exports</li>
                    </ul>
                </div>
                
                <h3>🚀 Intermediate Level (Days 21-40)</h3>
                <div class="outline-section">
                    <h4>Week 4: Advanced Concepts</h4>
                    <ul>
                        <li>Closures and lexical scope</li>
                        <li>Prototypes and prototypal inheritance</li>
                        <li>Higher-order functions</li>
                        <li>Array and object destructuring</li>
                        <li>Regular expressions</li>
                        <li>Error handling and debugging</li>
                        <li>Local storage and session storage</li>
                    </ul>
                    
                    <h4>Week 5: Asynchronous JavaScript</h4>
                    <ul>
                        <li>Callbacks and callback hell</li>
                        <li>Promises and promise chaining</li>
                        <li>Async/await syntax</li>
                        <li>Fetch API and AJAX</li>
                        <li>Working with REST APIs</li>
                        <li>JSON parsing and stringification</li>
                        <li>Error handling in async code</li>
                    </ul>
                    
                    <h4>Week 6: Modern JavaScript</h4>
                    <ul>
                        <li>Map, Set, and WeakMap/WeakSet</li>
                        <li>Symbols and iterators</li>
                        <li>Generators and async generators</li>
                        <li>Proxy and Reflect APIs</li>
                        <li>Web APIs (Geolocation, Notifications)</li>
                        <li>Service workers introduction</li>
                        <li>Performance optimization</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 41-60)</h3>
                <div class="outline-section">
                    <h4>Week 7: Advanced Patterns</h4>
                    <ul>
                        <li>Design patterns in JavaScript</li>
                        <li>Module patterns and architecture</li>
                        <li>Functional programming concepts</li>
                        <li>Immutability and pure functions</li>
                        <li>Currying and partial application</li>
                        <li>Composition over inheritance</li>
                        <li>Testing JavaScript applications</li>
                    </ul>
                    
                    <h4>Week 8: Frameworks and Tools</h4>
                    <ul>
                        <li>Introduction to build tools (Webpack, Vite)</li>
                        <li>Package managers (npm, yarn)</li>
                        <li>Babel and transpilation</li>
                        <li>ESLint and code quality</li>
                        <li>TypeScript basics</li>
                        <li>Introduction to Node.js</li>
                        <li>Creating npm packages</li>
                    </ul>
                    
                    <h4>Week 9: Real-world Applications</h4>
                    <ul>
                        <li>Building a complete web application</li>
                        <li>State management patterns</li>
                        <li>Routing and navigation</li>
                        <li>Authentication and authorization</li>
                        <li>Deployment strategies</li>
                        <li>Performance monitoring</li>
                        <li>Final project development</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>To-Do Application:</strong> Build a complete task management app</li>
                    <li><strong>Weather App:</strong> Create an app that fetches weather data from APIs</li>
                    <li><strong>E-commerce Cart:</strong> Develop a shopping cart with local storage</li>
                    <li><strong>Quiz Game:</strong> Build an interactive quiz application</li>
                    <li><strong>Notes App:</strong> Create a note-taking application with CRUD operations</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN JavaScript Guide</a></li>
                    <li><a href="https://javascript.info/" target="_blank">The Modern JavaScript Tutorial</a></li>
                    <li><a href="https://eloquentjavascript.net/" target="_blank">Eloquent JavaScript</a></li>
                    <li><a href="https://github.com/getify/You-Dont-Know-JS" target="_blank">You Don't Know JS</a></li>
                    <li><a href="https://exploringjs.com/" target="_blank">Exploring JS</a></li>
                </ul>
            </div>
        `
    },
    'react': {
        title: 'React JS Mastery',
        duration: '50 days',
        levels: 'Intermediate → Advanced',
        description: 'Build modern, interactive user interfaces with React. Learn components, hooks, state management, and advanced patterns.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Master React.js from fundamentals to advanced concepts. Build modern, scalable applications using React hooks, context, and ecosystem tools.</p>
                
                <h3>🚀 Intermediate Level (Days 1-25)</h3>
                <div class="outline-section">
                    <h4>Week 1: React Fundamentals</h4>
                    <ul>
                        <li>Introduction to React and JSX</li>
                        <li>Components and props</li>
                        <li>State and lifecycle methods</li>
                        <li>Handling events in React</li>
                        <li>Conditional rendering</li>
                        <li>Lists and keys</li>
                        <li>Forms and controlled components</li>
                    </ul>
                    
                    <h4>Week 2: Modern React with Hooks</h4>
                    <ul>
                        <li>Introduction to React Hooks</li>
                        <li>useState and useEffect</li>
                        <li>useContext for state management</li>
                        <li>useReducer for complex state</li>
                        <li>Custom hooks creation</li>
                        <li>useRef and useCallback</li>
                        <li>useMemo for performance optimization</li>
                    </ul>
                    
                    <h4>Week 3: Advanced React Patterns</h4>
                    <ul>
                        <li>Higher-order components (HOCs)</li>
                        <li>Render props pattern</li>
                        <li>Compound components</li>
                        <li>Context API deep dive</li>
                        <li>Error boundaries</li>
                        <li>Refs and forwarding refs</li>
                        <li>Portal and fragments</li>
                    </ul>
                    
                    <h4>Week 4: Routing and Navigation</h4>
                    <ul>
                        <li>React Router setup and configuration</li>
                        <li>Route parameters and query strings</li>
                        <li>Nested routing</li>
                        <li>Programmatic navigation</li>
                        <li>Protected routes and authentication</li>
                        <li>Route guards and redirects</li>
                        <li>Lazy loading components</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 26-50)</h3>
                <div class="outline-section">
                    <h4>Week 5: State Management</h4>
                    <ul>
                        <li>Global state management patterns</li>
                        <li>Redux fundamentals</li>
                        <li>Redux Toolkit</li>
                        <li>Async actions with Redux Thunk</li>
                        <li>Zustand and other alternatives</li>
                        <li>State normalization</li>
                        <li>Performance optimization strategies</li>
                    </ul>
                    
                    <h4>Week 6: API Integration</h4>
                    <ul>
                        <li>REST API integration</li>
                        <li>GraphQL with React</li>
                        <li>Axios and fetch patterns</li>
                        <li>Loading states and error handling</li>
                        <li>Caching strategies</li>
                        <li>Optimistic updates</li>
                        <li>Real-time data with WebSockets</li>
                    </ul>
                    
                    <h4>Week 7: Testing and Quality</h4>
                    <ul>
                        <li>Unit testing with Jest</li>
                        <li>Component testing with React Testing Library</li>
                        <li>End-to-end testing</li>
                        <li>Snapshot testing</li>
                        <li>Code coverage and reporting</li>
                        <li>TypeScript with React</li>
                        <li>PropTypes and TypeScript interfaces</li>
                    </ul>
                    
                    <h4>Week 8: Production and Deployment</h4>
                    <ul>
                        <li>Build optimization</li>
                        <li>Code splitting and lazy loading</li>
                        <li>SEO with React (Next.js introduction)</li>
                        <li>Progressive Web Apps (PWA)</li>
                        <li>Deployment strategies</li>
                        <li>CI/CD pipelines</li>
                        <li>Monitoring and analytics</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Task Management App:</strong> Full-featured todo application</li>
                    <li><strong>E-commerce Store:</strong> Product catalog with cart functionality</li>
                    <li><strong>Social Media Dashboard:</strong> User profiles and posts</li>
                    <li><strong>Weather Application:</strong> Real-time weather data display</li>
                    <li><strong>Blog Platform:</strong> Create, edit, and manage blog posts</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://react.dev/" target="_blank">Official React Documentation</a></li>
                    <li><a href="https://reactrouter.com/" target="_blank">React Router Documentation</a></li>
                    <li><a href="https://redux.js.org/" target="_blank">Redux Documentation</a></li>
                    <li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library</a></li>
                    <li><a href="https://github.com/facebook/react" target="_blank">React GitHub Repository</a></li>
                </ul>
            </div>
        `
    },
    'nextjs': {
        title: 'Next.js Full-Stack Development',
        duration: '40 days',
        levels: 'Intermediate → Advanced',
        description: 'Build production-ready full-stack applications with Next.js, React, and modern web technologies.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Master Next.js for building full-stack React applications with server-side rendering, static site generation, and API routes.</p>
                
                <h3>🚀 Intermediate Level (Days 1-20)</h3>
                <div class="outline-section">
                    <h4>Week 1: Next.js Fundamentals</h4>
                    <ul>
                        <li>Introduction to Next.js and its features</li>
                        <li>Project setup and configuration</li>
                        <li>File-based routing system</li>
                        <li>Pages and layouts</li>
                        <li>Linking and navigation</li>
                        <li>Static assets and images</li>
                        <li>CSS modules and styling</li>
                    </ul>
                    
                    <h4>Week 2: Rendering Strategies</h4>
                    <ul>
                        <li>Server-side rendering (SSR)</li>
                        <li>Static site generation (SSG)</li>
                        <li>Client-side rendering (CSR)</li>
                        <li>Incremental static regeneration (ISR)</li>
                        <li>getServerSideProps vs getStaticProps</li>
                        <li>Dynamic routes and parameters</li>
                        <li>Catch-all routes</li>
                    </ul>
                    
                    <h4>Week 3: API Routes and Backend</h4>
                    <ul>
                        <li>Creating API routes</li>
                        <li>Request and response handling</li>
                        <li>Middleware implementation</li>
                        <li>Database integration</li>
                        <li>Authentication in API routes</li>
                        <li>Error handling and validation</li>
                        <li>Rate limiting and security</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 21-40)</h3>
                <div class="outline-section">
                    <h4>Week 4: Advanced Features</h4>
                    <ul>
                        <li>Image optimization</li>
                        <li>Font optimization</li>
                        <li>Script optimization</li>
                        <li>Environment variables</li>
                        <li>Redirects and rewrites</li>
                        <li>Headers and caching</li>
                        <li>Internationalization (i18n)</li>
                    </ul>
                    
                    <h4>Week 5: Deployment and Performance</h4>
                    <ul>
                        <li>Build optimization</li>
                        <li>Bundle analysis</li>
                        <li>Code splitting strategies</li>
                        <li>Edge functions</li>
                        <li>Vercel deployment</li>
                        <li>Other deployment platforms</li>
                        <li>Performance monitoring</li>
                    </ul>
                    
                    <h4>Week 6: Full-Stack Applications</h4>
                    <ul>
                        <li>Database integration (Prisma, MongoDB)</li>
                        <li>Authentication (NextAuth.js)</li>
                        <li>File upload handling</li>
                        <li>Real-time features</li>
                        <li>WebSocket integration</li>
                        <li>Background jobs</li>
                        <li>Final project development</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Blog Platform:</strong> Full-featured blog with CMS</li>
                    <li><strong>E-commerce Site:</strong> Complete online store</li>
                    <li><strong>Dashboard App:</strong> Analytics dashboard with charts</li>
                    <li><strong>Social Network:</strong> User profiles and interactions</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://nextjs.org/docs" target="_blank">Official Next.js Documentation</a></li>
                    <li><a href="https://next-auth.js.org/" target="_blank">NextAuth.js Documentation</a></li>
                    <li><a href="https://www.prisma.io/nextjs" target="_blank">Prisma with Next.js</a></li>
                    <li><a href="https://vercel.com/docs" target="_blank">Vercel Documentation</a></li>
                </ul>
            </div>
        `
    },
    'svelte': {
        title: 'Svelte JS Framework',
        duration: '35 days',
        levels: 'Intermediate → Advanced',
        description: 'Learn Svelte, the revolutionary framework that compiles away and delivers fast, efficient web applications.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Master Svelte.js and learn to build fast, efficient web applications with this revolutionary compiler-based framework.</p>
                
                <h3>🚀 Intermediate Level (Days 1-18)</h3>
                <div class="outline-section">
                    <h4>Week 1: Svelte Fundamentals</h4>
                    <ul>
                        <li>Introduction to Svelte and its philosophy</li>
                        <li>Setting up Svelte project</li>
                        <li>Components and props</li>
                        <li>Reactive declarations</li>
                        <li>Conditional rendering and loops</li>
                        <li>Event handling</li>
                        <li>Two-way data binding</li>
                    </ul>
                    
                    <h4>Week 2: Advanced Svelte Features</h4>
                    <ul>
                        <li>Lifecycle functions</li>
                        <li>Context API</li>
                        <li>Stores and state management</li>
                        <li>Transitions and animations</li>
                        <li>Component composition</li>
                        <li>Slots and slot props</li>
                        <li>CSS in Svelte components</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 19-35)</h3>
                <div class="outline-section">
                    <h4>Week 3: Professional Development</h4>
                    <ul>
                        <li>Advanced animations</li>
                        <li>Custom stores</li>
                        <li>Actions and use directives</li>
                        <li>Special elements (svelte:head, svelte:window)</li>
                        <li>Code splitting</li>
                        <li>Performance optimization</li>
                        <li>Testing Svelte applications</li>
                    </ul>
                    
                    <h4>Week 4: Real-world Applications</h4>
                    <ul>
                        <li>Building a complete application</li>
                        <li>API integration</li>
                        <li>Authentication flows</li>
                        <li>Deployment strategies</li>
                        <li>Final project completion</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Todo App:</strong> Interactive task management</li>
                    <li><strong>Weather Dashboard:</strong> Real-time weather data</li>
                    <li><strong>Blog Platform:</strong> Content management system</li>
                    <li><strong>E-commerce Store:</strong> Product catalog and cart</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://svelte.dev/docs" target="_blank">Official Svelte Documentation</a></li>
                    <li><a href="https://svelte.dev/tutorial" target="_blank">Svelte Tutorial</a></li>
                    <li><a href="https://github.com/sveltejs/svelte" target="_blank">Svelte GitHub</a></li>
                </ul>
            </div>
        `
    },
    'sveltekit': {
        title: 'SvelteKit Full-Stack Framework',
        duration: '30 days',
        levels: 'Advanced',
        description: 'Build full-stack applications with SvelteKit, the official framework for building web applications with Svelte.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Master SvelteKit for building production-ready full-stack applications with server-side rendering, routing, and API development.</p>
                
                <h3>💎 Advanced Level (Days 1-30)</h3>
                <div class="outline-section">
                    <h4>Week 1: SvelteKit Fundamentals</h4>
                    <ul>
                        <li>Introduction to SvelteKit</li>
                        <li>Project setup and configuration</li>
                        <li>File-based routing system</li>
                        <li>Layouts and nested layouts</li>
                        <li>Loading data</li>
                        <li>Form handling</li>
                        <li>Error handling</li>
                    </ul>
                    
                    <h4>Week 2: Advanced Routing and APIs</h4>
                    <ul>
                        <li>Advanced routing patterns</li>
                        <li>API routes and endpoints</li>
                        <li>Middleware and hooks</li>
                        <li>Authentication strategies</li>
                        <li>Protected routes</li>
                        <li>Dynamic parameters</li>
                        <li>Catch-all routes</li>
                    </ul>
                    
                    <h4>Week 3: Full-Stack Development</h4>
                    <ul>
                        <li>Database integration</li>
                        <li>Prisma ORM setup</li>
                        <li>User authentication</li>
                        <li>File uploads</li>
                        <li>Real-time features</li>
                        <li>Background jobs</li>
                        <li>Deployment strategies</li>
                    </ul>
                    
                    <h4>Week 4: Production and Optimization</h4>
                    <ul>
                        <li>Performance optimization</li>
                        <li>SEO best practices</li>
                        <li>Analytics integration</li>
                        <li>Error monitoring</li>
                        <li>Final project development</li>
                        <li>Project deployment</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Full-Stack Blog:</strong> Complete blogging platform</li>
                    <li><strong>Social Network:</strong> User profiles and interactions</li>
                    <li><strong>E-learning Platform:</strong> Course management system</li>
                    <li><strong>Analytics Dashboard:</strong> Data visualization app</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://kit.svelte.dev/docs" target="_blank">Official SvelteKit Documentation</a></li>
                    <li><a href="https://github.com/sveltejs/kit" target="_blank">SvelteKit GitHub</a></li>
                    <li><a href="https://prisma.io/" target="_blank">Prisma ORM Documentation</a></li>
                </ul>
            </div>
        `
    },
    'php': {
        title: 'PHP Programming Complete Course',
        duration: '55 days',
        levels: 'Beginner → Intermediate → Advanced',
        description: 'Learn PHP from basics to advanced concepts. Master server-side scripting, database integration, and modern PHP development.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Comprehensive PHP course covering everything from basic syntax to advanced concepts like OOP, database integration, and modern PHP frameworks.</p>
                
                <h3>📚 Beginner Level (Days 1-18)</h3>
                <div class="outline-section">
                    <h4>Week 1: PHP Basics</h4>
                    <ul>
                        <li>Introduction to PHP and server-side scripting</li>
                        <li>PHP syntax and variables</li>
                        <li>Data types and operators</li>
                        <li>Conditional statements and loops</li>
                        <li>Functions and scope</li>
                        <li>Arrays and array functions</li>
                        <li>String manipulation</li>
                    </ul>
                    
                    <h4>Week 2: Web Development with PHP</h4>
                    <ul>
                        <li>Form handling and validation</li>
                        <li>GET and POST methods</li>
                        <li>File handling and uploads</li>
                        <li>Cookies and sessions</li>
                        <li>Error handling</li>
                        <li>Date and time functions</li>
                        <li>Regular expressions</li>
                    </ul>
                    
                    <h4>Week 3: Database Integration</h4>
                    <ul>
                        <li>Introduction to MySQL</li>
                        <li>PHP and MySQL connection</li>
                        <li>CRUD operations</li>
                        <li>Prepared statements</li>
                        <li>Database security</li>
                        <li>PDO (PHP Data Objects)</li>
                        <li>Database design principles</li>
                    </ul>
                </div>
                
                <h3>🚀 Intermediate Level (Days 19-36)</h3>
                <div class="outline-section">
                    <h4>Week 4: Object-Oriented PHP</h4>
                    <ul>
                        <li>Classes and objects</li>
                        <li>Properties and methods</li>
                        <li>Constructors and destructors</li>
                        <li>Inheritance and polymorphism</li>
                        <li>Access modifiers</li>
                        <li>Static properties and methods</li>
                        <li>Abstract classes and interfaces</li>
                    </ul>
                    
                    <h4>Week 5: Advanced PHP Concepts</h4>
                    <ul>
                        <li>Namespaces and autoloading</li>
                        <li>Traits and mixins</li>
                        <li>Exception handling</li>
                        <li>JSON handling</li>
                        <li>cURL and API integration</li>
                        <li>Email sending</li>
                        <li>File system operations</li>
                    </ul>
                    
                    <h4>Week 6: Modern PHP Development</h4>
                    <ul>
                        <li>Composer and dependency management</li>
                        <li>PSR standards</li>
                        <li>Modern PHP features (PHP 8+)</li>
                        <li>Type declarations</li>
                        <li>Anonymous functions and closures</li>
                        <li>Generators and iterators</li>
                        <li>Unit testing with PHPUnit</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 37-55)</h3>
                <div class="outline-section">
                    <h4>Week 7: Security and Performance</h4>
                    <ul>
                        <li>Web security best practices</li>
                        <li>SQL injection prevention</li>
                        <li>XSS and CSRF protection</li>
                        <li>Password hashing and security</li>
                        <li>Performance optimization</li>
                        <li>Caching strategies</li>
                        <li>Database optimization</li>
                    </ul>
                    
                    <h4>Week 8: Advanced Topics</h4>
                    <ul>
                        <li>RESTful API development</li>
                        <li>JWT authentication</li>
                        <li>Web services and SOAP</li>
                        <li>Background processing</li>
                        <li>Queue systems</li>
                        <li>Microservices architecture</li>
                        <li>Final project development</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Content Management System:</strong> Complete CMS with admin panel</li>
                    <li><strong>E-commerce Platform:</strong> Online store with payment integration</li>
                    <li><strong>Social Network:</strong> User profiles and interactions</li>
                    <li><strong>REST API:</strong> Complete API with authentication</li>
                    <li><strong>Blog Platform:</strong> Multi-user blogging system</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://www.php.net/manual/en/" target="_blank">Official PHP Documentation</a></li>
                    <li><a href="https://www.php.net/manual/en/language.oop5.php" target="_blank">PHP OOP Documentation</a></li>
                    <li><a href="https://phptherightway.com/" target="_blank">PHP: The Right Way</a></li>
                    <li><a href="https://www.php-fig.org/" target="_blank">PHP-FIG Standards</a></li>
                    <li><a href="https://phpunit.de/documentation.html" target="_blank">PHPUnit Documentation</a></li>
                </ul>
            </div>
        `
    },
    'laravel': {
        title: 'Laravel Framework Mastery',
        duration: '45 days',
        levels: 'Intermediate → Advanced',
        description: 'Master Laravel, the PHP framework for web artisans. Build elegant applications with modern PHP development practices.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Comprehensive Laravel course covering everything from basic concepts to advanced features like queues, events, and microservices.</p>
                
                <h3>🚀 Intermediate Level (Days 1-22)</h3>
                <div class="outline-section">
                    <h4>Week 1: Laravel Fundamentals</h4>
                    <ul>
                        <li>Introduction to Laravel and MVC pattern</li>
                        <li>Installation and project setup</li>
                        <li>Routing and controllers</li>
                        <li>Views and Blade templating</li>
                        <li>Database migrations and seeders</li>
                        <li>Eloquent ORM basics</li>
                        <li>Form handling and validation</li>
                    </ul>
                    
                    <h4>Week 2: Advanced Laravel Concepts</h4>
                    <ul>
                        <li>Middleware and request lifecycle</li>
                        <li>Authentication and authorization</li>
                        <li>Service container and dependency injection</li>
                        <li>Service providers</li>
                        <li>Facades and helpers</li>
                        <li>File storage and uploads</li>
                        <li>Email sending and notifications</li>
                    </ul>
                    
                    <h4>Week 3: Database and Eloquent</h4>
                    <ul>
                        <li>Advanced Eloquent relationships</li>
                        <li>Query scopes and mutators</li>
                        <li>Database transactions</li>
                        <li>Database indexing</li>
                        <li>Raw queries and performance</li>
                        <li>Model factories and testing</li>
                        <li>Database optimization</li>
                    </ul>
                </div>
                
                <h3>💎 Advanced Level (Days 23-45)</h3>
                <div class="outline-section">
                    <h4>Week 4: Advanced Features</h4>
                    <ul>
                        <li>Queues and background jobs</li>
                        <li>Events and listeners</li>
                        <li>Broadcasting and WebSockets</li>
                        <li>Cache management</li>
                        <li>Task scheduling</li>
                        <li>Artisan commands</li>
                        <li>Package development</li>
                    </ul>
                    
                    <h4>Week 5: API Development</h4>
                    <ul>
                        <li>RESTful API development</li>
                        <li>API authentication (Sanctum, JWT)</li>
                        <li>API versioning</li>
                        <li>Rate limiting</li>
                        <li>API documentation</li>
                        <li>GraphQL integration</li>
                        <li>Microservices architecture</li>
                    </ul>
                    
                    <h4>Week 6: Production and Deployment</h4>
                    <ul>
                        <li>Performance optimization</li>
                        <li>Security best practices</li>
                        <li>Deployment strategies</li>
                        <li>Server configuration</li>
                        <li>CI/CD pipelines</li>
                        <li>Monitoring and logging</li>
                        <li>Final project deployment</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Task Management System:</strong> Complete project management tool</li>
                    <li><strong>E-commerce Platform:</strong> Full-featured online store</li>
                    <li><strong>Social Network:</strong> User profiles and interactions</li>
                    <li><strong>REST API:</strong> Complete API with documentation</li>
                    <li><strong>Real-time Chat:</strong> WebSocket-based messaging app</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://laravel.com/docs" target="_blank">Official Laravel Documentation</a></li>
                    <li><a href="https://laracasts.com/" target="_blank">Laracasts Video Tutorials</a></li>
                    <li><a href="https://laravel-news.com/" target="_blank">Laravel News</a></li>
                    <li><a href="https://github.com/laravel/laravel" target="_blank">Laravel GitHub Repository</a></li>
                    <li><a href="https://laravel.com/api/" target="_blank">Laravel API Reference</a></li>
                </ul>
            </div>
        `
    },
    'wordpress': {
        title: 'WordPress Development',
        duration: '35 days',
        levels: 'Beginner → Intermediate',
        description: 'Master WordPress development from theme creation to plugin development and custom functionality implementation.',
        outline: `
            <div class="course-outline">
                <h3>🎯 Course Overview</h3>
                <p>Comprehensive WordPress course covering theme development, plugin creation, and advanced customization techniques.</p>
                
                <h3>📚 Beginner Level (Days 1-18)</h3>
                <div class="outline-section">
                    <h4>Week 1: WordPress Fundamentals</h4>
                    <ul>
                        <li>Introduction to WordPress and CMS</li>
                        <li>Installation and setup</li>
                        <li>Admin panel overview</li>
                        <li>Posts, pages, and media</li>
                        <li>Categories and tags</li>
                        <li>User roles and permissions</li>
                        <li>Basic theme customization</li>
                    </ul>
                    
                    <h4>Week 2: Theme Development</h4>
                    <ul>
                        <li>Theme structure and hierarchy</li>
                        <li>Template files and loops</li>
                        <li>Custom post types</li>
                        <li>Custom fields and meta boxes</li>
                        <li>Theme customization API</li>
                        <li>Widgets and sidebars</li>
                        <li>Menu system</li>
                    </ul>
                    
                    <h4>Week 3: Advanced Theme Development</h4>
                    <ul>
                        <li>Advanced custom fields (ACF)</li>
                        <li>Theme options and settings</li>
                        <li>Custom taxonomies</li>
                        <li>Page builders integration</li>
                        <li>Responsive design principles</li>
                        <li>Performance optimization</li>
                        <li>SEO best practices</li>
                    </ul>
                </div>
                
                <h3>🚀 Intermediate Level (Days 19-35)</h3>
                <div class="outline-section">
                    <h4>Week 4: Plugin Development</h4>
                    <ul>
                        <li>Plugin structure and architecture</li>
                        <li>Hooks (actions and filters)</li>
                        <li>Shortcodes creation</li>
                        <li>Admin pages and settings</li>
                        <li>Database operations</li>
                        <li>AJAX in WordPress</li>
                        <li>Security best practices</li>
                    </ul>
                    
                    <h4>Week 5: Advanced Plugin Development</h4>
                    <ul>
                        <li>Custom REST API endpoints</li>
                        <li>Gutenberg block development</li>
                        <li>Multilingual support</li>
                        <li>E-commerce integration (WooCommerce)</li>
                        <li>Payment gateway integration</li>
                        <li>User management systems</li>
                        <li>Final project completion</li>
                    </ul>
                </div>
                
                <h3>🛠️ Practical Projects</h3>
                <ul>
                    <li><strong>Business Website:</strong> Professional corporate site</li>
                    <li><strong>E-commerce Store:</strong> Complete online shop</li>
                    <li><strong>Portfolio Site:</strong> Creative portfolio showcase</li>
                    <li><strong>Membership Site:</strong> Subscription-based content</li>
                    <li><strong>Custom Plugin:</strong> Functionality extension</li>
                </ul>
                
                <h3>📖 Reference Materials</h3>
                <ul>
                    <li><a href="https://developer.wordpress.org/" target="_blank">Official WordPress Developer Resources</a></li>
                    <li><a href="https://codex.wordpress.org/" target="_blank">WordPress Codex</a></li>
                    <li><a href="https://wordpress.org/support/" target="_blank">WordPress Support Forums</a></li>
                    <li><a href="https://woocommerce.com/documentation/" target="_blank">WooCommerce Documentation</a></li>
                    <li><a href="https://advancedcustomfields.com/resources/" target="_blank">Advanced Custom Fields Documentation</a></li>
                </ul>
            </div>
        `
    }
};

// DOM Elements
const modal = document.getElementById('courseModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal__close');
const courseButtons = document.querySelectorAll('.course__btn');

// Open modal function
function openModal(courseKey) {
    const course = courseOutlines[courseKey];
    if (course) {
        modalTitle.textContent = course.title;
        modalBody.innerHTML = course.outline;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
courseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const courseKey = e.target.closest('.course__card').dataset.course;
        openModal(courseKey);
    });
});

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero section button functionality
document.addEventListener('DOMContentLoaded', function() {
    // View All Courses button
    const viewCoursesBtn = document.querySelector('.hero__btn.btn--primary');
    if (viewCoursesBtn) {
        viewCoursesBtn.addEventListener('click', function() {
            document.getElementById('courses').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // About Teacher button
    const aboutTeacherBtn = document.getElementById('aboutTeacherBtn');
    if (aboutTeacherBtn) {
        aboutTeacherBtn.addEventListener('click', function() {
            // Create and show teacher modal
            const teacherModal = document.createElement('div');
            teacherModal.className = 'modal';
            teacherModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__header">
                        <h2 class="modal__title">About Your Instructor</h2>
                        <button class="modal__close">&times;</button>
                    </div>
                    <div class="modal__body">
                        <div class="teacher-info">
                            <div class="teacher-avatar">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <h3>Professional Web Development Instructor</h3>
                            <p>With over 5+ years of experience in web development and teaching, I am passionate about helping students master modern web technologies.</p>
                            <div class="teacher-stats">
                                <div class="stat">
                                    <span class="stat-number">1000+</span>
                                    <span class="stat-label">Students Trained</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">50+</span>
                                    <span class="stat-label">Projects Completed</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">5+</span>
                                    <span class="stat-label">Years Experience</span>
                                </div>
                            </div>
                            <h4>Expertise Areas:</h4>
                            <ul>
                                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                                <li>React.js, Next.js, Svelte.js</li>
                                <li>PHP, Laravel, WordPress</li>
                                <li>Responsive Design & UI/UX</li>
                                <li>Modern Web Development Best Practices</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(teacherModal);
            
            // Close modal functionality
            const closeBtn = teacherModal.querySelector('.modal__close');
            closeBtn.addEventListener('click', function() {
                teacherModal.remove();
            });
            
            teacherModal.addEventListener('click', function(e) {
                if (e.target === teacherModal) {
                    teacherModal.remove();
                }
            });
            
            // Add ESC key support
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    teacherModal.remove();
                }
            });
        });
    }

    // Get Started button
    const getStartedBtn = document.querySelector('.hero__btn.btn--ghost');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            document.getElementById('courses').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.hero__scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.getElementById('courses').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate course cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all course cards
    document.querySelectorAll('.course__card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add CSS for modal content styling
const modalStyles = `
    <style>
        .course-outline {
            line-height: 1.6;
        }
        
        .course-outline h3 {
            color: var(--primary-color);
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .course-outline h4 {
            color: var(--gray-800);
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .course-outline ul {
            margin-left: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .course-outline li {
            margin-bottom: 0.5rem;
            color: var(--gray-700);
        }
        
        .course-outline a {
            color: var(--primary-color);
            text-decoration: none;
        }
        
        .course-outline a:hover {
            text-decoration: underline;
        }
        
        .outline-section {
            background-color: var(--gray-50);
            padding: 1.5rem;
            border-radius: 0.75rem;
            margin-bottom: 1.5rem;
        }
        
        .modal__body::-webkit-scrollbar {
            width: 8px;
        }
        
        .modal__body::-webkit-scrollbar-track {
            background: var(--gray-100);
        }
        
        .modal__body::-webkit-scrollbar-thumb {
            background: var(--gray-400);
            border-radius: 4px;
        }
        
        .modal__body::-webkit-scrollbar-thumb:hover {
            background: var(--gray-500);
        }
    </style>
`;

// Inject modal styles
document.head.insertAdjacentHTML('beforeend', modalStyles);