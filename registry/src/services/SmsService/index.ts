import { Service } from "typedi";
import axios from "axios";
import config from "../../config/Msg91";
@Service()
export default class SmsService {
  async sendSms(number: string, message: string) {
    try {
      //   let result = await axios.get(
      //     `https://api.msg91.com/api/sendhttp.php?route=4&sender=${config.sender}&message=${message}&country=91&mobiles=${number}&authkey=${config.auth}`
      //   );
      return "NOT SENDING A MESSAGE. NO CREDITS";
    } catch (err) {
      throw err;
    }
  }
}
