import * as React from "react";
import {
  AccordionActions,
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Button,
  FormGroup,
  Checkbox,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { tagsFilter, quickFilter, cuisniesFilter } from "../utils";

export default function Filter({ setCheckedFilters, checkedFilters }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Quick Filter
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {quickFilter.map((ele) => {
              return (
                <FormControlLabel
                  name={ele}
                  value={ele}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setCheckedFilters([
                        ...checkedFilters,
                        event.target.value,
                      ]);
                    } else {
                      const filters = checkedFilters.filter(
                        (filter) => filter !== ele
                      );
                      setCheckedFilters(filters);
                    }
                  }}
                  control={<Checkbox />}
                  label={ele}
                />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Cuisnies
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {cuisniesFilter.map((ele) => {
              return (
                <FormControlLabel
                  control={<Checkbox />}
                  label={ele}
                  name={ele}
                  value={ele}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setCheckedFilters([
                        ...checkedFilters,
                        event.target.value,
                      ]);
                    } else {
                      const filters = checkedFilters.filter(
                        (filter) => filter !== ele
                      );
                      setCheckedFilters(filters);
                    }
                  }}
                />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Tags
        </AccordionSummary>
        <AccordionDetails>
          {tagsFilter.map((ele) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                label={ele}
                name={ele}
                value={ele}
                onChange={(event) => {
                  if (event.target.checked) {
                    setCheckedFilters([...checkedFilters, event.target.value]);
                  } else {
                    const filters = checkedFilters.filter(
                      (filter) => filter !== ele
                    );
                    setCheckedFilters(filters);
                  }
                }}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
