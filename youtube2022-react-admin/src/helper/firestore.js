import { collection, addDoc, serverTimestamp, setDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import {
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore"

// create organization

const createOrganization = async (email) => {
  // starting email only
  try {
    // const organizationRef = collection(db, "organization_data")
    // Use the provided email as the document ID
    await setDoc(doc(db, "organization_data", email), {
      org_email: email,
      org_name: "Organization Name",
      org_phone_number: "3124",
      org_verified: false,
      projects: [],
    });
  } catch (error) {
    console.error("Error adding document: ", error)
  }
}

const checkOrganizationExists = async (email) => {
  try {
    const organizationRef = doc(db, "organization_data", email)
    const docSnapshot = await getDoc(organizationRef)

    return docSnapshot.exists()
  } catch (error) {
    console.error("Error checking document existence: ", error)
    return false // Return false in case of an error
  }
}

const appendProject = async (email, formData) => {
  try {
    // Check if the organization exists
    const organizationRef = doc(db, "organization_data", email);
    const organizationSnapshot = await getDoc(organizationRef);

    if (organizationSnapshot.exists()) {
      // Organization exists, append the project to the existing organization
      await updateDoc(organizationRef, {
        projects: arrayUnion(formData)
      });
    } else {
      // Organization doesn't exist, create a new organization and append the project
      await createOrganization(email);
      await updateDoc(organizationRef, {
        projects: arrayUnion(formData)
      });
    }

    console.log("Project appended successfully");
  } catch (error) {
    console.error("Error appending project: ", error);
  }
};

const getProjects = async(email)=>{
  const q = query(collection(db, "organization_data", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  });

}

export { createOrganization, checkOrganizationExists, appendProject, getProjects }
