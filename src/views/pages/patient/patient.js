import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'


const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>List Pasien Suspek Covid-19 UGM</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Berikut list untuk pasien suspek Covid-19 di lingkungan UGM
            </p>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Unit Kerja/Fakultas</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tanggal Onset</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Konfigurasi</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Marke Aniyanto</CTableDataCell>
                    <CTableDataCell>Fakultas Biologi</CTableDataCell>
                    <CTableDataCell>Suspek</CTableDataCell>
                    <CTableDataCell>22 Oktober 2020</CTableDataCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol>
                          <CButton color="success" variant="outline">
                            Detail
                          </CButton>
                        </CCol>
                        <CCol>
                          <CButton color="warning" variant="outline">
                            Edit
                          </CButton>
                        </CCol>
                        <CCol>
                          <CButton color="danger" variant="outline">
                            Hapus
                          </CButton>
                        </CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
