export default function getDietarySymbol(label) {
  let result = "";
  switch (label) {
    case "vegetarian": {
      return (result = "V");
    }
    case "vegan":
      return (result = "VE");
    case "pescatarian":
      return (result = "P");
    case "glutenFree":
      return (result = "GF");
    default:
      return result;
  }
}
