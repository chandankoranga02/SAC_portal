import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/Layout';

// Main Modular Pages
import HomePage from '@/modules/home/page';
import AboutPage from '@/modules/aboutus/page';
import BlogsPage from '@/modules/blogs/page';
import RegistrationPage from '@/modules/registration/page';
import GalleryPage from '@/modules/gallery/page';
import ContactPage from '@/modules/contactus/page';
import CertificateForm from '@/components/Certificate';
import TeamsPage from '@/modules/teams/page';

// Utility & Policy Pages
import ComplainPage from '@/pages/ComplainPage';
import FeedbackPage from '@/pages/FeedbackPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/team" element={<TeamsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/certificate" element={<CertificateForm />} />
          <Route path="/certificates" element={<CertificateForm />} />
          <Route path="/complain" element={<ComplainPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
