import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDetail() {

  const projets = [
    {
      title: "JDBC ",
      description: "Java",
      Link:"https://github.com/Yaakoub-lagh/TpJDBC.git"

    },
    {
      title: "Gestion de notification ",
      description: "PHP laravel",
      Link:"https://github.com/Yaakoub-lagh/NotifSub.git"
    },
   
    
  ];

  return (
    <div style={{ paddingTop: '5vh' }}>
      <section className="row justify-content-center" style={{ padding: '10vh 10vh 10vh 10vh' }}>
        {projets.map((projet, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4" >
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title" style={{textAlign: "center" , color:"black"}}>{projet.title}</h5>
                <p className="card-text" style={{textAlign: "center" , color:"black"}}>{projet.description}</p>
                <a href={projet.Link} className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ProjectDetail;
