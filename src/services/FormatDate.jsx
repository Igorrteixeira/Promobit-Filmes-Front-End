export const FormatDateBr = (date) => {
    let newDate = new Date(date);
    const day = newDate.getDate()
    const month = (`00${(newDate.getMonth() + 1)}`).slice(-2)
    const year = newDate.getFullYear(); 
    return `${day}/${month}/${year}`
  };

export const FormatDate = (date) =>{
    const newDate = date.split("-")
    switch (newDate[1]) {
        case "01":
            return "JAN";
        case "02":
            return "FEV";
        case "03":
            return "MAR";
        case "04":
            return "ABR";
        case "05":
            return "MAI";
        case "06": 
            return "JUN";
        case "07":
            return "JUL";
        case "08":
            return "AGO";
        case "09":
            return "SET";
        case "10":
            return "OUT";
        case "11":
            return "NOV";
        case "12":
            return "DEZ"  
        default:
            break;
    }

}