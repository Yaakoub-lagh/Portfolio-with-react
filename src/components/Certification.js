import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Certification() {

   
    return (
        <div className='container mt-4'>

<section className='section'>
  <div className='project-container row'>
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card  className="card"  >
        <div className='project-title card-title h5' >
        DevOps, Cloud, and Agile Foundations
      

        </div>
      
          <a href="https://coursera.org/share/6aa6fcf540cf8bce008609abe0f0603e" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#210090"}}>Preview</a>
      </Card>
    </div>
  
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card className="card" >
        <div className='project-title card-title h5' >
        React basic
        </div>
        <a href="https://coursera.org/share/4bea860700ae543998853177cb8ec995" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#210090"}}>Preview</a>

        
      </Card>
    </div>
  </div>
</section>


        </div>
    )
}

