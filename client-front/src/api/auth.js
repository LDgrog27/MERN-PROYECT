import axios from "axios";

const API = 'http://localhost:3000/api/'

export const registerRequest = user => axios.post(`${API}/register`, user) // creo la const. Recibe un user, concanteno API con /register y le paso el user(req.body)