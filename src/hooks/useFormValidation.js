const useFormValidation = (data) => {

    let dateError = ''

    if ((!data.arrivalDate) || (!data.depratureDate)) {
        dateError = "Please select arrival and deprature date!!";

    } else {
        dateError = ""
    }

    const arrivalDate = new Date(data.arrivalDate).getTime();
    const depratureDate = new Date(data.depratureDate).getTime();

    if (depratureDate < arrivalDate) {
        dateError = "Arrival date or Deprature date shouldn't be small than arrival date"
    }

    return {
        dateError
    }
}

export default useFormValidation;