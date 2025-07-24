import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {type Club, clubsData } from '../Datasource/ClubsData';
import ConfirmationModal from '../components/ConfirmationModal';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';

const ClubDetailPage: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const club: Club | undefined = clubsData.find(c => c.id.toString() === clubId);

  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<'join' | 'unjoin' | null>(null);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (club && joinedClubs.includes(club.id)) {
      setIsJoined(true);
    }
  }, [isJoined]);

  const handleJoin = () => {
    setModalAction('join');
    setIsModalOpen(true);
  };

  const handleUnjoin = () => {
    setModalAction('unjoin');
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (!club) return;

    const joinedClubs: number[] = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    let updatedClubs: number[];

    if (modalAction === 'join') {
      updatedClubs = [...joinedClubs, club.id];
      setIsJoined(true);
    } else {
      updatedClubs = joinedClubs.filter(id => id !== club.id);
      setIsJoined(false);
    }

    localStorage.setItem('joinedClubs', JSON.stringify(updatedClubs));
    setIsModalOpen(false);
    setModalAction(null);
  };

  if (!club) {
    return <div className="text-center py-10">Club not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/clubs" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <FaArrowLeft className="mr-2" />
          Back to All Clubs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Image and Join Button */}
          <div className="lg:col-span-1">
            <img src={club.imageUrl} alt={club.name} className="rounded-xl shadow-lg w-full object-cover" />
            <div className="mt-6">
              {isJoined ? (
                <button
                  onClick={handleUnjoin}
                  className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
                >
                  Unjoin Club
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                >
                  Join Club
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Details and Events */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{club.name}</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{club.description}</p>

            <div className="mt-10">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">Upcoming Events</h2>
              {club.events.length > 0 ? (
                <ul className="mt-4 space-y-4">
                  {club.events.map((event, index) => (
                    <li key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <FaCalendarAlt className="text-blue-500 text-xl mr-4" />
                      <div>
                        <p className="font-semibold text-gray-800">{event.name}</p>
                        <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-gray-500">No upcoming events scheduled.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        title={`Confirm ${modalAction === 'join' ? 'Join' : 'Unjoin'}`}
        message={`Are you sure you want to ${modalAction} the ${club.name}?`}
      />
    </div>
  );
};

export default ClubDetailPage;