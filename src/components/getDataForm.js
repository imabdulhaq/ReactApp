import React from 'react';

function getFormData(){
    
    function mf(){
        let gName = document.getElementById("name").value;
        let gMail = document.getElementById("mail").value;
        let gNum = document.getElementById("phN").value;
        let cType = document.getElementById("per");
        let cGT;
        let color;
        if (cType.checked) {
            cGT=cType.value;
            color="primary";
        } else {
            cGT=document.getElementById("pro").value;
            color="success"
        }
  //      let imag = document.getElementById("ima");
        console.log(gName);
        console.log(gMail);
        console.log(gNum);
        console.log(cGT);
//        console.log(imag);

        let cT = '<div className="card container mt-3">'+
            '<div className="card-body row">'+
                '<div className="col-4">'+
                    '<h5 className="card-title">'+gName+'</h5>'+
                    '<p>'+gMail+'</p>'+
                    '<p>'+gNum+'</p>'+
                    '<a href="#" className="btn btn-dark">Edit</a>'+
                    '<a href="#" className="btn btn-danger">Delete</a>'+
                '</div>'+
                '<div className="col-5"></div>'+
                '<div className="col-3">'+
                    '<div className="badge bg-'+color+'">'+cGT+'</div>'+
                    '<img src="Temp.PNG" alt="" className="mt-4" style="width:100px ;height: 100px;">'+
                '</div>'+
            '</div>'+
        '</div>';
        //document.getElementById("div2").appendChild(cT);
        
        //let cardTemplate = '<div className="card container mt-3"><div className="card-body row"><div className="col-4"><h5 className="card-title">John Doe</h5><p>johndoe@gmail.com</p><p>03000144785</p><a href="#" className="btn btn-dark">Edit</a><a href="#" className="btn btn-danger">Delete</a></div><div className="col-5"></div><div className="col-3"><div className="badge bg-primary">Personal</div><img src="Temp.PNG" alt="" className="mt-4" style="width:100px ;height: 100px;"></div></div></div>';
        //document.getElementById("div2").innerHTML+=cardTemplate;
        
        const add = document.getElementById("div2");
        add.insertAdjacentHTML("beforeend", cT);
    }
    return (
        <div id="div1" className='col-6'>
            <h3 className="text-center text-primary">Add Contact</h3>
            <form>
                <input type="text" placeholder="Name" pattern=".{3,}" id="name" className="form-control mt-3 mb-3"/>
                <input type="email" placeholder="Email" id="mail" pattern="(?=.[@])(?=.[.])(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control mb-3"/>
                <input type="number" placeholder="Phone" id="phN" className="form-control mb-3"/>
                <label className="fw-bold mb-3">Contact Type</label><br/>
                <input type="radio" name="contactType" id="per" value="Personal"/>
                <label>Personal</label>
                <input type="radio" name="contactType" id="pro" value="Professional"/>
                <label>Professional</label><br/>
                   
                <br/>
                <div>
                    <a href="/">Your_Image.PNG <span><input type="file" name="" id="ima"/></span></a>
                </div>
                <input type="button" onClick= {mf} className="form-control btn btn-primary mt-3" value="Submit"/>
            </form>
        </div>
    )
}

export default getFormData;