'use client';

/* eslint-disable @next/next/no-img-element */
import { Puppy } from '@/app/lib/interface/puppy.interface';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { lowerCase } from 'lodash';
import { useState } from 'react';
import AdoptionForm from '../AdoptionForm/AdoptionForm';

interface PuppyCardProps {
  puppy: Puppy;
  disableClick?: boolean;
}

const PuppyCard = ({ puppy, disableClick }: PuppyCardProps) => {
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  const handleClickOpen = () => {
    setShowAdoptionForm(true);
  };

  const handleClose = () => {
    setShowAdoptionForm(false);
  };

  return (
    <li
      className="grow-1 flex flex-col rounded-lg px-4 md:p-0"
      key={`${lowerCase(puppy.name)}-${lowerCase(puppy.breed)}`}
    >
      <CardActionArea
        className="h-full"
        disableTouchRipple={disableClick}
        href={disableClick ? '' : `/puppy/${puppy.id}`}
      >
        <Card className="drop-shadow-lg rounded-xl h-full">
          <CardHeader component="h2" title={puppy.name} />
          <CardMedia
            alt={puppy.name + ' - ' + puppy.breed}
            className="object-cover"
            component="img"
            height="200"
            image={puppy.image}
          />
          <CardContent>
            <Typography className="font-bold">
              Breed: <span className="font-medium">{puppy.breed}</span>
            </Typography>
            <Typography className="font-bold">
              Age: <span className="font-medium">{puppy.age}</span>
            </Typography>
            <Typography className="font-bold">
              Description:{' '}
              <span className="font-medium">{puppy.description}</span>
            </Typography>
            <Typography className="font-bold">
              Gender: <span className="font-medium">{puppy.gender}</span>
            </Typography>
            <Typography className="font-bold">
              Traits:{' '}
              <span className="font-medium">
                {puppy.personalityTraits.join(', ')}
              </span>
            </Typography>
          </CardContent>
          <div className="h-32 w-32">
            <div className="absolute inset-x-0 bottom-0 h-16">
              <div className="flex items-center justify-center">
                <Button variant="contained" onClick={handleClickOpen}>
                  Adopt me! <FavoriteIcon fontSize="small" className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </CardActionArea>
      <AdoptionForm
        handleClose={handleClose}
        puppy={puppy}
        showAdoptionForm={showAdoptionForm}
      />
    </li>
  );
};

export default PuppyCard;
