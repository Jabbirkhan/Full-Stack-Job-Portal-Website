import React from 'react';
import {
  FiShield,
  FiLock,
  FiUser,
  FiBriefcase,
  FiFileText,
  FiDatabase,
  FiSearch,
  FiMail,
  FiGlobe,
  FiEye,
  FiSettings,
  FiUsers,
  FiCheckCircle,
  FiArrowUpRight,
  FiChevronRight,
  FiCalendar,
  FiInfo,
  FiServer,
  FiTrash2,
  FiShare2,
  FiBell
} from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/20">
              <FiShield />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Your Privacy Matters
            </span>
          </div>

          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <FiLock />
              Privacy & Data Protection
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              Privacy <span className="text-blue-600">Policy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Your trust is important to us. Learn how we collect, use, store,
              and protect your personal information when you use our job portal
              to find opportunities, hire talent, and manage your career.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-blue-600" />
                Last Updated: November 2, 2026
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"></span>
              <span className="flex items-center gap-2">
                <FiShield className="text-blue-600" />
                Secure Data Practices
              </span>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <FiUser className="text-2xl text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">Job Seekers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Understand how your profile, resume, and applications are handled.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <FiBriefcase className="text-2xl text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">Employers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Learn how employer accounts, company profiles, and job listings are managed.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <FiLock className="text-2xl text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">Data Protection</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Discover the measures we take to protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 pt-14 sm:px-8 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                <FiInfo />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  About This Privacy Policy
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  This Privacy Policy explains how
                  <strong className="text-blue-600"> [Your Job Portal Name] </strong>
                  collects, uses, processes, stores, and shares personal
                  information when you access our website or use our services.
                  Our platform connects job seekers with employers and helps
                  organizations discover suitable candidates.
                </p>

                <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                  By creating an account or using our platform, you acknowledge
                  that your information may be processed as described in this
                  Privacy Policy. Please read this document carefully to
                  understand your privacy rights and choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">

          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                On this page
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Navigate through our privacy practices.
              </p>

              <nav className="mt-6 space-y-1">
                <a href="#information" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Information We Collect <FiChevronRight />
                </a>
                <a href="#jobseekers" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Job Seekers <FiChevronRight />
                </a>
                <a href="#employers" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Employers <FiChevronRight />
                </a>
                <a href="#usage" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  How We Use Information <FiChevronRight />
                </a>
                <a href="#applications" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Applications & Resumes <FiChevronRight />
                </a>
                <a href="#sharing" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Information Sharing <FiChevronRight />
                </a>
                <a href="#cookies" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Cookies & Tracking <FiChevronRight />
                </a>
                <a href="#security" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Data Security <FiChevronRight />
                </a>
                <a href="#rights" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Your Privacy Rights <FiChevronRight />
                </a>
                <a href="#retention" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Data Retention <FiChevronRight />
                </a>
                <a href="#thirdparty" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Third-Party Services <FiChevronRight />
                </a>
                <a href="#changes" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Policy Updates <FiChevronRight />
                </a>
                <a href="#contact" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Contact Us <FiChevronRight />
                </a>
              </nav>

              <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
                  <FiMail />
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  Privacy questions?
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Our team is available to help with privacy-related questions.
                </p>

                <a href="mailto:privacy@yourjobportal.com" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
                  Contact Privacy Team <FiArrowUpRight />
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Content */}
          <div className="space-y-6">

            {/* Section 1 */}
            <section id="information" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiDatabase />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">01 / Data Collection</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Information We Collect
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  We collect information that you provide directly, information
                  generated through your use of our platform, and certain
                  information received from third-party services.
                </p>

                <div>
                  <h3 className="font-bold text-slate-900">Personal Information</h3>
                  <p className="mt-2">
                    Depending on how you use our platform, we may collect your
                    full name, email address, phone number, location, profile
                    photograph, account credentials, and other contact details.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Professional Information</h3>
                  <p className="mt-2">
                    We may collect your educational background, qualifications,
                    work experience, skills, employment history, certifications,
                    portfolio links, resume, and career preferences.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Technical Information</h3>
                  <p className="mt-2">
                    We may collect IP addresses, browser type, device
                    information, operating system, pages visited, access times,
                    and usage activity to maintain and improve our platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="jobseekers" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiUser />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">02 / Job Seekers</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Information from Job Seekers
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  When you register as a job seeker, create a professional
                  profile, or apply for employment opportunities, we may collect:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Your name, email address, phone number, and location.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Your resume, cover letters, and uploaded documents.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Education, skills, qualifications, and work experience.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Job preferences, saved jobs, and application history.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Profile information and communication preferences.
                  </li>
                </ul>

                <p>
                  This information helps us provide job recommendations,
                  manage applications, and connect you with potential employers.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="employers" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiBriefcase />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">03 / Employers</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Information from Employers
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  When an employer or company creates an account, posts job
                  opportunities, or manages candidates, we may collect:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Company name, business email, phone number, and address.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Employer or recruiter name and account information.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Company logo, website, description, and industry details.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Job descriptions, requirements, salary details, and job locations.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Candidate interactions, application management, and hiring activity.
                  </li>
                </ul>

                <p>
                  We use this information to provide employer services,
                  manage company profiles, publish job listings, and facilitate
                  recruitment activities.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="usage" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiSettings />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">04 / Processing</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    How We Use Your Information
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>We may use your information for the following purposes:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Create, authenticate, and manage user accounts.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Connect job seekers with relevant employment opportunities.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Allow employers to publish jobs and review applications.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Send account notifications, application updates, and service messages.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Improve website performance, functionality, and user experience.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Detect fraud, prevent unauthorized access, and maintain security.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Comply with applicable legal obligations.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="applications" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiFileText />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">05 / Applications</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Resumes & Job Applications
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  When you apply for a job through our platform, we may share
                  the application information and documents you submit with
                  the relevant employer or recruiting company.
                </p>

                <p>
                  This may include your resume, cover letter, contact details,
                  professional profile, qualifications, and other information
                  you choose to include in your application.
                </p>

                <p>
                  Employers may use this information to evaluate applications,
                  contact candidates, conduct recruitment activities, and make
                  hiring decisions.
                </p>

                <p>
                  Please review the information in your profile and application
                  before submitting it. Once information has been shared with
                  an employer, that employer may retain it according to its
                  own privacy practices and legal obligations.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="sharing" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiShare2 />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">06 / Data Sharing</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    How We Share Information
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  We do not sell your personal information. However, we may
                  share information in the following circumstances:
                </p>

                <div>
                  <h3 className="font-bold text-slate-900">Employers and Recruiters</h3>
                  <p className="mt-2">
                    When you submit a job application, relevant application
                    information is shared with the employer responsible for
                    that job opportunity.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Service Providers</h3>
                  <p className="mt-2">
                    We may share information with trusted providers that help
                    us operate our platform, including hosting, email delivery,
                    file storage, analytics, and security services.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Legal Requirements</h3>
                  <p className="mt-2">
                    We may disclose information when required by law, legal
                    proceedings, regulatory authorities, or to protect our
                    rights, users, and platform.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Business Transfers</h3>
                  <p className="mt-2">
                    Information may be transferred as part of a merger,
                    acquisition, restructuring, or sale of business assets,
                    subject to applicable privacy requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="cookies" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiEye />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">07 / Tracking</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Cookies & Tracking Technologies
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Our website may use cookies and similar technologies to
                  recognize your browser, maintain sessions, remember
                  preferences, and understand how visitors interact with
                  our platform.
                </p>

                <p>These technologies may help us:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Keep users signed in and maintain secure sessions.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Remember preferences and improve website navigation.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Analyze website traffic and platform performance.
                  </li>
                </ul>

                <p>
                  You can manage or disable cookies through your browser
                  settings. Some website features may not function correctly
                  if certain cookies are disabled. Where required by law,
                  we will request consent before using non-essential cookies.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="security" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiLock />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">08 / Protection</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Data Security
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  We take reasonable technical and organizational measures
                  designed to protect personal information against
                  unauthorized access, alteration, disclosure, loss, and misuse.
                </p>

                <p>Our security practices may include:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Password hashing and secure authentication procedures.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Access restrictions for sensitive user information.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Secure connections and protected data transmission where supported.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Monitoring and measures intended to detect suspicious activity.
                  </li>
                </ul>

                <p>
                  Although we work to protect your information, no internet
                  transmission or electronic storage system can be guaranteed
                  to be completely secure.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="rights" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiUser />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">09 / User Rights</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Your Privacy Rights
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Depending on your location and applicable privacy laws,
                  you may have certain rights regarding your personal information.
                  These rights may include:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Request access to personal information we hold about you.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Request correction of inaccurate or incomplete information.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Request deletion of your personal information, subject to legal exceptions.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Withdraw consent where processing is based on consent.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Object to or request restrictions on certain processing activities.
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Unsubscribe from optional promotional communications.
                  </li>
                </ul>

                <p>
                  To exercise an applicable privacy right, contact us using
                  the details provided below. We may need to verify your
                  identity before processing your request.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="retention" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiTrash2 />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">10 / Data Management</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Data Retention & Account Deletion
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  We retain personal information for as long as reasonably
                  necessary to provide our services, maintain user accounts,
                  manage applications, resolve disputes, enforce agreements,
                  and meet legal obligations.
                </p>

                <p>
                  You may request account deletion by contacting our support
                  team or using an available account deletion feature.
                  We will process eligible requests in accordance with
                  applicable laws and our retention requirements.
                </p>

                <p>
                  Please note that deleting your account from our platform
                  may not automatically delete information already shared
                  with employers or other independent third parties.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="thirdparty" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiGlobe />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">11 / External Services</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Third-Party Websites & Services
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Our platform may contain links to external websites,
                  integrations, or third-party services. These services may
                  have their own privacy policies and data-handling practices.
                </p>

                <p>
                  We are not responsible for the privacy practices, security,
                  or content of external websites that we do not operate.
                  We encourage you to review their privacy policies before
                  sharing personal information with them.
                </p>

                <p>
                  Third-party services used by our platform may include
                  authentication providers, hosting platforms, email services,
                  file storage providers, and analytics tools, depending on
                  our actual integrations.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="changes" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiBell />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">12 / Policy Updates</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Changes to This Privacy Policy
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our services, data practices, technology,
                  or legal requirements.
                </p>

                <p>
                  Any updated version will be published on this page with a
                  revised "Last Updated" date. Where required by law, we will
                  provide additional notice or obtain consent for material
                  changes.
                </p>

                <p>
                  We encourage you to review this page periodically to stay
                  informed about how we handle your personal information.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="contact" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiMail />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">13 / Get in Touch</span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Contact Us
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or the way we handle your personal information,
                please contact our privacy team.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
                    <FiMail />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Privacy Email
                  </p>

                  <a href="mailto:privacy@yourjobportal.com" className="mt-2 block break-all font-bold text-blue-600 hover:underline">
                    privacy@yourjobportal.com
                  </a>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
                    <FiGlobe />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Website
                  </p>

                  <a href="https://www.yourjobportal.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-bold text-blue-600 hover:underline">
                    www.yourjobportal.com <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </section>

            {/* Final Notice */}
            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-7 text-white shadow-lg shadow-blue-600/10 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  <FiShield />
                </div>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    Your career journey deserves privacy.
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    We are committed to handling your information responsibly
                    while helping job seekers and employers connect with
                    meaningful opportunities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;