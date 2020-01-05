import axios from 'axios'

export default axios.create({
  baseURL: "https://us-central1-mercafe-ba882.cloudfunctions.net"
})
