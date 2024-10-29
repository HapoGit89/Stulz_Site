import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const API_KEY = process.env.REACT_APP_API_KEY



/** API Class.
 *
 * Static class providing API functionality.
 */

export class InstaApi {
  // store user token for API access


// universal request method
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {"Access-Control-Allow-Origin": "*",};
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      
      return err
    }
  }

  // Individual API routes

  static async GetPosts(){
    try{
      let res = await this.request(`me/media`, {access_token: API_KEY, fields: "id,media_url,permalink,thumbnail_url,media_type,caption"})
      return res
      }
    catch(e){
      return (e)
    }
  }

  


}