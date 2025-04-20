
import React from 'react';
import Layout from '@/components/layout/Layout';
import CommunityChat from '@/components/community/CommunityChat';
import { useAuth } from '@/contexts/AuthContext';

const Community = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Community Chat</h1>
        {user ? (
          <CommunityChat />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Please sign in to join the community chat</h2>
            <p className="text-gray-600">You need to be logged in to participate in discussions.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Community;
