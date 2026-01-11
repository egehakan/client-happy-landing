// Site configuration
export const SITE_CONFIG = {
  name: "ClientHappy",
  tagline: "Client Feedback, Simplified",
  description:
    "Gather structured feedback from clients with visual voting and custom questionnaires. Share a link, get results.",
  ctaText: "Get Started Free",
  ctaLink: "https://app.clienthappy.com/register",
  appUrl: "https://app.clienthappy.com",
}

// Navigation links
export const NAV_LINKS = [
  { label: "Why ClientHappy", href: "#why-clienthappy" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
]

// Features for bento grid
export const FEATURES = [
  {
    title: "Visual Voting",
    description:
      "Clients vote Yes, Maybe, or No on each screenshot with optional comments. Instantly understand their preferences.",
    icon: "ThumbsUp",
    size: "large",
  },
  {
    title: "Custom Questionnaires",
    description:
      "8 field types including text, dropdowns, file uploads, color pickers, dates, and more.",
    icon: "ClipboardList",
    size: "normal",
  },
  {
    title: "No Client Login Required",
    description:
      "Share a simple link. Clients just enter their email and start voting. No accounts, no friction.",
    icon: "Link",
    size: "normal",
  },
  {
    title: "Organized by Pages & Sections",
    description:
      "Structure your project like your website: pages, sections, and screenshots. Everything stays organized.",
    icon: "Layers",
    size: "normal",
  },
  {
    title: "Real-time Dashboard",
    description:
      "See vote distributions, read comments, and track completion status. All feedback in one place.",
    icon: "BarChart3",
    size: "normal",
  },
  {
    title: "File Uploads & Attachments",
    description:
      "Clients can upload logos, documents, and reference images directly in questionnaires.",
    icon: "Upload",
    size: "wide",
  },
]

// How it works steps
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Create Your Project",
    description:
      "Upload screenshots organized by pages and sections. Add questionnaire questions if needed.",
    icon: "FolderPlus",
  },
  {
    step: 2,
    title: "Share With Client",
    description:
      "Copy the unique project link and send it to your client. No account needed for them.",
    icon: "Share2",
  },
  {
    step: 3,
    title: "Client Provides Feedback",
    description:
      "Client votes Yes/Maybe/No on each screenshot and answers your questionnaire.",
    icon: "MessageSquare",
  },
  {
    step: 4,
    title: "Review & Decide",
    description:
      "See all feedback in your dashboard. Make informed decisions based on clear data.",
    icon: "CheckCircle",
  },
]

// Testimonials (commented out - no clients yet)
// export const TESTIMONIALS = [
//   {
//     quote:
//       "ClientHappy transformed how we collect feedback. Our clients love the simple voting system!",
//     name: "Sarah Chen",
//     role: "Creative Director",
//     company: "PixelPerfect Agency",
//     avatar: "/avatars/avatar-1.png",
//   },
//   {
//     quote:
//       "No more endless email chains trying to understand what clients want. This tool is a game-changer.",
//     name: "Marcus Johnson",
//     role: "Freelance Developer",
//     company: "Self-employed",
//     avatar: "/avatars/avatar-2.png",
//   },
//   {
//     quote:
//       "The questionnaire feature is brilliant. We get all the info we need upfront, every time.",
//     name: "Emily Rodriguez",
//     role: "Project Manager",
//     company: "WebCraft Studios",
//     avatar: "/avatars/avatar-3.png",
//   },
// ]

// Stats (commented out - no clients yet)
// export const STATS = [
//   { value: "10,000+", label: "Screenshots Reviewed" },
//   { value: "500+", label: "Happy Teams" },
//   { value: "95%", label: "Faster Feedback" },
// ]

// FAQ items
export const FAQ_ITEMS = [
  {
    question: "How do I get started?",
    answer:
      "Simply create an account, set up your first project, upload screenshots, and share the link with your client. It only takes a few minutes to get your first feedback.",
  },
  {
    question: "Do my clients need to create an account?",
    answer:
      "No. Your clients simply click the link you share and enter their email to start voting. No passwords, no sign-up process. It takes seconds to get started.",
  },
  {
    question: "What types of questions can I include in questionnaires?",
    answer:
      "We support 8 field types: text input, text area, dropdown select, checkboxes, file upload, date picker, color picker, and URL input. You can create any combination of questions.",
  },
  {
    question: "How do clients vote on screenshots?",
    answer:
      "Clients see each screenshot one at a time and vote Yes, Maybe, or No. They can also add optional comments to explain their choice. A progress bar shows how many they've completed.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "All data is securely stored in the cloud using enterprise-grade database and file storage. Your screenshots and client responses are safe and accessible only to you.",
  },
  {
    question: "Can I use this for mobile app projects?",
    answer:
      "Absolutely! When creating a project, you can select 'mobile' as the project type. The interface works great for reviewing mobile app screenshots and mockups.",
  },
  {
    question: "How many projects can I create?",
    answer:
      "There's no limit! Create as many projects as you need for different clients or different versions of the same project.",
  },
  {
    question: "Can my team members access the same projects?",
    answer:
      "Currently, each account manages their own projects. Team collaboration features are on our roadmap for future updates.",
  },
]

// Footer links
export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  ],
}

// Problem/Solution content
export const PROBLEMS = [
  "Scattered feedback across emails and calls",
  "Clients struggle to articulate preferences",
  "Feedback gets lost or forgotten",
  "No structure or organization",
  "Time wasted chasing responses",
]

export const SOLUTIONS = [
  "Visual voting: Yes, Maybe, No - instantly clear",
  "Structured questionnaires guide client input",
  "All feedback organized in one dashboard",
  "Pages and sections keep everything tidy",
  "Share a link, get responses automatically",
]
