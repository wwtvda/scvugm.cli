import React, { useRef, useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'

const { tableau } = window;

function Index() {
  const ref = useRef(null);
  const url = 'https://public.tableau.com/views/Statistik-rev5-ver5_16298611318650/Dashboard1'

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      width: "100%",
      height: "435vh",
    })
  }

  useEffect(initViz, []);
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Peta persebaran Covid-19 di Yogyakarta</strong>
          </CCardHeader>
          <CCardBody>
          <div ref={ref} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Index
