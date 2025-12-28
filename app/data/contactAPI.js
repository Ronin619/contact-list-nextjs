
import { v4 as uuid } from "uuid";

export const contactAPI = {
  
 contacts: [
  { 
    id: uuid().slice(0, 8),
    name: "John Doe", 
    email: "JDoe@gmail.com", 
    imageURL: "https://art.ngfiles.com/images/6824000/6824270_2161945_jonthetast_hello-john-doe.2b9cb677b8d46d67d3fedcac558459c5.webp?f1751291043", 
    phone_Number: "7185559401" 
  },
    { 
    id: uuid().slice(0, 8),
    name: "Jane Doe", 
    email: "JADoe@gmail.com", 
    imageURL: "https://m.media-amazon.com/images/I/71WbcekHTbL._AC_UF894,1000_QL80_.jpg", 
    phone_Number: "7185588392" 
  },
 ] 
}
