import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ExternalLink, Image as ImageIcon, X } from 'lucide-react';
import { CAFE_INFO, INITIAL_REVIEWS, ReviewItem } from '../data/cafeData';

const LOCAL_STORAGE_KEY = 'original_adda_user_reviews';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [formError, setFormError] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed: ReviewItem[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        }
      }
    } catch {
      // Fallback to initial
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setFormError('Photo size should be under 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
        setFormError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!comment.trim()) {
      setFormError('Please write a brief comment.');
      return;
    }

    const newReview: ReviewItem = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      rating: rating,
      text: comment.trim(),
      date: 'Just now',
      source: 'On-site guest',
      photoUrl: photoPreview || undefined,
      isNew: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    // Save only user submitted reviews to localStorage
    try {
      const existingUserReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsedExisting: ReviewItem[] = existingUserReviews ? JSON.parse(existingUserReviews) : [];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newReview, ...parsedExisting]));
    } catch {
      // Ignore localStorage write error
    }

    // Reset Form
    setName('');
    setComment('');
    setRating(5);
    setPhotoPreview(null);
    setFormError('');
    setSubmittedSuccess(true);

    setTimeout(() => {
      setSubmittedSuccess(false);
      setShowForm(false);
    }, 3000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#FCFAF7] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Patron Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Honest Words from Our Guests
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Serving smiles, crispy crusts, and warm evenings in Jhargram every day.
            </p>
          </div>

          {/* Rating Summary Card & Google Review Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
            <div className="flex items-center gap-3 pr-4 sm:border-r border-stone-200">
              <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">
                {CAFE_INFO.googleRating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(CAFE_INFO.googleRating) ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/40 text-amber-400/40'}`}
                    />
                  ))}
                </div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">
                  {CAFE_INFO.totalReviews} Google Reviews
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={CAFE_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Write on Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>

              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>{showForm ? 'Close Form' : 'Add Quick Review'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* On-site Review Form (Collapsible/Interactive) */}
        {showForm && (
          <div className="mb-14 p-6 sm:p-8 bg-white rounded-3xl border border-amber-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Share Your Experience
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Tell fellow foodies in Jhargram what you loved most about our pizzas, tacos, or mojitos!
                </p>
              </div>

              {submittedSuccess ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-emerald-800 flex flex-col items-center gap-2">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                  <p className="font-semibold text-base">Thank you for sharing your review!</p>
                  <p className="text-xs text-emerald-700">
                    Your feedback is saved locally on this device. To leave a public Google review, use the "Write on Google" button.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                      {formError}
                    </div>
                  )}

                  {/* Rating Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 cursor-pointer focus:outline-none"
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              (hoverRating || rating) >= star
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-medium text-stone-600 ml-2">
                        {rating} out of 5 stars
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="rev-author" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      id="rev-author"
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label htmlFor="rev-text" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Review / Comment
                    </label>
                    <textarea
                      id="rev-text"
                      rows={3}
                      placeholder="Share your thoughts on the food, ambience, and match screening..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  {/* Optional Photo Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Optional Photo Upload
                    </label>
                    {photoPreview ? (
                      <div className="relative inline-block mt-1">
                        <img
                          src={photoPreview}
                          alt="Review preview"
                          className="w-24 h-24 object-cover rounded-xl border border-stone-200"
                        />
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="absolute -top-2 -right-2 p-1 bg-stone-900 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <label className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-xl cursor-pointer transition-colors">
                        <ImageIcon className="w-4 h-4 text-stone-500" />
                        <span>Upload a photo (Max 2MB)</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      Post Review
                    </button>
                  </div>

                  {/* Notice as requested in brief */}
                  <p className="text-[11px] text-stone-500 pt-2 border-t border-stone-100">
                    * Note: Reviews posted here are saved on this device. To post publicly, use the Google button.
                  </p>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 rounded-2xl bg-white border flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow ${
                rev.isNew ? 'border-amber-400 bg-amber-50/20' : 'border-stone-200/80'
              }`}
            >
              <div>
                {/* Header: Rating & Source */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-stone-500 font-medium">
                    {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm leading-relaxed italic mb-4 font-light">
                  "{rev.text}"
                </p>

                {/* Optional Attached Photo */}
                {rev.photoUrl && (
                  <div className="mb-4">
                    <img
                      src={rev.photoUrl}
                      alt={`Photo by ${rev.name}`}
                      className="w-full h-32 object-cover rounded-xl border border-stone-200"
                    />
                  </div>
                )}
              </div>

              {/* Author & Date */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-900">{rev.name}</span>
                <span className="text-stone-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
