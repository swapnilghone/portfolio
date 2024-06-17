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

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const previousPage = () => {
    changePage(-1);
  }

  const nextPage = () => {
    changePage(1);
  }

  return (
    <section id="resume" className="resume section-wrap" data-aos="fade-down">
      <div className="container">

        <div className="row">
          <div className="col-md-8">
            <div className="section-title">
              <h2>Resume</h2>
            </div>
          </div>
          <div className="col-md-4 text-md-end mb-4 mb-md-0">
            <a href={swapCv} target='_blank' className="btn btn-primary">Download</a>
          </div>
        </div>
        

        <div className="row">
          <div className="col-md-12">
            <Document file={swapCv} onLoadSuccess={onDocumentLoadSuccess} className="resume-wrap">
              <Page pageNumber={pageNumber || 1} scale="1.5" />
            </Document>
            <div className='resume-navigation'>
              <button type="button" disabled={pageNumber <= 1} onClick={previousPage} >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <span>{pageNumber || (numPages ? 1 : '--')}</span>
              <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Resume
