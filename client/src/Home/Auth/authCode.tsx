import {useState, useEffect} from "react"
import axios from "axios"

export default function UseAuth(code: any) {
  const [access_token, setAccessToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")
  const [expiresIn, setExpiresIn] = useState("")
  useEffect(() => {
    axios.post('http://localhost:3001/login', {
      code
    }). then(res => {
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
      window.history.pushState({}, null, "/")
    }).catch(() =>{
      window.location = '/'
    })
  },[code])
  useEffect(() => {},
  [refreshToken, expiresIn])
return access_token
}