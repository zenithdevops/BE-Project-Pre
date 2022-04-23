import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./logo.jpg";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import PatientReport from "../jsonData/PatientReport";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 84,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <Image style={styles.logo} src={logo} />
                <InvoiceTitle title={'Patient Report'} />
                <BillTo invoice={PatientReport} />
                <InvoiceItemsTable invoice={PatientReport} />
            </Page>
        </Document>
    );
}

export default PdfDocument;