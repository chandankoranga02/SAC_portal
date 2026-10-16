import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, BookOpen, X } from 'lucide-react';
import { blogsData, BLOG_CATEGORIES } from '../data/blogsData';
import BlogCard from './BlogCard';

export const BlogListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'

  // Featured post is always the one marked featured, or the first one
  const featuredBlog = useMemo(() => {
    return blogsData.find((b) => b.featured) || blogsData[0];
  }, []);

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    return blogsData
      .filter((blog) => {
        const matchesCategory =
          selectedCategory === 'All' || blog.category === selectedCategory;

        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !query ||
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.author?.name.toLowerCase().includes(query) ||
          (blog.tags && blog.tags.some((tag) => tag.toLowerCase().includes(query)));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
  }, [selectedCategory, searchQuery, sortOrder]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortOrder('newest');
  };

  return (
    <div className="w-full">
      {/* Featured Story Section (shown when no search is active and category is All) */}
      {selectedCategory === 'All' && !searchQuery.trim() && featuredBlog && (
        <section className="mb-14">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-amber-400" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">
              Spotlight Article
            </h2>
          </div>
          <BlogCard blog={featuredBlog} variant="featured" />
        </section>
      )}

      {/* Search, Filter Tabs & Sort Controls */}
      <section className="mb-10 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, clubs, topics or authors..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-10 text-sm text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#0084d1] focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#0084d1]"
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center justify-between gap-3 text-xs sm:justify-end">
            <div className="flex items-center gap-2 text-white/50">
              <SlidersHorizontal size={14} />
              <span>Sort:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="rounded-lg border border-white/10 bg-neutral-900 px-2.5 py-1.5 font-medium text-white/80 transition-colors focus:border-[#0084d1] focus:outline-none"
                aria-label="Sort order"
              >
                <option value="newest">Latest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-medium text-white/60">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
        </div>

        {/* Category Filter Pills (horizontally scrollable on small screens) */}
        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex items-center gap-2">
            {BLOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      : 'border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Indicators */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-white/60">
            <span>Filtering by:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-sky-400 border border-sky-500/20">
                Category: {selectedCategory}
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="hover:text-white"
                  aria-label="Remove category filter"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-amber-300 border border-amber-500/20">
                "{searchQuery}"
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="hover:text-white"
                  aria-label="Remove search query"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-[#00a3ff] underline-offset-4 hover:underline ml-1"
            >
              Reset all
            </button>
          </div>
        )}
      </section>

      {/* Articles Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="my-16 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center sm:p-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white/50">
            <BookOpen size={28} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
            No articles found
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            We couldn't find any articles matching your search query or selected
            category. Try adjusting your filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-6 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-neutral-200"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Student Editorial Callout */}
      <section className="mt-16 rounded-2xl border border-sky-400/20 bg-gradient-to-r from-sky-950/30 via-neutral-900/50 to-blue-950/20 p-8 sm:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00a3ff]">
              Student Submissions
            </span>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Have an article, project recap or story to share?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              The SAC Editorial Board welcomes submissions from all students, faculty
              mentors, and society heads. Get your voice published on the official
              GBPIET portal.
            </p>
          </div>
          <a
            href="mailto:sac@gbpiet.ac.in?subject=SAC%20Blog%20Submission"
            className="shrink-0 rounded-xl bg-[#0084d1] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-sky-900/30 transition-all hover:bg-[#009bf5] hover:scale-105 active:scale-95"
          >
            Submit an Article
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
