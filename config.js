// ============================================================
// 📝 PORTFOLIO CONFIGURATION
// ============================================================
// Edit this file to customize YOUR portfolio!
// All your personal data lives here — no need to touch HTML or CSS.
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // 🧑 PERSONAL INFO Here
  // ----------------------------------------------------------
  name: "Meenu",
  title: "Backend Engineer",
  profileImage: "profile.png", // Place your photo in this folder and update the filename

  // ----------------------------------------------------------
  // 📬 CONTACT
  // ----------------------------------------------------------
  email: "meenuvineesh1014@gmail.com",
  address: "Kilimanoor, Thiruvananthapuram, Kerala, India",

  // ----------------------------------------------------------
  // 🔗 SOCIAL LINKS
  // Add or remove links as needed. Supported icons:
  // linkedin, github, leetcode, globe (for websites), medium
  // ----------------------------------------------------------
  socialLinks: [
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/meenu-s-85b740169" },
    { icon: "github", label: "GitHub", url: "https://github.com/MeenuSasikumar" },
  ],

  // ----------------------------------------------------------
  // 📝 SUMMARY / ABOUT
  // ----------------------------------------------------------
  summary:
    "Results-driven Backend Development with 5.4 years of experience in the IT industry, specializing in backend development, system integration, testing, and production support. Strong expertise in .NET technologies and database management. Proven ability to collaborate with cross-functional teams, consult clients, and deliver high-quality software solutions aligned with business goals.",
  // ----------------------------------------------------------
  // 💼 WORK EXPERIENCE
  // ----------------------------------------------------------
  experience: [
    {
      company: "Tata Consultancy Services",
      Project: "Nielsen - Core Scarborough",
      location: "Kochi, India",
      overallDates: "July 2022 - Present",
      roles: [
        {
          title: "Backend Engineer | VB.Net, C#,MSSQL",
          bullets: [
            "Improved SQL performance tuning by 30% with optimized indexing and queries.",
            "Identified and fixed software defects, creating test plans, ensuring quality through code reviews.",
            "Worked on complete development life cycle (SDLC), from architecture, coding, development, maintenance, trouble shooting to quality analysis and debugging under guid",
            "Utilized Agile methodologies to manage project timelines and improve team collaboration.",
            "Developed and enhanced application features using Vb.net core based on user needs and business requirements.",
            "Executed user needs and designing software or customizing existing systems for efficiency.",
            "Implemented CI/CD pipelines using GitLab to automate build, testing, and deployment processes.",
            "Resolved 40 plus production issues improving application scalability.",
            "Automated manual database query operations to improve efficiency and accuracy.",
            "Analyzed and solved production issues through effective troubleshooting and debugging.",
            "Designed and implemented backend components for an online shopping platform using ASP.NET MVC and SQL Server, ensuring efficient data handling and smooth user experience.",
            "Collaborated closely with clients and internal teams to discuss development strategies and proposals.",
            "Implemented backup, recovery and high availability strategies.",
            "Ensured DB security, access control, user management and support cloud DB deployments.",
            "Monitor system health and performance matrics",
            "Conducted functional, non-functional testing and documentation creation."
          ],
        },
        {
          title: "Assistant Systems Engineer | VB.Net, MSSQL,MySQL",
          Project: "Nielsen - Core Scarborough",
          dates: "May 2021 - June 2022",
          bullets: [
            "Worked on Production support activities like database patch up.",
            "Conducted functional, non-functional testing and document creation.",
            "Established Technical documentation and write clear reports.",
            "Created and maintaining records of systems and processes.",
            "Assisted in coding, testing and developing new features or applications.",
            "Ensured software is up-to-date and running smoothly, including configurations and upgrades.",
            "Discovered, examined and addressed technical and database issues and bugs."
          ],
        },
      ],
    },
    {
      company: "Quest Innovative solutions",
      project: "CineReserve",
      location: "Thiruvananthapuram, India",
      overallDates: "Dec 2019 - July 2020",
      roles: [
        {
          title: "Java-Full Stack Developer",
          bullets: [
            "Developed a movie booking system with user and admin panels using Core Java.",
            "Enforced movie listing, ticket booking, cancellation and admin control.",
            "Managed database design, dynamic content, handled validation and authentication.",
            "Created and tested functionality of websites."
          ],
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // 🛠️ SKILLS
  // Group your skills by category
  // ----------------------------------------------------------
  skills: [
    { category: "Programming", items: ["Python", "Java", "JavaScript", "Shell Script"] },
    { category: "Frameworks", items: ["Django", "Flask", "Angular"] },
    { category: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Cloud", items: ["Oracle Cloud Infrastructure (OCI)"] },
    { category: "DevOps & Tools", items: ["Jenkins", "Docker", "Git", "Puppet", "Nginx", "Terraform"] },
    { category: "System Design", items: ["Microservices", "REST APIs", "Architecture", "CI/CD", "Unit Testing"] },
    { category: "Other", items: ["Data Structures & Algorithms", "Third-Party Integration", "Debugging", "Client Interaction"] },
  ],

  // ----------------------------------------------------------
  // 🚀 PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
      name: "PeopleSoft Cloud Manager",
      dates: "2021 – Present",
      bullets: [
        "Engineered common process automation for resource cleanup and prerequisite installation, resulting in a 10% reduction in developer time and improved performance optimization.",
        "Architected and built a secure password management feature using OCI Vault, centralizing password storage and rotation, resulting in a 30% security enhancement.",
        "Designed and deployed an internal CI/CD pipeline using Jenkins to automate builds and testing framework, accelerating build times by 25% and elevating code quality by 30%.",
      ],
    },
    {
      name: "Gordian – Piracy Detection System",
      dates: "2020 – 2021",
      bullets: [
        "Created an automated PDF report generation system that outputs piracy detection results, boosting user experience by 20% through clear and comprehensive reports.",
        "Analyzed and visualized over 50,000 data points using Python libraries like Pandas, NumPy, and Matplotlib to derive actionable insights into piracy trends.",
      ],
    },
    {
      name: "EventOPS – Internal Event Management System",
      dates: "2019 – 2021",
      bullets: [
        "Constructed and released backend microservices architecture utilizing Django and Flask, optimizing system efficiency by 15% through optimized code and scalable architecture.",
        "Designed and established a comprehensive unit testing framework using Django multi-tenancy architecture, increasing unit test coverage by 30%.",
      ],
    },
  ],

  // ----------------------------------------------------------
  // 🎓 EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Technology, Information Technology",
      institution: "GEC Barton Hill",
      location: "Thiruvananthapuram, India",
      dates: "2015 – 2019",
      gpa: "8.93",
      highlights: [
        "University Rank 3 – Kerala Technological University (KTU)",
        "College Class Representative / Leader (2018 – 2019)",
      ],
    },
  ],

  // ----------------------------------------------------------
  // 🏆 ACHIEVEMENTS / AWARDS
  // ----------------------------------------------------------
  achievements: [
    {
      title: "Appreciation for Excellent Performance",
      dates: "June 2021 – November 2021",
      description: "Issued by CEO of InApp for boosting efficiency of EventOPS by 20%.",
    },
    {
      title: "University Women's Chess Team Captain & Champion",
      dates: "July 2017 – July 2018",
      description:
        "Captained a 5-member team and won the university women's chess championship, demonstrating leadership and strategic thinking.",
    },
  ],

  // ----------------------------------------------------------
  // 📜 CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    { name: "OCI 2024 Generative AI Certified Professional", issuer: "Oracle", date: "June 2024" },
    { name: "HackerRank Python Certificate", issuer: "HackerRank", date: "May 2024" },
    { name: "OCI Foundations 2021 Certified Associate", issuer: "Oracle", date: "December 2021" },
  ],
};
