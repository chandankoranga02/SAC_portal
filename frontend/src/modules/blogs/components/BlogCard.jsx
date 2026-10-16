import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowUpRight, Tag } from 'lucide-react';

const CATEGORY_COLORS = {
  'Cultural & Arts': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
  'Technical Council': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Sports & Adventure': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Student Governance': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Campus Updates': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

export const BlogCard = ({ blog, variant = 'default', className = '' }) => {
  if (!blog) return null;

  const categoryColorClass =
    CATEGORY_COLORS[blog.category] || 'bg-white/10 text-white/80 border-white/15';

  if (variant === 'featured') {
    return (
      <article
        className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,132,209,0.15)] ${className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Cover Photo */}
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto">
            <img
              src={blog.coverPhoto}
              alt={blog.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/80" />

            <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${categoryColorClass}`}
              >
                {blog.category}
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                ★ Featured Story
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <div>
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} className="text-white/40" />
                  {blog.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-white/40" />
                  {blog.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-[#00a3ff] sm:text-3xl">
                <Link to={`/blogs/${blog.id}`} className="focus:outline-none">
                  {blog.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3 sm:text-base">
                {blog.excerpt}
              </p>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/60"
                    >
                      <Tag size={10} className="text-white/30" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Author & Action */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-3">
                {blog.author?.avatar ? (
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="h-10 w-10 rounded-full border border-white/20 object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0084d1]/20 font-bold text-[#00a3ff]">
                    {blog.author?.name?.charAt(0) || 'S'}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-white">
                    {blog.author?.name || 'SAC Editorial'}
                  </div>
                  <div className="text-xs text-white/40">
                    {blog.author?.role || 'Contributor'}
                  </div>
                </div>
              </div>

              <Link
                to={`/blogs/${blog.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-black transition-all hover:bg-neutral-200"
                aria-label={`Read ${blog.title}`}
              >
                <span>Read Article</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default Grid Card
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/[0.05] hover:shadow-[0_10px_25px_-5px_rgba(0,132,209,0.15)] ${className}`}
    >
      {/* Cover Photo */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <img
          src={blog.coverPhoto}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 z-10">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-md ${categoryColorClass}`}
          >
            {blog.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white/70">
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} className="text-white/50" />
            {blog.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} className="text-white/50" />
            {blog.readTime}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Title */}
          <h3 className="text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-[#00a3ff] sm:text-xl line-clamp-2">
            <Link to={`/blogs/${blog.id}`} className="focus:outline-none">
              {blog.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-2.5 text-sm leading-relaxed text-white/60 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {blog.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            {blog.author?.avatar ? (
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="h-8 w-8 shrink-0 rounded-full border border-white/15 object-cover"
              />
            ) : (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0084d1]/20 text-xs font-bold text-[#00a3ff]">
                {blog.author?.name?.charAt(0) || 'S'}
              </div>
            )}
            <div className="min-w-0">
              <div className="truncate text-xs font-semibold text-white/90">
                {blog.author?.name || 'SAC'}
              </div>
              <div className="truncate text-[10px] text-white/40">
                {blog.author?.role || 'Staff'}
              </div>
            </div>
          </div>

          <Link
            to={`/blogs/${blog.id}`}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-label={`Read ${blog.title}`}
          >
            <span>Read</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
