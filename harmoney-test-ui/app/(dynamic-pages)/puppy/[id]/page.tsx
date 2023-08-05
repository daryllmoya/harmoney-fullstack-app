'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Puppy } from '@/app/lib/interface/puppy.interface';
import axios from '@/app/api/axios';

const PuppyDetailsPage = ({ params }: { params: { id: string }}) => {
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

  if (!puppy) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={puppy.image} alt={puppy.name} width="300" />
      <h1>{puppy.name}</h1>
      <p>Breed: {puppy.breed}</p>
      <p>Age: {puppy.age}</p>
      <p>Description: {puppy.description}</p>
      <p>Gender: {puppy.gender}</p>
      <p>Personality Traits: {puppy.personalityTraits.join(', ')}</p>
      <p>Vaccination Records: {puppy.vaccinationRecords.join(', ')}</p>
      <p>Spayed/Neutered: {puppy.isSpayedOrNeutered ? 'Yes' : 'No'}</p>
      <p>Special Needs: {puppy.specialNeeds}</p>
    </div>
  );
};

export default PuppyDetailsPage;
