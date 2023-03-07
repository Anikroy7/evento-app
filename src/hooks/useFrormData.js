import { useState } from "react";

const useFormData = () => {
    const [formState, setFormState] = useState({})

    //update form state
    const updateFormState = (e) => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    return { formState, updateFormState }
}

export default useFormData;