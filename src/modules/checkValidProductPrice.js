import { ALERT_MSG, PRICE_ERROR } from '../constants/errorConstants.js';
import checkDividTenError from './checkDivideTenError.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidNumberInput from './checkValidNumberInput.js';
import showAlertMsg from './showAlertMsg.js';

function checkNumberCondition(userinputnumber) {
  let isTrue = true;
  if (Number(userinputnumber) < 100) {
    showAlertMsg(ALERT_MSG[PRICE_ERROR]);
    isTrue = false;
  }
  isTrue = checkDividTenError(userinputnumber);
  return isTrue;
}

export default function checkValidProductPrice(userinputnumber) {
  let isTrue = true;
  isTrue = checkUserInputEmpty(userinputnumber);
  if (isTrue) {
    isTrue = checkValidNumberInput(userinputnumber);
  }
  if (isTrue) {
    isTrue = checkNumberCondition(userinputnumber);
  }
  return isTrue;
}
