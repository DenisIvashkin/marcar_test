'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export function SortControls() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sort = searchParams.get('_sort');
    const order = searchParams.get('_order') as 'asc' | 'desc' | undefined;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSortChange = (newOrder: 'asc' | 'desc' | '') => {
        const params = new URLSearchParams(searchParams.toString());

        if (newOrder) {
            params.set('_sort', 'price');
            params.set('_order', newOrder);
        } else {
            params.delete('_sort');
            params.delete('_order');
        }
        params.set('_page', '1');
        router.push(`?${params.toString()}`);
        setIsOpen(false);
    };

    const getCurrentSortLabel = () => {
        if (order === 'asc') return 'По возрастанию';
        if (order === 'desc') return 'По убыванию';
        return 'Сортировка по...';
    };

    return (
        <div className = "pb-7">

            <div className="relative">
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full max-w-xs px-4 py-2 text-left text-black bg-white border
                    border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer"
                >
                    <span className="flex items-center">
                        {getCurrentSortLabel()}
                        {order === 'asc' && <span className="ml-1">↑</span>}
                        {order === 'desc' && <span className="ml-1">↓</span>}
                    </span>
                    <svg
                        className={`w-5 h-5 ml-2 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div
                        ref={dropdownRef}
                        className="absolute z-10 w-full max-w-xs mt-1 bg-white border border-gray-200 rounded-md shadow-lg"
                    >
                        <ul className="py-1">
                            <li>
                                <button
                                    onClick={() => handleSortChange('asc')}
                                    className={`flex items-center w-full px-4 py-2 text-left text-black hover:bg-gray-100 cursor-pointer
                                    ${order === 'asc' ? 'bg-blue-50 font-medium' : ''}`}
                                >
                                    По возрастанию <span className="ml-1">↑</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSortChange('desc')}
                                    className={`flex items-center w-full px-4 py-2 text-left text-black hover:bg-gray-100 cursor-pointer
                                    ${order === 'desc' ? 'bg-blue-50 font-medium' : ''}`}
                                >
                                    По убыванию <span className="ml-1">↓</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSortChange('')}
                                    className={`block w-full px-4 py-2 text-left text-black hover:bg-gray-100 cursor-pointer ${!sort ? 
                                        'bg-blue-50 font-medium' : ''}`}
                                >
                                    По умолчанию
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}