import { Button, Grid, Typography } from "@material-ui/core";
import {
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
} from "react-error-boundary";

export interface ErrorProps extends FallbackProps {}

const ErrorPage: React.FC<ErrorProps> = ({ error, resetErrorBoundary }) => {
  const handleGoBackClick = () => {
    resetErrorBoundary();
    window.history.back();
  };
  return (
    <Grid direction="column" container>
      <Typography component="h1" variant="h1">
        Error
      </Typography>
      <Typography component="h1" variant="h5">
        Unexpected Error happened
      </Typography>
      <Button onClick={handleGoBackClick}>Go Back</Button>
    </Grid>
  );
};

export default ErrorPage;
