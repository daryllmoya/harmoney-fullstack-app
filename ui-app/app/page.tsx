'use client';

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import axios from './api/axios';
import PuppyCard from './components/PuppyCard/PuppyCard';
import { Puppy } from './lib/interface/puppy.interface';

const HomePage = () => {
  const [puppies, setPuppies] = useState<Puppy[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/v1/puppy/all', {
          params: {
            search: searchQuery,
          },
        });
        setPuppies(response.data);
      } catch (error) {
        console.error('Error fetching puppies:', error);
      }
    })();
  }, [searchQuery]);

  return (
    <>
      <Container className="max-w-prose w-max">
        <Box className="flex mb-4 justify-center items-center">
          <TextField
            label="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Labrador, Noel, Pug..."
            value={searchQuery}
            variant="outlined"
          />
        </Box>
      </Container>
      <Container className="w-full p-4">
        {isEmpty(puppies) && (
          <Box className="flex justify-center items-center">
            <CircularProgress size="3rem" />
          </Box>
        )}
        {!isEmpty(puppies) && (
          <Grid>
            <ul className="grid-cols-auto grid gap-6 md:auto-rows-fr md:grid-cols-3 lg:grid-cols-4">
              {puppies.map((puppy) => (
                <PuppyCard key={puppy.id} puppy={puppy} />
              ))}
            </ul>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default HomePage;
