import { useState } from 'react';

const REVIEWS = [
  {
    id: 1,
    date: "12/08/2025",
    author: "Anonymous",
    rating: 5,
    text: "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
    verified: true,
  },
  {
    id: 2,
    date: "12/01/2025",
    author: "Anonymous",
    rating: 5,
    text: "One month and I've already seen a difference!",
    verified: true,
  },
  {
    id: 3,
    date: "11/23/2025",
    author: "Donabeth Houx",
    rating: 5,
    text: "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
    verified: true,
  },
  {
    id: 4,
    date: "11/17/2025",
    author: "Dawn Camacho",
    rating: 5,
    text: "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
    verified: true,
  },
  {
    id: 5,
    date: "11/13/2025",
    author: "Anonymous",
    rating: 5,
    text: "I have noticed a difference on my swelling.",
    verified: true,
  },
  {
    id: 6,
    date: "11/10/2025",
    author: "Sarah J.",
    rating: 4,
    text: "Great product, really helps with the texture.",
    verified: true,
  },
  {
    id: 7,
    date: "11/05/2025",
    author: "Emily R.",
    rating: 5,
    text: "Absolutely love it. Will buy again.",
    verified: true,
  },
  {
    id: 8,
    date: "10/28/2025",
    author: "Jessica M.",
    rating: 5,
    text: "Best investment for my skin this year.",
    verified: true,
  },
  {
    id: 9,
    date: "10/15/2025",
    author: "Anonymous",
    rating: 3,
    text: "It's okay, but shipping took a while.",
    verified: true,
  },
  {
    id: 10,
    date: "10/01/2025",
    author: "Linda K.",
    rating: 5,
    text: "Highly recommended!",
    verified: true,
  }
];

const STAR_DISTRIBUTION = [
  { stars: 5, count: 84 },
  { stars: 4, count: 17 },
  { stars: 3, count: 8 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
];

const ITEMS_PER_PAGE = 5;

const StarIcon = ({ filled = true, className = "w-4 h-4" }: { filled?: boolean, className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    className={className}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CheckIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UserIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const DiamondBadge = () => (
  <div className="flex flex-col items-center justify-center my-8">
     <img 
        src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format" 
        alt="Diamond Authenticity" 
        className="h-28"
    />
  </div>
);


const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Most Recent');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const totalPages = Math.ceil(REVIEWS.length / ITEMS_PER_PAGE);
  const currentReviews = REVIEWS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const sortOptions = [
    "Most Recent",
    "Highest Rating",
    "Lowest Rating",
    "Only Pictures",
    "Pictures First",
    "Videos First",
    "Most Helpful"
  ];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium">
            <span>Excellent</span>
            <span className="font-bold">4.8 out of 5</span>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00b67a] fill-current">
               <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-bold">Trustpilot</span>
          </div>
          <h2 className="font-serif text-3xl leading-tight text-sculptique-text sm:text-4xl lg:text-[44px]">
            Real Women, Real Results: 93,000+ Transformations
          </h2>
          <p className="mt-4 text-base text-sculptique-muted">
            All reviews verified from actual paying customers
          </p>
        </div>

        <div className="mb-12">
            <h3 className="text-center font-serif text-3xl mb-8">Customer Reviews</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-end space-y-2 flex-1 md:pr-8 md:border-r border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="flex text-sculptique-pink relative">
                            {[1, 2, 3, 4].map((i) => (
                                <StarIcon key={i} className="w-5 h-5" filled={true} />
                            ))}
                            <div className="relative w-5 h-5">
                                <StarIcon className="w-5 h-5 block" filled={false} />
                                <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: '50%' }}>
                                    <StarIcon className="w-5 h-5 block" filled={true} />
                                </div>
                            </div>
                        </div>
                        <span className="text-lg text-gray-700">4.67 out of 5</span>
                    </div>
                    <div className="text-gray-500 flex items-center gap-1">
                        Based on 110 reviews
                        <div className="bg-teal-500 text-white p-[2px] rounded-sm">
                            <CheckIcon className="w-3 h-3" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-sm px-4">
                    {STAR_DISTRIBUTION.map((item) => (
                        <div key={item.stars} className="flex items-center gap-3 text-sm mb-1">
                            <div className="flex text-sculptique-pink w-24 justify-end">
                                {[...Array(5)].map((_, i) => (
                                   <StarIcon key={i} className="w-3 h-3" filled={i < item.stars} />
                                ))}
                            </div>
                            <div className="flex-1 h-5 bg-gray-100 rounded-sm overflow-hidden relative">
                                <div 
                                    className="h-full bg-sculptique-pink absolute left-0 top-0" 
                                    style={{ width: `${(item.count / 110) * 100}%` }}
                                />
                            </div>
                            <div className="w-6 text-right text-gray-500">{item.count}</div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-auto flex-1 md:pl-8 md:border-l border-gray-100 flex justify-center md:justify-start">
                    <button className="w-full md:w-auto px-8 py-3 bg-sculptique-pink text-white font-bold rounded hover:bg-opacity-90 transition shadow-sm uppercase tracking-wide">
                        Write a review
                    </button>
                </div>
            </div>
        </div>

        <DiamondBadge />

        <div className="border-t border-gray-100 my-8"></div>

        <div className="mb-6 relative">
             <div className="relative inline-block text-left group">
                <button 
                  type="button" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  {sortBy}
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {isSortOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 text-white">
                    <div className="py-1" role="menu">
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          role="menuitem"
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 flex items-center"
                          onClick={() => {
                            setSortBy(option);
                            setIsSortOpen(false);
                          }}
                        >
                           {sortBy === option && <CheckIcon className="w-4 h-4 mr-2" />}
                           <span className={sortBy !== option ? 'ml-6' : ''}>{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
             </div>
        </div>
        <div className="space-y-8">
            {currentReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex text-sculptique-pink space-x-0.5">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5" filled={i < review.rating} />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm hidden sm:block">{review.date}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 my-3">
                         <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="bg-gray-100 p-2 rounded">
                                    <UserIcon className="w-6 h-6 text-sculptique-pink" />
                                </div>
                                {review.verified && (
                                    <div className="absolute -bottom-1 -right-1 bg-sculptique-pink text-white rounded-[2px] p-[2px]">
                                        <CheckIcon className="w-2 h-2" />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sculptique-pink font-medium">{review.author}</span>
                                {review.verified && (
                                    <span className="bg-sculptique-pink text-white text-[10px] px-1.5 py-0.5 rounded opacity-80">
                                        Verified
                                    </span>
                                )}
                            </div>
                         </div>
                         <span className="text-gray-500 text-sm sm:hidden mt-1">{review.date}</span>
                    </div>

                    <div className="mt-2">
                        <p className="text-gray-800 leading-relaxed">
                            {review.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination Logic */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 text-sculptique-pink font-medium">
                {/* Previous */}
                <button 
                    disabled={currentPage === 1}
                    className="p-2 disabled:opacity-30 hover:bg-pink-50 rounded"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    aria-label="Previous page"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>

                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                                currentPage === page 
                                ? 'text-black font-bold' 
                                : 'text-sculptique-pink hover:bg-pink-50'
                            }`}
                        >
                            {page}
                        </button>
                    )
                })}

                 <button 
                    disabled={currentPage === totalPages}
                    className="p-2 disabled:opacity-30 hover:bg-pink-50 rounded"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    aria-label="Next page"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
            </div>
        )}

      </div>
    </section>
  );
};

export default ReviewsSection;
