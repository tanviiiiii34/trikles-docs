# Screenshot Feature Analysis

This file explains the main visible features in each screenshot and what the important buttons or controls appear to do based on the current UI.

## Introduction

### introduction.png
- Main header: brand bar with Trikles logo on the left, League label in the middle, and hamburger menu on the right.
- Hero message: "A Digital platform to Simplify Teaching" introduces the product purpose.
- League field: accepts the school code or class code used for access.
- Password field: accepts the user password.
- Eye icon inside password field: likely toggles password visibility.
- Login button: submits the entered credentials and opens the platform.
- Hamburger menu: opens the side navigation or account/app options.

## Schools

### schools.png
- Main header: global header with logo, league label, and hamburger menu.
- Page title: "Showing Schools (0)" shows the school list view and current total count.
- Main panel: large empty results area where school cards or table rows would appear.
- Hamburger menu: likely opens app navigation.
- Key state shown: empty state, meaning no school records are currently listed.

## Enrollment

### enrollment.png
- Student avatar area: shows the current profile picture placeholder.
- Change Picture button: opens image upload or picture replacement flow.
- Student Name field: stores the student full name.
- Mobile Number field: stores contact number.
- Select Grade dropdown: lets the user choose the class/grade.
- Username field: defines the student login username.
- Password field: defines the student login password.
- Save button: submits the form and creates or updates the student enrollment record.
- Hamburger menu: likely opens the main navigation drawer.

## Students

### students-1.png
- Top tab/button row:
  - Students: current section indicator.
  - Add Student: opens student creation form.
  - Exams: navigates to exam-related area.
  - Add Exam: opens exam creation flow.
- Grade filter on the right: narrows the list to a selected grade or shows all.
- Student cards: show profile image, name, grade, username, passcode, reward, and package fields.
- Phone button: likely opens or copies the phone number for contact.
- Pencil button: edits the student record.
- Trash button: deletes the student record.
- Folder button: likely opens files, details, or related student resources.
- Main title "Showing Students (11)": tells the user how many students are currently loaded.

## Study Groups

### study-groups.png
- Shared header and top action row:
  - Students
  - Add Student
  - Exams
  - Add Exam
- Main title: "StudyGroups (0)" shows the study group list and current total.
- Large content panel: empty state area where group cards or rows would appear.
- Key state shown: there are currently no study groups available.

## Add Exam

### add-exam-1.png
- Top action row:
  - Students
  - Add Student
  - Exams
  - Add Exam
- Grade dropdown on the right: changes the question bank by selected grade.
- Collapsible filters:
  - Subjects
  - Topic
  - Template Type
- Question count banner: shows how many questions are currently visible.
- Question cards: each card includes an image, answer choices, category/skill labels, and the question prompt.
- Add button on each card: adds that question into the exam being built.

### add-exam-2.png
- Same question bank layout as screen 1.
- Focus of this screen: the question bank content itself is visible at larger scale, making the card structure easier to explain.
- Add button: adds the selected question into the working exam.
- Colored option chips: show answer choices.

### add-exam-3.png
- Grade dropdown is open.
- Grade dropdown: lets the teacher switch the question bank between grades like General, LKG, UKG, and STD levels.
- Main purpose of this screen: explains grade-based filtering.

### add-exam-4.png
- Subjects filter is expanded.
- Subject list: includes subject options such as English, Maths, Marathi, EVS, History, Geography, and Extras.
- Clicking a subject option: filters the question bank to that subject.
- Main purpose of this screen: explains subject-based filtering.

### add-exam-5.png
- Selected question counter row at the top: indicates how many questions have been chosen out of the target total.
- Cancel button on the top right: exits the current exam creation state.
- Add New Exam modal:
  - Grade field: chosen class/grade for the exam.
  - Name field: exam name.
  - Description field: exam description.
- Save Test button: saves the exam configuration.
- Close button: closes the modal without finishing.
- Remove buttons on selected cards: remove already-added questions from the exam.
- Add buttons on unselected cards: add more questions before saving.

## Show Exam

### show-exam-1.png
- Search Exam box: finds exams by text query.
- Status filter row:
  - New
  - Current
  - Filter count indicator
- Grade dropdown on the right: filters exams by grade.
- Exam list cards: each row shows subject, exam code, grade, description, and student count.
- Details button: opens the exam details view.
- Share/assign button: opens the distribution or assignment flow for the exam.
- Paper-plane count on right side: appears to indicate number of assigned or shared targets.

### show-exam-2.png
- Grade dropdown is open.
- Grade dropdown: lets the user switch exam list results across General, LKG, UKG, and STD levels.
- Main purpose of this screen: explains grade-based filtering in the exam list.

### show-exam-3.png
- New status is selected.
- Each exam row includes:
  - Details
  - Share/assign
  - Edit
  - Delete
- Edit button: opens exam edit form.
- Delete button: removes the exam.
- Main purpose of this screen: explains actions available for newly created exams.

### show-exam-4.png
- Current status is selected.
- Current exams still expose Details and Share/assign.
- Progress bars under rows: appear to show completion, delivery, or response progress.
- Main purpose of this screen: explains how active exams are reviewed after assignment.

### show-exam-5.png
- Filter Exams modal is open.
- Subject checkboxes: filter exams by subject.
- Type checkboxes:
  - Suggested
  - Customized
- Close button: closes the filter modal.
- Main purpose of this screen: explains advanced exam filtering.

### show-exam-6.png
- Back button: returns to the previous exam list screen.
- Details table:
  - Q Number
  - Questions
- Main purpose of this screen: displays the question mapping or question identifiers inside a selected exam.

### show-exam-7.png
- Assign to modal is open.
- Student list: shows who can receive the exam.
- Right-side badges like `3/100`, `2/100`: likely indicate current progress, count, or score/state per student.
- Select All checkbox at the bottom: selects every visible student.
- Grade dropdown in modal footer: filters assignable students by grade.
- Forward arrow button: confirms and proceeds with assignment.
- Main purpose of this screen: explains exam assignment to students.

### show-exam-8.png
- Same Assign to modal as screen 7.
- Grade dropdown is open inside the modal.
- Grade selector: changes which student list is shown for assignment.
- Main purpose of this screen: explains filtering students before assignment.

### show-exam-9.png
- Edit Exam Details modal is open.
- Exam Name field: updates the exam title.
- Grade field: updates the exam grade.
- Description field: updates the exam description.
- Save button: stores the updated exam data.
- Close button: exits the edit dialog.

## Request Payment

### request-payments.png
- Request Payment form title: identifies the payment creation screen.
- Title of Payment field: payment label such as exam fee or tuition fee.
- Payment Amount field: amount input with currency icon.
- Payment Due Date field: due date picker with calendar icon.
- Payment Description field: free-text area for additional context.
- Inline validation messages: show which fields are required or invalid.
- Share button: sends or publishes the payment request after required fields are completed.

## View Payments

### view-payments.png
- Page title: "Payment Requests (0)" shows total records found.
- Search box: searches existing payment requests.
- Search icon button: executes the search.
- Empty state message: "No payment requests found."
- Main purpose of this screen: lets finance teams review, filter, and search payment requests.

## Attendance

### attendance.png
- Date navigation buttons:
  - Next
  - Today
  - Previous
- Save button: saves attendance changes.
- Absent All button: marks all visible students absent for the selected day.
- Present All button: marks all visible students present for the selected day.
- Attendance table:
  - Row number
  - Student name
  - Date columns
  - Checkbox cells for attendance marking
- Checkbox in each date cell: marks a student present/selected for that day.
- Main purpose of this screen: record and review attendance across multiple dates.

## Pricing and Plans

### pricing-and-plans.png
- Yearly Packages toggle/button: indicates the current billing mode.
- Three plan cards:
  - Standard
  - Premium
  - Custom
- Each card shows:
  - annual price
  - user limit
  - included and excluded features
- Green check marks: available features.
- Red cross icons: unavailable features.
- CTA buttons:
  - Individual Students
  - Private Tuition and Classes
  - Schools and Organization
- Main purpose of this screen: compare plans and choose the right subscription tier.

## Class Diary

### class-diary.png
- Add Note button: opens note creation flow.
- View Drafts button: opens saved draft notes.
- Search notes field: searches diary notes.
- Two dropdown filters on the right: likely filter by class, category, or note type.
- Calendar strip with arrows: moves between dates in the diary.
- Month dropdown: changes the visible month.
- Sent Notes section: shows already sent diary notes.
- Empty state message: indicates no notes exist yet.
- Main purpose of this screen: create, filter, and review class diary notes.

## Gallery

### gallery.png
- Back arrow near Projects title: returns to previous page.
- AddFolder button: creates a new folder.
- Search Box: searches folders or assets.
- selectAll button: selects all visible files/folders.
- Send button: shares or sends selected assets.
- Folder cards:
  - Frontend
  - Backend
  - DevOps
- File cards with asset names and action buttons:
  - Download
  - Info
  - Share
- Checkbox in top-right of each asset card: selects that asset.

### gallery-2.png
- Add Folder modal is open.
- Folder Name field: sets the new folder name.
- Description field: sets folder description.
- Std dropdown: chooses the standard/class grouping for the folder.
- Cancel button: closes the modal without creating the folder.
- Add button: creates the folder.
- Main purpose of this screen: explains folder creation within the gallery.

## Library Books

### library-1.png
- Library Collection heading: identifies the library catalog.
- Search field: searches by title or author.
- Availability badges: show whether a book is currently available.
- Book cards display:
  - title
  - author
  - short description
- Borrow Book button: checks out the selected book.
- Main purpose of this screen: browsing and borrowing available books.

### library-2.png
- Same catalog layout as library-1.
- Borrowed badges: show books already issued.
- Return Book button: returns a borrowed book.
- Available badges: show books still available.
- Borrow Book button: borrows an available book.
- Main purpose of this screen: managing both available and borrowed books in one view.

## Timetable Generation

### timetable-1.png
- Add Timetable button: starts timetable creation.
- View Drafts button: opens saved timetable drafts.
- Date field: filters timetable records by date.
- Search homework field: appears to be reused as a text filter/search box.
- Search icon button: executes the search.
- Sent Timetables section: shows already shared timetables.
- Empty state message: indicates no timetables have been sent yet.

### timetable-2.png
- Timetable builder table:
  - Time column
  - Day columns
- Enter Time field: adds a time slot.
- AddRow button: adds another timetable row.
- Enter Subject field: fills the subject for a selected slot.
- Enter Teacher field: assigns the teacher for the selected slot.
- Select Day dropdown: chooses an additional day column.
- Add Col button: adds another timetable column/day.
- Delete button: removes the selected column/day.
- Cancel button: discards timetable changes.
- Save button: stores the generated timetable.

## Performance Analysis

### performance-analysis-1.png
- Analytics heading: identifies the performance dashboard.
- Bar chart: "Average Performance of All Students".
- Legend distinguishes total vs completed values.
- Student names along the X-axis: each bar represents one student.
- Main purpose of this screen: compare top-level performance totals across students.

### performance-analysis-2.png
- Donut chart on the left: assignment distribution subject-wise.
- Subject legend: English, Math, Marathi, EVS.
- Center chart: average performance of all subjects.
- Bar legend:
  - Correct
  - Wrong
  - Not Solved
- Pie chart on the right: average time spent on assignments.
- Main purpose of this screen: compare subject-level accuracy and assignment effort.

### performance-analysis-3.png
- Grade dropdown is open.
- Grade selector: changes analytics view by grade or level.
- Main purpose of this screen: explains grade-based filtering for analytics.

### performance-analysis-4.png
- Student performance list view replaces the chart.
- Each student row shows a compact badge like `2/200` or `3/300`.
- WhatsApp-style icon next to each student: likely opens direct communication or share action.
- Main purpose of this screen: presents performance as a quick summary list rather than a graph.

