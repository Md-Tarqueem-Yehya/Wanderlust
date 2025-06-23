1. INTRODUCTION
The travel and accommodation industry has undergone a dramatic transformation due to the rise of the internet and mobile technology. More people than ever are exploring new places, working remotely, or looking for budget-friendly travel experiences. This has led to the increasing popularity of property rental platforms such as Airbnb, Vrbo, and Booking.com. These platforms enable users to book short-term stays in privately owned properties instead of traditional hotels. With flexibility, affordability, and local experiences becoming increasingly desirable, the demand for vacation rentals has skyrocketed.
Our project, Wanderlust, is designed to cater to this growing market need. It is a full-stack web application that allows users to list, discover, and book rental properties. Wanderlust provides two types of users—hosts and guests. Hosts can register and list their properties, complete with descriptions, prices, images, and availability. Guests can browse through properties, apply filters based on preferences, and book accommodations seamlessly. A review and rating system allows guests to share their feedback and rate their stays, further enhancing trust in the platform.
The application has been developed using modern technologies such as HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, and EJS for server-side rendering. It follows the MVC (Model-View-Controller) architecture to ensure modularity and scalability. Wanderlust implements secure authentication, dynamic rendering, CRUD operations, and RESTful routing to deliver a seamless experience.
Wanderlust also provides a practical demonstration of full-stack development, encompassing frontend design, backend logic, database management, session handling, and application deployment. Through this project, we gained real-world insights into how modern web platforms are built, maintained, and optimized. This documentation outlines every phase of the project, from conceptualization and system design to testing and future enhancements, making it a comprehensive guide to our development journey.
•	Background and Literature Review
•	Problem Definition
•	Objectives of the Project
•	Methodology
•	Software and Hardware Requirements
•	System Architecture
•	Technology Stack
•	Database Design
•	Module Description
•	APIs and Routing
•	Security Implementation
•	Testing Strategies
•	Implementation Snapshots
•	Challenges Faced
•	Result Analysis
•	Comparison with Similar Systems
•	Future Enhancements
•	Conclusion
•	References
2. BACKGROUND AND LITERATURE REVIEW
The evolution of the travel and hospitality industry has been deeply influenced by the emergence of the internet, digital platforms, and the growing global preference for personalized experiences. Traditional hotel accommodations, although still widely used, are increasingly being replaced or complemented by property rental platforms that connect travelers with individual hosts. This shift has been catalyzed by the success of companies like Airbnb, Booking.com, and Vrbo. These platforms have leveraged the power of the sharing economy to create systems where people can rent out their private properties to travelers, often at more affordable rates and with more authentic local experiences than conventional hotels.
The rise of these platforms has also triggered numerous academic discussions and research studies on peer-to-peer (P2P) sharing, digital trust, and the transformation of consumer behavior. One of the primary observations is the importance of user-generated content such as reviews and ratings in building trust and credibility within the platform. Users often rely on the experiences of others before making a booking decision, and this social proof mechanism significantly boosts user engagement and satisfaction.
Wanderlust builds upon this model by incorporating essential elements such as reviews, ratings, host profiles, and property verification, thus ensuring that users feel secure and informed when making booking decisions. This approach reflects existing research in the domain of digital marketplaces, where trust and transparency are key drivers of success.
In terms of technological progression, the development of full-stack web applications has become more accessible with the introduction of modern frameworks and platforms. JavaScript, with its extensive ecosystem, has become the backbone of web development. Frameworks like Node.js and Express.js on the backend, coupled with frontend libraries and templating engines such as EJS and Bootstrap, allow for the rapid development of responsive and scalable applications. MongoDB, a NoSQL database, provides flexible schema structures ideal for managing dynamic content such as user data, property listings, and reviews.
The literature also highlights the need for role-based access control (RBAC) in modern web applications, especially those involving transactions and user-generated content. Wanderlust implements a basic RBAC model by distinguishing between hosts and guests. This ensures that users can only perform actions appropriate to their role, such as listing properties (hosts) or booking and reviewing properties (guests).
From a software engineering perspective, adopting the MVC (Model-View-Controller) architecture is another practice reinforced by literature. MVC encourages the separation of concerns and makes the codebase more manageable, especially for large-scale applications. In Wanderlust, the model handles data logic and schemas via Mongoose, views are managed with EJS templates, and the controller logic is handled through Express.js route handlers.
Furthermore, several case studies on Airbnb and similar platforms emphasize the value of incorporating dynamic search and filtering features. These features enhance usability by enabling users to easily find properties that match their criteria, such as location, price range, or rating. Wanderlust integrates a server-side filtering mechanism that dynamically updates the property list based on user input, improving the overall experience.
Security is another area extensively covered in literature, particularly in the context of web development. Password encryption, session management, and data validation are considered essential. Our project incorporates these best practices using bcryptjs for password hashing, express-session for user sessions, and middleware for validating user input and access rights.
In summary, the literature and background research provided a strong foundation for developing Wanderlust. By analyzing existing platforms, current technologies, and best practices in full-stack development, we were able to design a system that not only meets functional requirements but also aligns with industry standards. The insights gained from previous works in the field guided the implementation of core features and informed our approach to system design, user experience, and data security.














3. PROBLEM DEFINITION
The travel and accommodation industry has seen a major digital shift over the past decade. The emergence of online rental platforms like Airbnb, Booking.com, and Vrbo has revolutionized how people travel. While these platforms cater to millions of users worldwide, they are also commercialized, complex, and at times, inaccessible to small-scale hosts or users in developing regions. There remains a need for simplified, scalable, and educationally viable alternatives that can help students understand and implement the core mechanics behind such systems.
This project was initiated with the aim of bridging the gap between theoretical understanding and practical implementation of a rental platform. While the existing systems are highly optimized and feature-rich, they often present steep learning curves for novice developers or are not open-source enough to deconstruct and study effectively.
The central problem that Wanderlust addresses is the lack of accessible, customizable, and educational full-stack web applications that demonstrate the workings of a real-world rental platform. Specifically, our solution focuses on replicating core features like:
•	User registration and role-based login (Host and Guest)
•	Property listing with dynamic content rendering
•	Filtering and search capabilities
•	Booking system with date and availability logic
•	Review and rating functionality for guests
•	Secure session and user data handling
A key pain point for users—both hosts and guests—on many platforms is the overly complex UI or lack of localized flexibility. For instance, small property owners in tier-2 or tier-3 cities may not have access to platforms that support regional language content or straightforward listing mechanisms. Similarly, budget travelers often find it difficult to locate affordable short-term rentals without extensive filtering. Wanderlust aims to simplify these problems by offering a clean, minimal interface where users can register quickly, list properties, or find accommodations without excessive formality.
From a technical perspective, developers often struggle to find well-documented, full-stack open-source applications that encapsulate all aspects of a commercial product. Projects available online are either backend-heavy or frontend-centric, rarely offering an end-to-end pipeline that includes secure authentication, data modeling, templating, and dynamic views. This lack of reference slows down the learning process for aspiring full-stack developers.
In academic settings, students need projects that are manageable within a semester’s timeline yet rich enough to demonstrate practical application of software engineering principles. Wanderlust has been designed to be fully operational with minimal overhead and can be deployed easily using free-tier hosting solutions like Render or Railway. Its design considers scalability, with modular components that can be expanded as needed (e.g., adding payment gateways, maps integration, or mobile responsiveness).
Another important problem tackled by this project is user trust. In any rental system, ensuring that guests and hosts feel safe is crucial. Wanderlust implements a user review and rating system, creating a basic trust metric. While it doesn’t yet include automated verification systems or KYC (Know Your Customer) integrations, it lays the groundwork for such features to be added in the future.
Furthermore, property rental platforms involve data-sensitive transactions—user logins, personal information, booking details. Handling this data securely is non-negotiable. Many beginner-level apps overlook this, focusing solely on functionality. In contrast, Wanderlust incorporates secure practices like password hashing using bcryptjs, middleware-based session control, and input sanitization.
To summarize, the core problems addressed by this project include:
1.	Lack of simple, scalable platforms for listing and booking properties tailored for educational or small-scale deployment.
2.	Unavailability of complete, beginner-friendly full-stack project references that demonstrate real-world application design.
3.	Overcomplexity and technical barriers in existing platforms for small hosts or developers.
4.	Absence of user role distinction and trust mechanisms in basic booking apps.
5.	Insufficient focus on security and modularity in open-source student projects.
By identifying and solving these issues, Wanderlust provides a robust, learner-focused rental application that not only works in theory but can be deployed and scaled in real-world scenarios. The project bridges the gap between concept and execution while giving students practical exposure to system architecture, data flow, backend development, and user experience design.











4. OBJECTIVES OF THE PROJECT
The primary goal of this project, Wanderlust – A Property Rental Web Application, is to design and implement a full-stack web platform that replicates the core functionality of commercial short-term rental systems in a simplified, educational, and modular format. The project aims to bridge the gap between theoretical concepts of web development and their practical applications by building a robust, responsive, and secure property booking system.
In the evolving landscape of digital platforms, especially in the travel and hospitality industry, user experience and functionality are paramount. Wanderlust aspires to provide an application that delivers a seamless interface for users to register, browse properties, book accommodations, and post reviews. The project also aims to enable hosts to list their properties, manage bookings, and communicate effectively with guests. The detailed objectives below reflect the various functional, technical, and educational goals that have guided the development of this project.
1. Build a Functional Full-Stack Web Application
The primary objective is to develop a full-stack web application using modern and industry-standard technologies. This involves the integration of frontend (HTML, CSS, JavaScript, Bootstrap, EJS), backend (Node.js, Express.js), and database (MongoDB with Mongoose) into a cohesive and modular structure that enables real-time interaction and dynamic data handling.
2. Implement Secure User Authentication and Role Management
An essential objective of Wanderlust is to implement secure user authentication using session-based login and password hashing techniques. The application differentiates between two user roles—Host and Guest—allowing for different functionalities and access levels. Hosts can add, edit, or remove property listings, while guests can browse, filter, book properties, and leave reviews.
To maintain data integrity and access control, each route is protected using middleware that checks for session activity and user roles. Passwords are hashed using bcryptjs to ensure secure storage and prevent credential leaks.
3. Design and Implement CRUD Functionalities
CRUD (Create, Read, Update, Delete) operations are the foundation of any data-driven application. One of the key objectives is to create models and routes that enable full CRUD functionality for users, properties, bookings, and reviews. The application provides:
•	Create and update forms for property listings.
•	Read views for displaying listings and booking information.
•	Delete routes for property management and account handling.
These operations are designed to be RESTful and follow proper HTTP verb usage (GET, POST, PUT, DELETE).
4. Enable a Real-Time Property Search and Filter Mechanism
In real-world rental applications, users expect the ability to search and filter listings dynamically. Wanderlust aims to replicate this by implementing server-side filtering that allows guests to sort properties based on location, price range, date availability, and ratings. This search feature not only improves usability but also demonstrates the application of request query handling and database filtering using MongoDB operators.
5. Enhance User Interaction with Review and Rating System
Another core objective is to build a review and rating module that allows users (guests) to leave feedback after completing their stay. This introduces the concept of user-generated content and trust-building, which are critical in P2P rental platforms. The reviews are displayed publicly on the property detail pages and can influence the booking decisions of future guests.

6. Maintain a Clean, Responsive UI/UX
The visual design and responsiveness of the application are essential to provide a professional and user-friendly experience. Bootstrap 5 is used extensively to ensure mobile responsiveness, consistent styling, and a clean layout. Modals, carousels, forms, and grid layouts are incorporated to mimic modern UI design standards.
7. Demonstrate Scalable Software Architecture (MVC)
Another objective is to implement the Model-View-Controller (MVC) pattern for clear separation of concerns. This design pattern ensures modularity, easier maintenance, and future scalability. The models define the schema structure using Mongoose, views are handled using EJS for dynamic templating, and controllers (routes) manage business logic and database operations.
8. Provide an Educational Reference for Full-Stack Development
Wanderlust is not just a prototype; it is also a comprehensive educational tool. The application demonstrates key aspects of full-stack web development such as:
•	Templating and dynamic rendering
•	Routing and middleware
•	REST API design
•	Form validation and session handling
•	Deployment and version control
By offering a working, open-source example, this project can serve as a reference for students and junior developers looking to understand how commercial applications work behind the scenes.
9. Ensure Code Reusability and Future Expandability
The codebase is designed with modularity in mind so that additional features can be added without overhauling the existing system. Future modules like payment integration, maps for location services, chat systems, and admin dashboards can be incorporated with minimal restructuring.
Conclusion
To summarize, the objectives of this project focus on building a functional, secure, and user-friendly rental platform while ensuring best practices in software design and full-stack development. The project aims to provide not just a working product but a scalable and educational system that showcases modern web development principles and prepares the team for real-world software challenges.














5. METHODOLOGY
The successful development of a robust web application such as Wanderlust – A Property Rental Web Application requires a systematic and structured approach. The methodology used in this project follows the principles of Agile software development, allowing for flexibility, iterative progress, continuous feedback, and frequent testing throughout the lifecycle of the project.
The core idea behind the adopted methodology was to split the project into multiple logical phases and deliver usable modules after each iteration. This approach not only made development more manageable but also encouraged a deeper understanding of each component, while minimizing the risk of bugs or breakdowns at later stages.
5.1 Agile Development Process
We adopted an Agile methodology that includes:
•	Short iterative cycles (Sprints): Each sprint focused on a specific feature such as authentication, property listing, booking system, or review module.
•	Continuous Integration: As new modules were built, they were integrated into the core project and tested rigorously.
•	Collaboration and Feedback: Team members regularly reviewed each other’s code, gave feedback, and coordinated progress using GitHub.
•	User-Centered Design: Functionality and layout decisions were made keeping user experience and interface responsiveness in mind.
5.2 Project Phases
Phase 1: Planning and Requirement Gathering
•	Identified the core functionality of the system by analyzing existing platforms such as Airbnb and Booking.com.
•	Documented use cases and workflows for users (Guests and Hosts).
•	Established the roles of team members based on expertise (frontend, backend, testing, documentation).
Phase 2: System Design
•	Created wireframes and rough sketches of UI layouts.
•	Designed database schemas and documented data relationships using ER diagrams.
•	Defined the system architecture using the MVC (Model-View-Controller) pattern.
Phase 3: Technology Stack Setup
•	Installed and configured the development environment: Node.js, Express.js, MongoDB, and supporting libraries.
•	Set up a version-controlled code repository on GitHub.
•	Installed Bootstrap and initialized basic project structure (routes, views, models).
Phase 4: Module-wise Development
Each core functionality was treated as a standalone module and developed in stages:
1.	Authentication Module:
o	User registration, login, session handling.
o	Role-based access for Guests and Hosts.
o	Password hashing using bcryptjs.
2.	Property Listing Module:
o	Forms for property submission by Hosts.
o	Image uploads using multer.
o	Property data stored in MongoDB with owner references.
3.	Booking System Module:
o	Guests could select check-in/check-out dates.
o	Date validation logic to prevent overlapping bookings.
o	Booking confirmation stored in the database.
4.	Review System Module:
o	Only guests who completed a booking could leave a review.
o	Reviews include rating (1–5 stars) and optional comments.
o	Displayed on the corresponding property page.
5.	Search & Filtering:
o	Server-side filtering based on city, price range, and rating.
o	Pagination for large datasets using MongoDB queries.
Phase 5: Testing and Debugging
•	Used Postman for API testing (GET, POST, PUT, DELETE requests).
•	Manual testing of UI on various browsers (Chrome, Firefox).
•	Used console logging and error-handling middleware to detect and fix bugs.
Phase 6: Documentation
•	As modules were finalized, corresponding documentation was written.
•	ER diagrams, use-case diagrams, and module descriptions were updated.
•	Code was commented for readability and maintenance.
Phase 7: Deployment
•	Final build was hosted on Render.
•	Assets (CSS, JS, image files) optimized for web.
•	GitHub repository made public for evaluation and demonstration.
5.3 Tools and Workflow
•	Visual Studio Code – Primary code editor.
•	MongoDB Atlas – Cloud-hosted database.
•	Git & GitHub – Version control and team collaboration.
•	Postman – API testing tool.
•	Google Drive & Docs – Shared documentation and tracking.
5.4 Benefits of Agile Approach
•	Quick Adaptability – Allowed adding/removing features based on feedback.
•	Early Testing – Bugs and logic issues were found early.
•	Team Coordination – Improved productivity and division of work.
•	Scalable Codebase – MVC structure made future upgrades easier.
Conclusion
The methodology adopted for Wanderlust was practical, modern, and aligned with current software development practices. By breaking the project into logical phases and modules, we maintained clarity, flexibility, and focus throughout development. The Agile model, supported by tools like GitHub and Postman, made the project manageable and successful. It also taught us critical lessons in teamwork, version control, documentation, and full-stack architecture.
















6. SOFTWARE AND HARDWARE REQUIREMENTS
Before starting the development of a full-stack web application like Wanderlust – A Property Rental Web Application, it is crucial to determine the appropriate set of software and hardware resources. The selection of technologies and tools directly impacts the efficiency, scalability, security, and overall success of the project. In this chapter, we describe in detail the software tools, platforms, libraries, and hardware configurations used in the design, development, testing, and deployment phases.
6.1 Software Requirements
The software requirements are divided into various categories based on the development layers: frontend, backend, database, version control, development tools, and testing platforms.
6.1.1 Frontend Technologies
The frontend or client-side of the application was developed using:
•	HTML5 (HyperText Markup Language): Used for structuring content and layout on web pages. HTML5 provides modern elements like <section>, <article>, and <nav> to create semantic structure.
•	CSS3 (Cascading Style Sheets): Responsible for the visual design and layout. We used CSS to manage typography, spacing, color schemes, and responsive elements.
•	JavaScript (Vanilla JS): Used for enhancing interactivity, handling dynamic content rendering, and implementing features like filtering and form validations.
•	Bootstrap 5: A popular frontend framework that provides pre-built responsive design elements, grid systems, buttons, modals, and more. Bootstrap ensured our application worked across various screen sizes with minimal custom CSS.
6.1.2 Backend Technologies
The server-side logic and routing are handled by:
•	Node.js: A JavaScript runtime that allows the use of JS on the backend. It offers event-driven, non-blocking I/O operations, which are ideal for building scalable network applications.
•	Express.js: A lightweight web framework for Node.js. Express simplifies server creation, route handling, middleware integration, and RESTful API design.
6.1.3 Templating Engine
•	EJS (Embedded JavaScript Templates): Used for server-side rendering. EJS allows us to dynamically inject data into HTML views, making the application more dynamic and modular.
6.1.4 Database Technologies
•	MongoDB: A NoSQL, document-based database used to store data for users, properties, bookings, and reviews.
•	Mongoose ORM: Acts as a bridge between MongoDB and Express. Mongoose provides a schema-based solution to model application data with built-in validation, hooks, and relationships.
6.1.5 Additional Libraries & Middleware
•	bcryptjs: Used to hash and securely store user passwords.
•	express-session: Manages session storage to enable persistent user login states.
•	multer: Middleware for handling image uploads (used in property listings).
•	connect-flash: Allows flash messages (e.g., success or error notifications) to be passed between redirects.
6.1.6 Development & Testing Tools
•	Visual Studio Code (VS Code): The primary code editor used. It supports linting, debugging, extensions, Git integration, and collaborative development.
•	Git & GitHub: Used for version control and collaboration. All development was tracked through commits and branches in GitHub.
•	Postman: A REST client used to test and validate API endpoints. Ensures that backend routes return correct data and responses.
•	MongoDB Atlas: A cloud-hosted MongoDB database solution that allows remote access and easy sharing of data collections.
6.1.7 Deployment Tools
•	Render: A modern cloud hosting platform used to deploy the application. Render provides free-tier hosting for Node.js apps with auto-deployment from GitHub repositories.
6.2 Hardware Requirements
While the application can be hosted in the cloud and accessed from any device, local development and testing required minimum hardware specifications. These were decided based on the requirement to run the Node.js server, handle local database operations, and execute frontend rendering smoothly.



6.2.1 Minimum Hardware Configuration
Component	Requirement
Processor	Intel Core i5 (8th Gen or newer)
RAM	Minimum 8 GB
Storage	256 GB SSD
Operating System	Windows 10 / macOS / Linux
Network	Stable broadband internet
Browser	Google Chrome, Firefox
6.2.2 Additional Tools
•	Graphics Display Card (Optional): Not necessary for basic development but helpful during media handling (image uploads).
•	Touchscreen Device (Optional): Used to test responsiveness and layout on tablet and mobile devices.
6.3 Justification of Tool Choices
•	MongoDB over MySQL: MongoDB’s flexible schema allows easy iteration and fast development, which is ideal for dynamic data like property listings and reviews.
•	Bootstrap over Custom CSS: Bootstrap accelerates development and ensures consistency in design with minimal manual effort.
•	EJS over React/Angular: For server-side rendering in smaller applications, EJS is lightweight, simple to learn, and integrates seamlessly with Express.js.
•	Node.js over PHP: Node.js allows writing the entire application in JavaScript (frontend + backend), which reduces context-switching and improves code reusability.







7. TECHNOLOGY STACK
In building the Wanderlust web application, the selection of a well-balanced, modern, and maintainable technology stack was a critical factor. A technology stack refers to the combination of programming languages, frameworks, libraries, databases, and tools used to develop a software application. It can be broadly classified into three layers: frontend (client-side), backend (server-side), and database (data storage and retrieval).
Wanderlust was built using a JavaScript-based full-stack approach, meaning JavaScript was used consistently across both frontend and backend, enabling efficient development, code reuse, and reduced context-switching. This decision also allowed the team to learn and apply widely used technologies in the industry, making the experience relevant and practical.
7.1 Overview of the Stack
Layer	Technology	Purpose
Frontend	HTML5, CSS3, JavaScript	Structuring and styling UI
UI Framework	Bootstrap 5	Responsive design and prebuilt components
Templating	EJS	Server-side rendering of dynamic views
Backend	Node.js, Express.js	Application logic, routing, API handling
Database	MongoDB	Data storage (NoSQL document model)
ORM/ODM	Mongoose	MongoDB object modeling and schema validation
Security	bcryptjs, express-session	Password hashing and session management
Middleware	multer, connect-flash	File uploads and messaging
Testing Tools	Postman	REST API testing
Dev Tools	Git, GitHub, VS Code	Version control and development
Deployment	Render	Hosting the web application




7.2 Frontend Technologies
HTML5 (Hyper Text Markup Language)
Used to define the structure of the web pages. HTML5 tags like <section>, <form>, and <article> provide semantic meaning and accessibility.
CSS3 (Cascading Style Sheets)
Responsible for styling elements such as fonts, colors, spacing, and layout. It also allows the creation of animations and transitions for an enhanced user experience.
JavaScript (Vanilla JS)
Used to create interactivity on the client side, such as dynamic filtering, dropdowns, modals, and form validations. JavaScript helped in manipulating DOM elements and sending asynchronous requests.
Bootstrap 5
A widely used frontend UI framework, Bootstrap accelerated the UI development process. Its grid system, utility classes, and ready-made components (like navbars, buttons, cards, modals) helped us ensure mobile responsiveness across various screen sizes.
EJS (Embedded JavaScript Templates)
EJS is a server-side templating language that allows embedding JavaScript into HTML. It enables dynamic rendering of data from the backend, making the frontend experience more responsive and consistent with database updates.
7.3 Backend Technologies
Node.js
A powerful runtime environment that allows JavaScript to be used for server-side programming. Its non-blocking I/O and event-driven architecture are perfect for scalable applications like Wanderlust.
Express.js
A minimalist web application framework for Node.js. It simplifies the creation of routes, middleware, and server configurations. Express helped in designing RESTful APIs and managing request-response cycles efficiently.


7.4 Database Layer
MongoDB
MongoDB is a NoSQL database that stores data in JSON-like documents. It provides flexibility in schema design and is well-suited for projects where data structure can evolve over time. The following collections were used:
•	Users
•	Properties
•	Bookings
•	Reviews
Each collection is defined using a schema, and documents can be queried efficiently using filters and index-based searches.
Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It adds schema-based validation, model creation, and easy-to-use methods for CRUD operations. Mongoose allowed us to enforce relationships between collections (e.g., user ID references in property or booking models).
7.5 Security Tools
bcryptjs
Used to hash passwords before storing them in the database, ensuring that even if the database is compromised, plain-text passwords are never exposed.
express-session
This middleware stores user login sessions on the server. It enables secure and persistent user login across page navigations.
connect-flash
Allows for temporary storage and display of messages (e.g., “Login failed”, “Booking successful”) across redirects.
7.6 File Handling and Uploads
multer
A middleware for handling multipart/form-data, especially for image uploads. We used it in the property listing module to allow hosts to upload pictures of their rentals.

7.7 Development Tools
•	Visual Studio Code (VS Code): Used for writing, testing, and debugging the application code. Integrated Git features and a wide range of extensions improved developer productivity.
•	Git & GitHub: All source code was tracked using Git. GitHub repositories were used for remote backups and team collaboration.
•	Postman: A powerful tool for testing APIs. It was used extensively to test POST, GET, PUT, and DELETE requests during development.
7.8 Deployment Platform
Render
A cloud hosting platform that supports Node.js applications. We deployed the live version of Wanderlust using Render’s free-tier service, which automatically pulls code from GitHub and deploys the latest version upon push.















8. DATABASE DESIGN
A well-structured database design is fundamental to the efficiency, integrity, and scalability of any data-driven web application. In the case of Wanderlust, the application handles a variety of data including user details, property listings, bookings, and user reviews. Therefore, a NoSQL database such as MongoDB was chosen for its flexibility, scalability, and seamless integration with JavaScript-based frameworks.
MongoDB stores data in JSON-like documents (BSON), which makes it ideal for web applications that require dynamic schema changes. Using Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, we structured our data into well-defined schemas and managed relationships between entities through reference IDs.
This section describes the entity design, schemas, relationships, and rationale behind the decisions taken during the database architecture phase.
8.1 Entity Relationship Overview
The core entities in the Wanderlust database are:
1.	User
2.	Property
3.	Review
The relationships between these entities are as follows:
•	A User can either be a Host or a Guest.
•	A Host (User) can list multiple Properties.
•	A Guest (User) can make Bookings for properties.
•	A Guest can leave Reviews for properties they have booked.
8.2 Schema Definitions
All schemas are defined using Mongoose models. Below is an explanation of each schema and its fields.
1. User Schema
javascript
CopyEdit
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['host', 'guest'], default: 'guest' },
  createdAt: { type: Date, default: Date.now }
});
•	name: Full name of the user.
•	email: Unique identifier for login.
•	password: Encrypted using bcryptjs.
•	role: Defines access rights. ‘host’ can list properties; ‘guest’ can book and review.
•	createdAt: Timestamp of registration.
2. Property Schema
javascript
CopyEdit
const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  pricePerNight: Number,
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});
•	title: Short headline of the property.
•	description: Detailed information about the property.
•	location: City or locality name.
•	pricePerNight: Rental cost per night.
•	images: Array of image filenames or URLs.
•	owner: Reference to the host user.
•	createdAt: Date the listing was created.
3. Review Schema
javascript
CopyEdit
const reviewSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});
•	property: Property being reviewed.
•	user: Guest who posted the review.
•	rating: A score between 1 (worst) and 5 (best).
•	comment: Textual feedback.
•	createdAt: Timestamp of review.
8.3 Relationships
•	One-to-Many (User → Property): A host can list multiple properties.
•	One-to-Many (Property → Review): A property can have multiple reviews.
•	One-to-One (User ↔ Role): A user is either a host or guest per session.

8.4 Indexing and Query Optimization
To improve performance, certain fields like email (in users) and location (in properties) were indexed for faster search and filter operations.
We used Mongoose’s built-in query population feature to fetch relational data efficiently. For example, when loading property details, associated reviews and host information are automatically retrieved using .populate().
8.5 Validation and Constraints
•	Schema-level validations are enforced using Mongoose (e.g., required, enum, min, max).
•	Duplicate emails are prevented with unique indexing on the email field.
•	Date comparisons prevent invalid bookings (e.g., check-out date before check-in).
8.6 Future Enhancements in Database Design
•	Add support for property availability calendar.
•	Include user profile details (phone, photo, bio).
•	Add geo-coordinates to property schema for map integration.
•	Store image files in cloud (e.g., Cloudinary or AWS S3) and store URLs in the database.












9. MODULE DESCRIPTION
The architecture of Wanderlust has been modularized to ensure maintainability, reusability, and scalability. Each module of the application is designed to handle a specific set of operations, and together, these modules form the core of the system’s functionality. This modular structure adheres to the principles of separation of concerns and supports future enhancement or integration of new features without major refactoring.
In this chapter, we detail each major module within the system, including its responsibilities, sub-features, interactions with other components, and its implementation logic.
9.1 Module Overview
Module No.	Module Name	Description
1	Authentication	Handles user sign-up, login, and logout
2	User Roles & Access	Manages Host and Guest functionality
3	Property Management	Enables Hosts to create and manage listings
4	Review System	Enables review and rating of properties
5	Search and Filtering	Dynamic search based on location, price, etc.
6	Image Upload	Uploads and displays property images

9.2 Authentication Module
Purpose:
To authenticate users securely and provide session-based access to the system.
Key Features:
•	User registration with form validation
•	Login with hashed password comparison (using bcryptjs)
•	Logout functionality with session destroy
•	Flash messages for login/signup feedback
Implementation:
•	Sessions are managed using express-session
•	Passwords are hashed using bcryptjs
•	Middleware protects restricted routes
•	Validation checks for duplicate emails
9.3 User Roles & Access Control Module
Purpose:
To differentiate between Guests and Hosts, granting role-based access.

Key Features:
•	Guests: Can browse, book, and review properties
•	Hosts: Can add, edit, and delete their own property listings
•	Middleware used to prevent unauthorized actions (e.g., a guest attempting to create listings)
Implementation:
•	The role field (host or guest) is stored in the User schema
•	Conditional views and server-side checks ensure proper routing
9.4 Property Management Module
Purpose:
To allow hosts to list their properties for rent and manage existing listings.
Key Features:
•	Add new property listings with images, title, description, price
•	View listings on the home and listing pages
•	Edit/update property details
•	Delete a listing
Implementation:
•	CRUD operations using Express routes
•	Mongoose schema for Property
•	Image uploads via multer middleware
•	Properties tied to the user ID of the host (via foreign key)
9.5 Booking Management Module
Purpose:
To allow guests to book properties based on availability.
Key Features:
•	Check-in and check-out date selection
•	Booking validation (e.g., dates must not overlap existing bookings)
•	View list of bookings made by the guest
•	Hosts can see booking requests for their listings
Implementation:
•	Booking schema includes property ID, guest ID, check-in/check-out dates
•	Backend logic checks for date conflicts using MongoDB queries
•	Flash messages notify users of booking status
9.6 Review & Rating Module
Purpose:
To gather user feedback and enhance platform trustworthiness.
Key Features:
•	Guests can submit a review and rate properties they’ve booked
•	Reviews displayed on the property detail page
•	Review submission only allowed after a confirmed stay
Implementation:
•	Linked to property and user IDs
•	Rating system ranges from 1 to 5 stars
•	Protected routes ensure only eligible guests review
9.7 Search & Filtering Module
Purpose:
To help users find suitable properties quickly using filters.
Key Features:
•	Search by location (city or region)
•	Filter by price range, date availability, or minimum rating
•	Paginated results (optional)
Implementation:
•	Server-side filtering using MongoDB queries
•	Query strings extracted from the URL
•	Data passed to EJS views for rendering filtered lists
9.8 Image Upload Module
Purpose:
To manage and display property images in the frontend UI.
Key Features:
•	Hosts upload images during property listing
•	Images stored in a local /uploads directory (or cloud in future)
•	Multiple images supported
Implementation:
•	multer middleware processes multipart/form-data
•	File names stored in the MongoDB Property document
•	EJS templates loop through image array to render on property pages

9.9 Inter-Module Interactions
•	The Authentication Module serves as a gateway to all other modules.
•	The Booking Module checks property availability through the Property Module.
•	The Review Module is tied to bookings; a user must complete a booking to leave a review.
•	The Filtering Module fetches data directly from the Property schema but also uses Review data to sort by rating.























10. FRONTEND DEVELOPMENT 
 
Frontend development involves designing the visual components of the web application that users interact with directly. It is responsible for creating a seamless and intuitive user interface (UI) while ensuring responsiveness across various screen sizes. For the Wanderlust project, the frontend was developed using HTML5, CSS3, JavaScript, Bootstrap, and EJS templating. 
10.1 Frontend Tech Stack 
Technology Purpose 
HTML5 	Structure and layout of the web pages 
CSS3 	Styling, themes, and page responsiveness 
JavaScript 	DOM manipulation, event handling 
Bootstrap 5 Mobile-first responsive design framework 
EJS 	Server-side rendering of dynamic content with Node.js 
10.2 Frontend Architecture 
Wanderlust uses a templating engine (EJS) for server-side rendering. The views directory is structured into reusable components: 
•	/views/layouts (Main layout files) 
•	/views/partials (Headers, footers, navbars) 
•	/views/pages (Home, login, register, listing, etc.) 
CSS files are modularized and stored in a dedicated /public/css directory, while JavaScript files are kept in /public/js. 
10.3 Responsive Design 
Responsive design ensures the app works across desktop, tablet, and mobile devices. Media queries and Bootstrap’s grid system (row, col-md, col-sm) were used to make the design fluid. 
10.3 Ui Pages and Features 
A.	 Login Page 
Includes email/password fields, client-side validation, and error flash messages. 
B.	 Sign-Up Page 
Collects user details, validates input fields, and uses flash alerts for feedback. 
C.	Home Page 
Displays trending rental properties in a responsive card layout. 
Dynamic search and filter are implemented using EJS + server-side logic. 

D.	Property Listing Page 
For Hosts to add property details, upload images, set price per night. 
Fields include: Title, Description, Image Upload (via Multer), 
E.	 Property Detail View 
Shows full info about a property including host details, reviews, and a calendar for availability. Booking button redirects to confirmation. 

F.	Review and Rating Interface 
Post-booking, users can rate the host/property and leave a review. Star-based UI using fontawesome stars. 
10.5 Accessibility and UX Principles 
The following practices were adopted: 
•	Color contrast meets WCAG standards. 
•	All buttons and links are keyboard-navigable. 
•	ARIA labels used for screen readers where needed. 
10.7 Performance Optimization 
•	Lazy loading of images 
•	Minified CSS/JS 
•	GZIP compression (handled via Express server) 
10.8 Frontend Security Measures 
•	Input sanitization using HTML entities 
•	CSRF protection via token (embedded in forms from backend) 
•	HTTPS enforcement on deployment (via Render) 
10.9 Screenshot
Login Page














Sign-Up Page 















Home Page














Property Listing Page

 

Property Detail View and Review and Rating Interface 

 











Edit Listing Page

















11. BACKEND DEVELOPMENT 
 
Backend development involves the server-side logic, database management, routing, and API creation that enable the frontend to function dynamically. In the Wanderlust project, the backend was built using Node.js, Express.js, and MongoDB, with EJS as the templating engine. 
The backend is responsible for: 	 
•	Handling client-server communication 
•	Performing CRUD operations 
•	Managing user sessions and authentication 
•	Securing data and routing requests 
•	Serving dynamic content using EJS views

11.1 Technology Stack 
Technology 	Description 
Node.js 	JavaScript runtime environment used for executing backend logic 
Express.js 	Lightweight Node.js web framework for routing and middleware 
MongoDB 	NoSQL document database for storing users, bookings, properties 
Mongoose 	ODM library to model and manage MongoDB data 
EJS 	Templating engine for rendering dynamic views on server side 
bcryptjs 	Used for password hashing and secure storage 
expresssession 	Middleware for session management and login persistence 
multer 	Middleware for handling image uploads 
dotenv 	Loads environment variables from .env file 

11.2 Backend Architecture 
The backend follows the Model-View-Controller (MVC) design pattern: 
•	Models (M): Schemas using Mongoose (User, Property, Booking, Review) 
•	Views (V): EJS templates rendered on request 
•	Controllers (C): Route handlers and business logic 
Project Structure: 
/models          → Database schemas   
/routes          → Express routers (auth, property, booking)   
/views           → EJS templates   
/public          → Sta c files (CSS, JS, images)   
/app.js          → Main application on entry point   

11.3 Authentication & Session Handling 
Authentication is managed through: 
•	bcryptjs for password hashing 
•	express-session to create persistent sessions 
•	Login middleware to protect routes 

11.4 File Uploads and Image Storage 
•	Image uploads are handled by Multer 
•	File type and size are validated 
•	Images are stored in Cloudinary

11.5 Security Features 
•	Passwords are never stored in plaintext 
•	Sessions are signed with secret keys from .env file 
•	Form inputs are validated and sanitized 
•	Rate limiting and CSRF protection can be added in production 

11.6 Api Design & Data Flow 
•	RESTful APIs enable modular interaction between frontend and backend 
•	Endpoints are semantically structured (GET /listings, POST /new listing) 

11.7 Error Handling & Logging 
Errors are managed using Express middleware.
11.8 Deployment 
Backend is hosted on Render (or can be hosted on platforms like Heroku or Railway). Environment variables are managed through .env files and are never hardcoded. 
Sample Deployment Config: 
•	Node version: v22.14.0 
•	Auto-restart on crash 
•	Build command: npm install 
•	Start command: node app.js 
 



















12. APIs AND ROUTING 
12.1 Introduction 
In any full-stack web application, APIs (Application Programming Interfaces) and routing form the communication bridge between the frontend and backend. In Wanderlust, RESTful APIs were developed using Express.js to handle data flow between the browser (client) and the server. 
Each API endpoint performs a specific CRUD (Create, Read, Update, Delete) operation related to users, properties, bookings, and reviews. Proper routing structure ensures that the right data is served securely and efficiently. 
12.2	 What is a RESTful API? 
A RESTful API adheres to REST (Representational State Transfer) principles: 
•	Stateless 
•	Uses HTTP verbs (GET, POST, PUT, DELETE) 
•	URL endpoints represent resources (e.g., /properties) 
•	Interacts with JSON data or dynamic views (in our case, EJS) 
Wanderlust’s APIs follow RESTful design and enable smooth operations of the web platform. 
12.3 Express Router Structure 
Routes in Express are modularized into separate files: 
•	/routes/auth.js → Handles login, register, logout 
•	/routes/listing.js → CRUD for property listings 
•	/routes/reviews.js → Review submissions and retrieva
12.4 Routing Workflow (Overview) 

HTTP Verb Route 	Purpose 
GET 	/login 	Render login form 
POST 	/login 	Validate login, set session 
GET 	/listings 	Show all listed properties 
POST 	/listings 	Host submits new property 
GET 	/listings/:id 	Show details of a single property 
DELETE 	/listings/:id 	Delete a listing (host only) 
GET 	/reviews/:propertyId Fetch reviews for a property 
POST 	/reviews/:propertyId Submit new review 
 13. SECURITY IMPLEMENTATION 
13.1	 Introduction 
Security is a vital part of any web-based application. As Wanderlust handles sensitive user data such as login credentials, property listings, and booking information, it is crucial to secure all entry points in the system. 
This chapter discusses the various layers of security implemented in the Wanderlust platform, including authentication protection, data validation, session security, and database safeguards. 

13.2	 Authentication & Password Security 
Wanderlust uses secure password practices and session management to ensure only authorized users can access certain areas of the system. 
 Key techniques used: 
•	Password hashing with bcryptjs 
•	Session handling using express-session 
•	Role-based access (Guest vs. Host) 
This ensures that even if the database is compromised, actual passwords are not stored in plaintext and are computationally difficult to reverse-engineer. 

13.3 Session Management 
Wanderlust uses express-session middleware to create and manage user sessions. 
 Session Configuration: 
javascript CopyEdit app.use(session({   secret: process.env.SESSION_SECRET,   resave: false,   saveUninitialized: false,   cookie: {     httpOnly: true,     maxAge: 1000 * 60 * 60 * 24 // 1 day 
  } 
})); 
 Features: 
•	Cookies are HTTP-only, preventing client-side JavaScript access 
•	Sessions expire after 24 hours of inactivity 
•	Session IDs are unique and stored securely in cookies 

13.4 Route Guarding & Authorization 
Certain routes are protected using custom middleware to check user login status and access level. 
 isLoggedIn Middleware: 
javascript CopyEdit function isLoggedIn(req, res, next) {   if (req.session.userId) return next();   res.redirect("/login"); 
} 
 isHost Middleware: 
javascript CopyEdit function isHost(req, res, next) {   if (req.session.role === "host") return next();   res.status(403).send("Only hosts can access this route."); 
} 
This ensures: 
•	Guests can’t access host-only routes like property listing 
•	Hosts can’t book their own properties 
•	Unauthenticated users are redirected 
 
13.5 Input Sanitization & Validation 
To prevent injection attacks and corrupted data, all user inputs are: 
•	Validated on client-side using JavaScript 
•	Sanitized on the server using express-validator or custom logic 


14. TESTING STRATEGIES 
14.1 Introduction 
Testing is essential to ensure the application behaves as expected and delivers a seamless experience. We employed both manual and automated testing strategies to validate user input, route responses, booking logic, session handling, and database transactions. 
14.2 Testing Types Used 
Type 	Purpose 
Manual Testing 	UI flows, form validation, role permissions 
API Testing (Postman) REST API route responses, status codes, data handling 
Functional Testing 	End-to-end behavior of features like login, booking, reviews 
Cross-browser Testing Ensured consistent layout and functionality across browsers 
14.3 Test Cases 
Test Case 	Expected Result 	Status 
User Login with valid credentials 	Redirect to dashboard Passed 
Booking with past date 	Show validation error Passed 
Unauthorized access to host route Redirect to login 	Passed 
Submit empty review 	Show flash error 	Passed 
14.4 Tools Used 
•	Postman (API testing) 
•	Browser DevTools (Chrome, Firefox) 
•	Console logs 
•	Manual regression testing 
14.5 Summary 
Testing helped identify edge cases like double bookings, invalid form inputs, and inconsistent role access. Fixes were deployed promptly to ensure robustness. 






15. CHALLENGES FACED 
15.1 Integration of Sessions and Flash Messages 
Managing session-based authentication across multiple routes while flashing messages (login errors, booking success) required middleware chaining and learning async error handling in Express. 
15.2 Handling Image Uploads 
Multer was used for file uploads, but formatting filenames, avoiding overwrites, and previewing images needed multiple iterations. 
15.3 Calendar Date Conflicts 
Booking system had to prevent overlapping dates. We implemented a query to check bookings within a date range using MongoDB filters. 
15.4 Role-Based UI Rendering 
Displaying different navigation elements and features based on user role (guest vs host) needed server-side logic in EJS templates. 
15.5 Deployment & Hosting 
Render was chosen for deployment, but the .env file and environment variables had to be correctly configured to ensure no credentials were exposed. 

16. RESULT ANALYSIS 
16.1 Overview 
The system was successfully tested against functional and user goals. All key modules – authentication, booking, property management, and reviews – were working as intended. 
16.2 Booking Logic Test 
•	Attempting double booking → correctly blocked 
•	Booking cost calculation → accurate for selected nights 
16.3 Data Integrity 
•	MongoDB preserved relationships using references (ObjectId) 
•	Properties linked to hosts; bookings to guests 
16.4 Review System 
•	Verified reviews are only allowed post-booking 
•	Ratings correctly averaged and displayed 
16.5 Session Persistence 
•	User remained logged in across requests 
•	Logout cleared session and cookies as expected 

17. COMPARISON WITH SIMILAR APP
17.1 Comparison with Airbnb 
Feature 	Wanderlust 	Airbnb 
Hosting Platform 	Render (student project) Proprietary cloud stack 
Payment Integration Not implemented 	Integrated globally 
Admin Panel 	Not yet 	Full-featured 
Search & Filter 	Implemented 	Advanced AI suggestions 
Reviews 	Basic ratings + comments Verified & ranked 
17.2 Unique Aspects of Wanderlust 
•	Simpler UI for educational use 
•	Fully open-source backend 
•	EJS rendering instead of React or client-side SPA 
 
18. FUTURE ENHANCEMENTS 
18.1 Payment Gateway Integration 
Integrate Stripe or Razorpay to allow online payments and provide instant confirmation of bookings. 
18.2 Google Maps API 
To help guests view location on the map and filter by distance from a landmark. 
18.3 Admin Dashboard 
To monitor user registrations, properties listed, and transactions. Could include analytics. 
18.4 Chat System 
Let guests and hosts communicate post-booking via real-time chat using Socket.io. 
18.5 Notifications 
Email or in-app notification system to confirm bookings, send reminders or promotional offers. 
18.6 Deployment Enhancements 
Move to scalable hosting like Vercel or AWS with CDN and auto-scaling. 



19. CONCLUSION 
Wanderlust serves as a complete academic demonstration of a property rental platform using modern web technologies. It showcases the power of full-stack development, combining Node.js, Express, MongoDB, and EJS for a seamless user experience. 
From user registration and secure login to property management and booking logic, every feature has been implemented with practical usability in mind. While simplified in scope compared to commercial applications, the project is extensible and ready for real-world upgrades. 
This project has also equipped the team with valuable software development skills, including version control, REST API design, session management, security implementation, and collaborative coding using Git. 
 
20. REFERENCES 
•	Node.js Docs – https://nodejs.org 
•	Express.js Docs – https://expressjs.com 
•	MongoDB Docs – https://mongodb.com/docs 
•	Mongoose Docs – https://mongoosejs.com 
•	EJS Docs – https://ejs.co 
•	Bootstrap Docs – https://getbootstrap.com 
•	Render Deployment – https://render.com 
•	Multer – https://github.com/expressjs/multer 
•	bcryptjs – https://github.com/dcodeIO/bcrypt.js 
•	MDN Web Docs – https://developer.mozilla.org 
•	NPM - https://www.npmjs.com/
 







21. APPENDIX 
Appendix I – Schema  
Include models for User, Property listing, Review 
Appendix II – Route Index List of all RESTful routes 
. Listing
. Review
. User
Appendix III – env File (without sensitive values) 
CLOUD_NAME
CLOUD_API_KEY
CLOUD_API_SECRET
MAP_TOKEN
ATLASDB_URL=mongodb+srv://username:<db_password>@cluster0.0ialn2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MONGO_URI=mongodb://localhost:27017/wanderlust 
SESSION_SECRET 
Appendix IV – Deployment Info 
Link - https://wanderlust-u0al.onrender.com/listings
Version used: Node v22.14.0, MongoDB Atlas, EJS templating 
