import React from 'react';
import {
  FiBriefcase,
  FiFileText,
  FiShield,
  FiUser,
  FiUsers,
  FiSearch,
  FiCheckCircle,
  FiAlertCircle,
  FiLock,
  FiGlobe,
  FiMail,
  FiArrowUpRight,
  FiChevronRight,
  FiCalendar,
  FiInfo,
  FiMessageSquare,
  FiTrash2,
  FiSettings,
  FiEye,
  FiAward,
  FiClipboard
} from 'react-icons/fi';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50 px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/20">
              <FiBriefcase />
            </div>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Platform Guidelines
            </span>
          </div>

          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <FiFileText />
              Terms & Conditions
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              Terms of <span className="text-blue-600">Service.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Welcome to our job portal. These terms explain the rules and
              responsibilities that apply when you use our platform to find
              employment opportunities, publish job vacancies, and connect
              with potential candidates.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-blue-600" />
                Last Updated: November 2, 2026
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"></span>

              <span className="flex items-center gap-2">
                <FiShield className="text-blue-600" />
                User Agreement
              </span>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <FiUser className="text-2xl text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">Job Seekers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Understand your responsibilities when creating profiles and applying for jobs.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <FiBriefcase className="text-2xl text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">Employers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Learn the rules for creating company profiles and publishing job opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <FiShield className="text-2xl text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">Platform Safety</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Review our guidelines for responsible and secure platform usage.
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
                  Please Read These Terms Carefully
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  These Terms of Service govern your access to and use of
                  <strong className="text-blue-600"> [Your Job Portal Name] </strong>,
                  including its website, features, and services. Our platform
                  provides a space where job seekers can discover employment
                  opportunities and employers can connect with potential candidates.
                </p>

                <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                  By accessing our website, creating an account, posting a job,
                  or applying for an opportunity, you agree to comply with
                  these terms. If you do not agree, please discontinue using
                  our platform.
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
                Explore our platform terms and conditions.
              </p>

              <nav className="mt-6 space-y-1">

                <a href="#acceptance" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Acceptance of Terms <FiChevronRight />
                </a>

                <a href="#eligibility" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Eligibility & Accounts <FiChevronRight />
                </a>

                <a href="#jobseekers" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Job Seekers <FiChevronRight />
                </a>

                <a href="#employers" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Employers <FiChevronRight />
                </a>

                <a href="#listings" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Job Listings <FiChevronRight />
                </a>

                <a href="#applications" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Applications & Hiring <FiChevronRight />
                </a>

                <a href="#content" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  User Content <FiChevronRight />
                </a>

                <a href="#prohibited" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Prohibited Activities <FiChevronRight />
                </a>

                <a href="#intellectual" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Intellectual Property <FiChevronRight />
                </a>

                <a href="#termination" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Account Termination <FiChevronRight />
                </a>

                <a href="#liability" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Liability & Disclaimer <FiChevronRight />
                </a>

                <a href="#changes" className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
                  Changes to Terms <FiChevronRight />
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
                  Need assistance?
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Contact our support team if you have questions about these terms.
                </p>

                <a href="mailto:support@yourjobportal.com" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
                  Contact Support <FiArrowUpRight />
                </a>
              </div>

            </div>
          </aside>

          {/* Terms Content */}
          <div className="space-y-6">

            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiFileText />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    01 / General
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Acceptance of Terms
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  By accessing, browsing, registering on, or using our website,
                  you acknowledge that you have read, understood, and agreed
                  to these Terms of Service.
                </p>

                <p>
                  These terms apply to all visitors, job seekers, employers,
                  recruiters, registered users, and anyone who accesses or
                  uses our platform.
                </p>

                <p>
                  We may update these terms periodically. Your continued use
                  of our platform after updated terms are published constitutes
                  acceptance of the revised terms, subject to applicable law.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="eligibility" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiUser />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    02 / Registration
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Eligibility & User Accounts
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  To access certain features, you may need to create an account
                  as a job seeker or employer. You agree to provide accurate,
                  complete, and current information during registration.
                </p>

                <p>You are responsible for:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Providing truthful and accurate account information.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Maintaining the confidentiality of your login credentials.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Keeping your profile and contact information up to date.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Notifying us about unauthorized access to your account.
                  </li>
                </ul>

                <p>
                  We reserve the right to suspend or restrict accounts that
                  contain false information, violate these terms, or create
                  security risks for our platform or users.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="jobseekers" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiSearch />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    03 / Job Seekers
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Job Seeker Responsibilities
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  As a job seeker, you may create a professional profile,
                  upload your resume, search for job opportunities, save jobs,
                  and submit applications through our platform.
                </p>

                <p>You agree to:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Provide genuine and accurate personal and professional information.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Upload resumes and documents that belong to you or that you are authorized to use.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Submit applications only for legitimate employment purposes.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Avoid misleading employers with false qualifications or experience.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Communicate professionally with employers and recruiters.
                  </li>
                </ul>

                <p>
                  You are responsible for reviewing your profile and application
                  details before submitting them to employers.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="employers" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiBriefcase />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    04 / Employers
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Employer Responsibilities
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Employers and recruiters may create company profiles,
                  publish job vacancies, review candidate applications,
                  and manage recruitment activities through our platform.
                </p>

                <p>Employers agree to:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Provide accurate company and business information.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Publish genuine job opportunities with accurate descriptions.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Clearly communicate job requirements, responsibilities, and qualifications.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Handle candidate information responsibly and confidentially.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Use candidate information only for legitimate recruitment purposes.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Follow applicable employment, privacy, and anti-discrimination laws.
                  </li>
                </ul>

                <p>
                  Employers must not use our platform to publish fraudulent
                  vacancies, collect information for unrelated purposes,
                  or mislead job seekers.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="listings" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiClipboard />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    05 / Job Listings
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Job Posting Guidelines
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  All job listings published on our platform must be genuine,
                  lawful, and relevant to legitimate employment opportunities.
                </p>

                <p>Job listings must not:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Contain false, misleading, or deceptive employment information.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Promote illegal activities or fraudulent recruitment schemes.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Request sensitive personal or financial information without a lawful basis.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Contain discriminatory or unlawful employment requirements.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Advertise opportunities that the employer is not authorized to offer.
                  </li>
                </ul>

                <p>
                  We reserve the right to review, reject, remove, or restrict
                  job listings that violate these terms or applicable laws.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="applications" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiUsers />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    06 / Recruitment
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Applications & Hiring Process
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Our platform provides tools that help job seekers submit
                  applications and help employers review candidates.
                  However, we do not guarantee that an application will be
                  viewed, that an interview will be offered, or that a job
                  seeker will receive employment.
                </p>

                <p>
                  Employers are solely responsible for their recruitment
                  decisions, candidate evaluations, interviews, employment
                  offers, and hiring arrangements.
                </p>

                <p>
                  Job seekers are responsible for verifying employment
                  opportunities and communicating directly with employers
                  when necessary.
                </p>

                <p>
                  We are not a party to employment contracts or agreements
                  entered into between job seekers and employers.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="content" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiFileText />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    07 / User Content
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    User-Submitted Content
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Users may submit or upload content such as resumes,
                  profile photographs, company logos, job descriptions,
                  portfolio links, and other materials.
                </p>

                <p>
                  You retain ownership of content you submit, subject to
                  rights you may have granted to others. By submitting content
                  to our platform, you grant us a limited, non-exclusive
                  permission to host, store, display, and process that content
                  as necessary to operate and provide our services.
                </p>

                <p>You confirm that:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    You own the content or have permission to submit it.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Your content does not violate another person's rights.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    Your content is not unlawful, fraudulent, or misleading.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="prohibited" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiAlertCircle />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    08 / Platform Safety
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Prohibited Activities
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  You agree not to engage in activities that may harm our
                  platform, users, or services, including:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Creating fake accounts or impersonating another person or company.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Publishing fraudulent jobs or misleading employment offers.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Harassing, threatening, or discriminating against other users.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Collecting or misusing candidate information without authorization.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Attempting to access restricted accounts, data, or systems.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Uploading malware or interfering with website functionality.
                  </li>

                  <li className="flex items-start gap-3">
                    <FiAlertCircle className="mt-1 shrink-0 text-blue-600" />
                    Using automated tools to scrape or collect platform data without authorization.
                  </li>
                </ul>

                <p>
                  We may investigate suspected violations and take appropriate
                  action, including removing content, restricting features,
                  or suspending accounts.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="intellectual" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiAward />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    09 / Ownership
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Intellectual Property Rights
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Unless otherwise stated, our website design, branding,
                  logos, software, text, graphics, and platform materials
                  are owned by or licensed to us and are protected by
                  applicable intellectual property laws.
                </p>

                <p>
                  You may use our platform for its intended purposes, but
                  you may not copy, reproduce, distribute, modify, sell,
                  or commercially exploit our materials without prior
                  written permission, except where permitted by law.
                </p>

                <p>
                  Company logos, trademarks, resumes, and other materials
                  submitted by users remain subject to the rights of their
                  respective owners.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="termination" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiTrash2 />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    10 / Account Management
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Suspension & Account Termination
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  You may stop using our platform and request account
                  deletion through the available account settings or by
                  contacting our support team.
                </p>

                <p>
                  We reserve the right to suspend, restrict, or terminate
                  accounts that violate these terms, engage in fraudulent
                  activity, misuse platform features, or create risks for
                  other users.
                </p>

                <p>
                  Where appropriate and legally required, we may provide
                  notice or an opportunity to address a violation before
                  taking action.
                </p>

                <p>
                  Termination does not affect rights or obligations that
                  have already accrued or provisions that are intended to
                  survive termination.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="liability" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiShield />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    11 / Legal
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Disclaimer & Limitation of Liability
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Our platform acts as an intermediary that provides tools
                  for job seekers and employers to connect. We do not
                  guarantee the accuracy of every job listing, the
                  qualifications of every candidate, or the conduct of
                  every employer or job seeker.
                </p>

                <p>
                  We do not guarantee employment, interviews, successful
                  recruitment, or any particular hiring outcome.
                </p>

                <p>
                  To the extent permitted by applicable law, we are not
                  responsible for indirect, incidental, special, or
                  consequential losses arising from your use of our
                  platform or interactions with other users.
                </p>

                <p>
                  Nothing in these terms excludes or limits liability
                  that cannot legally be excluded or limited under
                  applicable law.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="changes" className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiSettings />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    12 / Updates
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Changes to These Terms
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  We may modify these Terms of Service from time to time
                  to reflect changes in our platform, services, business
                  operations, or legal requirements.
                </p>

                <p>
                  Updated terms will be published on this page with a
                  revised "Last Updated" date. Where required by law,
                  we will provide additional notice or obtain consent
                  before changes take effect.
                </p>

                <p>
                  We encourage you to review this page periodically
                  to remain informed about your responsibilities and
                  our platform policies.
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
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    13 / Support
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Contact Us
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                If you have questions, concerns, or requests regarding
                these Terms of Service, please contact our support team
                using the information below.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
                    <FiMail />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Support Email
                  </p>

                  <a href="mailto:support@yourjobportal.com" className="mt-2 block break-all font-bold text-blue-600 hover:underline">
                    support@yourjobportal.com
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
                  <FiBriefcase />
                </div>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    Building meaningful career connections.
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    Thank you for being part of our community. We are
                    committed to providing a professional platform where
                    job seekers and employers can connect responsibly.
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

export default TermsOfService;