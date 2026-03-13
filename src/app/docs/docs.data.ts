import { DocPage, SidebarSection } from './docs.models';

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
        tags: ['Dashboard', 'Filters', 'Actions']
      },
      {
        eyebrow: 'Details',
        title: `${title} detail panel`,
        caption: 'A clean form surface for reviewing configuration and operational metadata.',
        tags: ['Forms', 'Status', 'Review']
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
        tags: ['Overview', 'Metrics', 'Alerts']
      },
      {
        eyebrow: 'Navigation',
        title: 'Reusable docs pattern',
        caption: 'The same layout scales across modules so new documentation pages can be added without redesigning the system.',
        tags: ['Navigation', 'TOC', 'Search']
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
    summary: 'Create structured assessments with schedules, subjects, and grading rules that stay consistent across classes.',
    description:
      'Use Add Exam to define a complete assessment shell before teachers begin preparation. Trikles helps coordinators manage classes, subjects, marks distribution, and timetable validation from one clean workflow.',
    audience: 'Academic coordinators and exam administrators',
    estimatedTime: '8 min read',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    featureCards: [
      {
        icon: 'clipboard',
        title: 'Exam builder',
        description: 'Configure exam name, session, board, class coverage, and publication status from a single setup screen.'
      },
      {
        icon: 'calendar',
        title: 'Schedule readiness',
        description: 'Review time windows and spot conflicts before the exam is visible to teachers or students.'
      },
      {
        icon: 'chart',
        title: 'Marks distribution',
        description: 'Split theory, practical, and internal marks in a clear, policy-aligned workflow.'
      }
    ],
    deepFeatures: [
      {
        icon: 'layers',
        title: 'Reusable templates',
        description: 'Store common exam structures and reapply them for future terms or branches.'
      },
      {
        icon: 'shield',
        title: 'Conflict detection',
        description: 'Flag overlapping classes, incomplete marks, and timetable issues before publishing.'
      }
    ],
    steps: [
      {
        title: 'Define the exam shell',
        description: 'Set the title, academic session, classes, and the overall exam date window.'
      },
      {
        title: 'Attach subjects and marks',
        description: 'Add the subjects, invigilators, and grading logic for each class or section.'
      },
      {
        title: 'Validate and publish',
        description: 'Review warnings, resolve overlaps, and publish once the full configuration looks correct.'
      }
    ],
    screenshots: [
      {
        eyebrow: 'Builder',
        title: 'Exam setup form',
        caption: 'A multi-step builder for session details, class mapping, and publish controls.',
        tags: ['Session', 'Classes', 'Publish']
      },
      {
        eyebrow: 'Validation',
        title: 'Conflict review panel',
        caption: 'Warnings surface scheduling or marks distribution issues before the exam goes live.',
        tags: ['Warnings', 'Subjects', 'Review']
      }
    ],
    codeExamples: [
      {
        title: 'Create an exam via API',
        description: 'Post a new exam definition from an internal admin workflow.',
        language: 'bash',
        code: `curl -X POST "https://api.trikles.app/v1/exams" \\\n  -H "Authorization: Bearer <token>" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "name": "Midterm 2026",\n    "session": "2025-2026",\n    "classes": ["Grade 9", "Grade 10"],\n    "publish": false\n  }'`
      },
      {
        title: 'Validate subject distribution',
        description: 'Check that every subject has complete marks coverage before publishing.',
        language: 'ts',
        code: `const hasCompleteDistribution = exam.subjects.every((subject) => {\n  return subject.theoryMarks + subject.practicalMarks === subject.totalMarks;\n});\n\nif (!hasCompleteDistribution) {\n  throw new Error('Marks distribution is incomplete for one or more subjects.');\n}`
      }
    ],
    toc: standardToc
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
        tags: ['Roster', 'Filters', 'Status']
      },
      {
        eyebrow: 'Profile',
        title: 'Student profile drawer',
        caption: 'Detailed student context appears inline so teachers stay inside the classroom workflow.',
        tags: ['Profile', 'Guardian', 'Activity']
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
        tags: ['Billing', 'Due date', 'Audience']
      },
      {
        eyebrow: 'Collections',
        title: 'Payment status table',
        caption: 'Track paid, overdue, and partially paid requests with helpful trend indicators.',
        tags: ['Status', 'Reminders', 'Collections']
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
  createGenericPage('show-exam', 'Show Exam', 'exams/show-exam', 'Review published exams, schedules, and configuration details before distribution.', 'clipboard'),
  createGenericPage('enrollment', 'Enrollment', 'classroom/enrollment', 'Track admissions, placement status, and onboarding progress for incoming students.', 'users'),
  createGenericPage('study-groups', 'Study Groups', 'classroom/study-groups', 'Organize collaborative learning groups for peer instruction and targeted interventions.', 'users'),
  createGenericPage('view-payments', 'View Payments', 'payments/view-payments', 'Inspect payment history, status trends, and reconciliation activity across the school.', 'credit-card'),
  createGenericPage('performance-analysis', 'Performance Analysis', 'modules/performance-analysis', 'Analyze outcomes through student, subject, and assessment-level trends.', 'chart'),
  createGenericPage('attendance', 'Attendance', 'modules/attendance', 'Monitor daily attendance, late arrivals, and absence patterns with actionable insight.', 'check-circle'),
  createGenericPage('pricing-plans', 'Pricing & Plans', 'modules/pricing-plans', 'Understand Trikles subscriptions, licensing structure, and feature availability.', 'sparkles'),
  createGenericPage('question-creation', 'Question Creation', 'modules/question-creation', 'Author question banks, templates, and reusable academic content.', 'book'),
  createGenericPage('gallery', 'Gallery', 'modules/gallery', 'Manage media uploads, event albums, and school brand assets for communication workflows.', 'image'),
  createGenericPage('timetable-generation', 'Timetable Generation', 'modules/timetable-generation', 'Generate schedules while balancing rooms, teachers, and subjects.', 'calendar'),
  createGenericPage('library-books', 'Library Books', 'modules/library-books', 'Manage catalogs, circulation, and student borrowing workflows.', 'library'),
  createGenericPage('class-diary', 'Class Diary', 'modules/class-diary', 'Capture class notes, homework updates, and instructor reflections.', 'book')
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
