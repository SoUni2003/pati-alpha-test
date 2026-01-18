import { useState } from "react";

const REVIEWS = [
  {
    id: 1,
    date: "12/08/2025",
    author: "Anonymous",
    rating: 5,
    text: "Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working.",
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
    text: "starting to see results after one bottle",
    verified: true,
  },
  {
    id: 6,
    date: "11/10/2025",
    author: "Lynda Sandora",
    rating: 4,
    text: "Whenever I am sitting or laying down for awhile, I’m really stiff & I feel like my lower body doesn’t belong to me. Almost immediately after taking these pills, I am no longer stiff & I move with ease! Thank you!",
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
  },
  {
    id: 10,
    date: "10/01/2025",
    author: "Linda K.",
    rating: 5,
    text: "Highly recommended!",
    verified: true,
  },
  {
    id: 10,
    date: "10/01/2025",
    author: "Linda K.",
    rating: 5,
    text: "Highly recommended!",
    verified: true,
  },
  {
    id: 10,
    date: "10/01/2025",
    author: "Linda K.",
    rating: 5,
    text: "Highly recommended!",
    verified: true,
  },
];

const STAR_DISTRIBUTION = [
  { stars: 5, count: 84 },
  { stars: 4, count: 17 },
  { stars: 3, count: 8 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
];

const ITEMS_PER_PAGE = 5;

const StarIcon = ({
  filled = true,
  className = "w-4 h-4",
}: {
  filled?: boolean;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    className={className}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Most Recent");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const totalPages = Math.ceil(REVIEWS.length / ITEMS_PER_PAGE);
  const currentReviews = REVIEWS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const sortOptions = [
    "Most Recent",
    "Highest Rating",
    "Lowest Rating",
    "Only Pictures",
    "Pictures First",
    "Videos First",
    "Most Helpful",
  ];

  return (
    <section className="lg:py-6">
      <div className="mx-auto max-w-page w-full px-4 lg:px-6">
        <div className="text-center mb-10  max-w-[800px] mx-auto">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
              alt="Trustpilot Score"
              className="h-[19px]"
            />
          </div>
          <h2 className="font-lora text-2xl leading-snug text-sculptique-text lg:text-[32px] lg:leading-[1.3] text-center">
            Real Women, Real Results: 93,000+ <br /> Transformations
          </h2>
          <p className="mt-3 font-nunito text-base lg:text-lg text-sculptique-text">
            All reviews verified from actual paying customers
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-center font-trirong text-[22.5px] lg:text-2xl  text-sculptique-text">
            Customer Reviews
          </h3>

          <div className="flex flex-col lg:flex-row items-stretch border-b border-sculptique-pink/10">
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-2 py-6 lg:pr-2">
              <div className="flex items-center gap-2">
                <div className="flex text-sculptique-pink font-bold relative">
                  {[1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="w-6 h-6" filled={true} />
                  ))}
                  <div className="relative w-6 h-6">
                    <StarIcon className="w-6 h-6 block" filled={false} />
                    <div
                      className="absolute top-0 left-0 h-full overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <StarIcon className="w-6 h-6 block" filled={true} />
                    </div>
                  </div>
                </div>
                <span className="text-base font-montserrat text-sculptique-secondary text-nowrap">
                  4.67 out of 5
                </span>
              </div>
              <div className="text-base font-montserrat text-sculptique-secondary flex items-center gap-1">
                Based on 110 reviews
                <img
                  src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                  className="h-[17px] w-[17px]"
                  alt=""
                />
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-sculptique-pink/10 h-24 self-center mx-4"></div>

            <div className="flex flex-col justify-center py-8 px-4 lg:px-12">
              {STAR_DISTRIBUTION.map((item) => (
                <div
                  key={item.stars}
                  className="flex items-center gap-3 text-sm mb-1"
                >
                  <div className="flex text-sculptique-pink w-24 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 font-bold"
                        filled={i < item.stars}
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-[14px] bg-gray-100 rounded-sm overflow-hidden relative min-w-[140px] ml-4">
                    <div
                      className="h-full bg-sculptique-pink absolute left-0 top-0"
                      style={{ width: `${(item.count / 110) * 100}%` }}
                    />
                  </div>
                  <div className="w-6 text-right text-gray-500">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block w-[1px] bg-sculptique-pink/10 h-24 self-center mx-4"></div>

            <div className="flex-1 w-full lg:w-auto flex flex-col justify-center items-center lg:items-end py-8 ">
              <button className="w-full lg:w-auto px-16 py-[10px] font-bold text-base bg-sculptique-pink text-white font-montserrat rounded-sm hover:bg-opacity-90 transition shadow-sm">
                Write a review
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <img
            src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
            alt="Diamond Authenticity"
            className="h-20"
          />
          <span className="text-sculptique-blue font-nunito font-bold text-xs mt-1">100.0</span>
        </div>

        <div className="mb-6 relative border-y border-sculptique-pink/10 py-3">
          <div className="relative inline-block text-left group">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-sculptique-pink hover:opacity-80 focus:outline-none"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              {sortBy}
              <ChevronDownIcon className="h-5 w-5" />
            </button>

            {isSortOpen && (
              <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 text-white">
                <div className="py-1" role="menu">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      role="menuitem"
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 flex items-center"
                      onClick={() => {
                        setSortBy(option);
                        setIsSortOpen(false);
                      }}
                    >
                      {sortBy === option && (
                        <CheckIcon className="w-5 h-5 mr-2" />
                      )}
                      <span className={sortBy !== option ? "ml-6" : ""}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-8">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-sculptique-pink/10 pb-8"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex text-sculptique-pink space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5"
                      filled={i < review.rating}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm hidden sm:block">
                  {review.date}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 my-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-[#e0e0e080] p-2 rounded">
                      <UserIcon className="w-6 h-6 text-sculptique-pink stroke-2" />
                    </div>
                    {review.verified && (
                      <div className="absolute bottom-0 right-0 bg-sculptique-pink text-white rounded-[2px] p-[2px]">
                        <CheckIcon className="w-2 h-2" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sculptique-pink text-base font-montserrat font-medium tracking-wide leading-[1.4]">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span className="bg-sculptique-pink text-white text-xs px-2 rounded-xs">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[#7b7b7b] font-montserrat text-[12.8px] lg:hidden mt-1">
                  {review.date}
                </span>
              </div>

              <div className="mt-2">
                <p className="text-base font-nunito font-medium leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-3 mb-20 text-sculptique-pink font-medium">
            <button
              disabled={currentPage === 1}
              className={`p-2 disabled:opacity-30 hover:bg-pink-50 rounded ${currentPage === 1 ? "hidden" : ""}`}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex font-montserrat items-center justify-center rounded transition-colors ${
                    currentPage === page
                      ? "text-[#7b7b7b] font-bold text-2xl"
                      : "text-sculptique-pink hover:bg-pink-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              className="p-2 disabled:opacity-30 hover:bg-pink-50 rounded"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button
              disabled={currentPage === totalPages}
              className="p-2 disabled:opacity-30 hover:bg-pink-50 rounded"
              onClick={() => setCurrentPage(totalPages)}
              aria-label="Last page"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7 18 5-6-5-6" />
                <path d="M17 6v12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
