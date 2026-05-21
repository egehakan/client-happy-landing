// Site configuration
export const SITE_CONFIG = {
  name: "ClientHappy",
  tagline: "Client feedback that fits on one link.",
  description:
    "Share a link. Your client clicks Yes, Maybe, or No on every screen and leaves a note. You get a clean record instead of a Slack thread.",
  ctaText: "Start a project",
  ctaLink: "https://app.clienthappy.com/register",
  appUrl: "https://app.clienthappy.com",
}

// Navigation links
export const NAV_LINKS = [
  { label: "Why", href: "#why-clienthappy" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
]

// Features for the features section
export const FEATURES = [
  {
    title: "Yes, Maybe, No",
    description:
      "Three buttons, one comment box. That's the whole voting screen. Clients move through it without instructions.",
    icon: "ThumbsUp",
  },
  {
    title: "Questionnaires that aren't a Google Form",
    description:
      "Eight field types: text, long text, dropdown, checkboxes, file upload, date, color, URL. Pick what you actually need.",
    icon: "ClipboardList",
  },
  {
    title: "No client accounts",
    description:
      "Your client opens the link, types their email, and starts. No password reset emails, no friction.",
    icon: "Link",
  },
  {
    title: "Organized like a project",
    description:
      "Pages contain sections, sections contain screenshots. Same structure your designer already uses in Figma.",
    icon: "Layers",
  },
  {
    title: "All the answers in one place",
    description:
      "Vote counts per screen, comments grouped by reviewer, questionnaire responses ready to copy into a brief.",
    icon: "BarChart3",
  },
  {
    title: "Uploads where they belong",
    description:
      "Clients drop logos, references, and PDFs into the questionnaire instead of attaching them to a forwarded email.",
    icon: "Upload",
  },
]

// How it works steps
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Set up the project",
    description:
      "Upload your screens, group them by page and section, and write the questions you want answered.",
  },
  {
    step: 2,
    title: "Send the link",
    description:
      "One URL, copy it into an email or a chat. You don't add your client to anything.",
  },
  {
    step: 3,
    title: "They go through it",
    description:
      "Yes, Maybe, or No on every screen, with a comment if they have one. Questionnaire after, if you set one up.",
  },
  {
    step: 4,
    title: "Read what they said",
    description:
      "Open the responses tab and read the answers in the order you laid the project out.",
  },
]

// FAQ items
export const FAQ_ITEMS = [
  {
    question: "Is it actually free?",
    answer:
      "Yes. No card, no trial counter, no upsell waiting at the end. We pay for hosting and storage; the product is free while it's small enough that we can.",
  },
  {
    question: "Do my clients have to make an account?",
    answer:
      "No. They open your link, type their email so we know which votes are theirs, and start. If they come back later, we remember where they left off.",
  },
  {
    question: "What kinds of questions can I ask in a questionnaire?",
    answer:
      "Short text, long text, dropdown, checkboxes, file upload, date, color picker, and URL. You combine those into whatever shape you need.",
  },
  {
    question: "What does the voting screen actually look like?",
    answer:
      "One screenshot at a time, three buttons, a comment box, and a progress bar at the top. Thumbnails along the bottom so they can jump back if they change their mind.",
  },
  {
    question: "Where is the data?",
    answer:
      "Turso (SQLite) for the database, Vercel Blob for files. Only you can see the responses for your own projects.",
  },
  {
    question: "Does this work for mobile apps?",
    answer:
      "Yes. When you create the project you pick web or mobile, and the layout adjusts. The voting flow is the same either way.",
  },
  {
    question: "Is there a limit on projects or clients?",
    answer:
      "No. Make as many as you want. Share with as many clients as you want.",
  },
  {
    question: "Can my team see the same project?",
    answer:
      "Not yet. Right now each account owns its own projects. Multi-seat is on the list.",
  },
]

// Footer links
export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  ],
}

// Problem/Solution content
export const PROBLEMS = [
  "Feedback arrives in five emails and a voice note.",
  "Your client says 'I'll know it when I see it' and means it.",
  "Half the replies are about the wrong screen.",
  "Two weeks later nobody remembers what was decided.",
  "You start the next round guessing.",
]

export const SOLUTIONS = [
  "One link replaces the email chain.",
  "Yes, Maybe, or No removes the guessing.",
  "Every comment is attached to the screen it's about.",
  "The record stays put, in the order you built the project.",
  "You start the next round knowing what to change.",
]
