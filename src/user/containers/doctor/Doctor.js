import React from 'react'
import Card from '../../components/card/Card.js'

const doctorData = [{
    id: 1,
    name: 'Dr. John Smith',
    speciality: 'Cardiologist',
    image: 'https://picsum.photos/200',
},
{
    id: 2,
    name: 'Dr. Jane Doe',
    speciality: 'Dentist',
    image: 'https://picsum.photos/200',
}, 
{
    id: 3,
    name: 'Dr. John Smith',
    speciality: 'Cardiologist',
    image: 'https://picsum.photos/200',
}, {
    id: 4,
    name: 'Dr. Jane Doe',
    speciality: 'Dentist',
    image: 'https://picsum.photos/200',
}
]
const Doctor = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {
                doctorData.map((v) => (
              <>
              <Card docdata={v} />
              </>
                
               
                ))
            }
        </div>
    )
}

export default Doctor



