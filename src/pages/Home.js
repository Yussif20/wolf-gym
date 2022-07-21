import React, { useState } from "react";

import { Box } from "@mui/system";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState("all");
  const [bodyParts, setBodyParts] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
      <Exercises
        setExercises={setExercises}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
    </Box>
  );
};

export default Home;
