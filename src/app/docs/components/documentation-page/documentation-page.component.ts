import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocScreenshot } from '../../models/docs.models';
import { DocsService } from '../../services/docs.service';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ScreenshotViewerComponent } from '../screenshot-viewer/screenshot-viewer.component';

type ScreenshotGuide = {
  overview: string;
  features: string[];
  controls: string[];
};

const SCREENSHOT_GUIDES: Record<string, ScreenshotGuide> = {
  '/introduction.png': {
    overview: 'This screen introduces the platform and gives the user the first login touchpoint with clear branding and a simple sign-in flow.',
    features: [
      'Brand header with the Trikles logo and app identity.',
      'Hero message that explains the product value at a glance.',
      'League and password fields for account access.',
      'Compact app menu entry point in the top bar.'
    ],
    controls: [
      'League field accepts the school or organization access code.',
      'Password field stores the user password securely.',
      'Eye icon toggles password visibility for easier entry.',
      'Login button submits the credentials and opens the platform.'
    ]
  },
  '/schools.png': {
    overview: 'This screen shows the school directory view and is used to review whether school records are already available in the system.',
    features: [
      'Header with global branding and navigation access.',
      'Page title showing the school list state and current count.',
      'Large results area where school cards or rows appear.'
    ],
    controls: [
      'Hamburger menu opens the main application navigation.',
      'The empty-state count helps the user confirm there are currently no listed schools.'
    ]
  },
  '/enrollment.png': {
    overview: 'This form is used to create or update a student enrollment profile with identity, grade, and login information in one place.',
    features: [
      'Student profile picture area with upload support.',
      'Structured form for name, mobile number, grade, username, and password.',
      'Clear action area for saving the enrollment record.'
    ],
    controls: [
      'Change Picture uploads or replaces the student profile image.',
      'Select Grade dropdown assigns the student to the correct class.',
      'Save stores the enrollment record after the required fields are filled.',
      'Top navigation icon opens the broader app menu.'
    ]
  },
  '/students-1.png': {
    overview: 'This page is the student management hub where staff can review student records and jump to related actions from the same screen.',
    features: [
      'Top action row linking student and exam workflows.',
      'Grade filter for narrowing the visible student list.',
      'Student cards showing profile, credentials, package, and reward details.'
    ],
    controls: [
      'Add Student opens the student creation form.',
      'Grade filter limits the list to a selected class.',
      'Phone button helps staff contact the student record directly.',
      'Pencil edits the student record, trash deletes it, and folder opens related resources or details.'
    ]
  },
  '/study-groups.png': {
    overview: 'This section is meant for managing study groups and currently demonstrates the empty-state layout when no groups have been created yet.',
    features: [
      'Shared navigation row for moving between student and exam tools.',
      'Study group list title with current record count.',
      'Central workspace where group cards or rows will appear.'
    ],
    controls: [
      'Navigation buttons at the top move into adjacent academic workflows.',
      'The empty-state count helps users confirm that no study groups are available yet.'
    ]
  },
  '/add-exam-1.png': {
    overview: 'This is the main exam-building screen where teachers browse the question bank and start assembling a test.',
    features: [
      'Question bank grid with images, prompts, and answer chips.',
      'Subject, topic, and template filters for narrowing content.',
      'Question count banner showing how many questions are available.'
    ],
    controls: [
      'Grade dropdown switches the visible bank by class level.',
      'Subjects, Topic, and Template Type filters refine the question set.',
      'Add on each card places that question into the working exam.'
    ]
  },
  '/add-exam-2.png': {
    overview: 'This view focuses on the question card structure so the teacher can review the question content before adding it to an exam.',
    features: [
      'Large question cards with images and answer options.',
      'Question prompt and labels visible inside each card.',
      'Consistent add action on every question.'
    ],
    controls: [
      'Add attaches the selected question to the current exam draft.',
      'Colored answer chips help the teacher scan the options quickly.'
    ]
  },
  '/add-exam-3.png': {
    overview: 'This screen explains how grade-based filtering changes the question bank before exam creation.',
    features: [
      'Expanded grade dropdown with available levels.',
      'Question bank content below, ready to refresh by grade.'
    ],
    controls: [
      'Grade dropdown switches the question bank to General, LKG, UKG, or standard-based content.'
    ]
  },
  '/add-exam-4.png': {
    overview: 'This view highlights the subject filter so teachers can limit the bank to the exact subject they want to assess.',
    features: [
      'Expanded subject list covering academic and extra categories.',
      'Filtered question bank ready to respond to subject selection.'
    ],
    controls: [
      'Selecting a subject narrows the visible questions to that subject only.'
    ]
  },
  '/add-exam-5.png': {
    overview: 'This is the save stage of exam creation where the selected questions and exam metadata are finalized together.',
    features: [
      'Selected question counter showing progress toward the target test size.',
      'Add New Exam modal with grade, name, and description fields.',
      'Mixed selected and unselected question list for final review.'
    ],
    controls: [
      'Save Test stores the exam configuration.',
      'Cancel exits the current creation flow.',
      'Close dismisses the modal without saving.',
      'Remove deletes a selected question from the exam draft.'
    ]
  },
  '/show-exam-1.png': {
    overview: 'This screen is the central exam list where staff can search, filter, review, and distribute created exams.',
    features: [
      'Search input and status chips for quick list refinement.',
      'Grade dropdown for class-based filtering.',
      'Exam rows containing subject, code, description, and student count.'
    ],
    controls: [
      'Search Exam finds exams by text.',
      'New and Current chips switch between creation and active states.',
      'Grade dropdown narrows the exam list by class.',
      'Details opens the exam contents and Share starts assignment or distribution.'
    ]
  },
  '/show-exam-2.png': {
    overview: 'This image focuses on grade filtering inside the exam list so the user can quickly switch context across classes.',
    features: [
      'Expanded grade selector with multiple class options.',
      'Exam list ready to update after selection.'
    ],
    controls: [
      'Grade dropdown changes the visible exams to the selected level.'
    ]
  },
  '/show-exam-3.png': {
    overview: 'This screen highlights the actions available for newly created exams before they become active.',
    features: [
      'Exam rows in the New state.',
      'Action buttons for review, assignment, editing, and deletion.'
    ],
    controls: [
      'Details opens the exam content view.',
      'Share or assign starts exam distribution.',
      'Edit updates exam metadata.',
      'Delete removes the exam from the list.'
    ]
  },
  '/show-exam-4.png': {
    overview: 'This view shows the Current exam state where users review exams that are already active or shared.',
    features: [
      'Current status selection at the top.',
      'Exam rows with progress-style indicators for active items.'
    ],
    controls: [
      'Details lets the user inspect the active exam.',
      'Share opens the distribution flow again if more assignment work is needed.'
    ]
  },
  '/show-exam-5.png': {
    overview: 'This is the advanced exam filter dialog for narrowing the exam list by subject and type.',
    features: [
      'Subject checkbox group for academic filtering.',
      'Type options for suggested versus customized exams.'
    ],
    controls: [
      'Subject checkboxes reduce the list to specific subjects.',
      'Type checkboxes limit results by exam type.',
      'Close dismisses the filter modal.'
    ]
  },
  '/show-exam-6.png': {
    overview: 'This details view shows the internal structure of a selected exam, including question numbers and mapped question data.',
    features: [
      'Back navigation control.',
      'Question detail table with numbers and question references.'
    ],
    controls: [
      'Back returns the user to the main exam list.'
    ]
  },
  '/show-exam-7.png': {
    overview: 'This assignment modal is where the teacher chooses which students should receive the selected exam.',
    features: [
      'Student list with visible progress or status badges.',
      'Select All option for bulk assignment.',
      'Grade filter embedded in the assignment modal.'
    ],
    controls: [
      'Select All marks every visible student in the list.',
      'Grade dropdown narrows the student list before assignment.',
      'Forward arrow confirms the selected students and continues the assignment flow.'
    ]
  },
  '/show-exam-8.png': {
    overview: 'This image explains student filtering inside the assignment modal before the exam is sent out.',
    features: [
      'Expanded grade selector inside the assignment modal.',
      'Student list ready to refresh based on grade selection.'
    ],
    controls: [
      'Grade selector changes which students are available for assignment.'
    ]
  },
  '/show-exam-9.png': {
    overview: 'This edit dialog allows exam metadata to be corrected after the exam has already been created.',
    features: [
      'Fields for exam name, grade, and description.',
      'Dedicated action row for saving or closing the dialog.'
    ],
    controls: [
      'Save stores the updated exam details.',
      'Close exits the dialog without keeping new changes.'
    ]
  },
  '/request-payments.png': {
    overview: 'This form is used to prepare a payment request with amount, due date, and billing context before sending it to families or students.',
    features: [
      'Structured fields for payment title, amount, due date, and description.',
      'Inline validation messages showing missing or invalid data.'
    ],
    controls: [
      'Title of Payment defines the billing label.',
      'Payment Amount sets the requested value.',
      'Payment Due Date opens the date picker.',
      'Share sends or publishes the payment request once the form is valid.'
    ]
  },
  '/view-payments.png': {
    overview: 'This screen is the payment request list where finance teams search and review created requests.',
    features: [
      'Search area for payment lookup.',
      'Result heading showing the number of requests found.',
      'Empty-state panel when no records match.'
    ],
    controls: [
      'Search box filters payment requests by text.',
      'Search icon triggers the lookup action.'
    ]
  },
  '/attendance.png': {
    overview: 'This attendance board is used to record, review, and bulk-update student attendance across a selected set of dates.',
    features: [
      'Attendance matrix with students as rows and dates as columns.',
      'Bulk action bar for present and absent updates.',
      'Date navigation area for moving across time periods.'
    ],
    controls: [
      'Next, Today, and Previous move the visible date range.',
      'Save stores attendance changes.',
      'Absent All marks all visible students absent.',
      'Present All marks all visible students present.',
      'Checkbox cells record attendance per student and day.'
    ]
  },
  '/pricing-and-plans.png': {
    overview: 'This pricing page helps users compare subscription tiers and choose the plan that best fits their scale and feature needs.',
    features: [
      'Plan cards for Standard, Premium, and Custom.',
      'Feature availability lists with positive and negative indicators.',
      'Billing context focused on yearly packages.'
    ],
    controls: [
      'Yearly Packages toggles the displayed billing mode.',
      'CTA buttons route the user toward the plan that matches their use case.'
    ]
  },
  '/question-creation-1.png': {
    overview: 'This screen begins the question creation workflow and shows the main editor structure used to compose a new question.',
    features: [
      'Question authoring form for core question details.',
      'Layout for defining answer options and supporting metadata.'
    ],
    controls: [
      'Input fields are used to enter question text and related values.',
      'Action buttons in this flow move the author through saving or continuing the draft.'
    ]
  },
  '/question-creation-2.png': {
    overview: 'This step continues the question creation process and focuses on refining the content entered into the question editor.',
    features: [
      'Question editing interface with form-driven structure.',
      'Option entry area for building multiple choices.'
    ],
    controls: [
      'Form controls let the author update question data before saving.'
    ]
  },
  '/question-creation-3.png': {
    overview: 'This image shows another stage of the question authoring workflow where the question details are further configured.',
    features: [
      'Extended question editing state inside the authoring form.',
      'Structured layout for organizing question properties.'
    ],
    controls: [
      'Editor actions continue the save, update, or next-step workflow.'
    ]
  },
  '/question-creation-4.png': {
    overview: 'This screenshot highlights the question creation UI as the author shapes the final structure of the question.',
    features: [
      'Authoring layout for question content and related options.',
      'Clear form segmentation for different parts of the question.'
    ],
    controls: [
      'Field controls let the user refine the draft before submission.'
    ]
  },
  '/question-creation-5.png': {
    overview: 'This stage continues the authoring workflow and demonstrates the consistency of the question editor across steps.',
    features: [
      'Repeated editing layout for question and answer data.',
      'Structured form sections that support complete question setup.'
    ],
    controls: [
      'Editing actions help the user continue drafting and preparing the question.'
    ]
  },
  '/question-creation-6.png': {
    overview: 'This image captures a later state in the same question creation flow, keeping the author focused on validation and final structure.',
    features: [
      'Question editor ready for review and adjustment.',
      'Option and metadata areas supporting a complete question record.'
    ],
    controls: [
      'Form actions allow the user to update or finalize the question draft.'
    ]
  },
  '/question-creation-7.png': {
    overview: 'This final question creation view represents the completion stage before the new question is saved and used elsewhere in the system.',
    features: [
      'Finished authoring layout with the full question visible for review.',
      'Final action area for completing the workflow.'
    ],
    controls: [
      'Save or submit actions complete the question creation process.'
    ]
  },
  '/gallery.png': {
    overview: 'This gallery workspace helps users browse folders and media assets, then select, share, or download items as needed.',
    features: [
      'Folder cards for navigating grouped content.',
      'Asset cards showing files with inline actions.',
      'Search and bulk-selection tools at the top.'
    ],
    controls: [
      'Back arrow returns to the previous gallery level.',
      'Add Folder creates a new folder.',
      'Search Box filters folders or files.',
      'selectAll marks every visible asset.',
      'Send shares the selected items.',
      'Download, Info, and Share are available on each file card.'
    ]
  },
  '/gallery-2.png': {
    overview: 'This modal explains how a new folder is created inside the gallery before files are organized under it.',
    features: [
      'Folder name and description fields.',
      'Standard or class dropdown for grouping the new folder.'
    ],
    controls: [
      'Cancel closes the modal without creating the folder.',
      'Add confirms the folder details and creates it.'
    ]
  },
  '/library-1.png': {
    overview: 'This screen is the main library catalog where users browse books and identify what can be borrowed immediately.',
    features: [
      'Book cards showing title, author, description, and availability.',
      'Search input for finding books by title or author.'
    ],
    controls: [
      'Search filters the catalog.',
      'Borrow Book checks out the selected title when it is available.'
    ]
  },
  '/library-2.png': {
    overview: 'This view shows the mixed library state where some books are available and others are already borrowed.',
    features: [
      'Borrowed and available badges to clarify current status.',
      'Book actions that change depending on the item state.'
    ],
    controls: [
      'Return Book marks a borrowed title as returned.',
      'Borrow Book checks out an available title.'
    ]
  },
  '/timetable-1.png': {
    overview: 'This timetable home view lets staff search existing timetables, filter by date, and start creating a new schedule.',
    features: [
      'Primary actions for adding a timetable or opening drafts.',
      'Search and date filtering controls.',
      'Sent Timetables section for previously published schedules.'
    ],
    controls: [
      'Add Timetable starts a new timetable entry.',
      'View Drafts opens saved drafts.',
      'Date field filters timetable records.',
      'Search field and icon look up timetable items by text.'
    ]
  },
  '/timetable-2.png': {
    overview: 'This is the timetable builder where users create rows, days, subjects, and teacher assignments for a full schedule.',
    features: [
      'Grid layout with time slots and day columns.',
      'Inputs for subject, teacher, time, and day selection.',
      'Action row for adding or deleting table structure.'
    ],
    controls: [
      'AddRow creates a new time slot row.',
      'Add Col inserts another day column.',
      'Delete removes the selected day column.',
      'Cancel discards the current timetable edits.',
      'Save stores the completed timetable.'
    ]
  },
  '/performance-analysis-1.png': {
    overview: 'This analytics dashboard compares student performance totals at a high level so teams can quickly spot stronger and weaker results.',
    features: [
      'Bar chart showing average performance across students.',
      'Legend distinguishing total values from completed values.'
    ],
    controls: [
      'Chart labels and legend help interpret student-by-student performance comparisons.'
    ]
  },
  '/performance-analysis-2.png': {
    overview: 'This analytics view breaks performance into subject-wise accuracy, assignment distribution, and time-spent metrics.',
    features: [
      'Donut chart for subject distribution.',
      'Bar chart for correct, wrong, and unsolved comparisons.',
      'Pie chart summarizing average time spent.'
    ],
    controls: [
      'Legends and chart segments help users compare subjects and performance dimensions visually.'
    ]
  },
  '/performance-analysis-3.png': {
    overview: 'This screenshot explains how analytics can be filtered by class or grade before reading the charts.',
    features: [
      'Expanded grade selector attached to the analytics view.'
    ],
    controls: [
      'Grade dropdown changes the analytics dataset to the selected class level.'
    ]
  },
  '/performance-analysis-4.png': {
    overview: 'This screen switches from charts to a compact student-by-student summary list for quick operational review.',
    features: [
      'Performance list showing students with concise progress-style badges.',
      'Direct action icon next to each student row.'
    ],
    controls: [
      'The action icon appears to open a direct communication or share flow for that student.'
    ]
  },
  '/class-diary.png': {
    overview: 'This class diary workspace helps teachers create, filter, and review classroom notes in a date-driven workflow.',
    features: [
      'Primary note actions, search, and dropdown filters.',
      'Calendar strip for moving across diary dates.',
      'Sent Notes area for already published diary entries.'
    ],
    controls: [
      'Add Note starts a new diary note.',
      'View Drafts opens saved draft notes.',
      'Search notes filters existing entries.',
      'Month dropdown changes the visible period.'
    ]
  }
};

@Component({
  selector: 'app-documentation-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FeatureCardComponent,
    ScreenshotViewerComponent
  ],
  template: `
    <ng-container *ngIf="doc() as page">
      <div class="mx-auto max-w-[1120px] space-y-10 pb-14 xl:max-w-none">
        <app-hero-section *ngIf="page.hero; else overviewSection" [doc]="page"></app-hero-section>

        <ng-template #overviewSection>
          <section id="overview" class="docs-panel rounded-[36px] px-6 py-8 sm:px-8 sm:py-10">
            <div class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              <span class="rounded-full bg-[var(--primary-soft)] px-3 py-1">{{ page.audience }}</span>
              <span class="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">{{ page.estimatedTime }}</span>
            </div>
            <h1 class="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{{ page.title }}</h1>
            <p class="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">{{ page.description }}</p>
          </section>
        </ng-template>

        <section id="screenshots" class="space-y-6">
          <div class="px-1">
            <p class="docs-section-title">Screenshots</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">
              {{ page.screenshotsHeading ?? 'Reference views for product walkthroughs' }}
            </h2>
            <p *ngIf="page.screenshotsDescription" class="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
              {{ page.screenshotsDescription }}
            </p>
          </div>

          <div class="grid gap-6">
            <article
              *ngFor="let shot of page.screenshots; let index = index; trackBy: trackScreenshot"
              class="glass-panel rounded-[32px] border border-[var(--border)] p-5 sm:p-6"
            >
              <div class="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">{{ shot.eyebrow }}</p>
                  <h3 class="mt-2 text-xl font-semibold sm:text-2xl">{{ shot.title }}</h3>
                </div>
                <span class="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted)]">
                  {{ index + 1 }}/{{ page.screenshots.length }}
                </span>
              </div>

              <div class="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] xl:items-start">
                <div class="space-y-4">
                  <p class="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{{ shot.caption }}</p>

                  <app-screenshot-viewer
                    [images]="pageScreenshotImages(page.screenshots)"
                    [initialIndex]="index"
                    [title]="shot.title"
                    [description]="shot.caption"
                  ></app-screenshot-viewer>
                </div>

                <aside *ngIf="guideFor(shot.imageUrl) as guide" class="space-y-4">
                  <section class="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">Screen Purpose</p>
                    <p class="mt-3 text-sm leading-7 text-[var(--muted)]">{{ guide.overview }}</p>
                    <p class="mt-4 text-sm leading-7 text-[var(--muted)]">
                      This view is part of the {{ page.title }} walkthrough and helps users understand the goal of this step
                      before they review the visible features and interactive controls explained below.
                    </p>
                  </section>
                </aside>
              </div>

              <div *ngIf="guideFor(shot.imageUrl) as guide" class="mt-6 grid gap-4 lg:grid-cols-2">
                <section class="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">What You Can See</p>
                  <ul class="mt-4 space-y-3">
                    <li
                      *ngFor="let feature of guide.features; trackBy: trackText"
                      class="flex items-start gap-3 text-sm leading-7 text-[var(--muted)]"
                    >
                      <span class="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]"></span>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </section>

                <section *ngIf="guide.controls.length" class="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">Buttons and Controls</p>
                  <ul class="mt-4 space-y-3">
                    <li
                      *ngFor="let control of guide.controls; trackBy: trackText"
                      class="flex items-start gap-3 text-sm leading-7 text-[var(--muted)]"
                    >
                      <span class="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400"></span>
                      <span>{{ control }}</span>
                    </li>
                  </ul>
                </section>
              </div>

              <div *ngIf="shot.tags.length" class="mt-5 flex flex-wrap gap-2">
                <span
                  *ngFor="let tag of shot.tags; trackBy: trackTag"
                  class="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {{ tag }}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section id="features" class="space-y-6">
          <div class="px-1">
            <p class="docs-section-title">Highlights</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">What this module helps your team do</h2>
          </div>

          <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <app-feature-card
              *ngFor="let feature of page.featureCards; trackBy: trackFeature"
              [feature]="feature"
            ></app-feature-card>
          </div>
        </section>

        <section *ngIf="page.deepFeatures.length" class="grid gap-4 lg:grid-cols-2">
          <app-feature-card
            *ngFor="let feature of page.deepFeatures; trackBy: trackFeature"
            [feature]="feature"
          ></app-feature-card>
        </section>

        <section id="workflow" class="docs-panel rounded-[36px] px-6 py-8 sm:px-8 sm:py-10">
          <div>
            <p class="docs-section-title">Step by Step</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-[2rem]">
              {{ page.workflowHeading ?? 'A clean path through ' + page.title }}
            </h2>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-2">
            <article
              *ngFor="let step of page.steps; let index = index; trackBy: trackStep"
              class="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-sm font-bold text-slate-950">
                {{ index + 1 }}
              </div>
              <h3 class="mt-4 text-lg font-semibold">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-[var(--muted)]">{{ step.description }}</p>
            </article>
          </div>
        </section>
      </div>
    </ng-container>
  `
})
export class DocumentationPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly docsService = inject(DocsService);

  readonly doc = computed(() => this.docsService.activeDoc());

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.docsService.setActiveDoc(data['docId'] as string);
    });
  }

  pageScreenshotImages(screenshots: DocScreenshot[]): string[] {
    return screenshots.map((shot) => shot.imageUrl);
  }

  guideFor(imageUrl: string): ScreenshotGuide | null {
    return SCREENSHOT_GUIDES[imageUrl] ?? null;
  }

  trackFeature(_index: number, feature: { title: string }): string {
    return feature.title;
  }

  trackStep(_index: number, step: { title: string }): string {
    return step.title;
  }

  trackScreenshot(_index: number, shot: DocScreenshot): string {
    return shot.title;
  }

  trackTag(_index: number, tag: string): string {
    return tag;
  }

  trackText(_index: number, text: string): string {
    return text;
  }
}
