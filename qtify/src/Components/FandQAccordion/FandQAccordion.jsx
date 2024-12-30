import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from "../FandQAccordion/FandQAccordion.module.css"
import { fetchFAndQs } from "../../api/api";





// function Content (data, idx){
//   return (
//     <div className='containner-box'>
//       <Accordion className={styles.size}>
//         <AccordionSummary
//           expandIcon={<ArrowDownwardIcon />}
//           aria-controls={`panel${idx}-content`}
//           id={`panel${idx}-header`}
//           className={styles.question}
//         >
//           <Typography>
//             {data.question}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography
//             className={styles.answer}
//           >
//             {data.answer}
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   )
// }

export default function FandQAccordion(FandQs) {

  console.log("FandQs from the FandQacc", FandQs);

  const response = FandQs.data.data
  console.log("data in response",response);

  return (
    <div>
      <div className={styles.AllignItem}>
          <h1>FAQs</h1>
          {Array.isArray(response) &&
          response.map((element, idx) => {
            // return Content(element,idx)

            return (
              <>
                <div className={styles.containnerbox}>
                  <Accordion className={styles.size}>
                    <AccordionSummary
                      expandIcon={<span className={styles.colorArrow}><ArrowDownwardIcon /></span>}
                      aria-controls={`panel${idx}-content`}
                      id={`panel${idx}-header`}
                      className={styles.question}
                    >
                      <Typography>
                        {element.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        className={styles.answer}
                      >
                        {element.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </>
            )

          })}
          
      </div>

    </div>

  );
}
