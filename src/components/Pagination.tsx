'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('_page', page.toString());
        router.push(`?${params.toString()}`);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        // Всегда показываем первую страницу
        pages.push(
            <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={`px-3 py-1 rounded-md text-black cursor-pointer ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                1
            </button>
        );

        // Определяем диапазон страниц вокруг текущей
        let startPage = Math.max(2, currentPage - 2);
        let endPage = Math.min(totalPages - 1, currentPage + 2);

        // Добавляем многоточие если есть разрыв
        if (startPage > 2) {
            pages.push(<span key="start-ellipsis" className="px-2 text-black">...</span>);
        }

        // Добавляем видимые страницы
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 rounded-md text-black cursor-pointer ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {i}
                </button>
            );
        }

        // Добавляем многоточие если есть разрыв в конце
        if (endPage < totalPages - 1) {
            pages.push(<span key="end-ellipsis" className="px-2 text-black">...</span>);
        }

        // Всегда показываем последнюю страницу, если она не первая
        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-3 py-1 rounded-md text-black cursor-pointer  ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="mt-8 flex justify-center items-center space-x-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-gray-200 text-black disabled:opacity-50 hover:bg-gray-300 cursor-pointer"
            >
                Назад
            </button>

            <div className="flex space-x-1">
                {renderPageNumbers()}
            </div>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-3 py-1 rounded-md bg-gray-200 text-black disabled:opacity-50 hover:bg-gray-300 cursor-pointer"
            >
                Вперед
            </button>
        </div>
    );
}