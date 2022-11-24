import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import cloud from './images/cloud.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {db, storage} from './firebase'
import { addDoc, collection } from 'firebase/firestore';
import {v4} from "uuid"
import {ref, uploadBytes} from "firebase/storage"
import { async } from '@firebase/util';





function DragnDrop() {
  // const userCollectionRef = collection(db,"patients")
  const userCollectionRef = collection(db,"patients")
    const[files,setFiles]=useState([])
    const[name,setname] = useState("")
    const[age,setage] = useState(0)
    const[addict,setaddict] = useState("")
    const[gender,setgender] = useState("")
    const[ist,setist] = useState("")
    const[medHist,setmedHist] = useState("")
    const[patid,setpatid] = useState("")
    const[img,setImage] = useState([])

    
    const get = async (e) => {
      e.preventDefault()
      const imageRef = ref(storage,`images/${img.name+v4()}`);
     uploadBytes(imageRef,img).then(()=>console.log("success"))
     await addDoc(userCollectionRef,{name:name,age:age,addict:addict,gender:gender,ist:ist,medHist:medHist,patid:patid}).then(()=>{alert("success")})
    }
  const{getRootProps,getInputProps}=useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles)=>{
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
      )
      )
    },
    
  })
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "420px",height:"250px",marginLeft:"63px",marginTop:"25px" }} alt="preview" />
      </div>
    </div>
  ))
 

    return (
        <div className='App' >
          
          
          <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Addictions</Form.Label>
        <Form.Control type="name" placeholder="Enter email" onChange={(e)=>{setaddict(e.target.value)}}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="Enter email" onChange={(e)=>{setname(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="numbers" placeholder="Password" onChange={(e)=>{setage(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="string" placeholder="Enter email" onChange={(e)=>{setgender(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>IsTumor</Form.Label>
        <Form.Control type="string" placeholder="Enter email" onChange={(e)=>{setist(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>MedicalHistory</Form.Label>
        <Form.Control type="string" placeholder="Enter email" onChange={(e)=>{setmedHist(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Original Image</Form.Label>
        <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patien Id</Form.Label>
        <Form.Control type="string" placeholder="Enter email" onChange={(e)=>{setpatid(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <button onClick={(e)=>{get(e)}}>SUBMIT HERE</button>
    </Form>
    <div id="tool">
          <div className="drag-box">
            <div className="drop-box">
          {/* <div className="tool-box"> */}
            <div {...getRootProps()}>
            
          <input {...getInputProps()} style={{height:"250px",}}/>
          <h6>Or</h6>
          <img src={cloud} alt="" style={{width:"100px",marginLeft:"150px"}}/>
          <p>Drag&Drop images</p>
          </div>
          </div>
          <div className="row" style={{marginTop:"50px"}}>
          </div>
         
        </div>
        </div>
        </div>
      );
}

export default DragnDrop