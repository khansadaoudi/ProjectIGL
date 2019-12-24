import React,{Component} from 'react';
import NavBar from './navbar';
import SideNav from './sidenav';
import ProfModel from './profmodel';
import EtudModel from './etudmodel';
import { Calendar } from 'antd';
import { Pie } from 'react-chartjs-2';
import { MDBCol, MDBCard, MDBCardBody,MDBCardHeader, MDBRow ,MDBCardText} from "mdbreact";
function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  const dataPie = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
    {
        data: [300, 50, 100, 40, 120, 24, 52],
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
    }
    ]
}
class Dashboard extends Component{
    render() {
        return (
             <React.Fragment>
              <NavBar />
              <SideNav /> 
              <MDBRow className="">
                <MDBCol lg="2" className="mb-2"></MDBCol>
                <MDBCol lg="5" className="mb-2 mt-3" >
                <MDBCard className="mb-2">
                        <MDBCardBody>
                        <div style={{ width: 500, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                      </div>
                      </MDBCardBody>
                      </MDBCard>
                </MDBCol>
                <MDBCol  lg="4"  md="4" className="mb-4 mt-3 ml-2">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Statistiques sur les absensts</MDBCardHeader>
                        <MDBCardBody>
                            <Pie data={dataPie} height={213} options={{responsive: true}} />
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
             </MDBRow>
             <MDBRow className="mb-4">
             <MDBCol lg="2" className="mb-4"></MDBCol>  
        <MDBCol xl="3" md="6" className="mb-r">
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
        <MDBCol xl="3" md="6" className="mb-r">
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
         <ProfModel/>
         <EtudModel/>

        </MDBCol>
       
      </MDBRow>
     
              </React.Fragment>
               
        );
    }
}
export default Dashboard