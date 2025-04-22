
import React from 'react';
import Layout from '@/components/layout/Layout';
import CommunityChat from '@/components/community/CommunityChat';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const Community = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-8">Community Chat</h1>
        {user ? (
          <CommunityChat />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Join the X-Fit Community</h2>
            <p className="text-gray-600 mb-8">Connect with fellow fitness enthusiasts and start your transformation journey today.</p>
            <Link to="/subscription-plans" className="btn-primary inline-flex items-center">
              Join Now
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Community;
