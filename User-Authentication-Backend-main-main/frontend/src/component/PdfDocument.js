import React from 'react';
import { Document, Page, BlobProvider, StyleSheet } from '@react-pdf/renderer';


const PDFDocument = ({ options }) => (
  <BlobProvider document={
    <Document>
      <Page size="A4" style={styles.page}>
        
      </Page>
    </Document>
  }>
    {({ url, loading }) =>
      loading ? 'Loading document...' : <a href={url} download="document.pdf">Download PDF</a>
    }
  </BlobProvider>
);

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
});

export default PDFDocument;
