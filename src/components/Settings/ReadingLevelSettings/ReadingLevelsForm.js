import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./ReadingLevelForm.styles";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const ReadingLevelsForm = ({ readingLevel, onFormSubmit }) => {
  const [selectedLevel, setSelectedLevel] = useState(readingLevel);
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedLevel(event.target.value);
    onFormSubmit(event.target.value);
  };

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel id="reading-level-label" className={classes.inputLabel}>
        <div className={classes.formLabel}>
          <MenuBookOutlinedIcon style={{ fontSize: 30, marginLeft: "10px" }} />
          <span className={classes.formLabelText}>Reading Level</span>
        </div>
      </InputLabel>
      <Select
        labelId="reading-level-label"
        id="reading-level-select"
        value={selectedLevel}
        onChange={handleChange}
      >
        <MenuItem value="easy" className={classes.menuItem}>
          Easy
        </MenuItem>
        <MenuItem value="regular" className={classes.menuItem}>
          Regular
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ReadingLevelsForm;
