import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import styles from "./QuotationForm.module.css";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer,  MDBBtn, MDBIcon } from "mdbreact";

const QuotationForm = () => {
  const quoteInfo = useSelector(state => state.repair);
  
  // Print the Quotation Form in PDF
  // Citation
  //https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
  const printDocument =(e) => {
    e.preventDefault();
    const input = document.getElementById('downloadableForm');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("quote.pdf");
      });
  //End Citation
  }
  return ( 
    <>
    <MDBContainer>
      <MDBCard className="card-body" style={{ marginTop: "5rem", marginBottom: "5rem" }}>     
        
        <div className="d-flex justify-content-center">
          <img src="" alt="Company Logo" className="p-2 col-example text-left" />
          <MDBCardTitle className="p-2 col-example text-left"> Appliance Repair Quote <MDBIcon icon="file-invoice-dollar" /></MDBCardTitle>
        </div>
        <MDBCardText>
        <div id='downloadableForm' className={styles.quotationForm}>
          {/* <h2 className={styles.quoteHeading}>Quotation</h2> */}
          <p>Company Name: <span>ApplianceMaster.Ltd</span> </p>
          <p>Customer Name: <span>{ quoteInfo.newQuotation.name }</span></p>
          <p>Customer Email: <span>{ quoteInfo.newQuotation.email }</span></p>
          <p>Appliance: <span> { quoteInfo.newQuotation.appliance }</span></p>
          <p>Brand: <span> {quoteInfo.newQuotation.brand }</span></p>
          <p>Issue: <span> { quoteInfo.newQuotation.issue }</span></p>
          <p>Quote: <span> ${ quoteInfo.newQuotation.price }</span></p>       
      </div>     
        </MDBCardText>
        <MDBBtn gradient="aqua" className={styles.pdfButton} onClick={printDocument}>Download PDF</MDBBtn>
        
      </MDBCard>
    </MDBContainer>

      
        
    </>
  );
};

export default QuotationForm;