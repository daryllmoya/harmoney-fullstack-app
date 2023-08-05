import { Puppy } from '@/app/lib/interface/puppy.interface';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import { isEmpty, noop } from 'lodash';
import MuiPhoneNumber from 'material-ui-phone-number-2';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  AdoptionFormInterface,
  InitializedAdoptionForm,
} from './AdoptionForm.interface';
import { AdoptionFormValidation } from './AdoptionForm.validation';

interface AdoptionFormProps {
  handleClose: Dispatch<SetStateAction<boolean>>;
  puppy: Puppy;
  showAdoptionForm: boolean;
}

const AdoptionForm = ({
  handleClose,
  puppy,
  showAdoptionForm,
}: AdoptionFormProps) => {
  const [initialValues, setInitialValues] = useState<AdoptionFormInterface>(
    new InitializedAdoptionForm(),
  );
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (formData: any) => {
    console.log(formData.values);
    handleClose(false);
    setShowSnackbar(true);
    setInitialValues(new InitializedAdoptionForm());
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={() => noop()}
      validationSchema={AdoptionFormValidation}
    >
      {(formik) => (
        <form>
          <Dialog open={showAdoptionForm} onClose={handleClose} maxWidth="xs">
            <DialogTitle>Initiate adoption for {puppy.name}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To initiate the adoption for {puppy.name}, we would need some
                details about you:
              </DialogContentText>
              <Grid className="mt-6">
                <Grid item className="mb-4">
                  <TextField
                    error={
                      formik.touched.firstName &&
                      !isEmpty(formik.errors.firstName)
                    }
                    fullWidth
                    helperText={
                      formik.touched.firstName
                        ? formik.errors.firstName
                        : undefined
                    }
                    label="First Name"
                    placeholder="John"
                    required
                    type="text"
                    {...formik.getFieldProps('firstName')}
                  />
                </Grid>
                <Grid item className="mb-4">
                  <TextField
                    error={
                      formik.touched.lastName &&
                      !isEmpty(formik.errors.lastName)
                    }
                    fullWidth
                    helperText={
                      formik.touched.lastName
                        ? formik.errors.lastName
                        : undefined
                    }
                    label="Last Name"
                    placeholder="Doe"
                    required
                    type="text"
                    {...formik.getFieldProps('lastName')}
                  />
                </Grid>
                <Grid item className="mb-4">
                  <TextField
                    error={
                      formik.touched.email && !isEmpty(formik.errors.email)
                    }
                    fullWidth
                    helperText={
                      formik.touched.email ? formik.errors.email : undefined
                    }
                    label="Email Address"
                    placeholder="johndoe123@email.com"
                    required
                    type="text"
                    {...formik.getFieldProps('email')}
                  />
                </Grid>
                <Grid item className="mb-4">
                  <MuiPhoneNumber
                    defaultCountry={'ph'}
                    error={
                      formik.touched.phoneNumber &&
                      !isEmpty(formik.errors.phoneNumber)
                    }
                    fullWidth
                    helperText={
                      formik.touched.phoneNumber
                        ? formik.errors.phoneNumber
                        : undefined
                    }
                    variant="outlined"
                    {...formik.getFieldProps('phoneNumber')}
                    onChange={(e) => {
                      formik.setFieldValue('phoneNumber', e);
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className="mb-4 flex justify-between px-6">
              <Button variant="contained" onClick={() => handleClose(false)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                disabled={!formik.isValid}
                onClick={() => handleSubmit(formik)}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={() => setShowSnackbar(false)}
          >
            <Alert
              onClose={() => setShowSnackbar(false)}
              severity="success"
              sx={{ width: '100%' }}
              variant="filled"
            >
              Thank you for your interest in adopting {puppy.name}! We will
              contact you for the next steps
            </Alert>
          </Snackbar>
        </form>
      )}
    </Formik>
  );
};

export default AdoptionForm;
