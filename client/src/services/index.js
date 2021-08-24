import axios from "axios";

export const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
export const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE


export const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`
export const headers = {Authorization: `Bearer ${AIRTABLE_KEY}`};


export const getData = async () => {
    try {
        const res = await axios.get(BASE_URL, {
            headers,
        })
        return res.data.records
    } catch (error) { 
        throw error;
        
    }
}