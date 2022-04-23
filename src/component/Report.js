import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from '../generateInvoice/Invoice';
import PatientReport from '../jsonData/PatientReport';
import React from "react";

function GeneratePDF() {
    const fileName = "Invoice.pdf";

    return (
        <div className="container">
            <PDFViewer width={800} height={500} showToolbar={false}>
                <PdfDocument invoicedata={PatientReport} />
            </PDFViewer>

            {/*<div className='download-link'>*/}
            {/*    <PDFDownloadLink*/}
            {/*        document={<PdfDocument invoicedata={PatientReport} />}*/}
            {/*        fileName={fileName}*/}
            {/*    >*/}
            {/*        {({ blob, url, loading, error }) =>*/}
            {/*            loading ? "Loading..." : "Download Invoice"*/}
            {/*        }*/}
            {/*    </PDFDownloadLink>*/}
            {/*</div>*/}
        </div>
    );
}
export default GeneratePDF