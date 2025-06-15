'use client';

import React from 'react';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchCars } from '@/lib/API';
import { CarCard } from '@/components/CarCard';
import { Car } from '@/lib/types';
import { SortControls } from '@/components/SortControls';
import { Pagination } from '@/components/Pagination';

export default function CarsPage() {
  const searchParams = useSearchParams();
  const [cars, setCars] = useState<Car[]>([]);
  const [meta, setMeta] = useState({ totalPages: 1, currentPage: 1 });
  const [loading, setLoading] = useState(true);

  const currentPage = Number(searchParams.get('_page')) || 1;
  const sort = searchParams.get('_sort') || undefined;
  const order = searchParams.get('_order') as 'asc' | 'desc' | undefined;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const { cars, meta } = await fetchCars(currentPage, sort, order);
        setCars(cars);
        setMeta(meta);
      } catch (error) {
        console.error('Error loading cars:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [currentPage, sort, order]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Каталог автомобилей</h1>

      <SortControls />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-80 bg-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.vin} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">Автомобили не найдены</p>
        </div>
      )}

      <Pagination currentPage={meta.currentPage} totalPages={meta.totalPages} />
    </div>
  );
}
