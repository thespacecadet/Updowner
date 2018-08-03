import { helper } from '@ember/component/helper';

export function descriptionAppender(params/*, hash*/) {
  var result = ""; //adds description if given one of these cases (token)
  switch (params.toString()) {
    case 'hs1x':
      result = "push messages/device pings";
      break;
    case "m06d":
      result = "log-in system";
      break;
    case "ccvy":
      result = "backend and order processing";
        break;
        case "fgbi":
      result = "workflows";
        break;
    case "clxk":
      result = "Statistics and error reporting";
          break;
  }
  return result;
}

export default helper(descriptionAppender);
