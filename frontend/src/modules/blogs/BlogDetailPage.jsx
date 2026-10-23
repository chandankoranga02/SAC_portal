import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Tag,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { FaXTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { getBlogById, getRelatedBlogs } from './data/blogsData';
import BlogCard from './components/BlogCard';

export const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const blog = getBlogById(id);
  const relatedBlogs = blog ? getRelatedBlogs(blog.id, 3) : [];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareOnTwitter = () => {
    if (!blog) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${blog.title} — via SAC GBPIET`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    if (!blog) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    if (!blog) return;
    const text = encodeURIComponent(`${blog.title}: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // 404 / Not Found State
  if (!blog) {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white/50">
            <BookOpen size={32} />
          </div>
          <h1 className="mt-6 text-2xl font-black text-white sm:text-3xl">
            Article Not Found
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            The article you are looking for does not exist or may have been archived.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-neutral-200"
            >
              <ArrowLeft size={14} />
              <span>Back to all articles</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pb-24 pt-8 text-white">
      {/* Top Breadcrumb & Back bar */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => navigate('/blogs')}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Blogs</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-white">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-[#0084d1] truncate max-w-[150px] sm:max-w-[200px]">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
              {blog.category}
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <Calendar size={13} className="text-white/40" />
              {blog.date}
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <Clock size={13} className="text-white/40" />
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            {blog.title}
          </h1>

          <p className="text-base font-normal leading-relaxed text-white/70 sm:text-lg">
            {blog.excerpt}
          </p>

          {/* Author Strip & Share Actions */}
          <div className="flex flex-col gap-4 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {blog.author?.avatar ? (
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-11 w-11 rounded-full border border-white/20 object-cover shadow-sm"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0084d1]/20 font-bold text-[#00a3ff]">
                  {blog.author?.name?.charAt(0) || 'S'}
                </div>
              )}
              <div>
                <div className="text-sm font-bold text-white">
                  {blog.author?.name || 'SAC GBPIET'}
                </div>
                <div className="text-xs text-white/50">
                  {blog.author?.role || 'Staff Editorial'}
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                title="Copy link to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={13} />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={shareOnTwitter}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
                aria-label="Share on X"
              >
                <FaXTwitter size={13} />
              </button>

              <button
                type="button"
                onClick={shareOnLinkedIn}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={13} />
              </button>

              <button
                type="button"
                onClick={shareOnWhatsApp}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
                aria-label="Share on WhatsApp"
              >
                <FaWhatsapp size={13} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Cover Photo */}
        <div className="my-8 overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
          <img
            src={blog.coverPhoto}
            alt={blog.title}
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="bg-neutral-900/90 px-4 py-2.5 text-xs text-white/40">
            Photo: SAC GBPIET Media Wing Archives • {blog.title}
          </div>
        </div>

        {/* Rich Article Body */}
        <article className="prose prose-invert max-w-none text-white/80">
          {blog.content?.lead && (
            <p className="text-lg leading-relaxed text-slate-200 font-medium">
              {blog.content.lead}
            </p>
          )}

          {blog.content?.sections?.map((section, idx) => (
            <section key={idx} className="mt-8 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {section.heading}
              </h2>

              {section.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-white/70">
                  {p}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-6 rounded-xl border-l-4 border-[#0084d1] bg-white/[0.03] p-5 italic text-white/90">
                  "{section.quote}"
                </blockquote>
              )}
            </section>
          ))}
        </article>

        {/* Tags Section */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/40">
              <Tag size={13} />
              Tagged in:
            </span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {blog.author?.avatar ? (
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="h-16 w-16 shrink-0 rounded-full border-2 border-white/20 object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0084d1]/20 text-xl font-bold text-[#00a3ff]">
                {blog.author?.name?.charAt(0) || 'S'}
              </div>
            )}
            <div>
              <div className="text-base font-bold text-white">
                About the Author: {blog.author?.name}
              </div>
              <div className="text-xs font-medium text-[#00a3ff]">
                {blog.author?.role} • Student Activity Cell
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Contributing regular dispatches and reporting on student initiatives,
                technical achievements, and cultural landmarks across Govind Ballabh
                Pant Institute of Engineering & Technology, Pauri Garhwal.
              </p>
            </div>
          </div>
        </div>

        {/* Join SAC Callout Box */}
        <div className="mt-12 rounded-2xl border border-[#0084d1]/30 bg-gradient-to-r from-[#00629b]/20 to-transparent p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Want to lead initiatives like this?
              </h3>
              <p className="mt-1 text-xs text-white/70 max-w-md">
                Join the Student Activity Cell team and contribute across technical,
                cultural, literary, sports, and media operations.
              </p>
            </div>
            <Link
              to="/registration"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-neutral-200"
            >
              <span>Apply to Join SAC</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-12">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                  Keep Reading
                </h2>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  Related Stories & Articles
                </h3>
              </div>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#00a3ff] hover:underline"
              >
                <span>View all articles</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default BlogDetailPage;
