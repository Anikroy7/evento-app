import { isEqual, isPast } from "date-fns";

const useFormValidation = (data) => {
  let dateError = "";

  if (!data.arrivalDate || !data.depratureDate) {
    dateError = "Please select arrival and deprature date!!";
  } else {
    dateError = "";
  }

  const arrivalDate = new Date(data.arrivalDate).getTime();
  const depratureDate = new Date(data.depratureDate).getTime();
  if (isEqual(arrivalDate, depratureDate)) {
    dateError = "Must should be one day differece between arrival and deprature date.";
  }
  const adPast = isPast(new Date(data.arrivalDate));
  const dpPast = isPast(new Date(data.depratureDate));
  console.log(adPast, dpPast, arrivalDate, depratureDate);

  if (depratureDate < arrivalDate) {
    dateError =
      "Arrival date or Deprature date shouldn't be small than arrival date";
  }

  if (adPast || dpPast) {
    dateError =
      "You can't select today or any past date as a arrival or deprature date.";
  }

  return {
    dateError,
  };
};

export default useFormValidation;
