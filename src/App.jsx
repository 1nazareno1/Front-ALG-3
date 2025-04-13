import { Box, Card, CardContent, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box>
        <Card sx={() => ({ margin: "16px" })}>
          <CardContent>
            <Typography variant="h4">Titulo</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              sunt expedita provident, officiis magnam officia repellat dolorum
              voluptas in ab ipsa vel ullam cumque tenetur, culpa, corrupti
              natus dignissimos repudiandae.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={() => ({ margin: "16px" })}>
          <CardContent>
            <Typography variant="h4">Titulo</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              sunt expedita provident, officiis magnam officia repellat dolorum
              voluptas in ab ipsa vel ullam cumque tenetur, culpa, corrupti
              natus dignissimos repudiandae.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={() => ({ margin: "16px" })}>
          <CardContent>
            <Typography variant="h4">Titulo</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              sunt expedita provident, officiis magnam officia repellat dolorum
              voluptas in ab ipsa vel ullam cumque tenetur, culpa, corrupti
              natus dignissimos repudiandae.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
