'use client';

/* eslint-disable @next/next/no-img-element */
import axios from '@/app/api/axios';
import PuppyCard from '@/app/components/PuppyCard/PuppyCard';
import { Puppy } from '@/app/lib/interface/puppy.interface';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PuppyDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [puppy, setPuppy] = useState<Puppy | null>(null);

  useEffect(() => {
    async function fetchPuppyDetails() {
      try {
        if (id) {
          const response = await axios.get(`/api/v1/puppy/${id}`);
          setPuppy(response.data);
        }
      } catch (error) {
        console.error('Error fetching puppy details: ', error);
      }
    }
    fetchPuppyDetails();
  }, [id]);

  return (
    <Box className="w-full max-w-prose mx-auto">
      {!puppy && (
        <Box className="flex justify-center items-center">
          <CircularProgress size="3rem" />
        </Box>
      )}
      {puppy && (
        <>
          <Box className="mb-4 flex justify-end">
            <Button onClick={() => router.push('/')} variant="contained">
              <ArrowBackIcon className="mr-2" /> Go Back Home
            </Button>
          </Box>
          <PuppyCard puppy={puppy} disableClick={true} />
        </>
      )}
    </Box>
  );
};

export default PuppyDetailsPage;
