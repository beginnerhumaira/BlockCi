import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { onSnapshot,  query, where, orderBy } from "firebase/firestore";
const createProject = async (projectname,projectdesc,targetamount,pledgeamount,currentamount,startdate, enddate,milestone1,milestone2,milestone3,otherdetails) => {
    try {
      const docRef = await addDoc(collection(db, "organization_data"), {
        // content: message,
        // time: serverTimestamp(),
        // chatID: id,
        // sender: type,
      })
      console.log("Document written with ID: ", docRef.id)
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }
const dummytest= async()=>{
    try {
        const docRef = await addDoc(collection(db, "dummy"), {
          content: "hello",
          
        })
        console.log("Document written with ID: ", docRef.id)
      } catch (error) {
        console.error("Error adding document: ", error)
      }
    }
export {dummytest,createProject}
