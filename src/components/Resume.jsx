import React, { useState } from 'react'
import swapCv from '../assets/docs/swap_cv.pdf'
import { pdfjs } from 'react-pdf';
import { Document, Outline, Page } from 'react-pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }



  return (
    <section id="resume" className="resume section-wrap" data-aos="fade-down">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Document file={swapCv} onLoadSuccess={onDocumentLoadSuccess} className="resume-wrap">
              <Page pageNumber={pageNumber || 1} scale="1.5" />
            </Document>
            <div>
              <p>- {pageNumber || (numPages ? 1 : '--')} -</p>
              <button type="button" disabled={pageNumber <= 1} onClick={previousPage} >
                Previous
              </button>
              <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Resume
