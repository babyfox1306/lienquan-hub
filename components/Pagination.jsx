import { useRouter } from 'next/router';

export default function Pagination({ currentPage, totalPages, totalVideos }) {
  const router = useRouter();
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      const url = page === 1 ? '/' : `/?page=${page}`;
      router.push(url);
    }
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="text-sm text-base-content/70">
        Hiển thị {((currentPage - 1) * 20) + 1}-{Math.min(currentPage * 20, totalVideos)} trong {totalVideos} video
      </div>
      
      <div className="join">
        <button 
          className="join-item btn btn-sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            className={`join-item btn btn-sm ${page === currentPage ? 'btn-active' : ''}`}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        
        <button 
          className="join-item btn btn-sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
}
