# Job Portal Website

A modern, full-stack **Job Portal Platform** built using the **MERN Stack** (**MongoDB, Express.js, React.js, Node.js**).
The platform provides dedicated experiences for **Job Seekers** and **Recruiters**, enabling job discovery, job applications, candidate management, resume uploads, applicant tracking, and company profile management.
Job seekers can search, filter, save, and apply for jobs, while recruiters can publish job opportunities, manage applicants, review resumes, and track hiring progress through a dedicated recruitment dashboard.

---

# 🚀 Features
## 👨💻 Job Seeker Features
- ✅ User Registration & Login
- ✅ Email Verification with OTP
- ✅ Forgot Password & Password Reset
- ✅ Google OAuth Authentication
- ✅ GitHub OAuth Authentication
- ✅ Search and Discover Jobs
- ✅ Filter Jobs by Job Type
- ✅ Filter Jobs by Experience Level
- ✅ Sort Jobs by Salary
- ✅ Server-Side Pagination
- ✅ Save Jobs
- ✅ Remove Saved Jobs
- ✅ Apply for Jobs
- ✅ Track Application Status
- ✅ Cancel Job Applications
- ✅ Upload Resume
- ✅ Update Profile Information
- ✅ Contact Company Support
- ✅ Responsive User Interface
---
## 🏢 Recruiter Features
- ✅ Recruiter Registration & Login
- ✅ Company Logo Upload
- ✅ Email Verification
- ✅ OTP-Based Password Reset
- ✅ Create Job Listings
- ✅ Manage Posted Jobs
- ✅ Activate / Deactivate Jobs
- ✅ Delete Jobs
- ✅ View Applicants
- ✅ Download Applicant Resumes
- ✅ Change Application Status
- ✅ Manage Company Profile
- ✅ View Recruitment Analytics
---
# 🛠️ Technology Stack
## 🎨 Frontend
| Technology | Purpose |
|------------|----------|
| React.js | User Interface |
| Tailwind CSS | Styling |
| React Router DOM | Client-Side Routing |
| Context API | State Management |
| Axios | HTTP Requests |
---
## ⚡ Backend
| Technology | Purpose |
|------------|----------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| REST APIs | API Architecture |
---
## ☁️ Database
| Technology | Purpose |
|------------|----------|
| MongoDB Atlas | Database Management |
---
## 🔐 Authentication & Security
| Technology | Purpose |
|------------|----------|
| JWT | Authentication |
| bcrypt | Password Hashing |
| HTTP Cookies | Session Storage |
| Google OAuth | Secure Login |
| GitHub OAuth | Secure Login |
---
## 📂 File Storage
| Technology | Purpose |
|------------|----------|
| Cloudinary | Media & Resume Storage |
| Multer | File Upload Handling |
---
## 📧 Email Services
| Technology | Purpose |
|------------|----------|
| Nodemailer | Email Delivery |
| SMTP | Email Transport |
---
## 🚦 Performance & Protection
| Technology | Purpose |
|------------|----------|
| Upstash Redis | API Rate Limiting |
---
## 🚀 Deployment
| Component | Platform |
|------------|----------|
| Job Seeker Frontend | Vercel |
| Recruiter Dashboard | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |
---
# 📂 Project Structure
```text
Job-Portal-Website/
│
├── frontend/        # Job Seeker Application
├── admin/           # Recruiter Dashboard
├── backend/         # Express API & Server Logic
└── README.md
```
---
# 👥 User Roles
The platform supports two primary user roles.
---
## 👨💻 Job Seeker
Job seekers can:
- Create Accounts
- Search Jobs
- Save Jobs
- Apply for Jobs
- Upload Resumes
- Manage Applications
- Update Profiles
---
## 🏢 Recruiter
Recruiters can:
- Create and Manage Jobs
- Track Applicants
- Download Resumes
- Manage Company Information
- Update Application Statuses
---
# 🔐 Authentication & Security
## 👨💻 Job Seeker Authentication
Features include:
- Email & Password Login
- JWT Authentication
- Cookie-Based Sessions
- Google OAuth Login
- GitHub OAuth Login
- Email Verification
- OTP-Based Password Recovery
---
## 🏢 Recruiter Authentication
Features include:
- Email & Password Login
- JWT Authentication
- Email Verification
- OTP Password Recovery
- Company Logo Upload
---
# 🎯 Job Discovery
Authenticated users can:
- Browse Job Listings
- Search by Keywords
- Filter Jobs by Type
- Filter Jobs by Experience Level
- Sort Jobs by Salary
- Navigate Paginated Results
---
## 📋 Job Details Include
Each job listing contains:
- Job Title
- Company Name
- Salary
- Location
- Job Type
- Experience Requirements
- Description
- Responsibilities
- Requirements
- Skills
- Application Deadline
- Total Applicants
- Company Size
- Industry Type
- Company Website
---
# 📄 Job Applications
## Apply for Jobs
Job seekers can:
- Apply Directly from Job Details
- Upload Resumes
- Track Application Progress
- View Applied Jobs
---
## 📊 Application Statuses
| Status | Description |
|---------|-------------|
| Applied | Application submitted |
| Interview | Candidate moved to interview stage |
| Accepted | Application accepted |
| Rejected | Application rejected |
| Cancelled | Application cancelled by the job seeker |
---
## ⚙️ Application Management
Job seekers can:
- View All Applications
- Search Applications
- Cancel Applications
---
# ⭐ Saved Jobs
Job seekers can:
- Save Jobs for Later
- View Saved Jobs
- Remove Saved Jobs
---
# 👤 Profile Management
Users can manage their personal information and account settings.
---
## Personal Information
- Full Name
- Profile Picture
- Resume (PDF)
- Account Details
---
## Additional Features
- Email Verification
- Password Reset
- Secure Logout
---
# 🏢 Recruiter Dashboard
## 💼 Job Management
Recruiters can create and manage job listings using:
- Job Title
- Description
- Job Type
- Salary
- Experience Level
- Application Deadline
- Requirements
- Responsibilities
- Required Skills
---
## 📈 Posted Job Statistics
Recruiters can monitor:
- Total Jobs Posted
- Active Jobs
- Inactive Jobs
- Total Applicants
- Applications Per Job
---
## 👥 Applicant Management
Recruiters can:
- View Applicants
- View Candidate Details
- Download Resumes
- Change Application Status
### Status Options
- Interview
- Accepted
- Rejected
---
## 🏢 Company Profile Management
Recruiters can update:
- Company Name
- Company Email
- Website
- Industry
- Company Size
- Location
- Company Description
- Company Logo
---
# 📱 Pages & Screens
## 👨💻 Job Seeker Frontend
| Page | Description |
|--------|------------|
| Register | Job Seeker Registration |
| Home | Landing Page |
| Jobs | Browse Jobs |
| Job Detail | Job Information |
| Applied Jobs | Manage Applications |
| Saved Jobs | Saved Opportunities |
| Profile | Personal Profile |
| About | Platform Information |
| Contact | Contact Support |
| Privacy Policy | Privacy Information |
| Forgot Password | Password Recovery |
| Verify Email | Email Verification |
---
## 🏢 Recruiter Dashboard
| Page | Description |
|--------|------------|
| Register | Recruiter Registration |
| Add Job | Create Job Listings |
| Posted Jobs | Manage Published Jobs |
| Applicants | Review Job Applicants |
| Profile | Manage Company Information |
| Forgot Password | Password Recovery |
---
# 🌐 API Architecture
The backend follows a REST API architecture with separate route groups for users and recruiters.
## Base Routes
```js
app.use('/api/v1/user', userRouter);
app.use('/api/v1/recruiter', recruiterRouter);
```
---
# 👨💻 Job Seeker APIs
### Base URL
```text
/api/v1/user
```
| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |
| GET | /verify | Verify Session |
| POST | /logout | Logout User |
| GET | /profile | Get Profile |
| PATCH | /update-profile | Update Profile |
| GET | /jobs | Get Jobs |
| POST | /apply-job/:id | Apply for Job |
| GET | /applied-jobs | View Applied Jobs |
| PATCH | /cancel-application/:id | Cancel Application |
| POST | /save-job/:id | Save Job |
| DELETE | /remove-saved-job/:id | Remove Saved Job |
| GET | /saved-job | Get Saved Jobs |
| POST | /send-contact-message | Contact Support |
---
# 🏢 Recruiter APIs
### Base URL
```text
/api/v1/recruiter
```
| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /register | Register Recruiter |
| POST | /login | Login Recruiter |
| GET | /verify | Verify Session |
| POST | /logout | Logout Recruiter |
| GET | /profile | Get Recruiter Profile |
| PATCH | /update-profile | Update Company Profile |
| POST | /add-job | Create Job |
| GET | /all-posted-jobs | Get Posted Jobs |
| PATCH | /job-status/:id | Update Job Status |
| DELETE | /delete-job/:id | Delete Job |
| GET | /all-applicants | Get Applicants |
| PATCH | /application-status/:id | Update Application Status |
---
# ☁️ Database & Storage
## MongoDB Atlas
Stores:
- Users
- Recruiters
- Jobs
- Applications
- Saved Jobs
- Company Information
- Profile Data
- File URLs
---
## Cloudinary
Used for storing:
- User Avatars
- Company Logos
- Resume PDFs
- Uploaded Media Files
---
# 📧 Email Services
The application uses **Nodemailer** and **SMTP** for:
- Email Verification OTPs
- Password Reset OTPs
- Contact Messages
- Account Notifications
---
# ⚙️ Environment Variables
## Backend (.env)
```env
PORT=
ADMIN_EMAIL=
MONGODB_URI=
DB_NAME=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SENDER_EMAIL=
```
---
## Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:8007
```
---
## Recruiter Dashboard (.env)
```env
VITE_BACKEND_URL=http://localhost:8007
```
> ⚠️ Replace the backend URL with your credentials
---
# 🚀 Installation & Setup
## 1️⃣ Clone Repository
```bash
git clone https://github.com/Jabbirkhan/Full-Stack-Job-Portal-Website.git
```
---
## 2️⃣ Install Dependencies
### Backend
```bash
cd backend
npm install
```
### Job Seeker Frontend
```bash
cd frontend
npm install
```
### Recruiter Dashboard
```bash
cd admin
npm install
```
---
## 3️⃣ Configure Environment Variables
Create:
```text
backend/.env
frontend/.env
admin/.env
```
Configure credentials for:
- MongoDB Atlas
- Cloudinary
- SMTP
- Google OAuth
- GitHub OAuth
- Upstash Redis
---
## 4️⃣ Start Development Servers
### Backend
```bash
cd backend
npm run server
```
### Job Seeker Frontend
```bash
cd frontend
npm run dev
```
### Recruiter Dashboard
```bash
cd admin
npm run dev
```
✅ Run all applications in separate terminals.
---
# 🔒 Security Features
- bcrypt Password Hashing
- JWT Authentication
- Secure Cookies
- Role-Based Route Authorization
- Email Verification
- OTP Password Recovery
- Upstash Rate Limiting
- Input Validation
- Error Handling Middleware
- Secure File Uploads
---
# 📱 Responsive Design
Optimized for:
- 💻 Desktop
- 📱 Mobile Devices
- 📟 Tablets
---
# ☁️ Deployment Architecture
| Component | Platform |
|------------|----------|
| Job Seeker Frontend | Vercel |
| Recruiter Dashboard | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |
| File Storage | Cloudinary |
---
# 📄 License
This project is licensed under the **MIT License**.
---
# 👨💻 Author
Developed using:
- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- JWT Authentication
- Google & GitHub OAuth
- Tailwind CSS
---
