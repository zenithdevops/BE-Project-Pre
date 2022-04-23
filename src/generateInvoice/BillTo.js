import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text>{invoice.patient_id}</Text>
        <Text>{invoice.full_name}</Text>
        <Text>{invoice.address}</Text>
        <Text>{invoice.phone}</Text>
        <Text>{invoice.email}</Text>
        <Text>{invoice.sex}</Text>
        <Text>{invoice.bloodgroup}</Text>
        <Text>{invoice.hospital_name}</Text>
        <Text>{invoice.doctor_name}</Text>

    </View>
);

export default BillTo;