'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';


export default function EpisodesPage() {
  const [episodeNumber, setEpisodeNumber] = useState();
  const [title, setTtile] = useState('');
  const [description, setDescription]= useState('');
  const [duration, setDuration] = useState();
  const router = useRouter();
  const {seriesId, seasonId} = useParams();

  const addEpisodes = async () => {
    try {
      const response = await axiosInstance.post(`/tvseries/${seriesId}/seasons/${seasonId}/episodes`, { episodeNumber, title, description, duration});
      router.push(`/tv-series/${seriesId}/seasons/${seasonId}/episodes`);
    } catch (error) {
      console.error('Error adding:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Add Episode</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">episode Number</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={episodeNumber}
          name='episodeNumber'
          onChange={(e) => setEpisodeNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          name='title'
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={title}
          onChange={(e) => setTtile(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <input
          type="text"
          name='description'
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Duration</label>
        <input
          type="number"
          name='duration'
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button
        onClick={addEpisodes}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
    </div>
  );
}
