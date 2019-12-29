import React,{Component} from 'react';
import { Calendar } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { MDBCol, MDBCard, MDBCardBody,MDBCardHeader, MDBRow ,MDBCardText} from "mdbreact";



function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  const dataDoughnut  = {
  
      labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
      datasets: [
        {
          data: [300, 50, 100, 40, 120, 24, 52],
        backgroundColor: ['#05668D', '#028090', '#00A896', '#02C39A', '#F0F3BD', '#003459'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
          
        }
      ]
    }
  
class Sections extends Component{
    render() {
        return (
             <React.Fragment>      
              <MDBRow className="">
                <MDBCol lg="6" className="mb-2 mt-3" >
                <MDBCard className="mb-2">
                        <MDBCardBody>
                        <div style={{ width: 480, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                      </div>
                      </MDBCardBody>
                      </MDBCard>
                </MDBCol>
                <MDBCol  lg="5"  md="4" className="mb-4 mt-3 ml-2">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Statistiques sur les absensts</MDBCardHeader>
                        <MDBCardBody>
                        <Doughnut data={dataDoughnut}  height={213} options={{ responsive: true }} />

                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
             </MDBRow>
             <MDBRow className="mb-4"> 
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
<MDBCardHeader> les classes vides </MDBCardHeader>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Meilleur que la derniere semaine (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
          <MDBCardHeader> les classes vides </MDBCardHeader>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Worse than last week (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
        </MDBCol>
       
      </MDBRow>
              </React.Fragment>
               
        );
    }
}
export default Sections;