'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  Send, 
  MessageCircle, 
  Sparkles,
  Layers,
  Code2,
  Smartphone,
  Bot,
  Loader2,
  RotateCcw,
  X,
  Calendar,
  Video
} from 'lucide-react';
import { saveContactInquiry } from '@/lib/supabase';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

const AVAILABLE_SERVICES: ServiceItem[] = [
  {
    id: 'web',
    title: 'Website Development',
    desc: 'Custom web solutions, platforms & corporate portals',
    icon: Code2,
  },
  {
    id: 'software',
    title: 'Custom Software Systems',
    desc: 'Tailored business ERPs, CRMs & automation engines',
    icon: Layers,
  },
  {
    id: 'app',
    title: 'Mobile App Development',
    desc: 'iOS and Android native and cross-platform apps',
    icon: Smartphone,
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    desc: 'Automate repetitive workflows with intelligent AI',
    icon: Bot,
  },
];

export default function ContactClient() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);

  // Auto-dismiss top-right toast after 10 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [problemStatement, setProblemStatement] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [expectedOutcome, setExpectedOutcome] = useState<string>('');
  const [existingTools, setExistingTools] = useState<string>('');

  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [budgetApproved, setBudgetApproved] = useState<string>('');
  const [decisionMaker, setDecisionMaker] = useState<string>('');

  const [fullName, setFullName] = useState<string>('');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [contactChannel, setContactChannel] = useState<string>('WhatsApp');
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  // Meeting Scheduling State
  const [meetingDate, setMeetingDate] = useState<string>('');
  const [meetingTime, setMeetingTime] = useState<string>('10:00 AM (EAT)');
  const [meetingMode, setMeetingMode] = useState<string>('Google Meet');
  const [googleMeetEmailChoice, setGoogleMeetEmailChoice] = useState<'same' | 'different'>('same');
  const [differentMeetingEmail, setDifferentMeetingEmail] = useState<string>('');

  // Compute Dynamic Budget Options based on user's exact specification
  const budgetOptions = useMemo(() => {
    const hasApp = selectedServices.includes('app');
    const hasWeb = selectedServices.includes('web');
    const hasSoftware = selectedServices.includes('software');
    const hasAi = selectedServices.includes('ai');

    // If only AI & Automation selected
    if (hasAi && !hasApp && !hasWeb && !hasSoftware) {
      return [
        '700,000 - 999,999 TZS',
        '1,000,000 - 1,999,999 TZS',
        '2,000,000 - 4,999,999 TZS',
        '5,000,000+ TZS',
      ];
    }

    // If App is selected (App only, Web+App, App+AI, or all)
    if (hasApp) {
      return [
        '2,000,000 - 4,999,999 TZS',
        '5,000,000+ TZS',
      ];
    }

    // Default for Web, Custom Software, or Web + AI
    return [
      '1,000,000 - 1,999,999 TZS',
      '2,000,000 - 4,999,999 TZS',
      '5,000,000+ TZS',
    ];
  }, [selectedServices]);

  // If a budget was selected and is no longer valid under new services, reset to empty
  useEffect(() => {
    if (budget && !budgetOptions.includes(budget)) {
      setBudget('');
    }
  }, [budgetOptions, budget]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleStartNew = () => {
    setStep(1);
    setSelectedServices([]);
    setProblemStatement('');
    setProjectDescription('');
    setExpectedOutcome('');
    setExistingTools('');
    setBudget('');
    setTimeline('');
    setBudgetApproved('');
    setDecisionMaker('');
    setFullName('');
    setWorkEmail('');
    setCompanyName('');
    setWhatsappNumber('');
    setContactChannel('WhatsApp');
    setAgreedToTerms(false);
    setMeetingDate('');
    setMeetingTime('10:00 AM (EAT)');
    setMeetingMode('Google Meet');
    setGoogleMeetEmailChoice('same');
    setDifferentMeetingEmail('');
    setSubmitError(null);
    setSubmitted(false);
    setShowToast(false);

    if (typeof window !== 'undefined') {
      const formCard = document.getElementById('inquiry-form');
      if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !whatsappNumber || !agreedToTerms) return;

    if (meetingMode === 'Google Meet' && googleMeetEmailChoice === 'different' && !differentMeetingEmail) {
      setSubmitError('Please enter your Google Meet email address or select the work email option.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const effectiveMeetingEmail = meetingMode === 'Google Meet'
      ? (googleMeetEmailChoice === 'different' ? differentMeetingEmail.trim() : workEmail.trim())
      : undefined;

    try {
      await saveContactInquiry({
        full_name: fullName,
        work_email: workEmail,
        whatsapp_number: whatsappNumber,
        company_name: companyName || undefined,
        contact_channel: contactChannel,
        services: selectedServices,
        problem_statement: problemStatement || undefined,
        project_description: projectDescription || undefined,
        expected_outcome: expectedOutcome || undefined,
        existing_tools: existingTools || undefined,
        budget: budget || undefined,
        timeline: timeline || undefined,
        budget_approved: budgetApproved || undefined,
        decision_maker: decisionMaker || undefined,
        meeting_date: meetingDate || undefined,
        meeting_time: meetingDate ? meetingTime : undefined,
        meeting_mode: meetingMode,
        meeting_email: effectiveMeetingEmail,
      });

      setSubmitted(true);
      setShowToast(true);
    } catch (err: unknown) {
      console.error('Contact inquiry save error:', err);
      setSubmitError('Unable to submit inquiry right now. Please check your connection or reach out to us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper labels for review box
  const selectedServiceTitles = useMemo(() => {
    if (selectedServices.length === 0) return 'None selected';
    return selectedServices
      .map((id) => AVAILABLE_SERVICES.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');
  }, [selectedServices]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#eef7f6]/60 dark:bg-[#071311]">
      {/* Top-Right Notification Toast */}
      {showToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed top-6 right-4 sm:right-6 z-50 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] sm:w-auto animate-in slide-in-from-top-4 sm:slide-in-from-right-4 fade-in duration-300 drop-shadow-2xl"
        >
          <div className="bg-white/95 dark:bg-[#0c1b18]/95 backdrop-blur-md border border-[#2a8a85]/40 dark:border-[#5fd4ce]/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#d4edea] dark:bg-[#1a3a35] text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-5 h-5 animate-pulse" />
            </div>
            
            <div className="flex-1 pr-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-extrabold text-sm text-[#1a3a35] dark:text-white">
                  Inquiry Received!
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-xs text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
                Your inquiry has been received. Please check your email account{' '}
                {workEmail ? <span className="font-semibold text-[#1a3a35] dark:text-white">({workEmail})</span> : ''}{' '}
                for confirmation details.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Top Static Grid Background (Header area only, matching reference screenshot 2) */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[460px] pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)] z-0"
      >
        {/* Light mode grid */}
        <div 
          className="w-full h-full opacity-60 dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(26, 58, 53, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(26, 58, 53, 0.14) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Dark mode grid */}
        <div 
          className="w-full h-full hidden dark:block opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Top Header Navbar */}
      <Navbar />

      <main className="relative z-10 flex-grow pt-10 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Hero Header & Breadcrumb Navigation matching Screenshot 2 */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a3a35] dark:text-white tracking-tight leading-tight">
              Contact Us
            </h1>

            <nav className="inline-flex items-center gap-2 text-sm text-[#42645f] dark:text-[#94a3b8] mt-3">
              <Link 
                href="/" 
                className="hover:text-[#2a8a85] dark:hover:text-[#5fd4ce] transition-colors font-medium"
              >
                Home
              </Link>
              <span>/</span>
              <span className="font-semibold text-[#1a3a35] dark:text-white">
                Contact
              </span>
            </nav>
          </div>

          {/* Interactive Multi-Step Form Card with Increased Width & Height */}
          <div id="inquiry-form" className="relative scroll-mt-24 bg-white dark:bg-[#0c1614] border border-[#1a3a35]/15 dark:border-white/10 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl mb-20 transition-all min-h-[620px] md:min-h-[660px] flex flex-col justify-between">
            
            {/* Top Step Progress Bar */}
            <div className="mb-8">
              <div className="w-full bg-[#1a3a35]/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#2a8a85] dark:bg-[#5fd4ce] h-full transition-all duration-300 ease-out"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
              <div className="mt-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2a8a85] dark:text-[#5fd4ce]">
                <span>STEP {step} OF 4</span>
                <span className="text-[#42645f] dark:text-[#94a3b8] normal-case font-medium text-sm">
                  {step === 1 && 'Choose your service'}
                  {step === 2 && 'Tell us about your project'}
                  {step === 3 && 'Budget and timeline'}
                  {step === 4 && 'Contact details & review'}
                </span>
              </div>
            </div>

            {submitted ? (
              /* Success Confirmation Screen */
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#d4edea] dark:bg-[#1a3a35] text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-[#1a3a35] dark:text-white mb-3">
                  Inquiry Received Successfully!
                </h2>
                <p className="text-base text-[#42645f] dark:text-[#94a3b8] max-w-md mx-auto mb-8">
                  Thank you, <span className="font-bold text-[#1a3a35] dark:text-white">{fullName}</span>. Our technical team has received your project details and will review them promptly within 24 hours.
                </p>
                
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={handleStartNew}
                    className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#2a8a85] hover:bg-[#237571] dark:bg-[#5fd4ce] dark:hover:bg-[#4ec2bc] text-white dark:text-[#0c1614] font-bold text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Start New</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                
                {/* ==================================================== */}
                {/* STEP 1: CHOOSE YOUR SERVICE                          */}
                {/* ==================================================== */}
                {step === 1 && (
                  <div className="flex-1 flex flex-col justify-between animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a3a35] dark:text-white mb-8">
                        Choose your service
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-12">
                        {AVAILABLE_SERVICES.map((item) => {
                          const isSelected = selectedServices.includes(item.id);
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.id}
                              onClick={() => toggleService(item.id)}
                              className={`p-6 sm:p-7 md:p-8 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[160px] sm:min-h-[175px] group ${
                                isSelected
                                  ? 'bg-[#d4edea]/40 dark:bg-[#193d36] border-[#2a8a85] dark:border-[#5fd4ce] shadow-md -translate-y-0.5'
                                  : 'bg-white dark:bg-[#102420] border-[#1a3a35]/15 dark:border-white/10 hover:border-[#2a8a85]/50 hover:bg-slate-50/50 dark:hover:bg-[#142e29]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-4">
                                <div 
                                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                    isSelected
                                      ? 'bg-[#2a8a85] text-white'
                                      : 'bg-[#1a3a35]/10 dark:bg-white/10 text-[#1a3a35] dark:text-[#5fd4ce] group-hover:bg-[#2a8a85] group-hover:text-white'
                                  }`}
                                >
                                  <Icon className="w-6 h-6" />
                                </div>
                                <div 
                                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                                    isSelected
                                      ? 'bg-[#2a8a85] border-[#2a8a85] text-white'
                                      : 'border-slate-300 dark:border-white/20'
                                  }`}
                                >
                                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-[#1a3a35] dark:text-white mb-1.5">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-end pt-4">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={selectedServices.length === 0}
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#2a8a85] hover:bg-[#237571] dark:bg-[#5fd4ce] dark:hover:bg-[#4ec2bc] text-white dark:text-[#0c1614] font-bold text-base shadow-md transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ==================================================== */}
                {/* STEP 2: TELL US ABOUT YOUR PROJECT                   */}
                {/* ==================================================== */}
                {step === 2 && (
                  <div className="flex-1 flex flex-col justify-between animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a3a35] dark:text-white mb-8">
                        Tell us about your project
                      </h2>

                      <div className="space-y-6 mb-10">
                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            What problem are you trying to solve? *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={problemStatement}
                            onChange={(e) => setProblemStatement(e.target.value)}
                            placeholder="Explain your current business or technical challenge"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm resize-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Project description *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            placeholder="Share the features, scope, and ideal end result"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm resize-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Expected outcome in 3 to 6 months (optional)
                          </label>
                          <textarea
                            rows={2}
                            value={expectedOutcome}
                            onChange={(e) => setExpectedOutcome(e.target.value)}
                            placeholder="What success looks like for this project"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm resize-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Existing website/app/tools or links (optional)
                          </label>
                          <input
                            type="text"
                            value={existingTools}
                            onChange={(e) => setExistingTools(e.target.value)}
                            placeholder="https://... or list the tools you currently use"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#1a3a35] dark:text-white font-bold text-sm transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!problemStatement || !projectDescription}
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#2a8a85] hover:bg-[#237571] dark:bg-[#5fd4ce] dark:hover:bg-[#4ec2bc] text-white dark:text-[#0c1614] font-bold text-base shadow-md transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ==================================================== */}
                {/* STEP 3: BUDGET AND TIMELINE                          */}
                {/* ==================================================== */}
                {step === 3 && (
                  <div className="flex-1 flex flex-col justify-between animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a3a35] dark:text-white mb-8">
                        Budget and timeline
                      </h2>

                      <div className="space-y-6 mb-10">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold text-[#1a3a35] dark:text-white">
                              Estimated budget (TZS) *
                            </label>
                            <span className="text-xs text-[#2a8a85] dark:text-[#5fd4ce]">
                              Adjusted for your selected services
                            </span>
                          </div>
                          <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className={`w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer ${
                              !budget ? 'text-slate-400 dark:text-slate-500' : 'text-[#1a3a35] dark:text-white'
                            }`}
                          >
                            <option value="" disabled className="text-slate-400">
                              Select estimated budget
                            </option>
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt} className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Desired timeline *
                          </label>
                          <select
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className={`w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer ${
                              !timeline ? 'text-slate-400 dark:text-slate-500' : 'text-[#1a3a35] dark:text-white'
                            }`}
                          >
                            <option value="" disabled className="text-slate-400">
                              Select desired timeline
                            </option>
                            <option value="ASAP" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">ASAP (Immediate kick-off)</option>
                            <option value="Within 2 weeks" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Within 2 weeks</option>
                            <option value="Within 1 month" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Within 1 month</option>
                            <option value="Flexible" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Flexible schedule</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Is the budget approved? *
                          </label>
                          <select
                            value={budgetApproved}
                            onChange={(e) => setBudgetApproved(e.target.value)}
                            className={`w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer ${
                              !budgetApproved ? 'text-slate-400 dark:text-slate-500' : 'text-[#1a3a35] dark:text-white'
                            }`}
                          >
                            <option value="" disabled className="text-slate-400">
                              Select budget approval status
                            </option>
                            <option value="Yes, budget is approved" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Yes, budget is approved</option>
                            <option value="Budget approval is in progress" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Budget approval is in progress</option>
                            <option value="No, still exploring" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">No, still exploring</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Are you the decision maker? (optional)
                          </label>
                          <select
                            value={decisionMaker}
                            onChange={(e) => setDecisionMaker(e.target.value)}
                            className={`w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer ${
                              !decisionMaker ? 'text-slate-400 dark:text-slate-500' : 'text-[#1a3a35] dark:text-white'
                            }`}
                          >
                            <option value="" className="text-slate-400">
                              Select option (optional)
                            </option>
                            <option value="Yes" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Yes</option>
                            <option value="Part of a team" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">Part of a team</option>
                            <option value="No" className="bg-white dark:bg-[#102420] text-[#1a3a35] dark:text-white">No</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#1a3a35] dark:text-white font-bold text-sm transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!budget || !timeline || !budgetApproved}
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#2a8a85] hover:bg-[#237571] dark:bg-[#5fd4ce] dark:hover:bg-[#4ec2bc] text-white dark:text-[#0c1614] font-bold text-base shadow-md transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ==================================================== */}
                {/* STEP 4: CONTACT DETAILS & REVIEW                     */}
                {/* ==================================================== */}
                {step === 4 && (
                  <div className="flex-1 flex flex-col justify-between animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a3a35] dark:text-white mb-8">
                        Contact details
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Full name *
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Work email *
                          </label>
                          <input
                            type="email"
                            required
                            value={workEmail}
                            onChange={(e) => setWorkEmail(e.target.value)}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Company name (optional)
                          </label>
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Company Ltd"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            WhatsApp number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            placeholder="+255..."
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-bold text-[#1a3a35] dark:text-white mb-2">
                            Preferred contact channel
                          </label>
                          <select
                            value={contactChannel}
                            onChange={(e) => setContactChannel(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer"
                          >
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="Email">Email</option>
                            <option value="Phone Call">Phone Call</option>
                          </select>
                        </div>
                      </div>

                      {/* Meeting / Consultation Scheduling Section */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#102420] border border-[#1a3a35]/15 dark:border-white/10 mb-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#d4edea] dark:bg-[#1a3a35] text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center shrink-0">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-extrabold text-[#1a3a35] dark:text-white">
                              Schedule Discovery Meeting (Optional)
                            </h3>
                            <p className="text-xs text-[#42645f] dark:text-[#94a3b8]">
                              Select your preferred date, time, and channel for an introductory discussion.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                          {/* Calendar Date */}
                          <div>
                            <label className="block text-xs font-bold text-[#1a3a35] dark:text-white mb-2">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              value={meetingDate}
                              onChange={(e) => setMeetingDate(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0c1b18] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer"
                            />
                          </div>

                          {/* Meeting Time */}
                          <div>
                            <label className="block text-xs font-bold text-[#1a3a35] dark:text-white mb-2">
                              Preferred Time (EAT)
                            </label>
                            <select
                              value={meetingTime}
                              onChange={(e) => setMeetingTime(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0c1b18] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer"
                            >
                              <option value="09:00 AM (EAT)">09:00 AM (EAT)</option>
                              <option value="10:00 AM (EAT)">10:00 AM (EAT)</option>
                              <option value="11:30 AM (EAT)">11:30 AM (EAT)</option>
                              <option value="02:00 PM (EAT)">02:00 PM (EAT)</option>
                              <option value="03:30 PM (EAT)">03:30 PM (EAT)</option>
                              <option value="05:00 PM (EAT)">05:00 PM (EAT)</option>
                            </select>
                          </div>

                          {/* Mode of Meeting */}
                          <div className="sm:col-span-2">
                            <label className="block text-xs font-bold text-[#1a3a35] dark:text-white mb-2">
                              Mode of Meeting
                            </label>
                            <select
                              value={meetingMode}
                              onChange={(e) => setMeetingMode(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0c1b18] border border-[#1a3a35]/15 dark:border-white/10 text-[#1a3a35] dark:text-white focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm transition-colors cursor-pointer"
                            >
                              <option value="Google Meet">Google Meet (Online Video Call)</option>
                              <option value="WhatsApp">WhatsApp (Call / Video)</option>
                              <option value="Phone Call">Direct Phone Call</option>
                              <option value="In-Person (Dar es Salaam)">In-Person (Dar es Salaam, Tanzania)</option>
                            </select>
                          </div>

                          {/* Dynamic Google Meet Email Choice */}
                          {meetingMode === 'Google Meet' && (
                            <div className="sm:col-span-2 p-4 rounded-xl bg-[#d4edea]/40 dark:bg-[#1a3a35]/30 border border-[#2a8a85]/20 dark:border-[#5fd4ce]/20 space-y-3">
                              <div className="flex items-center gap-2">
                                <Video className="w-4 h-4 text-[#2a8a85] dark:text-[#5fd4ce]" />
                                <span className="text-xs font-bold text-[#1a3a35] dark:text-white">
                                  Google Meet Invitation Email
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#1a3a35]/10 dark:border-white/10 bg-white dark:bg-[#102420] cursor-pointer hover:border-[#2a8a85] dark:hover:border-[#5fd4ce] transition-colors">
                                  <input
                                    type="radio"
                                    name="googleMeetEmailChoice"
                                    value="same"
                                    checked={googleMeetEmailChoice === 'same'}
                                    onChange={() => setGoogleMeetEmailChoice('same')}
                                    className="text-[#2a8a85] focus:ring-[#2a8a85]"
                                  />
                                  <span className="text-[#1a3a35] dark:text-white font-medium">
                                    Same as work email ({workEmail || 'entered above'})
                                  </span>
                                </label>

                                <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#1a3a35]/10 dark:border-white/10 bg-white dark:bg-[#102420] cursor-pointer hover:border-[#2a8a85] dark:hover:border-[#5fd4ce] transition-colors">
                                  <input
                                    type="radio"
                                    name="googleMeetEmailChoice"
                                    value="different"
                                    checked={googleMeetEmailChoice === 'different'}
                                    onChange={() => setGoogleMeetEmailChoice('different')}
                                    className="text-[#2a8a85] focus:ring-[#2a8a85]"
                                  />
                                  <span className="text-[#1a3a35] dark:text-white font-medium">
                                    Use another email address
                                  </span>
                                </label>
                              </div>

                              {googleMeetEmailChoice === 'different' && (
                                <div className="pt-1">
                                  <label className="block text-xs font-bold text-[#1a3a35] dark:text-white mb-1.5">
                                    Meeting Email Address *
                                  </label>
                                  <input
                                    type="email"
                                    required
                                    value={differentMeetingEmail}
                                    onChange={(e) => setDifferentMeetingEmail(e.target.value)}
                                    placeholder="your-google-account@gmail.com"
                                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#102420] border border-[#1a3a35]/20 dark:border-white/15 text-[#1a3a35] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2a8a85] dark:focus:border-[#5fd4ce] text-sm"
                                  />
                                </div>
                              )}
                            </div>
                          )}

                          {/* Dynamic WhatsApp Info Callout */}
                          {meetingMode === 'WhatsApp' && (
                            <div className="sm:col-span-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-2.5">
                              <MessageCircle className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                              <span>
                                Default WhatsApp number will be used: <strong className="font-bold">{whatsappNumber || 'Phone number provided above'}</strong>.
                              </span>
                            </div>
                          )}

                          {/* Dynamic In-Person Info Callout */}
                          {meetingMode === 'In-Person (Dar es Salaam)' && (
                            <div className="sm:col-span-2 p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-[#42645f] dark:text-[#94a3b8] flex items-center gap-2.5">
                              <MapPin className="w-4 h-4 shrink-0 text-[#2a8a85] dark:text-[#5fd4ce]" />
                              <span>
                                Meeting will be scheduled at our Dar es Salaam office or an agreed on-site business location.
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Review Before Submitting Summary Box */}
                      <div className="p-5 rounded-2xl bg-[#d4edea]/30 dark:bg-[#193d36]/40 border border-[#2a8a85]/30 dark:border-[#5fd4ce]/20 mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#2a8a85] dark:text-[#5fd4ce] mb-3">
                          Review before submitting
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                          <div>
                            <span className="text-[#42645f] dark:text-[#94a3b8] block mb-0.5">Services:</span>
                            <span className="font-bold text-[#1a3a35] dark:text-white">{selectedServiceTitles}</span>
                          </div>
                          <div>
                            <span className="text-[#42645f] dark:text-[#94a3b8] block mb-0.5">Budget:</span>
                            <span className="font-bold text-[#1a3a35] dark:text-white">{budget}</span>
                          </div>
                          <div>
                            <span className="text-[#42645f] dark:text-[#94a3b8] block mb-0.5">Timeline:</span>
                            <span className="font-bold text-[#1a3a35] dark:text-white">{timeline}</span>
                          </div>
                          <div>
                            <span className="text-[#42645f] dark:text-[#94a3b8] block mb-0.5">Budget status:</span>
                            <span className="font-bold text-[#1a3a35] dark:text-white">{budgetApproved}</span>
                          </div>
                          <div className="sm:col-span-2 pt-2 border-t border-[#2a8a85]/15 dark:border-white/10">
                            <span className="text-[#42645f] dark:text-[#94a3b8] block mb-0.5">Discovery Meeting:</span>
                            <span className="font-bold text-[#1a3a35] dark:text-white">
                              {meetingDate ? `${meetingDate} (${meetingTime})` : 'Flexible / Follow-up'} &bull; {meetingMode}
                              {meetingMode === 'Google Meet' && (
                                <span className="block text-xs font-normal text-[#42645f] dark:text-[#94a3b8] mt-0.5">
                                  Invite to: {googleMeetEmailChoice === 'different' ? (differentMeetingEmail || 'Not specified yet') : (workEmail || 'Work email')}
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Paid Service Agreement Checkbox */}
                      <div className="mb-8">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            required
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#2a8a85] focus:ring-[#2a8a85] cursor-pointer"
                          />
                          <span className="text-xs sm:text-sm text-[#42645f] dark:text-[#94a3b8] leading-relaxed">
                            I understand this is a professional paid service and my details will be used to respond to this project inquiry.
                          </span>
                        </label>
                      </div>
                    </div>

                    {submitError && (
                      <div className="mb-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs sm:text-sm">
                        {submitError}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#1a3a35] dark:text-white font-bold text-sm transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={
                          !fullName ||
                          !workEmail ||
                          !whatsappNumber ||
                          !agreedToTerms ||
                          isSubmitting ||
                          (meetingMode === 'Google Meet' && googleMeetEmailChoice === 'different' && !differentMeetingEmail)
                        }
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#2a8a85] hover:bg-[#237571] dark:bg-[#5fd4ce] dark:hover:bg-[#4ec2bc] text-white dark:text-[#0c1614] font-bold text-base shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

          {/* ==================================================== */}
          {/* CONTACT INFORMATION CARDS (KADI 4)                  */}
          {/* ==================================================== */}
          <div className="mb-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a35] dark:text-white mb-2">
              Contact Information
            </h2>
            <p className="text-sm text-[#42645f] dark:text-[#94a3b8] mb-8">
              Prefer to reach out directly? Here are the best ways to connect with us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Email */}
              <a
                href="mailto:team@tariqtechlimited.com"
                className="p-6 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 hover:border-[#2a8a85] dark:hover:border-[#5fd4ce] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4edea] dark:bg-white/10 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-1">
                  Email
                </h3>
                <p className="text-sm font-semibold text-[#2a8a85] dark:text-[#5fd4ce] truncate mb-1">
                  team@tariqtechlimited.com
                </p>
                <p className="text-xs text-[#42645f] dark:text-[#94a3b8]">
                  For general inquiries and projects
                </p>
              </a>

              {/* Card 2: Phone / WhatsApp */}
              <a
                href="https://wa.me/255744588248"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 hover:border-[#2a8a85] dark:hover:border-[#5fd4ce] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-1">
                  Phone
                </h3>
                <p className="text-sm font-semibold text-[#1a3a35] dark:text-white mb-1">
                  +255 744 588 248
                </p>
                <p className="text-xs text-[#42645f] dark:text-[#94a3b8]">
                  Available for calls and WhatsApp
                </p>
              </a>

              {/* Card 3: Response Time */}
              <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#e8b54b]/20 text-[#e8b54b] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-1">
                  Response Time
                </h3>
                <p className="text-sm font-semibold text-[#1a3a35] dark:text-white mb-1">
                  Within 24 Hours
                </p>
                <p className="text-xs text-[#42645f] dark:text-[#94a3b8]">
                  We value your time and reply promptly
                </p>
              </div>

              {/* Card 4: Location */}
              <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#102420]/80 backdrop-blur-md border border-[#1a3a35]/15 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#5fd4ce]/20 text-[#2a8a85] dark:text-[#5fd4ce] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a3a35] dark:text-white mb-1">
                  Location
                </h3>
                <p className="text-sm font-semibold text-[#1a3a35] dark:text-white mb-1">
                  Dar es Salaam, Tanzania
                </p>
                <p className="text-xs text-[#42645f] dark:text-[#94a3b8]">
                  Working with clients worldwide
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ==================================================== */}
        {/* FAQS SECTION (Official FAQSection component)         */}
        {/* ==================================================== */}
        <FAQSection />
      </main>

      {/* Main Bottom Footer */}
      <Footer />
    </div>
  );
}
