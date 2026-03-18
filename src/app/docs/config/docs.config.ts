import { DocPage, SidebarSection } from '../models/docs.models';

const introToc = [
  { id: 'hero', title: 'Overview' },
  { id: 'modules', title: 'Main Modules' },
  { id: 'workflow', title: 'Getting Started' },
  { id: 'screenshots', title: 'Platform Views' },
  { id: 'code-examples', title: 'Code Examples' }
];

const standardToc = [
  { id: 'overview', title: 'Overview' },
  { id: 'features', title: 'Highlights' },
  { id: 'workflow', title: 'Step by Step' },
  { id: 'screenshots', title: 'Screenshots' },
  { id: 'code-examples', title: 'Code Examples' }
];

const walkthroughToc = [
  { id: 'overview', title: 'Overview' },
  { id: 'features', title: 'Highlights' },
  { id: 'workflow', title: 'Step by Step Guide' },
  { id: 'screenshots', title: 'Screenshot Walkthrough' }
];

function createGenericPage(
  id: string,
  title: string,
  routeSegment: string,
  description: string,
  icon: string
): DocPage {
  return {
    id,
    routeSegment,
    title,
    summary: description,
    description,
    audience: 'School administrators and operations teams',
    estimatedTime: '5 min read',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    featureCards: [
      {
        icon,
        title: `${title} setup`,
        description: `Configure ${title.toLowerCase()} with guided defaults, clear ownership, and role-aware access.`
      },
      {
        icon: 'sparkles',
        title: 'Operational clarity',
        description: 'Keep teams aligned with searchable records, saved filters, and progress checkpoints.'
      },
      {
        icon: 'layers',
        title: 'Reusable workflows',
        description: 'Apply the same clean process across campuses, classes, and staff roles.'
      }
    ],
    deepFeatures: [
      {
        icon: 'shield',
        title: 'Permission-aware actions',
        description: 'Show the right controls to the right staff members so daily work stays calm and predictable.'
      },
      {
        icon: 'chart',
        title: 'Live visibility',
        description: 'Monitor status and follow-ups from a single source of truth instead of scattered spreadsheets.'
      }
    ],
    steps: [
      {
        title: `Open ${title}`,
        description: `Start from the sidebar, open ${title}, and confirm you are working in the correct academic context.`
      },
      {
        title: 'Configure required details',
        description: 'Review the main fields, role permissions, and validation prompts before publishing anything.'
      },
      {
        title: 'Review and share',
        description: 'Save the change, confirm the summary panel, and notify the relevant team members if the workflow affects them.'
      }
    ],
    screenshots: [
      {
        eyebrow: title,
        title: `${title} dashboard`,
        caption: 'A compact summary view with key actions, filters, and recent activity.',
        tags: [],
        imageUrl: '/logo.png'
      },
      {
        eyebrow: 'Details',
        title: `${title} detail panel`,
        caption: 'A clean form surface for reviewing configuration and operational metadata.',
        tags: [],
        imageUrl: '/logo.png'
      }
    ],
    codeExamples: [
      {
        title: `${title} API request`,
        description: `Example request for loading ${title.toLowerCase()} data into an internal dashboard.`,
        language: 'bash',
        code: `curl -X GET "https://api.trikles.app/v1/${id}" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Accept: application/json"`
      }
    ],
    toc: standardToc
  };
}

export const docsRouteDefinitions: DocPage[] = [
  {
    id: 'introduction',
    routeSegment: 'introduction',
    title: 'Introduction',
    summary: 'Everything teams need to understand the Trikles platform and move through documentation quickly.',
    description:
      'Trikles is a connected school operations platform for academics, finance, attendance, assessments, and daily administration. This documentation hub is designed to feel fast, calm, and practical for implementation teams.',
    audience: 'Implementation teams, school leaders, and product champions',
    estimatedTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    hero: {
      title: 'Trikles Documentation',
      description:
        'Launch schools, manage classrooms, run exams, and handle finance workflows from a single documentation experience built for busy teams.',
      primaryHref: '#workflow',
      secondaryHref: '#modules'
    },
    featureCards: [
      {
        icon: 'clipboard',
        title: 'Exam Center',
        description: 'Create assessments, publish schedules, and maintain structured exam operations across classes.'
      },
      {
        icon: 'users',
        title: 'Classroom',
        description: 'Manage enrollment, students, and collaborative study groups without leaving the learning workflow.'
      },
      {
        icon: 'credit-card',
        title: 'Payments',
        description: 'Issue requests, review collections, and keep guardians informed with clear billing flows.'
      },
      {
        icon: 'check-circle',
        title: 'Attendance',
        description: 'Track presence, lateness, and absence trends with day-to-day operational visibility.'
      },
      {
        icon: 'chart',
        title: 'Performance Analysis',
        description: 'Turn academic data into actionable insight with class, student, and assessment-level trends.'
      }
    ],
    deepFeatures: [
      {
        icon: 'sparkles',
        title: 'Documentation-first rollout',
        description: 'Each module includes practical workflows, screenshots, and implementation snippets so new teams ramp quickly.'
      },
      {
        icon: 'search',
        title: 'Global navigation',
        description: 'Search, browse, and deep-link into any module page without losing the wider product context.'
      },
      {
        icon: 'school',
        title: 'Cross-module context',
        description: 'See how classroom activity, exams, attendance, and payments connect across the platform.'
      }
    ],
    steps: [
      {
        title: 'Start with the sidebar',
        description: 'Use the left navigation to jump straight into the module you are implementing or reviewing.'
      },
      {
        title: 'Open a focused module page',
        description: 'Every page gives you a short explanation, a practical sequence of steps, and examples you can adapt immediately.'
      },
      {
        title: 'Use snippets and screenshots',
        description: 'Reference UI captures and API examples to align product setup with internal onboarding or engineering work.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Overview',
        title: 'Unified operations dashboard',
        caption: 'A single screen for switching between academics, finance, attendance, and day-to-day administration.',
        tags: [],
        imageUrl: '/logo.png'
      },
      {
        eyebrow: 'Navigation',
        title: 'Reusable docs pattern',
        caption: 'The same layout scales across modules so new documentation pages can be added without redesigning the system.',
        tags: [],
        imageUrl: '/logo.png'
      }
    ],
    codeExamples: [
      {
        title: 'Bootstrap the Trikles client',
        description: 'A simple shared client for internal admin tooling or portal integrations.',
        language: 'ts',
        code: `const trikles = createTriklesClient({\n  baseUrl: environment.triklesApiUrl,\n  schoolId: 'green-valley-high',\n  token: session.accessToken\n});\n\nconst overview = await trikles.dashboard.getOverview();`
      },
      {
        title: 'Load docs navigation',
        description: 'Fetch page metadata to build a custom docs experience elsewhere in the platform.',
        language: 'ts',
        code: `export async function getDocsNavigation() {\n  const response = await fetch('/api/docs/navigation');\n\n  if (!response.ok) {\n    throw new Error('Unable to load documentation navigation');\n  }\n\n  return response.json();\n}`
      }
    ],
    toc: introToc
  },
  {
    id: 'add-exam',
    routeSegment: 'exams/add-exam',
    title: 'Add Exam',
    summary: 'Create interactive exams for young learners with simple filters, visual question cards, and an easy setup flow.',
    description:
      'Use the Add Exam feature to create interactive assessments for students. Teachers can browse the question bank, select questions, and generate exams based on subjects, topics, and grade levels. The process is simple and designed to help educators build engaging learning experiences.',
    audience: 'Teachers and school administrators',
    estimatedTime: '8 min read',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    featureCards: [
      {
        icon: 'clipboard',
        title: 'Exam Builder',
        description: 'Create a new exam by selecting questions from the interactive question bank.'
      },
      {
        icon: 'calendar',
        title: 'Schedule Readiness',
        description: 'Prepare exams in advance and manage them according to class or grade level.'
      },
      {
        icon: 'chart',
        title: 'Marks Distribution',
        description: 'Organize questions and evaluation structure in a simple workflow.'
      },
      {
        icon: 'layers',
        title: 'Reusable Templates',
        description: 'Reuse exam structures and quickly generate new assessments.'
      },
      {
        icon: 'shield',
        title: 'Conflict Detection',
        description: 'Review warnings and ensure exams are correctly configured before publishing.'
      }
    ],
    deepFeatures: [],
    steps: [
      {
        title: 'Step 1 - Choose Grade and Filters',
        description: 'Select the grade level and apply filters such as subject, topic, or template type to narrow down available questions.'
      },
      {
        title: 'Step 2 - Explore the Question Bank',
        description: 'Browse the collection of interactive question cards. Each card represents an image-based learning question suitable for children.'
      },
      {
        title: 'Step 3 - Add Questions to the Exam',
        description: 'Click the "Add" button on any question card to include it in the exam. Selected questions can be removed or replaced anytime.'
      },
      {
        title: 'Step 4 - Create the Exam',
        description: 'Once questions are selected, click "Add Exam" and enter exam details such as name, grade, and description.'
      },
      {
        title: 'Step 5 - Save and Publish',
        description: 'Save the exam configuration so it becomes available for teachers or students.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Dashboard',
        caption: 'This screen displays the question bank where teachers can browse interactive questions for the exam.',
        tags: [],
        imageUrl: '/add-exam-1.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Grade Selection',
        caption: 'Teachers can select the grade level to filter questions suitable for specific classes.',
        tags: [],
        imageUrl: '/add-exam-2.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Subject and Topic Filters',
        caption: 'Filters allow teachers to narrow down the question bank based on subject, topic, or template type.',
        tags: [],
        imageUrl: '/add-exam-3.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Question Bank Interface',
        caption: 'The question bank shows interactive question cards designed for young learners. Each card can be added to the exam.',
        tags: [],
        imageUrl: '/add-exam-4.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Create Exam Window',
        caption: 'Once questions are selected, the Add Exam window allows teachers to define the exam name, grade, and description.',
        tags: [],
        imageUrl: '/add-exam-5.png'
      }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the main screens teachers and administrators will use while building an exam.',
    toc: walkthroughToc
  },
  {
    id: 'students',
    routeSegment: 'classroom/students',
    title: 'Students',
    summary: 'Manage rosters, profile details, academic placement, and engagement data from one classroom-focused view.',
    description:
      'The Students module is built for quick classroom administration. Teachers and student success teams can review academic placement, guardians, attendance, and finance signals without jumping across multiple tools.',
    audience: 'Class teachers and student success teams',
    estimatedTime: '7 min read',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    featureCards: [
      {
        icon: 'users',
        title: 'Roster overview',
        description: 'Browse active students by class, section, admission status, and custom tags.'
      },
      {
        icon: 'school',
        title: 'Profile actions',
        description: 'Update guardians, contact details, and placement metadata directly from the roster experience.'
      },
      {
        icon: 'chart',
        title: 'Engagement insight',
        description: 'Bring attendance, payment, and performance signals into the same classroom workflow.'
      }
    ],
    deepFeatures: [
      {
        icon: 'layers',
        title: 'Bulk updates',
        description: 'Move students, add tags, and update status across multiple records in one action.'
      },
      {
        icon: 'shield',
        title: 'Safer edits',
        description: 'Important roster changes remain traceable through clear audit records.'
      }
    ],
    steps: [
      {
        title: 'Filter the roster',
        description: 'Use class, section, and status filters to narrow the list to the students you need.'
      },
      {
        title: 'Open the student profile',
        description: 'Review demographics, guardians, and classroom indicators before making changes.'
      },
      {
        title: 'Save and notify',
        description: 'Commit updates, verify the audit trail, and communicate any downstream changes to staff.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Roster',
        title: 'Student list with smart filters',
        caption: 'A high-signal roster view showing attendance, payment, and class metadata at a glance.',
        tags: ['Roster', 'Filters', 'Status'],
        imageUrl: '/students-1.png'
      },
      {
        eyebrow: 'Profile',
        title: 'Student profile drawer',
        caption: 'Detailed student context appears inline so teachers stay inside the classroom workflow.',
        tags: ['Profile', 'Guardian', 'Activity'],
        imageUrl: '/logo.png'
      }
    ],
    codeExamples: [
      {
        title: 'List students for a section',
        description: 'Retrieve classroom students for an admin or teacher dashboard.',
        language: 'ts',
        code: `const response = await fetch('/api/students?class=Grade%208&section=A', {\n  headers: {\n    Authorization: \`Bearer \${token}\`\n  }\n});\n\nconst students = await response.json();`
      },
      {
        title: 'Transform roster results',
        description: 'Shape API data into a compact classroom row model.',
        language: 'ts',
        code: `const rosterRows = students.map((student) => ({\n  id: student.id,\n  name: student.fullName,\n  attendance: student.metrics.attendancePercentage,\n  pendingFees: student.finance.pendingBalance\n}));`
      }
    ],
    toc: standardToc
  },
  {
    id: 'request-payment',
    routeSegment: 'payments/request-payment',
    title: 'Request Payment',
    summary: 'Issue transparent payment requests with due dates, reminders, and status tracking for guardians.',
    description:
      'Request Payment helps finance teams raise one-time or recurring charges, keep families informed, and monitor collections from a clean operational surface.',
    audience: 'Finance teams and school administrators',
    estimatedTime: '9 min read',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    featureCards: [
      {
        icon: 'credit-card',
        title: 'Flexible billing',
        description: 'Raise one-time or recurring requests tied to students, classes, or fee categories.'
      },
      {
        icon: 'calendar',
        title: 'Reminder flows',
        description: 'Automate reminders around due dates to improve payment completion.'
      },
      {
        icon: 'chart',
        title: 'Status visibility',
        description: 'Track pending, paid, overdue, and partially paid requests in one workflow.'
      }
    ],
    deepFeatures: [
      {
        icon: 'sparkles',
        title: 'Category-based charging',
        description: 'Map requests to tuition, transport, library, or any custom line item.'
      },
      {
        icon: 'school',
        title: 'Guardian communication',
        description: 'Send branded notices with amount summaries, due dates, and secure payment links.'
      }
    ],
    steps: [
      {
        title: 'Choose the billing scope',
        description: 'Select the class, group, or student audience that should receive the request.'
      },
      {
        title: 'Set amount and due date',
        description: 'Add line items, define due dates, and configure reminder timing.'
      },
      {
        title: 'Issue and monitor',
        description: 'Preview the final summary, send it to guardians, and track collection status from the dashboard.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Composer',
        title: 'Payment request builder',
        caption: 'Finance teams can create clear requests with grouped line items and guardian messaging.',
        tags: ['Billing', 'Due date', 'Audience'],
        imageUrl: '/request-payments.png'
      },
      {
        eyebrow: 'Collections',
        title: 'Payment status table',
        caption: 'Track paid, overdue, and partially paid requests with helpful trend indicators.',
        tags: ['Status', 'Reminders', 'Collections'],
        imageUrl: '/logo.png'
      }
    ],
    codeExamples: [
      {
        title: 'Create a payment request',
        description: 'Sample payload for issuing a fee request to a guardian group.',
        language: 'bash',
        code: `curl -X POST "https://api.trikles.app/v1/payments/requests" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "label": "Transport Fee - April",\n    "amount": 2800,\n    "currency": "INR",\n    "dueDate": "2026-04-10",\n    "audience": "grade-7-transport"\n  }'`
      },
      {
        title: 'Build a reminder schedule',
        description: 'Generate reminder dates around a due date for proactive collections.',
        language: 'ts',
        code: `function buildReminderSchedule(dueDate: string) {\n  const due = new Date(dueDate);\n\n  return [-7, -2, 1].map((offset) => {\n    const reminder = new Date(due);\n    reminder.setDate(reminder.getDate() + offset);\n    return reminder.toISOString();\n  });\n}`
      }
    ],
    toc: standardToc
  },
  createGenericPage('schools', 'Schools', 'schools', 'Manage school profiles, branches, and organization-level configuration.', 'school'),
  createGenericPage('exam-center', 'Exam Center', 'exams', 'Browse exam operations, schedules, and central assessment management shortcuts.', 'clipboard'),
  {
    id: 'show-exam',
    routeSegment: 'exams/show-exam',
    title: 'Show Exam',
    summary: 'Review created exams, inspect schedules, and open detailed exam information from a single walkthrough.',
    description:
      'Use the Show Exam section to review published and draft exams, inspect supporting details, and quickly move through the exam list with a clear visual workflow. This page helps teachers and administrators confirm exam setup before sharing it with students.',
    audience: 'Teachers, coordinators, and school administrators',
    estimatedTime: '7 min read',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    featureCards: [
      {
        icon: 'clipboard',
        title: 'Exam Overview',
        description: 'Review all created exams from a single list with quick access to status and details.'
      },
      {
        icon: 'calendar',
        title: 'Schedule Visibility',
        description: 'Inspect exam timing and related scheduling information before distribution.'
      },
      {
        icon: 'search',
        title: 'Faster Review Flow',
        description: 'Move through the exam records quickly and open the exact item you need.'
      },
      {
        icon: 'shield',
        title: 'Validation Check',
        description: 'Confirm the final exam setup and catch inconsistencies before publishing.'
      }
    ],
    deepFeatures: [],
    steps: [
      {
        title: 'Step 1 - Open the exam list',
        description: 'Start from the Show Exam page to review all available exams in one organized view.'
      },
      {
        title: 'Step 2 - Scan records and filters',
        description: 'Use the visible exam entries and controls to narrow down the exact exam you want to inspect.'
      },
      {
        title: 'Step 3 - Open exam details',
        description: 'Select an exam to review its structure, questions, and supporting information.'
      },
      {
        title: 'Step 4 - Verify configuration',
        description: 'Check that the exam setup, timing, and content are correct before any final action.'
      },
      {
        title: 'Step 5 - Confirm readiness',
        description: 'Use the final screens to confirm the exam is ready for staff or student access.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Walkthrough',
        title: 'Show Exam Dashboard',
        caption: 'The initial Show Exam screen provides a clear list of available exams for quick review.',
        tags: [],
        imageUrl: '/show-exam-1.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Selection View',
        caption: 'This step highlights how users move through the available exam records and choose one to inspect.',
        tags: [],
        imageUrl: '/show-exam-2.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Listing Details',
        caption: 'The list view exposes useful summary information so teams can find the correct exam quickly.',
        tags: [],
        imageUrl: '/show-exam-3.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Review Screen',
        caption: 'This screen helps users inspect the chosen exam and review its primary details.',
        tags: [],
        imageUrl: '/show-exam-4.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Content Overview',
        caption: 'Users can continue validating the selected exam and verify the visible content structure.',
        tags: [],
        imageUrl: '/show-exam-5.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Status and Metadata',
        caption: 'This view shows more detailed exam information to support review before final confirmation.',
        tags: [],
        imageUrl: '/show-exam-6.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Expanded Exam Inspection',
        caption: 'Teachers and administrators can inspect additional exam information in a more focused screen.',
        tags: [],
        imageUrl: '/show-exam-7.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Final Review Window',
        caption: 'This stage supports a last review of the exam before teams move on to the next action.',
        tags: [],
        imageUrl: '/show-exam-8.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Exam Completion Check',
        caption: 'The final screenshot completes the walkthrough and shows the closing review state for the exam.',
        tags: [],
        imageUrl: '/show-exam-9.png'
      }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the main screens staff will use while reviewing and inspecting exams.',
    toc: walkthroughToc
  },
  {
    id: 'enrollment',
    routeSegment: 'classroom/enrollment',
    title: 'Enrollment',
    summary: 'Track admissions, placement status, and onboarding progress for incoming students.',
    description:
      'The Enrollment section helps school teams review incoming admissions, track onboarding progress, and move students from application to active classroom status through a clear operational workflow.',
    audience: 'Admissions teams and school administrators',
    estimatedTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    featureCards: [
      {
        icon: 'users',
        title: 'Admission pipeline',
        description: 'Track applicants and onboarding progress from one organized enrollment view.'
      },
      {
        icon: 'school',
        title: 'Placement readiness',
        description: 'Review class placement and required academic context before final admission.'
      },
      {
        icon: 'shield',
        title: 'Safer onboarding',
        description: 'Confirm each enrollment step so records remain accurate before activation.'
      }
    ],
    deepFeatures: [],
    steps: [
      {
        title: 'Step 1 - Open the enrollment list',
        description: 'Start from Enrollment to review pending and in-progress student admissions.'
      },
      {
        title: 'Step 2 - Review onboarding status',
        description: 'Check the current student stage, submitted information, and any missing items.'
      },
      {
        title: 'Step 3 - Confirm placement details',
        description: 'Validate class, section, and related details before completing the process.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Walkthrough',
        title: 'Enrollment dashboard',
        caption: 'This screen shows the enrollment workflow and the status of students moving through admission.',
        tags: [],
        imageUrl: '/enrollment.png'
      }
    ],
    codeExamples: [
      {
        title: 'Enrollment API request',
        description: 'Example request for loading enrollment data into an internal dashboard.',
        language: 'bash',
        code: `curl -X GET "https://api.trikles.app/v1/enrollment" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Accept: application/json"`
      }
    ],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the enrollment screen used by admissions and onboarding teams.',
    toc: walkthroughToc
  },
  {
    id: 'study-groups',
    routeSegment: 'classroom/study-groups',
    title: 'Study Groups',
    summary: 'Organize collaborative learning groups for peer instruction and targeted interventions.',
    description:
      'The Study Groups section helps teachers organize student groups, review group structure, and support collaborative learning workflows from a focused classroom view.',
    audience: 'Teachers and academic coordinators',
    estimatedTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    featureCards: [
      {
        icon: 'users',
        title: 'Group organization',
        description: 'Create and review study groups using a simple classroom-friendly workflow.'
      },
      {
        icon: 'layers',
        title: 'Collaborative planning',
        description: 'Arrange students into targeted groups for projects, peer learning, or intervention.'
      },
      {
        icon: 'chart',
        title: 'Quick visibility',
        description: 'Check group structure and classroom coverage from one clear operational screen.'
      }
    ],
    deepFeatures: [],
    steps: [
      {
        title: 'Step 1 - Open study groups',
        description: 'Start from the Study Groups page to view existing student groups or prepare a new grouping plan.'
      },
      {
        title: 'Step 2 - Review group structure',
        description: 'Check how students are arranged and confirm the grouping logic for the classroom.'
      },
      {
        title: 'Step 3 - Finalize the setup',
        description: 'Confirm the group arrangement so it can be used in collaborative classroom activities.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Walkthrough',
        title: 'Study groups dashboard',
        caption: 'This screen shows how teachers can review and manage study groups from a dedicated classroom workflow.',
        tags: [],
        imageUrl: '/study-groups.png'
      }
    ],
    codeExamples: [
      {
        title: 'Study groups API request',
        description: 'Example request for loading classroom study groups into an internal dashboard.',
        language: 'bash',
        code: `curl -X GET "https://api.trikles.app/v1/study-groups" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Accept: application/json"`
      }
    ],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the study groups screen used to organize collaborative classroom work.',
    toc: walkthroughToc
  },
  {
    id: 'view-payments',
    routeSegment: 'payments/view-payments',
    title: 'View Payments',
    summary: 'Inspect payment history, status trends, and reconciliation activity across the school.',
    description:
      'The View Payments section gives finance teams a clear operational view of payment records, collection status, and reconciliation progress so they can review school-wide transactions efficiently.',
    audience: 'Finance teams and school administrators',
    estimatedTime: '7 min read',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    featureCards: [
      {
        icon: 'credit-card',
        title: 'Payment visibility',
        description: 'Review transactions, receipts, and payment records from a single finance screen.'
      },
      {
        icon: 'chart',
        title: 'Status tracking',
        description: 'Inspect collection status and identify records that need attention.'
      },
      {
        icon: 'search',
        title: 'Fast lookup',
        description: 'Find payment records quickly when reviewing history or reconciliation details.'
      }
    ],
    deepFeatures: [],
    steps: [
      {
        title: 'Step 1 - Open payment history',
        description: 'Start from View Payments to inspect all school payment records in one place.'
      },
      {
        title: 'Step 2 - Review payment entries',
        description: 'Check transaction details, status, and supporting context for the selected records.'
      },
      {
        title: 'Step 3 - Confirm reconciliation state',
        description: 'Use the payment view to verify whether the record is complete, pending, or needs follow-up.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Walkthrough',
        title: 'Payments overview screen',
        caption: 'This screen shows the payment history and status view used by finance teams for review and reconciliation.',
        tags: [],
        imageUrl: '/view-payments.png'
      }
    ],
    codeExamples: [
      {
        title: 'View payments API request',
        description: 'Example request for loading payment history into an internal dashboard.',
        language: 'bash',
        code: `curl -X GET "https://api.trikles.app/v1/payments" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Accept: application/json"`
      }
    ],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the payment history screen used for finance review and reconciliation.',
    toc: walkthroughToc
  },
  {
    id: 'performance-analysis',
    routeSegment: 'modules/performance-analysis',
    title: 'Performance Analysis',
    summary: 'Analyze outcomes through student, subject, and assessment-level trends.',
    description:
      'The Performance Analysis section helps academic teams review trends, compare outcomes, and inspect student or subject-level performance using a clear visual workflow designed for fast educational insight.',
    audience: 'Academic coordinators, teachers, and school leaders',
    estimatedTime: '7 min read',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    featureCards: [
      {
        icon: 'chart',
        title: 'Outcome trends',
        description: 'Review performance movement across students, exams, and subjects from one analytics view.'
      },
      {
        icon: 'users',
        title: 'Student-level insight',
        description: 'Inspect individual or grouped performance signals to identify who needs support.'
      },
      {
        icon: 'layers',
        title: 'Comparative analysis',
        description: 'Compare performance patterns across classes, topics, or time periods.'
      },
      {
        icon: 'sparkles',
        title: 'Readable dashboards',
        description: 'Turn raw academic data into an easy-to-scan operational dashboard for school teams.'
      }
    ],
    deepFeatures: [],
    steps: [
      {
        title: 'Step 1 - Open the analysis dashboard',
        description: 'Start from Performance Analysis to review the main academic trends and reporting widgets.'
      },
      {
        title: 'Step 2 - Inspect detailed views',
        description: 'Move through the analysis screens to review subject, class, or student-level performance information.'
      },
      {
        title: 'Step 3 - Compare results',
        description: 'Use the available charts and summaries to compare outcomes and identify important patterns.'
      },
      {
        title: 'Step 4 - Confirm actionable insight',
        description: 'Finish by reviewing the summarized results so teams can plan follow-up instruction or intervention.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Walkthrough',
        title: 'Performance dashboard overview',
        caption: 'This screen introduces the main performance analysis dashboard with key academic insight at a glance.',
        tags: [],
        imageUrl: '/performance-analysis-1.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Detailed performance breakdown',
        caption: 'The second screen expands the analysis workflow with a more detailed performance view.',
        tags: [],
        imageUrl: '/performance-analysis-2.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Comparative analytics view',
        caption: 'This screen helps staff compare academic performance across different dimensions and categories.',
        tags: [],
        imageUrl: '/performance-analysis-3.png'
      },
      {
        eyebrow: 'Walkthrough',
        title: 'Final performance review',
        caption: 'The final screen completes the walkthrough with a more focused academic review state.',
        tags: [],
        imageUrl: '/performance-analysis-4.png'
      }
    ],
    codeExamples: [
      {
        title: 'Performance analysis API request',
        description: 'Example request for loading academic performance data into an internal dashboard.',
        language: 'bash',
        code: `curl -X GET "https://api.trikles.app/v1/performance-analysis" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Accept: application/json"`
      }
    ],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the analysis screens used to review academic performance trends.',
    toc: walkthroughToc
  },
  {
    id: 'attendance',
    routeSegment: 'modules/attendance',
    title: 'Attendance',
    summary: 'Monitor daily attendance, late arrivals, and absence patterns with actionable insight.',
    description:
      'The Attendance section helps school teams review daily presence, absence, and late-arrival patterns from a clean operational screen designed for quick classroom follow-up.',
    audience: 'Teachers and school administrators',
    estimatedTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    featureCards: [
      { icon: 'check-circle', title: 'Daily tracking', description: 'Review student attendance records from a clear day-to-day workflow.' },
      { icon: 'chart', title: 'Pattern visibility', description: 'Spot absence and lateness trends before they become bigger issues.' },
      { icon: 'users', title: 'Classroom follow-up', description: 'Give teachers and operations teams one place to review attendance status.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open attendance', description: 'Start from Attendance to review the latest class or school-wide records.' },
      { title: 'Step 2 - Inspect student status', description: 'Check who is present, absent, or late from the current attendance view.' },
      { title: 'Step 3 - Confirm and follow up', description: 'Use the attendance screen to confirm the final record and plan follow-up where needed.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Attendance dashboard', caption: 'This screen shows the attendance workflow used to review presence and absence records.', tags: [], imageUrl: '/attendance.png' }
    ],
    codeExamples: [
      {
        title: 'Attendance API request',
        description: 'Example request for loading attendance data into an internal dashboard.',
        language: 'bash',
        code: `curl -X GET "https://api.trikles.app/v1/attendance" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Accept: application/json"`
      }
    ],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the attendance screen used for daily review and follow-up.',
    toc: walkthroughToc
  },
  {
    id: 'pricing-plans',
    routeSegment: 'modules/pricing-plans',
    title: 'Pricing & Plans',
    summary: 'Understand Trikles subscriptions, licensing structure, and feature availability.',
    description:
      'The Pricing & Plans section gives teams a clear summary of subscription options, included capabilities, and plan-level differences so they can review licensing with confidence.',
    audience: 'School leaders and operations teams',
    estimatedTime: '5 min read',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    featureCards: [
      { icon: 'sparkles', title: 'Plan comparison', description: 'Compare available plans and understand what each subscription includes.' },
      { icon: 'layers', title: 'Feature visibility', description: 'Review which modules and capabilities are available in each plan.' },
      { icon: 'school', title: 'Purchase readiness', description: 'Give teams the information they need before making a licensing decision.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open pricing', description: 'Start from Pricing & Plans to review the available subscription options.' },
      { title: 'Step 2 - Compare plan details', description: 'Inspect the differences between plans, limits, and included features.' },
      { title: 'Step 3 - Confirm the fit', description: 'Use the final pricing information to identify the right plan for the school.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Pricing and plans overview', caption: 'This screen presents the pricing layout used to compare plans and included features.', tags: [], imageUrl: '/pricing-and-plans.png' }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the pricing and plan comparison screen.',
    toc: walkthroughToc
  },
  {
    id: 'question-creation',
    routeSegment: 'modules/question-creation',
    title: 'Question Creation',
    summary: 'Author question banks, templates, and reusable academic content.',
    description:
      'The Question Creation section helps academic teams build question banks, review reusable templates, and manage structured assessment content through a visual creation workflow.',
    audience: 'Teachers, academic coordinators, and content teams',
    estimatedTime: '8 min read',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    featureCards: [
      { icon: 'book', title: 'Question authoring', description: 'Create and manage academic questions from a dedicated content workflow.' },
      { icon: 'layers', title: 'Reusable templates', description: 'Build structured templates that can be reused across assessments.' },
      { icon: 'sparkles', title: 'Content consistency', description: 'Keep question formats and creation steps consistent for teams.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open question creation', description: 'Start from the question creation module to review existing content or create new questions.' },
      { title: 'Step 2 - Move through the authoring flow', description: 'Use the available screens to add question details, structure, and learning content.' },
      { title: 'Step 3 - Finalize reusable content', description: 'Confirm the question setup so it can be reused in future exams or content libraries.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Question creation start screen', caption: 'This first screen introduces the question creation flow and content workspace.', tags: [], imageUrl: '/question-creation-1.png' },
      { eyebrow: 'Walkthrough', title: 'Question editor view', caption: 'This screen shows the editing workflow used while authoring question content.', tags: [], imageUrl: '/question-creation-2.png' },
      { eyebrow: 'Walkthrough', title: 'Template and content setup', caption: 'The creation flow continues with structured content and template setup options.', tags: [], imageUrl: '/question-creation-3.png' },
      { eyebrow: 'Walkthrough', title: 'Question details screen', caption: 'This view helps teams review the core details used in a question record.', tags: [], imageUrl: '/question-creation-4.png' },
      { eyebrow: 'Walkthrough', title: 'Question content workflow', caption: 'The next screen continues the content workflow for creating reusable academic questions.', tags: [], imageUrl: '/question-creation-5.png' },
      { eyebrow: 'Walkthrough', title: 'Question review stage', caption: 'This screen supports a more focused review of the question before final save.', tags: [], imageUrl: '/question-creation-6.png' },
      { eyebrow: 'Walkthrough', title: 'Final question creation state', caption: 'The final screen completes the walkthrough for the question creation module.', tags: [], imageUrl: '/question-creation-7.png' }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the screens used to create and manage reusable academic questions.',
    toc: walkthroughToc
  },
  {
    id: 'gallery',
    routeSegment: 'modules/gallery',
    title: 'Gallery',
    summary: 'Manage media uploads, event albums, and school brand assets for communication workflows.',
    description:
      'The Gallery section helps teams manage school media, event albums, and communication assets from a single visual workflow built for organized content review.',
    audience: 'School administrators and communication teams',
    estimatedTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    featureCards: [
      { icon: 'image', title: 'Media organization', description: 'Review uploaded images and media assets from one visual management screen.' },
      { icon: 'layers', title: 'Album structure', description: 'Keep gallery items grouped cleanly for events and communication workflows.' },
      { icon: 'sparkles', title: 'Brand readiness', description: 'Maintain presentation-ready media for school messaging and updates.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open the gallery', description: 'Start from Gallery to review uploaded images, albums, and visual assets.' },
      { title: 'Step 2 - Inspect media layouts', description: 'Move through the gallery screens to check how media is organized and presented.' },
      { title: 'Step 3 - Finalize review', description: 'Confirm the media structure so assets are ready for communication and record keeping.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Gallery overview screen', caption: 'This first screen shows the main gallery workflow for managing school media.', tags: [], imageUrl: '/gallery.png' },
      { eyebrow: 'Walkthrough', title: 'Gallery detail view', caption: 'The second screen shows a more focused view of gallery content and media organization.', tags: [], imageUrl: '/gallery-2.png' }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the gallery screens used to organize media and event assets.',
    toc: walkthroughToc
  },
  {
    id: 'timetable-generation',
    routeSegment: 'modules/timetable-generation',
    title: 'Timetable Generation',
    summary: 'Generate schedules while balancing rooms, teachers, and subjects.',
    description:
      'The Timetable Generation section helps administrators build, review, and refine school schedules using a structured workflow for classes, teachers, and rooms.',
    audience: 'School administrators and academic coordinators',
    estimatedTime: '7 min read',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    featureCards: [
      { icon: 'calendar', title: 'Schedule planning', description: 'Review and generate timetable structures from one organized screen.' },
      { icon: 'school', title: 'Resource balancing', description: 'Align teachers, classes, and room usage while building the timetable.' },
      { icon: 'chart', title: 'Operational visibility', description: 'Check the generated timetable before publishing it to staff.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open timetable generation', description: 'Start from the timetable module to review the current scheduling workflow.' },
      { title: 'Step 2 - Inspect timetable setup', description: 'Move through the scheduling screens to check time slots, classes, and related planning details.' },
      { title: 'Step 3 - Confirm the generated timetable', description: 'Use the final view to validate the schedule before wider distribution.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Timetable planning screen', caption: 'This screen introduces the timetable workflow used to prepare schedule generation.', tags: [], imageUrl: '/timetable-1.png' },
      { eyebrow: 'Walkthrough', title: 'Generated timetable review', caption: 'The second screen shows the timetable review state before final confirmation.', tags: [], imageUrl: '/timetable-2.png' }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the timetable planning and review screens.',
    toc: walkthroughToc
  },
  {
    id: 'library-books',
    routeSegment: 'modules/library-books',
    title: 'Library Books',
    summary: 'Manage catalogs, circulation, and student borrowing workflows.',
    description:
      'The Library Books section helps teams manage book records, review catalog entries, and support circulation workflows through a clean library management interface.',
    audience: 'Library staff and school administrators',
    estimatedTime: '6 min read',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    featureCards: [
      { icon: 'library', title: 'Catalog visibility', description: 'Review book records and library inventory from a dedicated management screen.' },
      { icon: 'users', title: 'Borrowing workflow', description: 'Support issue and return processes through clear circulation views.' },
      { icon: 'search', title: 'Faster lookup', description: 'Locate books and records quickly when managing library operations.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open the library module', description: 'Start from Library Books to review catalog records and available items.' },
      { title: 'Step 2 - Inspect book records', description: 'Use the screens to check book details, availability, and library workflow information.' },
      { title: 'Step 3 - Confirm circulation readiness', description: 'Finish by reviewing the records so the library team can continue with confidence.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Library catalog overview', caption: 'This first screen shows the library catalog view used to manage book records.', tags: [], imageUrl: '/library-1.png' },
      { eyebrow: 'Walkthrough', title: 'Library detail workflow', caption: 'The second screen gives a more focused view of library record management and circulation workflow.', tags: [], imageUrl: '/library-2.png' }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the library catalog and record management screens.',
    toc: walkthroughToc
  },
  {
    id: 'class-diary',
    routeSegment: 'modules/class-diary',
    title: 'Class Diary',
    summary: 'Capture class notes, homework updates, and instructor reflections.',
    description:
      'The Class Diary section helps teachers record lesson notes, homework, and classroom reflections in a simple workflow that keeps day-to-day teaching records organized.',
    audience: 'Teachers and academic coordinators',
    estimatedTime: '5 min read',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    featureCards: [
      { icon: 'book', title: 'Daily class notes', description: 'Capture class summaries and lesson updates from one teaching workflow.' },
      { icon: 'layers', title: 'Homework visibility', description: 'Review and manage homework notes alongside lesson records.' },
      { icon: 'sparkles', title: 'Teaching continuity', description: 'Keep instructional notes organized for future follow-up and review.' }
    ],
    deepFeatures: [],
    steps: [
      { title: 'Step 1 - Open the class diary', description: 'Start from Class Diary to review or add classroom notes and updates.' },
      { title: 'Step 2 - Inspect recorded entries', description: 'Use the diary screen to check lesson notes, homework, and teaching context.' },
      { title: 'Step 3 - Confirm the daily record', description: 'Finish by reviewing the final class entry so records remain complete and useful.' }
    ],
    screenshots: [
      { eyebrow: 'Walkthrough', title: 'Class diary screen', caption: 'This screen shows the class diary workflow used to capture notes, homework, and daily teaching records.', tags: [], imageUrl: '/class-diary.png' }
    ],
    codeExamples: [],
    workflowHeading: 'Step by Step Guide',
    screenshotsHeading: 'Screenshot Walkthrough',
    screenshotsDescription: 'A visual walkthrough of the class diary screen used for daily instructional record keeping.',
    toc: walkthroughToc
  }
];

export const docsById = Object.fromEntries(
  docsRouteDefinitions.map((doc) => [doc.id, doc])
) as Record<string, DocPage>;

export const sidebarSections: SidebarSection[] = [
  {
    title: 'Introduction',
    defaultOpen: true,
    items: [{ label: 'Introduction', route: '/docs/introduction', docId: 'introduction' }]
  },
  {
    title: 'Schools',
    defaultOpen: true,
    items: [{ label: 'Schools', route: '/docs/schools', docId: 'schools' }]
  },
  {
    title: 'Exam Center',
    defaultOpen: true,
    items: [
      { label: 'Exam Center', route: '/docs/exams', docId: 'exam-center' },
      { label: 'Add Exam', route: '/docs/exams/add-exam', docId: 'add-exam' },
      { label: 'Show Exam', route: '/docs/exams/show-exam', docId: 'show-exam' }
    ]
  },
  {
    title: 'Classroom',
    defaultOpen: true,
    items: [
      { label: 'Enrollment', route: '/docs/classroom/enrollment', docId: 'enrollment' },
      { label: 'Students', route: '/docs/classroom/students', docId: 'students' },
      { label: 'Study Groups', route: '/docs/classroom/study-groups', docId: 'study-groups' }
    ]
  },
  {
    title: 'Payments',
    defaultOpen: true,
    items: [
      { label: 'Request Payment', route: '/docs/payments/request-payment', docId: 'request-payment' },
      { label: 'View Payments', route: '/docs/payments/view-payments', docId: 'view-payments' }
    ]
  },
  {
    title: 'Other Modules',
    items: [
      { label: 'Performance Analysis', route: '/docs/modules/performance-analysis', docId: 'performance-analysis' },
      { label: 'Attendance', route: '/docs/modules/attendance', docId: 'attendance' },
      { label: 'Pricing & Plans', route: '/docs/modules/pricing-plans', docId: 'pricing-plans' },
      { label: 'Question Creation', route: '/docs/modules/question-creation', docId: 'question-creation' },
      { label: 'Gallery', route: '/docs/modules/gallery', docId: 'gallery' },
      { label: 'Timetable Generation', route: '/docs/modules/timetable-generation', docId: 'timetable-generation' },
      { label: 'Library Books', route: '/docs/modules/library-books', docId: 'library-books' },
      { label: 'Class Diary', route: '/docs/modules/class-diary', docId: 'class-diary' }
    ]
  }
];
