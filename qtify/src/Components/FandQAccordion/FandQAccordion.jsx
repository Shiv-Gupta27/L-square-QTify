import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from "../FandQAccordion/FandQAccordion.module.css"



function Content (data, idx){
  return (
    <div>
      <Accordion className={styles.size}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`panel${idx}-content`}
          id={`panel${idx}-header`}
          className={styles.question}
        >
          <Typography>
            {data.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className={styles.answer}
          >
            {data.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default function FandQAccordion(FandQs = []) {
  return (
    <div className={styles.AllignItem}>
        <h1>FAQs</h1>
        {Array.isArray(FandQs) &&
        FandQs.map((element, idx) => {
          return Content(element, idx)
        })}
    </div>
  );
}
