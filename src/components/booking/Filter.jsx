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

export default function Filter() {
  const [checkedFilters, setCheckedFilters] = React.useState([]);

  console.log(checkedFilters, "checkedFilters");
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

const quickFilter = [
  `5 Star`,
  `Buffet`,
  `Chinese`,
  `Dineout Pay`,
  `Happy Hours`,
  `Italian`,
  `North Indian`,
  ` Pure Veg`,
];

const cuisniesFilter = [
  `American`,
  `Bengali`,
  `Cantonese`,
  `European`,
  `Greek`,
  `Beverages`,
  `Chettinad`,
  `Gujarati`,
  `Japanese`,
  `Malaysian`,
  `Moroccan`,
  `Arabian`,
  `Bihari`,
  `Chinese`,
  `Finger Food`,
  `Health Food`,
  `Kashmiri`,
  `Mangalorean`,
  `Mughlai`,
  `Asian`,
  `Biryani`,
  `Continental`,
  `French`,
  `Hyderabadi`,
  `Kerala`,
  `Mediterranean`,
  `Naga`,
  `Assamese`,
  `Burger`,
  `Desserts`,
  `Fusion`,
  `Indonesian`,
  `Korean`,
  `Mexican`,
  `Nepalese`,
  `Awadhi`,
  `Burmese`,
  `Ethiopian`,
  `Goan`,
  `Iranian`,
  `Lebanese`,
  `North Eastern`,
];

const tagsFilter = [
  `1 plus 1 on Food and Drinks`,
  `Barbeque Nation Super Savers`,
  `Best Buffet`,
  `5 Star`,
  `Bars`,
  `Best Buffets`,
  `Andaz Delhi`,
  `Best All Day Dining`,
  `Best Buffets and Thaalis`,
  `BBQ Special`,
  `Best Bars`,
  `Best Burgers`,
  `Bakery`,
  `Best Bars and Pubs`,
  `Best Cafes`,
  `Bar`,
  `Best Budget Friendly Restaurants`,
  `Best Cafes to Chill`,
];
