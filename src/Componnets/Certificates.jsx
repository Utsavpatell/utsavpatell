import React from 'react'
import certificate from './data/certificates.json'

const Certificates = () => {
  return (
    <>
    <h1>CERTIFICATES </h1>
      <div className="container certi">
        
        {
          certificate.map((data) => {
            return (
              <>
                <div key={data.id} className='certi-items text-center my-5  '>
                  <div className="left">

                    <img src={`/assets/${data.imageSrc}`} alt="" />

                    <div className="right">
                      <h2><span style={{ color:"silver"}}>{data.title}</span></h2>
                      <h3><span style={{ color:"yellowgreen"}}>{data.organisation}</span></h3>
                      <h4><span style={{ color:"turquoise"}}>{data.location}</span></h4>
                      <h5><span style={{ color:"springgreen"}}>{data.IssueDate} </span></h5>
                      <h5><span style={{ color:"silver"}}>{data.aboutcertificate[0]}</span></h5>
                    </div>
                  </div>

                </div>
              </>
            )

          })
        }
      </div>
    </>
  )
}


export default Certificates