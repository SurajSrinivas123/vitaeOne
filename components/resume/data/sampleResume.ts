import { ResumeData } from "../types/resume";

export const sampleResume: ResumeData = {

    personal: {
        fullName: "Suraj Srinivas",
        title: "Senior Frontend Developer",
        email: "suraj.srinivas@gmail.com",
        phone: "9876543210",
        location: "Tirupati",
        linkedIn: "linkedin.com/in/bsurajsrinivas",
        github: "github.com/bsurajsrinivas",
        portfolio: "surajsrinivas.dev"
    },

    summary:
        "Passionate Frontend Developer with 5+ years of experience building responsive web applications using React, Next.js and TypeScript. Experienced in creating scalable UI systems, improving application performance and collaborating with designers, backend engineers and product teams to deliver intuitive user experiences. Strong understanding of modern JavaScript, clean architecture, accessibility and responsive design with a continuous focus on writing maintainable and efficient code.",

    experience: [

        {
            id: "1",
            company: "Dizynic Solutions",
            role: "Senior Frontend Developer",
            location: "Hyderabad",
            startDate: "2023",
            endDate: "Present",
            current: true,

            highlights: [
                "Developed scalable Next.js applications with reusable UI components.",
                "Improved website performance through code splitting and lazy loading.",
                "Collaborated with designers to deliver pixel-perfect user interfaces."
            ]
        },

        {
            id: "2",
            company: "Dizynic Solutions",
            role: "Frontend Developer",
            location: "Hyderabad",
            startDate: "2021",
            endDate: "2023",
            current: false,

            highlights: [
                "Built responsive dashboards using React and TypeScript.",
                "Integrated REST APIs and optimized client-side state management.",
                "Mentored junior developers and reviewed pull requests regularly."
            ]
        },

        {
            id: "3",
            company: "Dizynic Solutions",
            role: "UI Developer",
            location: "Remote",
            startDate: "2019",
            endDate: "2021",
            current: false,

            highlights: [
                "Designed reusable frontend components for multiple client projects.",
                "Worked closely with QA teams to resolve UI and accessibility issues.",
                "Delivered cross-browser compatible interfaces with responsive layouts."
            ]
        }

    ],

    education: [

        {
            id: "1",
            institution: "Jawaharlal Nehru Technological University",
            degree: "UG",
            field: "Computer Science & Engineering",
            startDate: "2015",
            endDate: "2019",
            cgpa: "8.52"
        },

        {
            id: "2",
            institution: "Narayana Junior College",
            degree: "Intermediate",
            field: "MPC",
            startDate: "2013",
            endDate: "2015",
            cgpa: "92%"
        },

        {
            id: "3",
            institution: "Sri Chaitanya High School",
            degree: "Secondary School",
            field: "SSC",
            startDate: "2012",
            endDate: "2013",
            cgpa: "9.3 GPA"
        }

    ],

    skills: [

        { id: "1", name: "React.js" },
        { id: "2", name: "Next.js" },
        { id: "3", name: "TypeScript" },
        { id: "4", name: "JavaScript" },
        { id: "5", name: "HTML5" },
        { id: "6", name: "CSS3" },
        { id: "7", name: "Tailwind CSS" },
        { id: "8", name: "Node.js" },
        { id: "9", name: "Express.js" },
        { id: "10", name: "MongoDB" },
        // { id: "11", name: "PostgreSQL" },
        // { id: "12", name: "REST APIs" },
        // { id: "13", name: "Git & GitHub" },
        // { id: "14", name: "Docker" },
        // { id: "15", name: "Figma" }

    ],

    training: [

        {
            id: "1",
            title: "Frontend Development",
            institution: "NxtWave"
        },

        {
            id: "2",
            title: "Advanced React",
            institution: "Udemy"
        },

        {
            id: "3",
            title: "TypeScript Masterclass",
            institution: "Coursera"
        },

        {
            id: "4",
            title: "Next.js Bootcamp",
            institution: "Frontend Masters"
        },

        {
            id: "5",
            title: "UI/UX Foundations",
            institution: "Google"
        },

        {
            id: "6",
            title: "Git & DevOps Basics",
            institution: "Microsoft Learn"
        }

    ],

    languages: [

        {
            id: "1",
            name: "English",
            level: "Professional",
            rating: 5
        },

        {
            id: "2",
            name: "Telugu",
            level: "Native",
            rating: 5
        },

        {
            id: "3",
            name: "Hindi",
            level: "Professional",
            rating: 4
        },

        {
            id: "4",
            name: "Kannada",
            level: "Intermediate",
            rating: 3
        },

        {
            id: "5",
            name: "Tamil",
            level: "Basic",
            rating: 2
        },

        {
            id: "6",
            name: "Marathi",
            level: "Basic",
            rating: 2
        }

    ]

};