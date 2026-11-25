import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'
import registration from './registration.png'
import sample_resume from './sample-corporate-resume.pdf';

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo,
    registration
}

export const recruiters = [
    {
        _id: "r1",
        companyName: "TechNova Solutions",
        location: "Islamabad, Pakistan",
        email: "technova@gmail.com",
        password: "123456789",
        companyLogo: company_icon,
        companySize: "20 to 40",
        companyWebsite: "https:www.technova.com",
        industry: "Information Technology",
        companyBio: "is actively hiring talented professionals to help build innovative products and scalable digital solutions."
    },
    {
        _id: "r2",
        companyName: "CodeCrafters Inc",
        location: "Lahore, Pakistan",
        email: "codecrafters@gmail.com",
        password: "123456",
        companyLogo: company_icon,
        companySize: "20 to 70",
        companyWebsite: "https:www.codecraft.com",
        industry: "IT Solutions",
        companyBio: "is actively hiring talented professionals to help build innovative products and scalable digital solutions."
    }
];

export const users = [
    {
        _id: "u1",
        name: "Ali Khan",
        email: "ali@gmail.com",
        password: "123456",
        avatar: person_icon,
        provider: "local",
        providerId: null,
        resume: sample_resume
    },
    {
        _id: "u2",
        name: "Sara Ahmed",
        email: "sara@gmail.com",
        password: "123456",
        avatar: person_icon,
        provider: "google",
        providerId: "google_12345",
        resume: sample_resume
    }
];

export const all_jobs = [
    {
        title: "Frontend Developer",
        jobType: "Full Time",
        experienceLevel: "Intermediate",
        salary: 120000,
        description: "React developer for scalable UI systems.",
        requirements: ["React", "JS"],
        responsibilities: ["Build UI", "API integration"],
        skills: ["React", "Redux"],
        totalApplicants: 70
    },
    {
        _id: "j1",
        recruiterData: recruiters[0],
        title: "Frontend Developer",
        description: "React developer for scalable UI systems.",
        salary: 120000,
        jobType: "Full Time",
        experienceLevel: "Intermediate",
        requirements: ["React", "JS"],
        responsibilities: ["Build UI", "API integration"],
        skills: ["React", "Redux"],
        status: true,
        lastDateToApply: "2026-07-10",
        totalApplicants: 70
    },
    {
        _id: "j2",
        recruiterData: recruiters[1],
        title: "Backend Developer",
        description: "Node.js APIs and microservices.",
        salary: 150000,
        jobType: "Part Time",
        experienceLevel: "Senior",
        requirements: ["Node.js", "MongoDB"],
        responsibilities: ["Build APIs", "DB design"],
        skills: ["Node", "Express"],
        status: true,
        lastDateToApply: "2026-07-15",
        totalApplicants: 44
    },
    {
        _id: "j3",
        recruiterData: recruiters[0],
        title: "Full Stack Developer",
        description: "MERN stack developer.",
        salary: 18000,
        jobType: "Internship",
        experienceLevel: "Senior",
        requirements: ["React", "Node"],
        responsibilities: ["Full stack dev"],
        skills: ["MERN"],
        status: true,
        lastDateToApply: "2026-07-20",
        totalApplicants: 35
    },
    {
        _id: "j4",
        recruiterData: recruiters[1],
        title: "UI/UX Designer",
        description: "Design modern UI systems.",
        salary: 90000,
        jobType: "Part Time",
        experienceLevel: "Intermediate",
        requirements: ["Figma"],
        responsibilities: ["Design UI"],
        skills: ["Figma", "UI"],
        status: false,
        lastDateToApply: "2026-07-12",
        totalApplicants: 25
    },
    {
        _id: "j5",
        recruiterData: recruiters[0],
        title: "DevOps Engineer",
        description: "CI/CD pipelines and deployment.",
        salary: 200000,
        jobType: "Full Time",
        experienceLevel: "Senior",
        requirements: ["Docker", "AWS"],
        responsibilities: ["Deploy systems"],
        skills: ["DevOps"],
        status: true,
        lastDateToApply: "2026-07-25",
        totalApplicants: 50
    },
    {
        _id: "j6",
        recruiterData: recruiters[0],
        title: "Mobile App Developer",
        description: "React Native developer.",
        salary: 140000,
        jobType: "Full Time",
        experienceLevel: "Intermediate",
        requirements: ["React Native"],
        responsibilities: ["Mobile apps"],
        skills: ["React Native"],
        status: false,
        lastDateToApply: "2026-07-18",
        totalApplicants: 40
    },
    {
        _id: "j7",
        recruiterData: recruiters[1],
        title: "QA Engineer",
        description: "Testing web apps.",
        salary: 80000,
        jobType: "Full Time",
        experienceLevel: "Junior",
        requirements: ["Testing"],
        responsibilities: ["Test apps"],
        skills: ["QA"],
        status: true,
        lastDateToApply: "2026-07-11",
        totalApplicants: 30
    },
    {
        _id: "j8",
        recruiterData: recruiters[0],
        title: "Database Administrator",
        description: "Manage MongoDB clusters.",
        salary: 160000,
        jobType: "Full Time",
        experienceLevel: "Senior",
        requirements: ["MongoDB"],
        responsibilities: ["DB management"],
        skills: ["DBA"],
        status: false,
        lastDateToApply: "2026-07-30",
        totalApplicants: 40
    },
    {
        _id: "j9",
        recruiterData: recruiters[1],
        title: "Cloud Engineer",
        description: "AWS infrastructure setup.",
        salary: 210000,
        jobType: "Full Time",
        experienceLevel: "Senior",
        requirements: ["AWS"],
        responsibilities: ["Cloud infra"],
        skills: ["AWS"],
        status: true,
        lastDateToApply: "2026-08-01",
        totalApplicants: 15
    },
    {
        _id: "j10",
        recruiterData: recruiters[0],
        title: "Backend Intern",
        description: "Learning backend development.",
        salary: 30000,
        jobType: "Internship",
        experienceLevel: "Intermediate",
        requirements: ["Node"],
        responsibilities: ["Assist devs"],
        skills: ["Node"],
        status: true,
        lastDateToApply: "2026-07-05",
        totalApplicants: 10
    }
];

export const applied_jobs = [
    {
        _id: "a1",
        jobData: all_jobs[0],
        recruiterData: recruiters[0],
        userData: users[0],
        resume: "ali.pdf",
        status: "Pending",
        cancelled: "false",
    },
    {
        _id: "a2",
        jobData: all_jobs[1],
        recruiterData: recruiters[1],
        userData: users[1],
        resume: "sara.pdf",
        status: "Accepted",
        cancelled: "false",
    },
    {
        _id: "a3",
        jobData: all_jobs[2],
        recruiterData: recruiters[0],
        userData: users[0],
        resume: "ali.pdf",
        status: "Rejected",
        cancelled: "false",
    },
    {
        _id: "a4",
        jobData: all_jobs[3],
        recruiterData: recruiters[1],
        userData: users[1],
        resume: "sara.pdf",
        status: "Pending",
        cancelled: "false",
    },
    {
        _id: "a5",
        jobData: all_jobs[4],
        recruiterData: recruiters[0],
        userData: users[0],
        resume: "ali.pdf",
        status: "Interviewing",
        cancelled: "false",
    },
    {
        _id: "a6",
        jobData: all_jobs[5],
        recruiterData: recruiters[1],
        userData: users[1],
        resume: "sara.pdf",
        status: "Interviewing",
        cancelled: "false",
    },
    {
        _id: "a7",
        jobData: all_jobs[6],
        recruiterData: recruiters[0],
        userData: users[0],
        resume: "ali.pdf",
        status: "Shortlisted",
        cancelled: "false",
    },
    {
        _id: "a8",
        jobData: all_jobs[7],
        recruiterData: recruiters[1],
        userData: users[1],
        resume: "sara.pdf",
        status: "Pending",
        cancelled: "false",
    },
    {
        _id: "a9",
        jobData: all_jobs[8],
        recruiterData: recruiters[0],
        userData: users[0],
        resume: "ali.pdf",
        status: "Shortlisted",
        cancelled: "false",
    },
    {
        _id: "a10",
        jobData: all_jobs[9],
        recruiterData: recruiters[1],
        userData: users[1],
        resume: "sara.pdf",
        status: "Offer",
        cancelled: "false",
    }
];

export const saved_jobs = [
    {
        _id: "s1",
        jobData: all_jobs[0],
        userData: users[0],
    },
    {
        _id: "s2",
        jobData: all_jobs[1],
        userData: users[1],
    },
    {
        _id: "s3",
        jobData: all_jobs[2],
        userData: users[0],
    },
    {
        _id: "s4",
        jobData: all_jobs[3],
        userData: users[1],
    },
    {
        _id: "s5",
        jobData: all_jobs[4],
        userData: users[0],
    }
];

export const jobs = [
  {
    title: "Frontend Developer",
    jobType: "Full Time",
    experienceLevel: "Intermediate",
    salary: 120000,
    description:
      "We are looking for a Frontend Developer to join our product engineering team and help build modern, scalable web applications used by thousands of customers daily. The ideal candidate will collaborate closely with UI/UX designers, backend developers, and product managers to create responsive and high-performance user interfaces. You will work on implementing new features, optimizing application performance, improving accessibility, and maintaining reusable component libraries. This role requires strong problem-solving skills and a solid understanding of modern frontend development practices.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of React development experience",
      "Strong JavaScript and ES6 knowledge",
      "Experience with REST APIs",
      "Understanding of responsive design principles"
    ],
    responsibilities: [
      "Develop and maintain React applications",
      "Integrate frontend with backend APIs",
      "Collaborate with design and product teams",
      "Optimize application performance",
      "Write clean and maintainable code"
    ],
    skills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
    totalApplicants: 70
  },

  {
    title: "Backend Developer",
    jobType: "Full Time",
    experienceLevel: "Senior",
    salary: 220000,
    description:
      "We are seeking a Senior Backend Developer to design and develop scalable server-side applications for our SaaS platform. The candidate will be responsible for building secure APIs, optimizing database performance, implementing authentication systems, and ensuring application reliability. You will work on microservices architecture, cloud deployments, and high-traffic systems serving enterprise clients across multiple regions.",
    requirements: [
      "5+ years of backend development experience",
      "Strong Node.js and Express.js knowledge",
      "Experience with MongoDB and SQL databases",
      "Knowledge of cloud platforms",
      "Experience designing RESTful APIs"
    ],
    responsibilities: [
      "Develop scalable backend services",
      "Design database schemas",
      "Implement security best practices",
      "Optimize API performance",
      "Mentor junior developers"
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "AWS", "Docker"],
    totalApplicants: 48
  },

  {
    title: "UI/UX Design Intern",
    jobType: "Internship",
    experienceLevel: "Junior",
    salary: 30000,
    description:
      "We are offering an exciting internship opportunity for aspiring UI/UX designers who want hands-on experience working on real-world digital products. Interns will assist senior designers in creating wireframes, user flows, design systems, and prototypes. This role is ideal for students or recent graduates who are passionate about user-centered design and want to build a strong portfolio.",
    requirements: [
      "Basic understanding of UI/UX principles",
      "Knowledge of Figma",
      "Portfolio of design projects",
      "Strong communication skills"
    ],
    responsibilities: [
      "Create wireframes and mockups",
      "Assist in user research",
      "Support design system development",
      "Collaborate with developers"
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
    totalApplicants: 120
  },

  {
    title: "Data Analyst",
    jobType: "Full Time",
    experienceLevel: "Intermediate",
    salary: 140000,
    description:
      "The Data Analyst will work with large datasets to generate business insights that support strategic decision-making. The successful candidate will collect, clean, analyze, and visualize data from multiple sources. You will collaborate with business stakeholders to identify trends, monitor KPIs, and create reports that improve operational efficiency and business growth.",
    requirements: [
      "2+ years of experience in data analysis",
      "Strong SQL skills",
      "Experience with Power BI or Tableau",
      "Knowledge of Excel and statistics"
    ],
    responsibilities: [
      "Analyze business data",
      "Create dashboards and reports",
      "Monitor key performance metrics",
      "Present findings to stakeholders"
    ],
    skills: ["SQL", "Power BI", "Excel", "Tableau", "Data Visualization"],
    totalApplicants: 85
  },

  {
    title: "Mobile App Developer",
    jobType: "Part Time",
    experienceLevel: "Intermediate",
    salary: 90000,
    description:
      "We are looking for a Mobile App Developer to contribute to the development of cross-platform applications for Android and iOS devices. You will work closely with product managers and backend engineers to deliver high-quality mobile experiences. The role includes implementing new features, fixing bugs, improving application performance, and ensuring a smooth user experience.",
    requirements: [
      "Experience with React Native or Flutter",
      "Knowledge of mobile app architecture",
      "Understanding of API integration",
      "Experience publishing apps"
    ],
    responsibilities: [
      "Develop mobile application features",
      "Debug and fix production issues",
      "Collaborate with backend developers",
      "Optimize app performance"
    ],
    skills: ["React Native", "Flutter", "JavaScript", "REST APIs"],
    totalApplicants: 43
  },

  {
    title: "DevOps Engineer",
    jobType: "Full Time",
    experienceLevel: "Senior",
    salary: 250000,
    description:
      "As a DevOps Engineer, you will be responsible for maintaining and improving our cloud infrastructure, CI/CD pipelines, and deployment processes. You will work closely with development teams to automate workflows, monitor system health, and ensure high availability across production environments. The ideal candidate has experience with cloud platforms, infrastructure as code, and containerized applications.",
    requirements: [
      "5+ years of DevOps experience",
      "Experience with AWS or Azure",
      "Knowledge of Docker and Kubernetes",
      "Experience with CI/CD tools"
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Automate deployment pipelines",
      "Monitor application performance",
      "Implement security practices"
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    totalApplicants: 38
  },

  {
    title: "Quality Assurance Engineer",
    jobType: "Full Time",
    experienceLevel: "Junior",
    salary: 70000,
    description:
      "We are seeking a Quality Assurance Engineer to help maintain the quality and reliability of our software products. You will be involved in test planning, manual testing, defect reporting, and automation efforts. The role requires close collaboration with developers and product managers to ensure a seamless user experience across web and mobile applications.",
    requirements: [
      "Basic understanding of software testing",
      "Knowledge of test case creation",
      "Attention to detail",
      "Good communication skills"
    ],
    responsibilities: [
      "Execute test cases",
      "Report and track bugs",
      "Verify bug fixes",
      "Assist in automation testing"
    ],
    skills: ["Manual Testing", "Selenium", "JIRA", "Test Cases"],
    totalApplicants: 95
  },

  {
    title: "Cyber Security Analyst",
    jobType: "Full Time",
    experienceLevel: "Senior",
    salary: 230000,
    description:
      "The Cyber Security Analyst will play a critical role in protecting company systems, applications, and sensitive customer data. You will conduct vulnerability assessments, monitor security incidents, investigate threats, and recommend security improvements. The ideal candidate has hands-on experience with security tools, incident response, and risk management practices.",
    requirements: [
      "4+ years of cybersecurity experience",
      "Knowledge of network security",
      "Experience with security monitoring tools",
      "Understanding of compliance standards"
    ],
    responsibilities: [
      "Monitor security events",
      "Conduct vulnerability assessments",
      "Respond to incidents",
      "Prepare security reports"
    ],
    skills: ["SIEM", "Network Security", "Risk Assessment", "Penetration Testing"],
    totalApplicants: 29
  },

  {
    title: "Digital Marketing Specialist",
    jobType: "Part Time",
    experienceLevel: "Intermediate",
    salary: 80000,
    description:
      "We are looking for a Digital Marketing Specialist to manage online marketing campaigns across multiple channels. The candidate will be responsible for SEO, social media marketing, email campaigns, and performance tracking. This role requires creativity, analytical thinking, and the ability to drive customer engagement and lead generation.",
    requirements: [
      "Experience with digital marketing campaigns",
      "Knowledge of SEO and SEM",
      "Experience with Google Analytics",
      "Strong communication skills"
    ],
    responsibilities: [
      "Manage social media campaigns",
      "Optimize website SEO",
      "Track campaign performance",
      "Generate marketing reports"
    ],
    skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media"],
    totalApplicants: 67
  },

  {
    title: "Software Engineering Intern",
    jobType: "Internship",
    experienceLevel: "Junior",
    salary: 35000,
    description:
      "We are hiring Software Engineering Interns who are eager to gain practical industry experience in modern software development. Interns will work alongside experienced engineers on real projects, participate in code reviews, learn software development best practices, and contribute to feature development. This opportunity is ideal for students looking to strengthen their technical skills in a professional environment.",
    requirements: [
      "Currently pursuing a Computer Science degree",
      "Basic programming knowledge",
      "Understanding of web development fundamentals",
      "Willingness to learn"
    ],
    responsibilities: [
      "Assist in software development tasks",
      "Fix bugs and implement minor features",
      "Participate in team meetings",
      "Learn development best practices"
    ],
    skills: ["JavaScript", "React", "Node.js", "Git"],
    totalApplicants: 180
  }
];